import { useEffect, useMemo, useState } from "react";
import { API_PLANS } from "./lib/apiPlans";
import { DEFAULT_LANGUAGE, LANGUAGE_OPTIONS, getCopy, resolveLanguage } from "./lib/i18n";
import { getSeoPageContent } from "./lib/seoPages";
import { applyDocumentSeo } from "./lib/seo";
import { DEFAULT_SEO_PAGE, getLocalizedHomePath, getLocalizedPath, parseAppLocation } from "./lib/routes";
import Entity from "./components/Entity";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";

const languageStorageKey = "shorturl-wiki-language";
const languageCookieKey = "shorturl_wiki_language";
const promptDismissedStorageKey = "shorturl-wiki-language-prompt-dismissed";
const sectionShellClassName =
    "rounded-[2.5rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,253,248,0.94),rgba(255,255,255,0.82))] px-6 py-8 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur md:px-8 md:py-10";
const sectionEyebrowClassName = "text-xs font-semibold uppercase tracking-[0.3em] text-amber-700";
const sectionTitleClassName = "mt-3 text-3xl font-semibold tracking-tight text-slate-950";
const sectionDescriptionClassName = "mt-4 max-w-3xl text-base leading-7 text-slate-600";
const softCardClassName =
    "rounded-[2rem] border border-amber-100/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,251,235,0.9))] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]";

const setCookie = (name, value, days = 365) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
};

const getCookie = (name) => {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : "";
};

const persistLanguagePreference = (language) => {
    window.localStorage.setItem(languageStorageKey, language);
    setCookie(languageCookieKey, language);
    window.localStorage.removeItem(promptDismissedStorageKey);
};

const App = () => {
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
    const [seoPage, setSeoPage] = useState(DEFAULT_SEO_PAGE);
    const [isSeoPage, setIsSeoPage] = useState(false);
    const [isExplicitLanguagePath, setIsExplicitLanguagePath] = useState(false);
    const [recommendedLanguage, setRecommendedLanguage] = useState("");
    const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);
    const seoContent = useMemo(() => getSeoPageContent(language, seoPage), [language, seoPage]);
    const copy = useMemo(() => {
        const baseCopy = getCopy(language);
        return seoContent
            ? {
                ...baseCopy,
                heroEyebrow: seoContent.eyebrow,
                heroTitle: seoContent.title,
                heroDescription: seoContent.description,
                seoTitle: seoContent.seoTitle,
                seoDescription: seoContent.seoDescription,
            }
            : baseCopy;
    }, [language, seoContent]);

    useEffect(() => {
        const route = parseAppLocation(window.location.pathname);
        const params = new URLSearchParams(window.location.search);
        const queryLanguage = params.get("lang");
        const savedLanguage = window.localStorage.getItem(languageStorageKey) || getCookie(languageCookieKey);
        setSeoPage(route.page);
        setIsSeoPage(route.isSeoPage);
        setIsExplicitLanguagePath(route.isExplicitLanguagePath);

        if (queryLanguage) {
            const resolved = resolveLanguage(queryLanguage);
            setLanguage(resolved);
            window.history.replaceState({}, "", getLocalizedHomePath(resolved));
            return;
        }

        if (route.isExplicitLanguagePath) {
            setLanguage(route.language);
            return;
        }

        if (savedLanguage) {
            const resolved = resolveLanguage(savedLanguage);
            setLanguage(resolved);
            window.history.replaceState({}, "", getLocalizedHomePath(resolved));
            return;
        }

        setLanguage(DEFAULT_LANGUAGE);
    }, []);

    useEffect(() => {
        applyDocumentSeo(language, copy, seoPage, isSeoPage, seoContent);
    }, [language, copy, seoPage, isSeoPage, seoContent]);

    const handleLanguageChange = (nextLanguage) => {
        const resolved = resolveLanguage(nextLanguage);
        setLanguage(resolved);
        persistLanguagePreference(resolved);
        setShowLanguagePrompt(false);
        if (isSeoPage) {
            window.history.replaceState({}, "", getLocalizedPath(resolved, seoPage));
        } else {
            window.history.replaceState({}, "", getLocalizedHomePath(resolved));
        }
    };

    useEffect(() => {
        const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
        const isDefaultHomePath = currentPath === "/en";

        if (isSeoPage || (!isDefaultHomePath && currentPath !== "/")) {
            return;
        }

        const savedLanguage = window.localStorage.getItem(languageStorageKey) || getCookie(languageCookieKey);
        const dismissed = window.localStorage.getItem(promptDismissedStorageKey) === "1";
        if (savedLanguage || dismissed) {
            return;
        }

        let isCancelled = false;
        fetch("/api/language-recommendation")
            .then((response) => response.json())
            .then((payload) => {
                if (isCancelled) {
                    return;
                }
                const resolved = resolveLanguage(payload?.recommendedLanguage);
                if (!payload?.recommendedLanguage || resolved === DEFAULT_LANGUAGE) {
                    return;
                }
                setRecommendedLanguage(resolved);
                setShowLanguagePrompt(true);
            })
            .catch(() => {});

        return () => {
            isCancelled = true;
        };
    }, [isSeoPage, isExplicitLanguagePath]);

    const recommendedLanguageLabel = LANGUAGE_OPTIONS.find((option) => option.code === recommendedLanguage)?.label || recommendedLanguage;
    const languageRecommendationMessage = copy.languageRecommendationMessage.replace("{language}", recommendedLanguageLabel);
    const languageRecommendationSwitch = copy.languageRecommendationSwitch.replace("{language}", recommendedLanguageLabel);

    const seoPageCards = [
        "url-shortener",
        "qr-code-generator",
        "branded-short-links",
        "url-shortener-api",
        "whatsapp-link-shortener",
        "link-analytics",
        "bio-link-shortener",
        "sms-link-shortener",
        "utm-link-shortener",
        "campaign-url-builder",
    ].map((slug) => ({
        slug,
        content: getSeoPageContent(language, slug),
        href: getLocalizedPath(language, slug),
    })).filter((item) => item.content);

    const planCopy = {
        basic: {
            name: copy.pricingBasicName,
            price: copy.pricingBasicPrice,
            quota: copy.pricingBasicQuota,
            audience: copy.pricingBasicAudience,
        },
        pro: {
            name: copy.pricingProName,
            price: copy.pricingProPrice,
            quota: copy.pricingProQuota,
            audience: copy.pricingProAudience,
        },
        business: {
            name: copy.pricingBusinessName,
            price: copy.pricingBusinessPrice,
            quota: copy.pricingBusinessQuota,
            audience: copy.pricingBusinessAudience,
        },
    };

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fef3c7_0%,#fff8ef_35%,#f8fafc_100%)] text-slate-900">
            <div className="mx-auto max-w-6xl px-6">
                <Header copy={copy} language={language} onLanguageChange={handleLanguageChange} />
                <main className="pb-16">
                    {showLanguagePrompt && recommendedLanguage ? (
                        <section className="pb-8">
                            <div className="rounded-[1.6rem] border border-amber-200/90 bg-[linear-gradient(180deg,rgba(255,251,235,0.96),rgba(255,255,255,0.92))] px-5 py-4 shadow-[0_18px_40px_rgba(217,119,6,0.08)]">
                                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">{copy.languageRecommendationEyebrow}</p>
                                        <p className="mt-2 text-sm leading-6 text-slate-700">{languageRecommendationMessage}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            className="inline-flex min-h-[44px] items-center rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white"
                                            onClick={() => handleLanguageChange(recommendedLanguage)}
                                        >
                                            {languageRecommendationSwitch}
                                        </button>
                                        <button
                                            className="inline-flex min-h-[44px] items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700"
                                            onClick={() => {
                                                window.localStorage.setItem(promptDismissedStorageKey, "1");
                                                setShowLanguagePrompt(false);
                                            }}
                                        >
                                            {copy.languageRecommendationKeep}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : null}
                    <section className="grid gap-12 pb-14 md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] md:items-center">
                        <div className="pt-6 md:pr-10">
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">{copy.heroEyebrow}</p>
                            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 md:text-[4.6rem] md:leading-[0.95]">{copy.heroTitle}</h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{copy.heroDescription}</p>
                            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
                                <a className="inline-flex min-h-[52px] items-center rounded-full bg-slate-950 px-6 py-3 text-white shadow-[0_14px_35px_rgba(15,23,42,0.18)] transition hover:bg-slate-800" href="#tool">{copy.heroPrimaryCta}</a>
                                <a className="inline-flex min-h-[52px] items-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-slate-700 transition hover:border-slate-400 hover:bg-white" href="#pricing">{copy.heroSecondaryCta}</a>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-amber-200 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">{copy.heroStatOne}</span>
                                <span className="rounded-full border border-amber-200 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">{copy.heroStatTwo}</span>
                                <span className="rounded-full border border-amber-200 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">{copy.heroStatThree}</span>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-[2.6rem] border border-white/80 bg-white/65 p-4 shadow-[0_30px_100px_rgba(217,119,6,0.14)] backdrop-blur md:p-5">
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.22),rgba(255,255,255,0))]" />
                            <div className="pointer-events-none absolute -right-10 top-16 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />
                            <div className="pointer-events-none absolute -left-12 bottom-14 h-36 w-36 rounded-full bg-slate-300/20 blur-3xl" />
                            <div className="relative rounded-[2rem] border border-amber-100 bg-[linear-gradient(180deg,rgba(255,252,244,0.98),rgba(255,255,255,0.94))] p-4 md:p-5">
                                <div className="relative overflow-hidden rounded-[1.6rem] border border-amber-100 shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
                                    <img
                                        className="h-auto w-full object-cover object-right"
                                        src="/hero-minimal-tech.png"
                                        alt={copy.heroImageAlt}
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-[44%] bg-[linear-gradient(90deg,rgba(255,251,235,0.98)_0%,rgba(255,251,235,0.82)_50%,rgba(255,251,235,0)_100%)]" />
                                    <div className="pointer-events-none absolute inset-y-0 left-[34%] w-24 bg-[radial-gradient(circle_at_left,rgba(255,251,235,0.72),rgba(255,251,235,0))] blur-xl" />
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-4 rounded-[1.4rem] border border-amber-100 bg-white/80 px-4 py-3">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">{copy.heroPanelTitle}</p>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">{copy.heroPanelNote}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="tool" className="pb-20">
                        <div className="rounded-[2.5rem] border border-white/80 bg-white/60 p-5 shadow-[0_28px_100px_rgba(15,23,42,0.08)] backdrop-blur md:p-6">
                            <div className="space-y-6">
                                <div className="mx-auto max-w-3xl rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,252,244,0.98),rgba(255,255,255,0.95))] p-2">
                                    <Search copy={copy} />
                                </div>
                                <div className="mx-auto max-w-4xl">
                                    <Entity copy={copy} />
                                </div>
                            </div>
                        </div>
                    </section>

                    {isSeoPage && seoContent?.body ? (
                        <section className="pb-20">
                            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                                <div className={sectionShellClassName}>
                                    <p className={sectionEyebrowClassName}>{seoContent.body.overviewEyebrow}</p>
                                    <h2 className={sectionTitleClassName}>{seoContent.body.overviewTitle}</h2>
                                    <p className={sectionDescriptionClassName}>{seoContent.body.overviewDescription}</p>
                                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                                        {seoContent.body.highlights.map((item) => (
                                            <article key={item.title} className={softCardClassName}>
                                                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                                                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid gap-6">
                                    <div className={sectionShellClassName}>
                                        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{seoContent.body.scenariosTitle}</h2>
                                        <div className="mt-6 space-y-4">
                                            {seoContent.body.scenarios.map((scenario) => (
                                                <div key={scenario} className="rounded-[1.6rem] border border-amber-100/90 bg-white/85 px-5 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                                                    <p className="text-sm leading-6 text-slate-700">{scenario}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={sectionShellClassName}>
                                        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{seoContent.body.faqTitle}</h2>
                                        <div className="mt-6 space-y-4">
                                            {seoContent.body.faqs.map((faq) => (
                                                <article key={faq.question} className="rounded-[1.6rem] border border-amber-100/90 bg-white/85 px-5 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                                                    <h3 className="text-base font-semibold text-slate-950">{faq.question}</h3>
                                                    <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : null}

                    <section className="pb-20">
                        <div className={sectionShellClassName}>
                            <p className={sectionEyebrowClassName}>{copy.seoPagesEyebrow}</p>
                            <h2 className={sectionTitleClassName}>{copy.seoPagesTitle}</h2>
                            <p className={sectionDescriptionClassName}>
                                {copy.seoPagesDescription}
                            </p>
                            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                                {seoPageCards.map(({ slug, content, href }) => (
                                    <a
                                        key={slug}
                                        href={href}
                                        className={`${softCardClassName} transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]`}
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">{content.eyebrow}</p>
                                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{content.title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{content.description}</p>
                                        <p className="mt-5 text-sm font-medium text-slate-900">{href}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="api" className={sectionShellClassName}>
                        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
                            <div>
                                <p className={sectionEyebrowClassName}>{copy.apiEyebrow}</p>
                                <h2 className={sectionTitleClassName}>{copy.apiTitle}</h2>
                                <p className={sectionDescriptionClassName}>{copy.apiDescription}</p>
                                <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
                                    <span className="rounded-full border border-amber-200 bg-white/80 px-4 py-2">{copy.apiPillJson}</span>
                                    <span className="rounded-full border border-amber-200 bg-white/80 px-4 py-2">{copy.apiPillQuota}</span>
                                    <span className="rounded-full border border-amber-200 bg-white/80 px-4 py-2">{copy.apiPillOnboarding}</span>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div className={softCardClassName}>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">01</p>
                                    <h3 className="mt-3 text-lg font-semibold text-slate-950">{copy.apiFeatureOneTitle}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy.apiFeatureOneBody}</p>
                                </div>
                                <div className={softCardClassName}>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">02</p>
                                    <h3 className="mt-3 text-lg font-semibold text-slate-950">{copy.apiFeatureTwoTitle}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy.apiFeatureTwoBody}</p>
                                </div>
                                <div className={softCardClassName}>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">03</p>
                                    <h3 className="mt-3 text-lg font-semibold text-slate-950">{copy.apiFeatureThreeTitle}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy.apiFeatureThreeBody}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="pricing" className="py-20">
                        <div className={sectionShellClassName}>
                            <p className={sectionEyebrowClassName}>{copy.pricingEyebrow}</p>
                            <h2 className={sectionTitleClassName}>{copy.pricingTitle}</h2>
                            <p className={sectionDescriptionClassName}>{copy.pricingDescription}</p>
                            <div className="mt-10 grid gap-6 md:grid-cols-3">
                                {API_PLANS.map((plan, index) => (
                                    <article
                                        key={plan.id}
                                        className={`${softCardClassName} flex h-full flex-col ${index === 1 ? "relative border-amber-300 shadow-[0_24px_65px_rgba(217,119,6,0.14)]" : ""}`}
                                    >
                                        {index === 1 ? (
                                            <span className="absolute right-5 top-5 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                                                {copy.pricingPopularLabel}
                                            </span>
                                        ) : null}
                                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{plan.id}</p>
                                        <h3 className="mt-4 text-2xl font-semibold text-slate-950">{planCopy[plan.id].name}</h3>
                                        <p className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{planCopy[plan.id].price}</p>
                                        <p className="mt-4 text-sm font-medium text-slate-700">{planCopy[plan.id].quota}</p>
                                        <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{planCopy[plan.id].audience}</p>
                                        <a className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" href="mailto:hello@shorturl.wiki">
                                            {copy.pricingCta}
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="docs" className="pb-20">
                        <div className={sectionShellClassName}>
                            <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                                <div>
                                    <p className={sectionEyebrowClassName}>{copy.docsEyebrow}</p>
                                    <h2 className={sectionTitleClassName}>{copy.docsTitle}</h2>
                                    <p className={sectionDescriptionClassName}>{copy.docsDescription}</p>
                                    <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-amber-200 bg-white/85 px-4 py-2 text-sm text-slate-700 shadow-sm">
                                        <span className="font-semibold uppercase tracking-[0.18em] text-amber-700">{copy.docsBaseUrlLabel}</span>
                                        <code className="font-semibold text-slate-950">https://shorturl.wiki</code>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className={softCardClassName}>
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{copy.docsShortenTitle}</p>
                                        <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-emerald-300">{`POST https://shorturl.wiki/api/shorten
X-API-Key: your_api_key
Content-Type: application/json

{
  "url": "https://example.com/landing-page"
}`}</pre>
                                    </div>
                                    <div className={softCardClassName}>
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{copy.docsUsageTitle}</p>
                                        <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-sky-300">{`GET https://shorturl.wiki/api/usage
X-API-Key: your_api_key`}</pre>
                                    </div>
                                    <div className={softCardClassName}>
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{copy.docsPlansTitle}</p>
                                        <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-amber-300">{`GET https://shorturl.wiki/api/plans`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className={sectionShellClassName}>
                        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)] md:items-end">
                            <div>
                                <p className={sectionEyebrowClassName}>{copy.contactEyebrow}</p>
                                <h2 className={sectionTitleClassName}>{copy.contactTitle}</h2>
                                <p className={sectionDescriptionClassName}>{copy.contactDescription}</p>
                            </div>
                            <div className={`${softCardClassName} md:justify-self-end md:min-w-[320px]`}>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">{copy.contactEmailLabel}</p>
                                <p className="mt-4 text-xl font-semibold text-slate-950">
                                    <a className="underline decoration-amber-300 underline-offset-4" href="mailto:hello@shorturl.wiki">hello@shorturl.wiki</a>
                                </p>
                                <p className="mt-3 text-sm leading-6 text-slate-500">{copy.contactReplyNote}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer copy={copy} />
        </div>
    );
};

export default App;
