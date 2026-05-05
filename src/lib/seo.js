import { DEFAULT_LANGUAGE, LANGUAGE_OPTIONS, resolveLanguage } from "./i18n";
import { DEFAULT_SEO_PAGE, getLocalizedHomePath, getLocalizedPath } from "./routes";
import { buildStructuredData } from "./structuredData";

const siteName = "ShortURL Wiki";

export const getLanguageUrl = (language, page = DEFAULT_SEO_PAGE, isSeoPage = false) => {
  const resolved = resolveLanguage(language);
  const path = isSeoPage ? getLocalizedPath(resolved, page) : getLocalizedHomePath(resolved);
  const url = new URL(window.location.origin + path);
  return url.toString();
};

const ensureHeadTag = (selector, create) => {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = create();
    document.head.appendChild(node);
  }
  return node;
};

const setMetaContent = (selector, create, content, attribute = "content") => {
  ensureHeadTag(selector, create).setAttribute(attribute, content);
};

const updateStructuredData = (payload) => {
  const id = "shorturl-structured-data";
  const graph = buildStructuredData(payload);
  const script = ensureHeadTag(`script#${id}`, () => {
    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = id;
    return node;
  });
  script.textContent = JSON.stringify(graph);
};

export const applyDocumentSeo = (language, copy, page = DEFAULT_SEO_PAGE, isSeoPage = false, seoContent = null) => {
  const resolved = resolveLanguage(language);
  const title = copy.seoTitle || `${copy.brand} | ${siteName}`;
  const description = copy.seoDescription || copy.heroDescription;
  const canonicalUrl = getLanguageUrl(resolved, page, isSeoPage);
  const imageUrl = `${window.location.origin}/hero-minimal-tech.png`;

  document.documentElement.lang = resolved;
  document.title = title;

  setMetaContent('meta[name="description"]', () => {
    const meta = document.createElement("meta");
    meta.name = "description";
    return meta;
  }, description);

  setMetaContent('meta[property="og:title"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:title");
    return meta;
  }, title);

  setMetaContent('meta[property="og:description"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:description");
    return meta;
  }, description);

  setMetaContent('meta[property="og:type"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:type");
    return meta;
  }, isSeoPage ? "article" : "website");

  setMetaContent('meta[property="og:url"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:url");
    return meta;
  }, canonicalUrl);

  setMetaContent('meta[property="og:image"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:image");
    return meta;
  }, imageUrl);

  setMetaContent('meta[name="twitter:card"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:card";
    return meta;
  }, "summary_large_image");

  setMetaContent('meta[name="twitter:title"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:title";
    return meta;
  }, title);

  setMetaContent('meta[name="twitter:description"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:description";
    return meta;
  }, description);

  setMetaContent('meta[name="twitter:image"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:image";
    return meta;
  }, imageUrl);

  ensureHeadTag('link[rel="canonical"]', () => {
    const link = document.createElement("link");
    link.rel = "canonical";
    return link;
  }).setAttribute("href", canonicalUrl);

  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => {
    node.remove();
  });

  LANGUAGE_OPTIONS.forEach((option) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = option.code;
    link.href = getLanguageUrl(option.code, page, isSeoPage);
    document.head.appendChild(link);
  });

  const xDefault = document.createElement("link");
  xDefault.rel = "alternate";
  xDefault.hreflang = "x-default";
  xDefault.href = getLanguageUrl(DEFAULT_LANGUAGE, page, isSeoPage);
  document.head.appendChild(xDefault);

  updateStructuredData({ language: resolved, copy, page, isSeoPage, seoContent });
};
