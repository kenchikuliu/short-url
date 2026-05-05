# ShortURL Wiki

`ShortURL Wiki` is a clean short-link product with a free web tool, multilingual landing page, and a monthly-plan API.

Current product direction:

- Branding: `ShortURL Wiki`
- Domain: `https://shorturl.wiki`
- Contact email: `hello@shorturl.wiki`
- Languages: English, Simplified Chinese, Japanese
- API model: monthly plans with manual activation

## Features

- Browser short-link generator with QR code download
- Multilingual landing page
- Clean footer without third-party branding
- Public `GET /api/plans`
- Protected `POST /api/shorten`
- Protected `GET /api/usage`
- Redis-backed short code storage and monthly usage counters

## Stack

- Node.js
- React
- Express
- Redis
- Tailwind CSS

## Environment

Copy `.env.example` to `.env` and update the values:

| Variable | Example | Notes |
| --- | --- | --- |
| `REDIS_HOST` | `127.0.0.1` | Redis host |
| `REDIS_PORT` | `6379` | Redis port |
| `REDIS_USERNAME` | `` | Optional |
| `REDIS_PASSWORD` | `` | Optional |
| `PUBLIC_BASE_URL` | `https://shorturl.wiki` | Used by API responses |
| `SHORTURL_API_KEYS` | `demo_basic_key:basic:hello@shorturl.wiki` | Comma-separated `key:planId:email` records |

Available plan IDs:

- `basic`
- `pro`
- `business`

## Local Development

Install dependencies:

```bash
npm install
```

Run frontend + backend separately:

```bash
npm start
npm run server
```

Or build the frontend and serve everything from Express:

```bash
npm run build
npm run server
```

## API

Read plans:

```bash
curl https://shorturl.wiki/api/plans
```

Create a short link:

```bash
curl -X POST https://shorturl.wiki/api/shorten \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -d '{"url":"https://example.com/page"}'
```

Check monthly usage:

```bash
curl https://shorturl.wiki/api/usage \
  -H "X-API-Key: your_api_key"
```

## Deployment Notes

Recommended VPS flow:

```bash
npm install
npm run build
NODE_ENV=production npm run server
```

Then reverse proxy `shorturl.wiki` to port `3001` with nginx and issue TLS for the domain.

For mailbox setup, publish `hello@shorturl.wiki` publicly and forward incoming mail to `kenchikuliu@outlook.com` in your mail provider.
