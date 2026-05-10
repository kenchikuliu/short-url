const { INDEXABLE_LANGUAGE_CODES, buildCanonicalUrl, getHomeSeoContent, getRequestSeoState, getSeoContent, injectSeoIntoHtml, parseSeoRoute } = require("../../server/seo");

describe("server seo helpers", () => {
  test("parses language-prefixed seo routes", () => {
    expect(parseSeoRoute("/zh/whatsapp-link-shortener")).toEqual({
      language: "zh-CN",
      slug: "whatsapp-link-shortener",
      isSeoPage: true,
      isExplicitLanguagePath: true,
    });
  });

  test("injects seo metadata and body into html", () => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const content = getSeoContent("zh-CN", "whatsapp-link-shortener");
    const output = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/zh-CN/whatsapp-link-shortener",
      language: "zh-CN",
      content,
      isSeoPage: true,
      slug: "whatsapp-link-shortener",
    });

    expect(output).toContain("WhatsApp 短链生成器 | ShortURL Wiki");
    expect(output).toContain("用户搜索 WhatsApp 短链，本质上是在找更顺手的入口");
    expect(output).toContain("\"@type\":\"FAQPage\"");
    expect(output).toContain("rel=\"canonical\"");
    expect(output).toContain("lang=\"zh-CN\"");
    expect(output).toContain('hreflang="x-default"');
    expect(output).toContain('content="index, follow"');
  });

  test("non-core locales are noindex and canonicalize to english", () => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const output = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/ko/url-shortener",
      language: "ko",
      content: getSeoContent("ko", "url-shortener"),
      isSeoPage: true,
      slug: "url-shortener",
      requestPath: "/ko/url-shortener",
    });

    expect(output).toContain('content="noindex, follow"');
    expect(output).toContain('rel="canonical" href="https://shorturl.wiki/en/url-shortener"');
    expect(output).not.toContain('hreflang="ko"');
    expect(output).not.toContain('hreflang="fr"');
  });

  test("root path canonicalizes to the root homepage", () => {
    expect(buildCanonicalUrl("https://shorturl.wiki", "en", null, false, "/")).toBe("https://shorturl.wiki/");
  });

  test("indexable hreflang cluster is limited to core languages", () => {
    expect(INDEXABLE_LANGUAGE_CODES).toEqual(["en", "zh-CN", "ja"]);
  });

  test("renders homepage overview highlights and localized scenario labels", () => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const zhOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/zh/",
      language: "zh-CN",
      content: getHomeSeoContent("zh-CN"),
      isSeoPage: false,
      slug: null,
    });
    const koOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/ko/",
      language: "ko",
      content: getHomeSeoContent("ko"),
      isSeoPage: false,
      slug: null,
    });

    expect(zhOutput).toContain("seo-overview-grid");
    expect(zhOutput).toContain("短链接");
    expect(zhOutput).toContain("步骤 01");
    expect(koOutput).toContain("단계 01");
    expect(koOutput).not.toContain("Step 01");
  });

  test("renders hero summary cards and derived hero note for seo detail pages", () => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const enOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/en/url-shortener",
      language: "en",
      content: getSeoContent("en", "url-shortener"),
      isSeoPage: true,
      slug: "url-shortener",
    });

    expect(enOutput).toContain("seo-hero-summary");
    expect(enOutput).toContain("What users usually need from a URL shortener");
    expect(enOutput).toContain("Common use cases");
    expect(enOutput).toContain("FAQ");
    expect(enOutput).toContain(`<ul class="seo-hero-summary"><li class="seo-hero-summary-card"><span>What users usually need from a URL shortener</span></li><li class="seo-hero-summary-card"><span>Common use cases</span></li><li class="seo-hero-summary-card"><span>FAQ</span></li></ul>`);
    expect(enOutput).toContain("People searching for a URL shortener usually want one of three things: a fast tool, cleaner sharing links, or a simple team setup they can trust.");
  });

  test("renders related pages section for seo detail pages", () => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const enOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/en/url-shortener",
      language: "en",
      content: getSeoContent("en", "url-shortener"),
      isSeoPage: true,
      slug: "url-shortener",
    });
    const zhOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/zh/url-shortener",
      language: "zh-CN",
      content: getSeoContent("zh-CN", "url-shortener"),
      isSeoPage: true,
      slug: "url-shortener",
    });

    expect(enOutput).toContain("Related pages");
    expect(enOutput).toContain("/en/qr-code-generator");
    expect(enOutput).toContain("/en/branded-short-links");
    expect(zhOutput).toContain("相关页面");
    expect(zhOutput).toContain("/zh/qr-code-generator");
  });

  test("supports newly added long-tail seo slugs on the server", () => {
    expect(parseSeoRoute("/en/bio-link-shortener")).toEqual({
      language: "en",
      slug: "bio-link-shortener",
      isSeoPage: true,
      isExplicitLanguagePath: true,
    });
    expect(getSeoContent("zh-CN", "utm-link-shortener").seoTitle).toMatch(/UTM/);
  });

  test("resolves homepage language from query state", () => {
    expect(getRequestSeoState("/", "es")).toEqual({
      language: "es",
      slug: null,
      isSeoPage: false,
      isExplicitLanguagePath: false,
    });
    expect(getHomeSeoContent("es").seoTitle).toBe("Acortador de URL, QR y enlaces de marca API | ShortURL Wiki");
    expect(getHomeSeoContent("en").eyebrow).toBe("Short-link workspace");
    expect(getHomeSeoContent("en").title).toBe("Short links, QR codes, branded links, and a simple monthly API.");
    expect(getHomeSeoContent("en").heroNote).toBe("Built for campaign links, social sharing, print QR flows, and recurring team operations.");
    expect(getHomeSeoContent("en").description).toBe("ShortURL Wiki gives teams one clean place to create short links, download QR codes, publish branded links, and move into recurring monthly API usage.");
    expect(getHomeSeoContent("en").overviewDescription).toBe("Create campaign links, WhatsApp links, social media links, QR code destinations, and product links from one clean short-link hub.");
    expect(getHomeSeoContent("en").benefitsTitle).toBe("What teams usually want");
    expect(getHomeSeoContent("en").featuredPages[0]).toBe("URL shortener for campaign and social links");
    expect(getHomeSeoContent("es").overviewDescription).toBe("Crea enlaces para campanas, WhatsApp, redes sociales, destinos con QR y uso en equipo desde un mismo espacio de enlaces cortos.");
    expect(getHomeSeoContent("fr").overviewDescription).toBe("Creez des liens pour campagnes, WhatsApp, reseaux sociaux, destinations QR et usages equipe depuis un seul espace de liens clairs.");
    expect(getHomeSeoContent("pt-BR").overviewDescription).toBe("Crie links para campanhas, WhatsApp, redes sociais, destinos com QR code e links de produto em um unico espaco de links curtos.");
    expect(getHomeSeoContent("de").overviewTitle).toBe("Einsatzbereiche");
    expect(getHomeSeoContent("zh-CN").overviewDescription).toBe("一个短链中心同时支持活动链接、WhatsApp 链接、社媒传播链接、二维码入口和产品链接。");
    expect(getHomeSeoContent("ja").overviewDescription).toBe("キャンペーンリンク、WhatsAppリンク、SNS配信用リンク、QRコード導線、プロダクト用リンクを1つの短縮リンク基盤で扱えます。");
    expect(getHomeSeoContent("ko").scenarios[1]).toBe("더 안정적인 팀 사용량과 월간 한도가 필요해지면 API 요금제로 확장할 수 있습니다.");
  });

  test("serves localized hi and id homepage seo metadata", () => {
    expect(getHomeSeoContent("hi").title).toBe("Short links, QR codes, branded links aur monthly API ek hi jagah.");
    expect(getHomeSeoContent("hi").seoTitle).toBe("URL shortener, QR code aur branded links API | ShortURL Wiki Hindi");
    expect(getHomeSeoContent("hi").seoDescription).toBe("Short link banane, QR code generate karne, branded links chalane aur campaigns ke liye simple API use karne ka seedha tool.");
    expect(getHomeSeoContent("hi").overviewTitle).toBe("इस्तेमाल के तरीके");
    expect(getHomeSeoContent("hi").scenariosTitle).toBe("API aur plans");
    expect(getHomeSeoContent("hi").overviewDescription).toBe("Campaign links, WhatsApp links, social links, QR destinations aur recurring team use ko ek hi short-link hub se manage karein.");
    expect(getHomeSeoContent("hi").featuredPages[2]).toBe("Branded short links");

    expect(getHomeSeoContent("id").title).toBe("Short link, QR code, branded link, dan API bulanan dalam satu tempat.");
    expect(getHomeSeoContent("id").seoTitle).toBe("Pemendek URL, QR code, dan branded links API | ShortURL Wiki");
    expect(getHomeSeoContent("id").seoDescription).toBe("Perpendek URL, buat QR code, kelola branded link, dan gunakan API sederhana untuk kampanye, WhatsApp, media sosial, dan kebutuhan tim.");
    expect(getHomeSeoContent("id").overviewTitle).toBe("Contoh penggunaan");
    expect(getHomeSeoContent("id").scenariosTitle).toBe("API dan paket");
    expect(getHomeSeoContent("id").overviewDescription).toBe("Buat tautan untuk kampanye, WhatsApp, media sosial, halaman QR, dan kebutuhan tim dari satu tempat short link yang rapi.");
    expect(getHomeSeoContent("id").benefitsTitle).toBe("Yang biasanya dicari tim");
  });

  test("serves localized hi and id content for branded pages", () => {
    expect(getSeoContent("hi", "branded-short-links").title).toBe("Branded short links se campaigns ko zyada भरोसेमंद aur clean dikhayein.");
    expect(getSeoContent("hi", "branded-short-links").description).toBe("Marketing teams branded short links ki madad se campaign pages, email, social posts aur public docs me ek jaisa link format rakh sakti hain.");
    expect(getSeoContent("hi", "branded-short-links").overviewTitle).toBe("Marketing teams branded short links क्यों खोजती हैं");
    expect(getSeoContent("hi", "branded-short-links").scenarios[0]).toBe("Campaign pages, newsletters, media kits aur creator partnership briefs");

    expect(getSeoContent("id", "branded-short-links").title).toBe("Gunakan branded short link yang lebih rapi agar kampanye terlihat lebih meyakinkan.");
    expect(getSeoContent("id", "branded-short-links").description).toBe("Branded short link membantu tim menjaga tampilan tautan tetap konsisten di halaman kampanye, email, posting sosial, dan dokumen publik.");
    expect(getSeoContent("id", "branded-short-links").overviewTitle).toBe("Mengapa branded short link penting untuk tim marketing");
    expect(getSeoContent("id", "branded-short-links").scenarios[0]).toBe("Halaman kampanye, newsletter, media kit, dan brief kolaborasi kreator");
  });

  test("serves slug-specific hi and id content for core seo pages", () => {
    expect(getSeoContent("hi", "url-shortener").seoTitle).toBe("कैंपेन और शेयरिंग के लिए URL shortener | ShortURL Wiki");
    expect(getSeoContent("hi", "url-shortener").overviewTitle).toBe("लोग URL shortener page पर क्या चाहते हैं");
    expect(getSeoContent("hi", "url-shortener").description).toBe("WhatsApp sharing, social media distribution, email campaigns aur recurring team use ke liye saaf aur shareable short links banayein.");

    expect(getSeoContent("id", "url-shortener").seoTitle).toBe("Pemendek URL untuk kampanye dan distribusi link | ShortURL Wiki");
    expect(getSeoContent("id", "url-shortener").overviewTitle).toBe("Apa yang biasanya dicari pengguna dari halaman pemendek URL");
    expect(getSeoContent("id", "url-shortener").description).toBe("Gunakan pemendek URL ini untuk membuat tautan rapi bagi WhatsApp, media sosial, kampanye email, dan kebutuhan tim.");

    expect(getSeoContent("hi", "qr-code-generator").seoTitle).toBe("Short links और print sharing के लिए QR code generator | ShortURL Wiki");
    expect(getSeoContent("id", "qr-code-generator").seoTitle).toBe("Generator QR code untuk short link dan materi cetak | ShortURL Wiki");

    expect(getSeoContent("hi", "url-shortener-api").seoTitle).toBe("मासिक प्लान के साथ URL shortener API | ShortURL Wiki Hindi");
    expect(getSeoContent("id", "url-shortener-api").seoTitle).toBe("API pemendek URL dengan paket bulanan | ShortURL Wiki");
    expect(getSeoContent("zh-CN", "url-shortener-api").title).toBe("给产品功能、活动系统和自动化场景使用的短链接 API。");
  });

  test("serves slug-specific hi and id content for messaging, analytics, and utm pages", () => {
    expect(getSeoContent("hi", "whatsapp-link-shortener").seoTitle).toBe("WhatsApp sharing और campaigns के लिए link shortener | ShortURL Wiki");
    expect(getSeoContent("hi", "whatsapp-link-shortener").overviewTitle).toBe("लोग WhatsApp link shortener क्यों खोजते हैं");
    expect(getSeoContent("hi", "whatsapp-link-shortener").overviewDescription).toBe("Zyadatar WhatsApp short-link searches real distribution needs se aati hain: bio links, ad entry points, QR materials, support entry aur sales conversations.");

    expect(getSeoContent("id", "whatsapp-link-shortener").seoTitle).toBe("Pemendek link WhatsApp untuk kampanye dan distribusi | ShortURL Wiki");
    expect(getSeoContent("id", "whatsapp-link-shortener").overviewTitle).toBe("Mengapa orang mencari pemendek link WhatsApp");
    expect(getSeoContent("id", "whatsapp-link-shortener").overviewDescription).toBe("Sebagian besar pencarian short link WhatsApp datang dari kebutuhan distribusi nyata: link bio, pintu masuk iklan, materi QR, akses ke dukungan, dan percakapan penjualan.");

    expect(getSeoContent("hi", "link-analytics").seoTitle).toBe("Short link analytics और usage tracking | ShortURL Wiki Hindi");
    expect(getSeoContent("hi", "link-analytics").scenarios[0]).toBe("Campaign aur support teams ke liye monthly API usage checks");
    expect(getSeoContent("id", "link-analytics").seoTitle).toBe("Analitik short link dan pelacakan penggunaan | ShortURL Wiki");
    expect(getSeoContent("id", "link-analytics").faqs[1][1]).toBe("Tim yang membutuhkan kejelasan operasional tanpa harus memakai stack analitik yang berat.");

    expect(getSeoContent("hi", "utm-link-shortener").seoTitle).toBe("Campaign tracking के लिए UTM link shortener | ShortURL Wiki Hindi");
    expect(getSeoContent("hi", "utm-link-shortener").overviewDescription).toBe("UTM parameters attribution ke liye useful hote hain, lekin public channels me kaafi messy lagte hain. Short link us complexity ko hide karta hai aur tracking logic ko barkarar rakhta hai.");
    expect(getSeoContent("id", "utm-link-shortener").seoTitle).toBe("Pemendek link UTM untuk pelacakan kampanye | ShortURL Wiki");
    expect(getSeoContent("id", "utm-link-shortener").faqs[0][1]).toBe("Karena URL UTM mentah biasanya panjang, sulit dibaca, dan mengganggu tampilan di kanal publik.");
    expect(getSeoContent("id", "utm-link-shortener").scenarios[1]).toBe("Tautan kampanye email dan distribusi newsletter");
  });

  test("serves slug-specific hi and id content for sms and campaign pages", () => {
    expect(getSeoContent("hi", "sms-link-shortener").seoTitle).toBe("SMS campaigns और alerts के लिए link shortener | ShortURL Wiki Hindi");
    expect(getSeoContent("hi", "sms-link-shortener").title).toBe("SMS campaigns, alerts aur phone notifications ke liye short links ko saaf aur readable rakhein.");
    expect(getSeoContent("id", "sms-link-shortener").seoTitle).toBe("Pemendek link SMS untuk kampanye dan notifikasi | ShortURL Wiki");
    expect(getSeoContent("id", "sms-link-shortener").title).toBe("Gunakan link yang lebih singkat untuk kampanye SMS, alert, dan notifikasi di ponsel.");

    expect(getSeoContent("hi", "campaign-url-builder").seoTitle).toBe("Marketing teams के लिए campaign URL builder | ShortURL Wiki Hindi");
    expect(getSeoContent("id", "campaign-url-builder").seoTitle).toBe("Builder URL kampanye untuk tim marketing | ShortURL Wiki");
    expect(getSeoContent("hi", "campaign-url-builder").faqs[1][1]).toBe("Marketing teams, campaign teams, partner teams aur agencies jo launches ya distribution coordinate karti hain.");
    expect(getSeoContent("id", "campaign-url-builder").faqs[1][1]).toBe("Tim marketing, tim kampanye, tim partner, dan agensi yang mengatur peluncuran atau distribusi.");
  });

  test("serves slug-specific hi and id content for branded and bio pages", () => {
    expect(getSeoContent("hi", "branded-short-links").seoTitle).toBe("Marketing teams के लिए branded short links | ShortURL Wiki Hindi");
    expect(getSeoContent("id", "branded-short-links").seoTitle).toBe("Branded short link untuk tim marketing | ShortURL Wiki");

    expect(getSeoContent("hi", "bio-link-shortener").seoTitle).toBe("Instagram और TikTok के लिए bio link shortener | ShortURL Wiki Hindi");
    expect(getSeoContent("hi", "bio-link-shortener").title).toBe("Instagram, TikTok aur creator pages ke liye clean bio links banayein.");
    expect(getSeoContent("hi", "bio-link-shortener").overviewDescription).toBe("Bio links public profile areas me dikhte hain, jahan lambi aur messy URL presentation aur trust dono ko hurt karti hai. Short link profile ko cleaner banati hai.");
    expect(getSeoContent("id", "bio-link-shortener").seoTitle).toBe("Pemendek link bio untuk Instagram dan TikTok | ShortURL Wiki");
    expect(getSeoContent("id", "bio-link-shortener").overviewDescription).toBe("Link bio muncul di area profil publik, jadi URL yang panjang dan berantakan bisa mengganggu tampilan dan rasa percaya. Short link membuat profil lebih bersih dan lebih mudah dibaca.");
  });

  test("serves localized branded and bio content for ko es fr de and pt-BR", () => {
    expect(getSeoContent("ko", "branded-short-links").seoTitle).toBe("마케팅 팀을 위한 브랜드 단축 링크 | ShortURL Wiki");
    expect(getSeoContent("ko", "branded-short-links").overviewTitle).toBe("마케팅 팀이 브랜드 단축 링크를 찾는 이유");
    expect(getSeoContent("es", "branded-short-links").scenarios[0]).toBe("Paginas de campana, newsletters, media kits y briefs para colaboradores");
    expect(getSeoContent("fr", "branded-short-links").description).toBe("Ils aident les equipes a garder des liens coherents sur les pages de campagne, les emails, les reseaux sociaux et les documents publics.");
    expect(getSeoContent("de", "branded-short-links").seoTitle).toBe("Gebrandete Kurzlinks fur Marketing-Teams | ShortURL Wiki");
    expect(getSeoContent("pt-BR", "branded-short-links").overviewTitle).toBe("Por que links curtos com marca importam para times de marketing");

    expect(getSeoContent("ko", "bio-link-shortener").seoTitle).toBe("Instagram과 TikTok용 바이오 링크 단축 | ShortURL Wiki");
    expect(getSeoContent("es", "bio-link-shortener").overviewTitle).toBe("Por que los links bio necesitan URLs cortas mas limpias");
    expect(getSeoContent("fr", "bio-link-shortener").scenarios[1]).toBe("Pages link-in-bio de createurs et profils personnels");
    expect(getSeoContent("de", "bio-link-shortener").description).toBe("Kurzere Links fur Bios, Creator-Profile und personliche Seiten sehen offentlich sauberer aus und wirken vertrauenswurdiger.");
    expect(getSeoContent("pt-BR", "bio-link-shortener").seoTitle).toBe("Encurtador de link da bio para Instagram e TikTok | ShortURL Wiki");
  });

  test("serves localized ja content for bio page", () => {
    expect(getSeoContent("ja", "bio-link-shortener").seoTitle).toBe("Instagram・TikTok向けbioリンク短縮 | ShortURL Wiki");
    expect(getSeoContent("ja", "bio-link-shortener").overviewTitle).toBe("プロフィールリンクに短縮URLが向いている理由");
    expect(getSeoContent("ja", "campaign-url-builder").faqs[1][1]).toBe("主にマーケティングや獲得チームが使いますが、提携や運用チームにも同じ課題があります。");
  });

  test("serves localized ko and es content for url shortener qr and api pages", () => {
    expect(getSeoContent("ko", "url-shortener").seoTitle).toBe("캠페인과 공유용 URL 단축 도구 | ShortURL Wiki");
    expect(getHomeSeoContent("ko").overviewDescription).toBe("캠페인 링크, WhatsApp 링크, 소셜 링크, QR 코드 진입 경로, 내부 운영 흐름을 하나의 깔끔한 링크 허브에서 관리할 수 있습니다.");
    expect(getSeoContent("ko", "url-shortener").overviewTitle).toBe("사용자가 URL 단축 페이지에서 주로 해결하려는 것");
    expect(getSeoContent("es", "url-shortener").scenarios[0]).toBe("Links de campana para social ads, comunidad y newsletters");
    expect(getSeoContent("ja", "url-shortener").description).toBe("WhatsApp共有、SNS配信、メール施策、社内利用にも使いやすい、整理しやすい短縮リンクを作成できます。");

    expect(getSeoContent("ko", "qr-code-generator").seoTitle).toBe("단축 링크용 QR 코드 생성기 | ShortURL Wiki");
    expect(getSeoContent("es", "qr-code-generator").overviewTitle).toBe("Por que los codigos QR funcionan mejor con short links");
    expect(getSeoContent("es", "qr-code-generator").title).toBe("Convierte cualquier link corto en un QR listo para imprimir y compartir en el celular.");

    expect(getSeoContent("ko", "url-shortener-api").seoTitle).toBe("월간 요금 기반 URL 단축 API | ShortURL Wiki");
    expect(getSeoContent("es", "url-shortener-api").overviewTitle).toBe("Lo que suele esperar un equipo de una API de acortador");
    expect(getSeoContent("es", "url-shortener-api").title).toBe("Usa una API de links cortos para producto, campanas y tareas automatizadas.");
    expect(getSeoContent("ko", "url-shortener").seoDescription).toBe("캠페인, 소셜, WhatsApp, 팀 사용에 맞는 깔끔한 단축 링크를 빠르게 생성하세요.");
    expect(getSeoContent("ko", "url-shortener-api").title).toBe("제품 기능, 캠페인 도구, 자동화 작업을 위한 URL 단축 API.");
  });

  test("serves localized ko and es content for whatsapp analytics sms utm and campaign pages", () => {
    expect(getSeoContent("ko", "whatsapp-link-shortener").seoTitle).toBe("공유와 캠페인용 WhatsApp 링크 단축 | ShortURL Wiki");
    expect(getSeoContent("es", "whatsapp-link-shortener").overviewTitle).toBe("Por que la gente busca un acortador de links de WhatsApp");

    expect(getSeoContent("ko", "link-analytics").seoTitle).toBe("단축 링크 분석과 사용량 추적 | ShortURL Wiki");
    expect(getSeoContent("es", "link-analytics").scenarios[0]).toBe("Revisiones mensuales de uso API para adquisicion y operaciones");

    expect(getSeoContent("ko", "sms-link-shortener").seoTitle).toBe("캠페인과 알림용 SMS 링크 단축 | ShortURL Wiki");
    expect(getSeoContent("es", "sms-link-shortener").overviewTitle).toBe("Por que los links en SMS deben ser cortos y faciles de leer");

    expect(getSeoContent("ko", "utm-link-shortener").seoTitle).toBe("캠페인 추적용 UTM 링크 단축 | ShortURL Wiki");
    expect(getSeoContent("es", "utm-link-shortener").description).toBe("Envuelve links UTM largos en URLs cortas mas limpias para anuncios, email, redes sociales, socios y reportes.");

    expect(getSeoContent("ko", "campaign-url-builder").seoTitle).toBe("마케팅 팀을 위한 캠페인 URL 빌더 | ShortURL Wiki");
    expect(getSeoContent("es", "campaign-url-builder").overviewTitle).toBe("Por que un builder de URL de campana resulta util");
  });

  test("serves localized fr de and pt-BR content for url qr and api pages", () => {
    expect(getSeoContent("fr", "url-shortener").seoTitle).toBe("Raccourcisseur d'URL pour campagnes et partage | ShortURL Wiki");
    expect(getSeoContent("de", "url-shortener").overviewTitle).toBe("Was Nutzer von einem URL-Kurzlink-Tool erwarten");
    expect(getSeoContent("de", "url-shortener").title).toBe("Kurze URLs fur Kampagnen, Teilen in sozialen Kanalen und Teamnutzung.");
    expect(getSeoContent("pt-BR", "url-shortener").scenarios[0]).toBe("Links de campanha para social ads, comunidade e newsletters");

    expect(getSeoContent("fr", "qr-code-generator").seoTitle).toBe("Generateur de QR code pour liens courts et supports imprimes | ShortURL Wiki");
    expect(getSeoContent("de", "qr-code-generator").overviewTitle).toBe("Warum QR-Codes mit Kurzlinks besser funktionieren");
    expect(getSeoContent("pt-BR", "qr-code-generator").description).toBe("Crie primeiro o link curto e depois baixe o QR code para posters, embalagens, eventos, menus e campanhas no celular.");

    expect(getSeoContent("fr", "url-shortener-api").seoTitle).toBe("API de raccourcisseur d'URL avec forfaits mensuels | ShortURL Wiki");
    expect(getSeoContent("de", "url-shortener-api").overviewTitle).toBe("Was Teams von einer URL-Shortener-API erwarten");
    expect(getSeoContent("de", "url-shortener-api").description).toBe("Erzeuge Kurzlinks per Anfrage, uberblicke die monatliche Nutzung und halte Produkt- und Kampagnenablaufe planbar.");
    expect(getSeoContent("pt-BR", "url-shortener-api").overviewTitle).toBe("O que uma equipe espera de uma API de encurtador");
    expect(getSeoContent("fr", "url-shortener-api").description).toBe("Generez des liens courts avec une seule requete, suivez l'usage mensuel et gardez des flux produit et marketing plus previsibles.");
    expect(getSeoContent("pt-BR", "url-shortener-api").description).toBe("Gere links curtos com uma unica requisicao, acompanhe o uso mensal e mantenha rotinas de produto e marketing mais previsiveis.");
  });

  test("serves updated english content for homepage api whatsapp analytics and sms pages", () => {
    expect(getHomeSeoContent("en").scenarios[1]).toBe("Move to the API when you need recurring team usage, predictable monthly quotas, and a cleaner rollout path.");
    expect(getHomeSeoContent("en").faqs[0][1].text).toBe("It covers the main short-link jobs together: short URLs, QR codes, branded links, analytics, and a simple API path.");
    expect(getSeoContent("en", "url-shortener").title).toBe("Shorten URLs for campaigns, social posts, and recurring team use.");
    expect(getSeoContent("en", "url-shortener").overviewDescription).toBe("People searching for a URL shortener usually want one of three things: a fast tool, cleaner sharing links, or a simple team setup they can trust.");
    expect(getSeoContent("en", "url-shortener").seoDescription).toBe("Shorten URLs for campaigns, social posts, WhatsApp sharing, and team use with clean links, fast redirects, and a simple setup.");
    expect(getSeoContent("en", "url-shortener-api").overviewDescription).toBe("API-driven search intent is different from one-off shortener intent. Product, campaign, and support teams want predictable usage, clean responses, and an easy path to rollout.");
    expect(getSeoContent("en", "whatsapp-link-shortener").overviewDescription).toBe("Most WhatsApp short-link searches come from real distribution needs: bio links, ad entry points, QR materials, support entry, and sales conversations.");
    expect(getSeoContent("en", "link-analytics").title).toBe("Track link usage with a simpler monthly quota model.");
    expect(getSeoContent("en", "link-analytics").seoDescription).toBe("Track link usage through a cleaner monthly plan model for campaigns, teams, and product use.");
    expect(getSeoContent("en", "sms-link-shortener").title).toBe("Use shorter links in SMS campaigns, alerts, and phone notifications.");
    expect(getSeoContent("en", "qr-code-generator").seoDescription).toBe("Generate QR codes from short links for print, packaging, events, restaurant menus, and mobile campaigns with a clean short-link setup.");
    expect(getSeoContent("en", "qr-code-generator").faqs[0][1]).toBe("Long URLs create denser QR patterns and are harder to reuse. Short links keep the code cleaner and easier to manage.");
    expect(getSeoContent("en", "utm-link-shortener").description).toBe("Wrap long UTM links into cleaner short URLs for ads, email campaigns, social posts, partner links, and reporting pages.");
    expect(getSeoContent("en", "utm-link-shortener").scenarios[2]).toBe("Social posts, partner links, and attribution tracking");
    expect(getSeoContent("en", "bio-link-shortener").faqs[1][1]).toBe("Creators, brands, and social teams that manage public-facing profile links.");
    expect(getSeoContent("en", "campaign-url-builder").seoDescription).toBe("Create cleaner campaign URLs for launches, paid traffic, creator collaborations, partner distribution, and tracking pages.");
    expect(getSeoContent("en", "campaign-url-builder").faqs[1][1]).toBe("Marketing teams, campaign teams, partner teams, and agencies coordinating launch or distribution work.");
    expect(getSeoContent("hi", "url-shortener-api").title).toBe("Product teams, campaign tools aur automation tasks ke liye URL shortener API use karein.");
    expect(getSeoContent("hi", "url-shortener-api").overviewDescription).toBe("API search intent normal shortener se alag hoti hai. Product, campaign aur support teams predictable usage, clean responses aur rollout ke liye easy path chahti hain.");
    expect(getSeoContent("zh-CN", "link-analytics").description).toBe("适合团队按月管理 API 使用量，观察活动链路、产品功能和产品工具里的短链消耗。");
  });

  test("serves localized fr de and pt-BR content for whatsapp analytics sms utm and campaign pages", () => {
    expect(getSeoContent("fr", "whatsapp-link-shortener").seoTitle).toBe("Raccourcisseur de lien WhatsApp pour campagnes et support | ShortURL Wiki");
    expect(getSeoContent("de", "whatsapp-link-shortener").overviewTitle).toBe("Warum Menschen nach einem WhatsApp-Link-Kurzlink suchen");
    expect(getSeoContent("de", "whatsapp-link-shortener").title).toBe("Sauberere WhatsApp-Links fur Teilen, Support und Kampagnen-Einstiege.");
    expect(getSeoContent("pt-BR", "whatsapp-link-shortener").overviewDescription).toBe("A maior parte das buscas por links curtos de WhatsApp vem de necessidades reais de distribuicao: bios, anuncios, materiais com QR, acesso ao suporte e conversas de vendas.");

    expect(getSeoContent("fr", "link-analytics").seoTitle).toBe("Analytique des liens courts et suivi d'usage | ShortURL Wiki");
    expect(getSeoContent("fr", "link-analytics").scenarios[0]).toBe("Revues mensuelles d'usage API pour les equipes campagne et support");
    expect(getSeoContent("fr", "link-analytics").overviewDescription).toBe("L'intention de recherche autour de l'analytique de liens porte souvent sur l'usage. Les equipes veulent une facon simple de comprendre l'usage des liens courts dans un cadre mensuel.");
    expect(getSeoContent("de", "link-analytics").overviewTitle).toBe("Was Teams auf einer Link-Analytics-Seite meist wissen wollen");
    expect(getSeoContent("pt-BR", "link-analytics").scenarios[1]).toBe("Planejamento de capacidade antes de campanhas, lancamentos e distribuicao com parceiros");

    expect(getSeoContent("fr", "sms-link-shortener").seoTitle).toBe("Raccourcisseur de lien SMS pour campagnes et alertes | ShortURL Wiki");
    expect(getSeoContent("de", "sms-link-shortener").overviewTitle).toBe("Warum SMS-Links kurz und gut lesbar bleiben sollten");
    expect(getSeoContent("pt-BR", "sms-link-shortener").title).toBe("Use links mais curtos em campanhas SMS, alertas e notificacoes no celular.");
    expect(getSeoContent("fr", "sms-link-shortener").title).toBe("Utilisez des liens plus courts dans les campagnes SMS, alertes et notifications sur telephone.");
    expect(getSeoContent("de", "sms-link-shortener").title).toBe("Kurzere Links fur SMS-Kampagnen, Alerts und Handy-Benachrichtigungen.");

    expect(getSeoContent("fr", "utm-link-shortener").seoTitle).toBe("Raccourcisseur de lien UTM pour le suivi de campagne | ShortURL Wiki");
    expect(getSeoContent("de", "utm-link-shortener").overviewTitle).toBe("Warum UTM-Links oft eine Kurzlink-Ebene brauchen");
    expect(getSeoContent("de", "utm-link-shortener").description).toBe("Verpacke lange UTM-Links in sauberere Kurz-URLs fur Anzeigen, E-Mail-Kampagnen, Social Posts, Partner-Links und Berichte.");
    expect(getSeoContent("pt-BR", "utm-link-shortener").scenarios[1]).toBe("Links de email e newsletters");
    expect(getSeoContent("fr", "utm-link-shortener").faqs[1][0]).toBe("Le raccourcissement supprime-t-il le suivi ?");

    expect(getSeoContent("fr", "campaign-url-builder").seoTitle).toBe("Constructeur d'URL de campagne pour equipes marketing | ShortURL Wiki");
    expect(getSeoContent("fr", "campaign-url-builder").faqs[1][1]).toBe("Elle est surtout utilisee par les equipes marketing et campagne, mais les equipes partenariat et diffusion en ont aussi besoin quand elles coordonnent une diffusion externe.");
    expect(getSeoContent("de", "campaign-url-builder").overviewTitle).toBe("Warum ein Kampagnen-URL-Builder hilfreich ist");
    expect(getSeoContent("de", "campaign-url-builder").faqs[1][1]).toBe("Vor allem Marketing- und Kampagnen-Teams nutzen sie, aber auch Partner- und Distributionsteams stehen oft vor demselben Problem.");
    expect(getSeoContent("pt-BR", "campaign-url-builder").overviewTitle).toBe("Por que um construtor de URL de campanha e util");
    expect(getSeoContent("pt-BR", "campaign-url-builder").description).toBe("Use links curtos como camada final para URLs de campanha compartilhadas em anuncios, colaboracoes com criadores, newsletters, paginas de lancamento e materiais de distribuicao.");
    expect(getSeoContent("es", "sms-link-shortener").title).toBe("Usa links mas cortos en campanas SMS, alertas y mensajes al celular.");
    expect(getSeoContent("fr", "whatsapp-link-shortener").overviewDescription).toBe("La plupart des recherches autour des liens WhatsApp courts viennent de besoins de diffusion tres concrets: bios, publicites, supports QR, acces au support et conversations commerciales.");
    expect(getSeoContent("pt-BR", "link-analytics").seoTitle).toBe("Analitica de links curtos e acompanhamento de uso | ShortURL Wiki");
    expect(getSeoContent("fr", "campaign-url-builder").scenarios[2]).toBe("Organisation des liens entre documents d'equipe et supports publics");
    expect(getSeoContent("es", "campaign-url-builder").title).toBe("Crea URLs de campana mas limpias para lanzamientos, trafico pago y distribucion con socios.");
  });

  test("serves localized ja content for whatsapp analytics sms utm and campaign pages", () => {
    expect(getSeoContent("ja", "whatsapp-link-shortener").seoTitle).toBe("WhatsApp短縮リンク作成 | ShortURL Wiki");
    expect(getSeoContent("ja", "whatsapp-link-shortener").overviewTitle).toBe("WhatsApp短縮リンクが探される理由");

    expect(getSeoContent("ja", "link-analytics").seoTitle).toBe("短縮リンク分析と利用量確認 | ShortURL Wiki");
    expect(getSeoContent("ja", "link-analytics").overviewTitle).toBe("短縮リンク分析ページでチームが知りたいこと");

    expect(getSeoContent("ja", "sms-link-shortener").seoTitle).toBe("SMS向け短縮リンク | ShortURL Wiki");
    expect(getSeoContent("ja", "sms-link-shortener").overviewTitle).toBe("SMSリンクを短く読みやすく保つ理由");
    expect(getSeoContent("ja", "sms-link-shortener").faqs[1][1]).toBe("集客チーム、CRMチーム、サポートチーム、そしてスマホ通知を送るプロダクトです。");

    expect(getSeoContent("ja", "utm-link-shortener").seoTitle).toBe("UTM付きURL短縮ツール | ShortURL Wiki");
    expect(getSeoContent("ja", "utm-link-shortener").overviewTitle).toBe("UTMリンクに短縮リンク層が必要になる理由");

    expect(getSeoContent("ja", "campaign-url-builder").seoTitle).toBe("キャンペーンURL作成ツール | ShortURL Wiki");
    expect(getSeoContent("ja", "campaign-url-builder").overviewTitle).toBe("キャンペーンURLビルダーが役立つ理由");
  });

  test("serves localized ja content for core short-link pages", () => {
    expect(getSeoContent("ja", "url-shortener").seoTitle).toBe("キャンペーン向けURL短縮ツール | ShortURL Wiki");
    expect(getSeoContent("ja", "url-shortener").overviewTitle).toBe("URL短縮ページで解決したいこと");

    expect(getSeoContent("ja", "qr-code-generator").seoTitle).toBe("短縮URL対応QRコード生成ツール | ShortURL Wiki");
    expect(getSeoContent("ja", "qr-code-generator").overviewTitle).toBe("短縮リンクとQRコードを一緒に使う理由");

    expect(getSeoContent("ja", "branded-short-links").seoTitle).toBe("ブランド短縮リンクで信頼感を向上 | ShortURL Wiki");
    expect(getSeoContent("ja", "branded-short-links").overviewTitle).toBe("ブランド短縮リンクが必要とされる理由");

    expect(getSeoContent("ja", "url-shortener-api").seoTitle).toBe("月額プラン対応URL短縮API | ShortURL Wiki");
    expect(getSeoContent("ja", "url-shortener-api").overviewTitle).toBe("URL短縮APIページでチームが確認したいこと");
  });

  test("injects homepage seo with richer homepage sections", () => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta property="og:image" content="/hero-minimal-tech.png" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const output = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/en/",
      language: "en",
      content: getHomeSeoContent("en"),
      isSeoPage: false,
      slug: null,
    });

    expect(output).toContain("URL Shortener API, QR Codes, Branded Links | ShortURL Wiki");
    expect(output).toContain("seo-hero-tags");
    expect(output).toContain("Short-link workspace");
    expect(output).toContain("Short links");
    expect(output).toContain("Monthly API");
    expect(output).toContain("Built for campaign links, social sharing, print QR flows, and recurring team operations.");
    expect(output).toContain("What teams usually want");
    expect(output).toContain("seo-benefit-card");
    expect(output).toContain("seo-benefit-kicker");
    expect(output).toContain(">01<");
    expect(output).toContain("seo-scenario-card");
    expect(output).toContain("Step 01");
    expect(output).toContain("Popular pages");
    expect(output).toContain("URL shortener for campaign and social links");
    expect(output).toContain('href="/en/url-shortener"');
    expect(output).toContain('href="/en/qr-code-generator"');
    expect(output).toContain('href="/en/whatsapp-link-shortener"');
    expect(output).toContain("View the URL shortener page");
    expect(output).toContain("View the WhatsApp link page");
    expect(output).toContain('href="/en/url-shortener">View the URL shortener page</a>.');
    expect(output).toContain("Use this URL shortener to create clean links for WhatsApp, social media, email campaigns, and recurring team use without extra setup.");
    expect(output).toContain("Create a short URL first, then download a QR code for posters, packaging, events, menus, and mobile-first campaigns.");
    expect(output).not.toContain("\"@type\":\"FAQPage\"");
    expect(output).toContain('content="website"');
  });

  test("renders localized faq punctuation for zh homepage links", () => {
    const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta property="og:image" content="/hero-minimal-tech.png" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const output = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/zh/",
      language: "zh-CN",
      content: getHomeSeoContent("zh-CN"),
      isSeoPage: false,
      slug: null,
    });

    expect(output).toContain('href="/zh/url-shortener">查看短链接页面</a>。');
    expect(output).toContain('href="/zh/whatsapp-link-shortener">查看 WhatsApp 短链页面</a>。');
  });

  test("renders localized faq punctuation for ja homepage links", () => {
    const html = `<!DOCTYPE html><html lang="ja"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta property="og:image" content="/hero-minimal-tech.png" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const output = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/ja/",
      language: "ja",
      content: getHomeSeoContent("ja"),
      isSeoPage: false,
      slug: null,
    });

    expect(output).toContain('href="/ja/url-shortener">URL短縮ページを見る</a>。');
    expect(output).toContain('href="/ja/whatsapp-link-shortener">WhatsApp短縮リンクページを見る</a>。');
  });

  test("renders localized faq links for ko homepage", () => {
    const html = `<!DOCTYPE html><html lang="ko"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta property="og:image" content="/hero-minimal-tech.png" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;
    const output = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/ko/",
      language: "ko",
      content: getHomeSeoContent("ko"),
      isSeoPage: false,
      slug: null,
    });

    expect(output).toContain('href="/ko/url-shortener">URL 단축 페이지 보기</a>');
    expect(output).toContain('href="/ko/whatsapp-link-shortener">WhatsApp 링크 페이지 보기</a>');
    expect(output).not.toContain('href="/ko/url-shortener">URL 단축 페이지 보기</a>.');
  });

  test("renders faq links for es fr de and pt-BR homepages", () => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta property="og:image" content="/hero-minimal-tech.png" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;

    const esOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/es/",
      language: "es",
      content: getHomeSeoContent("es"),
      isSeoPage: false,
      slug: null,
    });
    expect(esOutput).toContain('href="/es/url-shortener">Ver la pagina de acortador</a>.');
    expect(esOutput).toContain('href="/es/whatsapp-link-shortener">Ver la pagina de WhatsApp</a>.');

    const frOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/fr/",
      language: "fr",
      content: getHomeSeoContent("fr"),
      isSeoPage: false,
      slug: null,
    });
    expect(frOutput).toContain('href="/fr/url-shortener">Voir la page du raccourcisseur d&#39;URL</a>.');
    expect(frOutput).toContain('href="/fr/whatsapp-link-shortener">Voir la page WhatsApp</a>.');

    const deOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/de/",
      language: "de",
      content: getHomeSeoContent("de"),
      isSeoPage: false,
      slug: null,
    });
    expect(deOutput).toContain('href="/de/url-shortener">URL-Shortener-Seite ansehen</a>.');
    expect(deOutput).toContain('href="/de/whatsapp-link-shortener">WhatsApp-Seite ansehen</a>.');

    const ptOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/pt-br/",
      language: "pt-BR",
      content: getHomeSeoContent("pt-BR"),
      isSeoPage: false,
      slug: null,
    });
    expect(ptOutput).toContain('href="/pt-br/url-shortener">Ver a pagina do encurtador</a>.');
    expect(ptOutput).toContain('href="/pt-br/whatsapp-link-shortener">Ver a pagina do WhatsApp</a>.');
  });

  test("renders faq links for hi and id homepages", () => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta name="description" content="x" /><meta property="og:title" content="x" /><meta property="og:description" content="x" /><meta property="og:type" content="website" /><meta property="og:url" content="https://shorturl.wiki/" /><meta property="og:image" content="/hero-minimal-tech.png" /><meta name="twitter:title" content="x" /><meta name="twitter:description" content="x" /><title>X</title></head><body><div id="root"><h1>Fallback</h1></div></body></html>`;

    const hiOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/hi/",
      language: "hi",
      content: getHomeSeoContent("hi"),
      isSeoPage: false,
      slug: null,
    });
    expect(hiOutput).toContain('href="/hi/url-shortener">URL shortener page dekhein</a>.');
    expect(hiOutput).toContain('href="/hi/whatsapp-link-shortener">WhatsApp page dekhein</a>.');

    const idOutput = injectSeoIntoHtml(html, {
      baseUrl: "https://shorturl.wiki",
      url: "https://shorturl.wiki/id/",
      language: "id",
      content: getHomeSeoContent("id"),
      isSeoPage: false,
      slug: null,
    });
    expect(idOutput).toContain('href="/id/url-shortener">Lihat halaman short link</a>.');
    expect(idOutput).toContain('href="/id/whatsapp-link-shortener">Lihat halaman WhatsApp</a>.');
  });
});
