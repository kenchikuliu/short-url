require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const geoip = require('geoip-lite');

const morgan = require('morgan');
morgan.token('body', (req) => JSON.stringify(req.body));
const { API_PLANS, getPlanById } = require('./server/apiPlans');
const fs = require('fs');
const { getRequestSeoState, getSeoContent, getHomeSeoContent, injectSeoIntoHtml } = require('./server/seo');

app.set('trust proxy', true);

const Redis = require('redis');
const redis = Redis.createClient({
    socket: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || 6379
    },
    username: process.env.REDIS_USERNAME || null,
    password: process.env.REDIS_PASSWORD || null,
    pingInterval: 5 * 60 * 1000,
});
redis.on('error', err => console.error(err, 'Redis error'));
redis.on('connect', () => console.log('Redis is connect'));
redis.on('reconnecting', () => console.log('Redis is reconnecting'));
redis.on('ready', () => console.log('Redis is ready'));
const redisKey = {
    code: 'short-url:code',
    map: 'short-url:map',
    apiKey: 'short-url:api-keys'
};
const CANONICAL_PUBLIC_BASE_URL = 'https://shorturl.wiki';

const _alphabet = 'GS2w4R6789IbcdHEXhijWZAzopTrxPNq3sLMJalBVyQeDmY0nugtF5Uv1fkOCK';
const _base = _alphabet.length;
const encode = (id) => {
    let code = '';
    while (id > 0) {
        code = _alphabet.charAt(id % _base) + code;
        id = Math.floor(id / _base);
    }
    return code;
};

const normalizeUrlInput = (value) => {
    const trimmedValue = String(value || '').trim();
    if (!trimmedValue) {
        return '';
    }

    if (/^https?:\/\//i.test(trimmedValue)) {
        return trimmedValue;
    }

    if (/^[^\s]+\.[^\s]+/.test(trimmedValue)) {
        return `https://${trimmedValue}`;
    }

    return trimmedValue;
};

const isValidHttpUrl = (value) => {
    try {
        const parsed = new URL(value);
        return ['http:', 'https:'].includes(parsed.protocol) && Boolean(parsed.hostname);
    } catch (error) {
        return false;
    }
};
const normalizeBaseUrl = (value) => String(value || '').trim().replace(/\/+$/, '');
const getPublicBaseUrl = (request) => (
    normalizeBaseUrl(process.env.PUBLIC_BASE_URL)
    || (process.env.NODE_ENV === 'production'
        ? CANONICAL_PUBLIC_BASE_URL
        : normalizeBaseUrl(`${request.protocol}://${request.get('host')}`))
);
const shouldRedirectToCanonicalBaseUrl = (request) => {
    if (!['GET', 'HEAD'].includes(request.method)) {
        return false;
    }

    const canonicalBaseUrl = getPublicBaseUrl(request);
    if (!canonicalBaseUrl) {
        return false;
    }

    const canonicalUrl = new URL(canonicalBaseUrl);
    const requestHost = String(request.get('host') || '').toLowerCase();
    const requestProtocol = String(request.protocol || 'https').toLowerCase();

    return Boolean(requestHost)
        && (requestHost !== canonicalUrl.host.toLowerCase()
            || requestProtocol !== canonicalUrl.protocol.replace(':', '').toLowerCase());
};
const getUsagePeriod = () => new Date().toISOString().slice(0, 7);
const getUsageKey = (apiKey, period) => `short-url:api-usage:${apiKey}:${period}`;
const parseApiKeys = () => {
    const value = process.env.SHORTURL_API_KEYS || '';

    return value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => {
            const [key, planId = 'basic', email = ''] = item.split(':');
            return {
                key,
                planId,
                email,
                active: true,
                source: 'env'
            };
        });
};

const seedApiKeys = async () => {
    const envKeys = parseApiKeys();
    if (!envKeys.length) {
        return;
    }

    const pipeline = redis.multi();
    envKeys.forEach((record) => {
        pipeline.hSet(redisKey.apiKey, record.key, JSON.stringify(record));
    });
    await pipeline.exec();
};

const createShortCode = async (originUrl) => {
    const normalizedUrl = normalizeUrlInput(originUrl);
    const encodedUrl = encodeURI(normalizedUrl);
    if (!isValidHttpUrl(encodedUrl)) {
        const error = new Error('Incorrect URL format');
        error.statusCode = 400;
        throw error;
    }

    const id = await redis.incrBy(redisKey.code, 1);
    const code = encode(id);
    await redis.hSet(redisKey.map, code, encodedUrl);

    return { url: encodedUrl, code };
};

const requireApiKey = async (request, response, next) => {
    const apiKey = request.get('x-api-key');
    if (!apiKey) {
        return response.status(401).json({ error: 'Missing API key' }).end();
    }

    const apiKeyRecord = await redis.hGet(redisKey.apiKey, apiKey);
    if (!apiKeyRecord) {
        return response.status(401).json({ error: 'Unknown API key' }).end();
    }

    const parsed = JSON.parse(apiKeyRecord);
    if (!parsed.active) {
        return response.status(403).json({ error: 'API key is inactive' }).end();
    }

    const plan = getPlanById(parsed.planId);
    if (!plan) {
        return response.status(500).json({ error: 'API plan is not configured' }).end();
    }

    request.apiAccess = {
        key: apiKey,
        plan,
        email: parsed.email || ''
    };
    next();
};

app.use(express.static('build', { index: false }));
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use((request, response, next) => {
    if (!shouldRedirectToCanonicalBaseUrl(request)) {
        return next();
    }

    return response.redirect(301, `${getPublicBaseUrl(request)}${request.originalUrl}`);
});

const languageByCountry = {
    CN: 'zh-CN',
    TW: 'zh-CN',
    HK: 'zh-CN',
    MO: 'zh-CN',
    JP: 'ja',
    KR: 'ko',
    ES: 'es',
    MX: 'es',
    AR: 'es',
    CO: 'es',
    FR: 'fr',
    DE: 'de',
    AT: 'de',
    CH: 'de',
    BR: 'pt-BR',
    PT: 'pt-BR',
    IN: 'hi',
    ID: 'id',
};

const isCrawlerRequest = (request) => /bot|crawler|spider|slurp|bingpreview|mediapartners-google/i.test(String(request.get('user-agent') || ''));
const getSavedLanguageFromCookie = (request) => {
    const cookieHeader = String(request.headers.cookie || '');
    const match = cookieHeader.match(/(?:^|;\s*)shorturl_wiki_language=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : '';
};
const getLanguageHomePath = (language) => ({
    'zh-CN': '/zh/',
    'pt-BR': '/pt-br/',
})[language] || `/${String(language || 'en').toLowerCase()}/`;

app.get('/api/language-recommendation', (request, response) => {
    if (isCrawlerRequest(request)) {
        return response.json({ recommendedLanguage: null, source: 'crawler' });
    }

    const ip = (request.headers['x-forwarded-for'] || request.ip || '').toString().split(',')[0].trim();
    const lookup = geoip.lookup(ip);
    const recommendedLanguage = languageByCountry[lookup?.country] || null;

    response.json({
        recommendedLanguage,
        source: recommendedLanguage ? 'ip' : 'none'
    });
});

app.get('/api/plans', async (request, response) => {
    response.json({
        contactEmail: 'hello@shorturl.wiki',
        plans: API_PLANS
    });
});

app.get('/api/usage', requireApiKey, async (request, response) => {
    const period = getUsagePeriod();
    const used = Number(await redis.get(getUsageKey(request.apiAccess.key, period))) || 0;

    response.json({
        plan: request.apiAccess.plan,
        used,
        remaining: Math.max(request.apiAccess.plan.monthlyQuota - used, 0),
        period
    });
});

app.post('/api/shorten', requireApiKey, async (request, response) => {
    const period = getUsagePeriod();
    const usageKey = getUsageKey(request.apiAccess.key, period);
    const used = Number(await redis.get(usageKey)) || 0;

    if (used >= request.apiAccess.plan.monthlyQuota) {
        return response.status(429).json({ error: 'Monthly quota exceeded' }).end();
    }

    try {
        const result = await createShortCode(request.body.url);
        const nextUsed = await redis.incrBy(usageKey, 1);
        const publicBaseUrl = getPublicBaseUrl(request);

        response.json({
            ...result,
            shortUrl: `${publicBaseUrl}/${result.code}`,
            usage: {
                used: nextUsed,
                remaining: Math.max(request.apiAccess.plan.monthlyQuota - nextUsed, 0),
                limit: request.apiAccess.plan.monthlyQuota,
                period
            }
        });
    } catch (error) {
        response.status(error.statusCode || 500).json({ error: error.message }).end();
    }
});

app.post('/url', async (request, response) => {
    try {
        const result = await createShortCode(request.body.url);
        response.json(result);
    } catch (error) {
        response.status(error.statusCode || 500).json({ error: error.message }).end();
    }
});

app.get('/:code', async (request, response, next) => {
    const code = request.params.code;
    if (code === '' || code.includes('.') || ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'de', 'pt-br', 'hi', 'id'].includes(code.toLowerCase())) {
        return next();
    }

    const originUrl = await redis.hGet(redisKey.map, code);
    if (!originUrl) {
        return response.status(404).json({ error: 'Unknown URL' }).end();
    }
    response.redirect(originUrl);
});

app.get('*', (request, response) => {
    const indexPath = path.join(__dirname, 'build', 'index.html');
    if (request.path === '/' && !request.query.lang) {
        const savedLanguage = getSavedLanguageFromCookie(request);
        const targetLanguage = !isCrawlerRequest(request) && savedLanguage ? savedLanguage : 'en';
        return response.redirect(302, getLanguageHomePath(targetLanguage));
    }

    if (request.path === '/' && request.query.lang) {
        const { language } = getRequestSeoState(request.path, request.query.lang);
        return response.redirect(302, getLanguageHomePath(language));
    }
    const { language, slug, isSeoPage } = getRequestSeoState(request.path, request.query.lang);
    const isHomePath = request.path === '/' || /^\/(en|zh|ja|ko|es|fr|de|pt-br|hi|id)\/?$/.test(request.path);
    const content = isSeoPage ? getSeoContent(language, slug) : (isHomePath ? getHomeSeoContent(language) : null);

    if (!content) {
        return response.sendFile(indexPath);
    }

    const publicBaseUrl = getPublicBaseUrl(request);
    const url = isSeoPage
        ? `${publicBaseUrl}${request.originalUrl}`
        : `${publicBaseUrl}${request.path.endsWith('/') ? request.path : `${request.path}/`}`;

    response.send(
        injectSeoIntoHtml(
            fs.readFileSync(indexPath, 'utf8'),
            { baseUrl: publicBaseUrl, url, language, content, isSeoPage, slug }
        )
    );
});

const PORT = Number(process.env.PORT) || 3001;
redis.connect().then(() => {
    seedApiKeys().catch((error) => console.error(error, 'Failed to seed API keys'));
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
