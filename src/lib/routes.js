import {
  DEFAULT_LANGUAGE,
  LANGUAGE_PATH_SEGMENTS,
  getLanguagePathSegment,
  resolveLanguageFromPathSegment,
} from "./i18n";

export const DEFAULT_SEO_PAGE = "home";
export const SEO_PAGE_SLUGS = [
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
];

export const parseAppLocation = (pathname) => {
  const segments = String(pathname || "/")
    .split("/")
    .filter(Boolean);

  if (segments.length >= 2 && LANGUAGE_PATH_SEGMENTS.includes(segments[0]) && SEO_PAGE_SLUGS.includes(segments[1])) {
    return {
      language: resolveLanguageFromPathSegment(segments[0]),
      page: segments[1],
      isSeoPage: true,
      isExplicitLanguagePath: true,
    };
  }

  if (segments.length === 1 && LANGUAGE_PATH_SEGMENTS.includes(segments[0])) {
    return {
      language: resolveLanguageFromPathSegment(segments[0]),
      page: DEFAULT_SEO_PAGE,
      isSeoPage: false,
      isExplicitLanguagePath: true,
    };
  }

  return {
    language: DEFAULT_LANGUAGE,
    page: DEFAULT_SEO_PAGE,
    isSeoPage: false,
    isExplicitLanguagePath: false,
  };
};

export const getLocalizedPath = (language, page) => {
  const segment = getLanguagePathSegment(language);
  return `/${segment}/${page}`;
};

export const getLocalizedHomePath = (language) => `/${getLanguagePathSegment(language)}/`;

export const shouldBypassShortCodeLookup = (pathname) => {
  const route = parseAppLocation(pathname);
  return route.isSeoPage || route.isExplicitLanguagePath;
};
