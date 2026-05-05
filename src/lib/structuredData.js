import { resolveLanguage } from "./i18n";
import { DEFAULT_SEO_PAGE, getLocalizedHomePath, getLocalizedPath } from "./routes";

const siteName = "ShortURL Wiki";
const siteLogo = "https://shorturl.wiki/logo192.png";
const siteImage = "https://shorturl.wiki/hero-minimal-tech.png";
const getSchemaUrl = (language, page = DEFAULT_SEO_PAGE, isSeoPage = false) => {
  const resolved = resolveLanguage(language);
  const url = new URL(window.location.origin + (isSeoPage ? getLocalizedPath(resolved, page) : getLocalizedHomePath(resolved)));
  return url.toString();
};

const buildOrganization = () => ({
  "@type": "Organization",
  name: siteName,
  url: "https://shorturl.wiki/",
  logo: siteLogo,
  email: "hello@shorturl.wiki",
});

const buildSoftwareApplication = (copy, url) => ({
  "@type": "SoftwareApplication",
  name: siteName,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url,
  image: siteImage,
  description: copy.seoDescription || copy.heroDescription,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: buildOrganization(),
});

const buildFaqPage = (faqs = []) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const buildBreadcrumbList = (copy, url) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: siteName,
      item: "https://shorturl.wiki/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: copy.heroEyebrow || copy.heroTitle,
      item: url,
    },
  ],
});

export const buildStructuredData = ({ language, copy, page, isSeoPage, seoContent }) => {
  const resolved = resolveLanguage(language);
  const url = getSchemaUrl(resolved, page, isSeoPage);
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: "https://shorturl.wiki/",
      inLanguage: resolved,
      publisher: buildOrganization(),
    },
  ];

  if (!isSeoPage) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: copy.seoTitle || siteName,
      url,
      inLanguage: resolved,
      description: copy.seoDescription || copy.heroDescription,
      image: siteImage,
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: "https://shorturl.wiki/",
      },
    });
    graph.push({
      "@context": "https://schema.org",
      ...buildSoftwareApplication(copy, url),
    });
    return graph;
  }

  graph.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.seoTitle || copy.heroTitle,
    url,
    inLanguage: resolved,
    description: copy.seoDescription || copy.heroDescription,
    image: siteImage,
    breadcrumb: buildBreadcrumbList(copy, url),
    about: {
      "@type": "Thing",
      name: copy.heroEyebrow || copy.heroTitle,
    },
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: "https://shorturl.wiki/",
    },
  });
  graph.push({
    "@context": "https://schema.org",
    ...buildSoftwareApplication(copy, url),
    featureList: seoContent?.body?.highlights?.map((item) => item.title) || [],
  });

  if (seoContent?.body?.faqs?.length) {
    graph.push({
      "@context": "https://schema.org",
      ...buildFaqPage(seoContent.body.faqs),
    });
  }

  return graph;
};
