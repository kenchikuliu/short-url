import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getCopy, resolveLanguage } from "./i18n";

describe("i18n helpers", () => {
  test("resolves region variants and unsupported languages correctly", () => {
    expect(resolveLanguage("de-DE")).toBe("de");
    expect(resolveLanguage("pt")).toBe("pt-BR");
    expect(resolveLanguage("it")).toBe(DEFAULT_LANGUAGE);
  });

  test("returns the approved 10-language set", () => {
    expect(SUPPORTED_LANGUAGES).toContain("en");
    expect(SUPPORTED_LANGUAGES).toContain("hi");
    expect(SUPPORTED_LANGUAGES).toContain("id");
    expect(SUPPORTED_LANGUAGES).not.toContain("ru");
    expect(SUPPORTED_LANGUAGES).not.toContain("ar");
    expect(SUPPORTED_LANGUAGES).toHaveLength(10);
  });

  test("provides translated product labels", () => {
    expect(getCopy("en").brand).toBe("ShortURL Wiki");
    expect(getCopy("zh-CN").brand).toBe("ShortURL Wiki");
    expect(getCopy("ja").contactEmailLabel).toBe("メール");
    expect(getCopy("hi").languageLabel).not.toBe(getCopy("en").languageLabel);
  });

  test("provides localized language recommendation copy for all supported languages", () => {
    expect(getCopy("en").languageRecommendationEyebrow).toBe("Language recommendation");
    expect(getCopy("zh-CN").languageRecommendationEyebrow).toBe("语言推荐");
    expect(getCopy("ja").languageRecommendationEyebrow).toBe("言語のおすすめ");
    expect(getCopy("ko").languageRecommendationEyebrow).toBe("언어 추천");
    expect(getCopy("es").languageRecommendationEyebrow).toBe("Recomendacion de idioma");
    expect(getCopy("fr").languageRecommendationEyebrow).toBe("Recommandation de langue");
    expect(getCopy("de").languageRecommendationEyebrow).toBe("Sprachempfehlung");
    expect(getCopy("pt-BR").languageRecommendationEyebrow).toBe("Recomendacao de idioma");
    expect(getCopy("hi").languageRecommendationEyebrow).toBe("भाषा सुझाव");
    expect(getCopy("id").languageRecommendationEyebrow).toBe("Rekomendasi bahasa");

    expect(getCopy("ko").languageRecommendationSwitch).toContain("{language}");
    expect(getCopy("fr").languageRecommendationMessage).toContain("{language}");
    expect(getCopy("id").languageRecommendationKeep).not.toBe(getCopy("en").languageRecommendationKeep);
  });

  test("does not fall back to english for key landing-page copy in localized languages", () => {
    expect(getCopy("ja").navTool).toBe("短縮");
    expect(getCopy("ja").heroPrimaryCta).toBe("短縮リンクを作成");
    expect(getCopy("ja").docsEyebrow).toBe("ドキュメント");

    expect(getCopy("ko").docsBaseUrlLabel).toBe("기본 URL");
    expect(getCopy("es").navDocs).toBe("Documentacion");
    expect(getCopy("fr").contactEmailLabel).toBe("E-mail");
    expect(getCopy("de").docsBaseUrlLabel).toBe("Basis-URL");
    expect(getCopy("pt-BR").navDocs).toBe("Documentacao");
    expect(getCopy("hi").navPricing).toBe("प्लान");
    expect(getCopy("id").navDocs).toBe("Dokumentasi");

    expect(getCopy("ja").heroPrimaryCta).not.toBe(getCopy("en").heroPrimaryCta);
    expect(getCopy("hi").navDocs).not.toBe(getCopy("en").navDocs);
    expect(getCopy("id").contactEyebrow).not.toBe(getCopy("en").contactEyebrow);
  });

  test("localizes placeholders, URL labels, and footer notes for non-english landing pages", () => {
    expect(getCopy("ko").formPlaceholder).toBe("example.com 또는 https://example.com 같은 링크를 붙여넣으세요");
    expect(getCopy("es").shortUrlLabel).toBe("URL corta");
    expect(getCopy("fr").originUrlLabel).toBe("URL d'origine");
    expect(getCopy("de").footerNote).toBe("ShortURL Wiki bleibt reduziert, schnell und dauerhaft nutzbar.");
    expect(getCopy("pt-BR").shortUrlLabel).toBe("URL curta");

    expect(getCopy("hi").heroStatTwo).toBe("मासिक API");
    expect(getCopy("hi").pricingTitle).toBe("मासिक API प्लान");
    expect(getCopy("hi").docsBaseUrlLabel).toBe("बेस URL");
    expect(getCopy("id").formPlaceholder).toBe("Tempel link apa pun, misalnya example.com atau https://example.com");
    expect(getCopy("id").footerNote).toBe("ShortURL Wiki menjaga tampilan tetap ringkas dan link tetap stabil.");
  });

  test("localizes remaining long-form marketing copy in hi and id", () => {
    expect(getCopy("hi").pricingDescription).toBe("हल्के प्लान से शुरू करें और जरूरत बढ़ने पर बाद में अपग्रेड करें।");
    expect(getCopy("hi").contactDescription).toBe("API एक्सेस, ईमेल सेटअप या कस्टम डिप्लॉयमेंट के लिए हमें ईमेल करें।");
    expect(getCopy("hi").docsDescription).toBe("अपनी API key को X-API-Key header में भेजें। Responses JSON format में मिलते हैं।");

    expect(getCopy("id").apiDescription).toBe("Gunakan API key, kuota bulanan, dan respons JSON yang rapi untuk kampanye, halaman QR, WhatsApp, dan alat produk.");
    expect(getCopy("id").resultSubtitle).toBe("Tautan sudah disalin. Anda bisa membukanya, menyalin lagi, atau mengunduh QR code.");
    expect(getCopy("id").apiFeatureTwoBody).toBe("Buat tautan dengan satu permintaan lalu cek penggunaan melalui satu endpoint yang jelas.");
    expect(getCopy("id").pricingDescription).toBe("Mulai dengan paket ringan lalu tingkatkan saat kebutuhan Anda bertambah.");
  });

  test("localizes hi and id SEO metadata copy", () => {
    expect(getCopy("en").seoDescription).toBe("Shorten URLs, create QR codes, manage branded short links, and use a simple API for campaigns, WhatsApp sharing, social posts, and recurring team use.");
    expect(getCopy("en").heroDescription).toBe("Create clean short links from the browser, then upgrade to a monthly API plan when you need volume, tracking, and recurring team use.");
    expect(getCopy("en").heroPanelTitle).toBe("Short Link Hub");
    expect(getCopy("en").seoPagesEyebrow).toBe("Explore use cases");
    expect(getCopy("en").seoPagesTitle).toBe("Choose the short-link page that fits your use case.");
    expect(getCopy("en").apiTitle).toBe("API for product teams");
    expect(getCopy("en").apiDescription).toBe("Use API keys, monthly quotas, and a clean JSON response format to power campaign links, QR code pages, WhatsApp sharing, and product tools.");

    expect(getCopy("hi").seoTitle).toBe("URL shortener, QR code aur branded links API | ShortURL Wiki Hindi");
    expect(getCopy("hi").seoDescription).toBe("Short link banane, QR code generate karne, branded links chalane aur campaigns ke liye simple API use karne ka seedha tool.");
    expect(getCopy("hi").apiTitle).toBe("Product teams ke liye API");
    expect(getCopy("hi").apiDescription).toBe("API keys, monthly quota aur clean JSON response ke saath campaigns, QR pages, WhatsApp sharing aur product tools ko reliably chalaiye.");

    expect(getCopy("id").seoTitle).toBe("Pemendek URL, QR code, dan branded links API | ShortURL Wiki");
    expect(getCopy("id").seoDescription).toBe("Perpendek URL, buat QR code, kelola branded link, dan gunakan API sederhana untuk kampanye, WhatsApp, media sosial, dan kebutuhan tim.");
  });
});
