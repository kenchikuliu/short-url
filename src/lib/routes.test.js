import {
  DEFAULT_SEO_PAGE,
  SEO_PAGE_SLUGS,
  getLocalizedPath,
  parseAppLocation,
  shouldBypassShortCodeLookup,
} from "./routes";

describe("seo routes", () => {
  test("parses language-prefixed seo paths", () => {
    expect(parseAppLocation("/es/url-shortener")).toEqual({
      language: "es",
      page: "url-shortener",
      isSeoPage: true,
      isExplicitLanguagePath: true,
    });
  });

  test("keeps homepage as default route", () => {
    expect(parseAppLocation("/")).toEqual({
      language: "en",
      page: DEFAULT_SEO_PAGE,
      isSeoPage: false,
      isExplicitLanguagePath: false,
    });
  });

  test("parses language-prefixed homepage paths", () => {
    expect(parseAppLocation("/zh/")).toEqual({
      language: "zh-CN",
      page: DEFAULT_SEO_PAGE,
      isSeoPage: false,
      isExplicitLanguagePath: true,
    });
  });

  test("builds localized seo paths", () => {
    expect(getLocalizedPath("de", "qr-code-generator")).toBe("/de/qr-code-generator");
    expect(getLocalizedPath("en", "url-shortener-api")).toBe("/en/url-shortener-api");
  });

  test("exposes the approved seo page slugs", () => {
    expect(SEO_PAGE_SLUGS).toContain("url-shortener");
    expect(SEO_PAGE_SLUGS).toContain("qr-code-generator");
    expect(SEO_PAGE_SLUGS).toContain("branded-short-links");
    expect(SEO_PAGE_SLUGS).toContain("bio-link-shortener");
    expect(SEO_PAGE_SLUGS).toContain("utm-link-shortener");
  });

  test("marks seo paths to bypass shortcode lookup", () => {
    expect(shouldBypassShortCodeLookup("/en/url-shortener")).toBe(true);
    expect(shouldBypassShortCodeLookup("/es/whatsapp-link-shortener")).toBe(true);
    expect(shouldBypassShortCodeLookup("/abc123")).toBe(false);
  });
});
