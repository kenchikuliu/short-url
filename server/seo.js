const DEFAULT_LANGUAGE = "en";
const LANGUAGE_DETAILS = [
  { code: "en", path: "en" },
  { code: "zh-CN", path: "zh" },
  { code: "ja", path: "ja" },
  { code: "ko", path: "ko" },
  { code: "es", path: "es" },
  { code: "fr", path: "fr" },
  { code: "de", path: "de" },
  { code: "pt-BR", path: "pt-br" },
  { code: "hi", path: "hi" },
  { code: "id", path: "id" },
];
const SUPPORTED_LANGUAGES = LANGUAGE_DETAILS.map((item) => item.code);
const LANGUAGE_PATH_SEGMENTS = LANGUAGE_DETAILS.map((item) => item.path);
const SEO_PAGE_SLUGS = [
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
const HOMEPAGE_FEATURED_SLUGS = [
  "url-shortener",
  "qr-code-generator",
  "branded-short-links",
  "url-shortener-api",
];
const RELATED_PAGE_GROUPS = {
  "url-shortener": ["qr-code-generator", "branded-short-links", "url-shortener-api"],
  "qr-code-generator": ["url-shortener", "sms-link-shortener", "whatsapp-link-shortener"],
  "branded-short-links": ["url-shortener", "bio-link-shortener", "campaign-url-builder"],
  "url-shortener-api": ["url-shortener", "link-analytics", "campaign-url-builder"],
  "whatsapp-link-shortener": ["url-shortener", "qr-code-generator", "bio-link-shortener"],
  "link-analytics": ["url-shortener-api", "utm-link-shortener", "campaign-url-builder"],
  "bio-link-shortener": ["branded-short-links", "whatsapp-link-shortener", "url-shortener"],
  "sms-link-shortener": ["qr-code-generator", "utm-link-shortener", "url-shortener"],
  "utm-link-shortener": ["campaign-url-builder", "link-analytics", "url-shortener"],
  "campaign-url-builder": ["utm-link-shortener", "url-shortener-api", "branded-short-links"],
};

const siteName = "ShortURL Wiki";
const siteImage = "https://shorturl.wiki/hero-minimal-tech.png";
const homepageCatalog = {
  en: {
    eyebrow: "Short-link workspace",
    title: "Short links, QR codes, branded links, and a simple monthly API.",
    description: "ShortURL Wiki gives teams one clean place to create short links, download QR codes, publish branded links, and move into recurring monthly API usage.",
    heroNote: "Built for campaign links, social sharing, print QR flows, and recurring team operations.",
    heroTags: ["Short links", "QR codes", "Branded links", "Monthly API"],
    seoTitle: "URL Shortener API, QR Codes, Branded Links | ShortURL Wiki",
    seoDescription: "Shorten URLs, create QR codes, manage branded short links, and use a simple API for campaigns, WhatsApp sharing, social posts, and recurring team use.",
    overviewTitle: "Use cases",
    overviewDescription: "Create campaign links, WhatsApp links, social media links, QR code destinations, and product links from one clean short-link hub.",
    benefitsTitle: "What teams usually want",
    benefits: [
      "One simple place for short URLs, QR codes, and branded links",
      "Clean public links for WhatsApp, social posts, print, and support pages",
      "A lightweight path from one-off usage to recurring monthly API usage",
    ],
    scenariosTitle: "API and plans",
    scenarios: [
      "Use the web tool for free when you need a quick link, QR code, or branded share URL.",
      "Move to the API when you need recurring team usage, predictable monthly quotas, and a cleaner rollout path.",
      "Pick the page that matches your job to be done, whether that is URL shortening, QR generation, analytics, or campaign tracking.",
    ],
    featuredTitle: "Popular pages",
    featuredPages: [
      "URL shortener for campaign and social links",
      "QR code generator for print and mobile sharing",
      "Branded short links for trust and recall",
      "Monthly API for product and campaign workflows",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["Is this homepage for one tool or several link tools together?", {
        text: "It covers the main short-link jobs together: short URLs, QR codes, branded links, analytics, and a simple API path.",
        linkLabel: "View the URL shortener page",
        linkSlug: "url-shortener",
      }],
      ["Who usually starts on the homepage?", {
        text: "Teams comparing options for campaign links, WhatsApp sharing, QR distribution, branded links, or recurring link operations usually begin here.",
        linkLabel: "View the WhatsApp link page",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  "zh-CN": {
    eyebrow: "短链工作台",
    title: "一个入口，处理短链接、二维码、品牌短链和按月 API。",
    description: "ShortURL Wiki 帮团队把短链接生成、二维码下载、品牌短链管理和按月 API 放到同一个清晰入口里。",
    heroNote: "适合活动投放、社媒分享、二维码物料分发和团队持续使用场景。",
    heroTags: ["短链接", "二维码", "品牌短链", "按月 API"],
    seoTitle: "短链接生成器、二维码、品牌短链 API | ShortURL Wiki",
    seoDescription: "支持短链接生成、二维码下载、品牌短链和团队 API，适合活动投放、WhatsApp 分享、社媒分发和增长场景。",
    overviewTitle: "使用场景",
    overviewDescription: "一个短链中心同时支持活动链接、WhatsApp 链接、社媒传播链接、二维码入口和产品链接。",
    benefitsTitle: "团队通常最在意什么",
    benefits: [
      "短链接、二维码、品牌短链可以在一个入口里统一处理",
      "适合 WhatsApp、社媒、线下物料、客服入口等公开传播场景",
      "既能即时使用网页工具，也能平滑升级到按月 API",
    ],
    scenariosTitle: "API 与套餐",
    scenarios: [
      "临时生成短链、二维码或分享链接时，可以先直接使用网页工具。",
      "当团队开始有稳定使用量、月度额度和接口接入需求时，再升级到 API。",
      "如果你已经明确需求，也可以直接进入短链、二维码、品牌短链或追踪相关页面。",
    ],
    featuredTitle: "热门页面",
    featuredPages: [
      "短链接生成器",
      "二维码生成器",
      "品牌短链",
      "按月 API",
    ],
    faqTitle: "常见问题",
    faqs: [
      ["这个首页是单一工具页还是产品总入口？", {
        text: "它更像产品总入口，把短链、二维码、品牌短链、分析和 API 这几类核心需求放在一起。",
        linkLabel: "查看短链接页面",
        linkSlug: "url-shortener",
      }],
      ["哪些用户会先从首页进入？", {
        text: "正在比较活动链接、WhatsApp 分享、二维码投放、品牌短链或团队 API 的用户，通常都会先从首页进入。",
        linkLabel: "查看 WhatsApp 短链页面",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  ja: {
    eyebrow: "短縮リンク基盤",
    title: "短縮URL、QRコード、ブランドリンク、月額APIを1つに。",
    description: "ShortURL Wiki は短縮URL作成、QRコード配布、ブランド短縮リンク運用、月額API利用を1つの入口にまとめます。",
    heroNote: "キャンペーン配信、SNS共有、印刷QR導線、継続的なチーム運用に向いています。",
    heroTags: ["短縮URL", "QRコード", "ブランドリンク", "月額API"],
    seoTitle: "URL短縮、QRコード、ブランド短縮リンク API | ShortURL Wiki",
    seoDescription: "短縮URL、QRコード、ブランド短縮リンク、シンプルなAPIを提供。SNS共有、キャンペーン、チーム運用に対応します。",
    overviewTitle: "利用シーン",
    overviewDescription: "キャンペーンリンク、WhatsAppリンク、SNS配信用リンク、QRコード導線、プロダクト用リンクを1つの短縮リンク基盤で扱えます。",
    benefitsTitle: "チームが重視しやすい点",
    benefits: [
      "短縮URL、QRコード、ブランドリンクを1か所で扱えること",
      "WhatsApp共有、SNS投稿、印刷物、サポート導線に使いやすいこと",
      "単発利用から月額API運用へ広げやすいこと",
    ],
    scenariosTitle: "API とプラン",
    scenarios: [
      "短縮リンクやQRコードをすぐ作りたいなら、まずはWebツールから始められます。",
      "継続的な運用量やチーム利用が必要になったら、月額APIプランへ移行できます。",
      "目的が明確なら、URL短縮、QRコード、ブランドリンク、分析ページへ直接進むこともできます。",
    ],
    featuredTitle: "人気ページ",
    featuredPages: [
      "URL短縮ツール",
      "QRコード生成ツール",
      "ブランド短縮リンク",
      "月額API",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["このホームページは単一機能の紹介ですか？", {
        text: "いいえ。短縮URL、QRコード、ブランド短縮リンク、分析、APIといった主要な短縮リンク用途をまとめて案内する入口です。",
        linkLabel: "URL短縮ページを見る",
        linkSlug: "url-shortener",
      }],
      ["最初にホームページを見るのはどんな人ですか？", {
        text: "キャンペーン配信、WhatsApp共有、QR配布、ブランドリンク、API導入を比較したいチームが最初に訪れやすいページです。",
        linkLabel: "WhatsApp短縮リンクページを見る",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  ko: {
    eyebrow: "단축 링크 워크스페이스",
    title: "단축 링크, QR 코드, 브랜드 링크, 월간 API를 한곳에서.",
    description: "ShortURL Wiki는 팀이 단축 링크를 만들고, QR 코드를 배포하고, 브랜드 링크를 관리하고, 월간 API로 확장할 수 있게 해줍니다.",
    heroNote: "캠페인 링크, 소셜 공유, 인쇄용 QR 흐름, 반복 팀 운영에 맞는 구성입니다.",
    heroTags: ["단축 링크", "QR 코드", "브랜드 링크", "월간 API"],
    seoTitle: "URL 단축, QR 코드, 브랜드 링크 API | ShortURL Wiki",
    seoDescription: "짧은 링크 생성, QR 코드, 브랜드 링크, 팀용 API를 통해 캠페인, WhatsApp 공유, 소셜 배포를 더 깔끔하게 운영할 수 있습니다.",
    overviewTitle: "사용 장면",
    overviewDescription: "캠페인 링크, WhatsApp 링크, 소셜 링크, QR 코드 진입 경로, 내부 운영 흐름을 하나의 깔끔한 링크 허브에서 관리할 수 있습니다.",
    benefitsTitle: "팀이 보통 중요하게 보는 점",
    benefits: [
      "단축 링크, QR 코드, 브랜드 링크를 한곳에서 다룰 수 있다는 점",
      "WhatsApp 공유, 소셜 배포, 인쇄물, 지원 안내에 쓰기 좋은 깔끔한 링크",
      "단발성 사용에서 월간 API 운영으로 자연스럽게 확장할 수 있다는 점",
    ],
    scenariosTitle: "API 및 요금제",
    scenarios: [
      "짧은 링크나 QR 코드를 빠르게 만들어야 할 때는 웹 도구로 바로 시작할 수 있습니다.",
      "더 안정적인 팀 사용량과 월간 한도가 필요해지면 API 요금제로 확장할 수 있습니다.",
      "필요가 명확하다면 URL 단축, QR 코드, 브랜드 링크, 분석 페이지로 바로 들어가도 됩니다.",
    ],
    featuredTitle: "인기 페이지",
    featuredPages: [
      "URL 단축 도구",
      "QR 코드 생성기",
      "브랜드 링크",
      "월간 API",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["이 홈 페이지는 하나의 도구 소개인가요?", {
        text: "아닙니다. 단축 링크, QR 코드, 브랜드 링크, 분석, API까지 주요 링크 작업을 함께 안내하는 진입 페이지입니다.",
        linkLabel: "URL 단축 페이지 보기",
        linkSlug: "url-shortener",
      }],
      ["누가 먼저 홈 페이지를 보게 되나요?", {
        text: "캠페인 링크, WhatsApp 공유, QR 배포, 브랜드 링크, 반복 팀 사용을 비교하는 팀이 보통 여기서 시작합니다.",
        linkLabel: "WhatsApp 링크 페이지 보기",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  es: {
    eyebrow: "Espacio de links cortos",
    title: "Links cortos, QR, links de marca y una API mensual en un solo lugar.",
    description: "ShortURL Wiki ayuda a los equipos a crear links cortos, generar QR, mantener links de marca y pasar a una API mensual desde una sola entrada.",
    heroNote: "Pensado para campanas, distribucion social, materiales con QR y uso recurrente en equipo.",
    heroTags: ["Links cortos", "QR", "Links de marca", "API mensual"],
    seoTitle: "Acortador de URL, QR y enlaces de marca API | ShortURL Wiki",
    seoDescription: "Acorta enlaces, genera codigos QR, crea enlaces de marca y usa una API simple para campanas, WhatsApp, redes sociales y uso en equipo.",
    overviewTitle: "Casos de uso",
    overviewDescription: "Crea enlaces para campanas, WhatsApp, redes sociales, destinos con QR y uso en equipo desde un mismo espacio de enlaces cortos.",
    benefitsTitle: "Lo que suele importar a un equipo",
    benefits: [
      "Resolver links cortos, QR y enlaces de marca desde un mismo lugar",
      "Usar links mas limpios en WhatsApp, redes, materiales impresos y soporte",
      "Empezar con uso puntual y luego pasar a una API mensual simple",
    ],
    scenariosTitle: "API y planes",
    scenarios: [
      "Empieza con la herramienta web gratis cuando necesites un link corto, un QR o un enlace limpio para compartir.",
      "Pasa a la API cuando ya necesites volumen estable, uso recurrente en equipo y cuota mensual predecible.",
      "Si ya sabes lo que buscas, puedes ir directo a URL shortener, QR, branded links o tracking.",
    ],
    featuredTitle: "Paginas populares",
    featuredPages: [
      "Acortador de URL",
      "Generador de QR",
      "Links cortos de marca",
      "API mensual",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["La home es una sola herramienta o una entrada general del producto?", {
        text: "Es una entrada general que reune los trabajos principales: links cortos, QR, branded links, analitica y API.",
        linkLabel: "Ver la pagina de acortador",
        linkSlug: "url-shortener",
      }],
      ["Quien suele empezar desde esta pagina?", {
        text: "Equipos que comparan opciones para campanas, WhatsApp, distribucion con QR, links de marca o uso recurrente suelen empezar aqui.",
        linkLabel: "Ver la pagina de WhatsApp",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  fr: {
    eyebrow: "Espace liens courts",
    title: "Liens courts, QR codes, liens de marque et API mensuelle au meme endroit.",
    description: "ShortURL Wiki aide les equipes a creer des liens courts, diffuser des QR codes, garder des liens de marque coherents et passer a une API mensuelle simple.",
    heroNote: "Concu pour les campagnes, le partage social, les supports QR imprimes et les usages equipe recurrents.",
    heroTags: ["Liens courts", "QR codes", "Liens de marque", "API mensuelle"],
    seoTitle: "Raccourcisseur d'URL, QR code et API liens de marque | ShortURL Wiki",
    seoDescription: "Raccourcissez des URL, creez des QR codes, gerez des liens de marque et utilisez une API simple pour les campagnes, WhatsApp et les equipes.",
    overviewTitle: "Cas d'usage",
    overviewDescription: "Creez des liens pour campagnes, WhatsApp, reseaux sociaux, destinations QR et usages equipe depuis un seul espace de liens clairs.",
    benefitsTitle: "Ce que les equipes recherchent souvent",
    benefits: [
      "Regrouper liens courts, QR codes et liens de marque au meme endroit",
      "Partager des liens plus propres sur WhatsApp, les reseaux, l'imprime et le support",
      "Commencer simplement puis evoluer vers une API mensuelle",
    ],
    scenariosTitle: "API et offres",
    scenarios: [
      "Commencez avec l'outil web gratuit si vous avez besoin d'un lien court, d'un QR code ou d'un lien propre a partager.",
      "Passez ensuite a l'API si vous avez besoin d'un volume stable, d'un usage equipe recurrent et d'un quota mensuel previsible.",
      "Si votre besoin est deja clair, allez directement vers URL courte, QR code, liens de marque ou suivi.",
    ],
    featuredTitle: "Pages populaires",
    featuredPages: [
      "Raccourcisseur d'URL",
      "Generateur de QR code",
      "Liens courts de marque",
      "API mensuelle",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["La page d'accueil presente-t-elle un seul outil ?", {
        text: "Non. Elle rassemble les besoins principaux autour des liens courts, des QR codes, des liens de marque, de l'analytique et de l'API.",
        linkLabel: "Voir la page du raccourcisseur d'URL",
        linkSlug: "url-shortener",
      }],
      ["Qui commence generalement par cette page ?", {
        text: "Les equipes qui comparent les options pour campagnes, WhatsApp, diffusion QR, liens de marque ou usage recurrent commencent souvent ici.",
        linkLabel: "Voir la page WhatsApp",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  de: {
    eyebrow: "Kurzlink-Zentrale",
    title: "Kurzlinks, QR-Codes, Branding-Links und Monats-API an einem Ort.",
    description: "ShortURL Wiki hilft Teams dabei, Kurzlinks zu erstellen, QR-Codes bereitzustellen, Branding-Links zu pflegen und in eine einfache Monats-API zu wechseln.",
    heroNote: "Geeignet fur Kampagnenlinks, Social Sharing, gedruckte QR-Flows und wiederkehrende Team-Nutzung.",
    heroTags: ["Kurzlinks", "QR-Codes", "Branding-Links", "Monats-API"],
    seoTitle: "URL-Shortener, QR-Codes und Branding-Links API | ShortURL Wiki",
    seoDescription: "Kurzlinks erstellen, QR-Codes herunterladen, Branding-Links verwalten und eine einfache API fur Kampagnen, WhatsApp und Teams nutzen.",
    overviewTitle: "Einsatzbereiche",
    overviewDescription: "Erstelle Kampagnenlinks, WhatsApp-Links, Social-Links, QR-Ziele und Produktnutzung in einem zentralen Kurzlink-Bereich.",
    benefitsTitle: "Worauf Teams oft achten",
    benefits: [
      "Kurzlinks, QR-Codes und Branding-Links an einem Ort verwalten",
      "Sauberere Links fur WhatsApp, Social Media, Printmaterial und Support",
      "Vom schnellen Einzelbedarf in eine planbare Monats-API wachsen",
    ],
    scenariosTitle: "API und Plane",
    scenarios: [
      "Starte mit dem kostenlosen Web-Tool, wenn du schnell einen Kurzlink, QR-Code oder sauberen Sharing-Link brauchst.",
      "Wechsle zur API, wenn stabile Nutzung, wiederkehrende Team-Ablaufe und planbare Monatskontingente wichtiger werden.",
      "Wenn dein Bedarf schon klar ist, kannst du direkt zu URL-Shortener, QR-Code, Branding-Links oder Tracking wechseln.",
    ],
    featuredTitle: "Beliebte Seiten",
    featuredPages: [
      "URL-Shortener",
      "QR-Code-Generator",
      "Branding-Links",
      "Monats-API",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["Ist die Startseite fur ein einzelnes Tool gedacht?", {
        text: "Nein. Sie ist ein gemeinsamer Einstieg fur Kurzlinks, QR-Codes, Branding-Links, Analytik und die API.",
        linkLabel: "URL-Shortener-Seite ansehen",
        linkSlug: "url-shortener",
      }],
      ["Wer startet typischerweise auf dieser Seite?", {
        text: "Teams, die Kampagnenlinks, WhatsApp-Sharing, QR-Verteilung, Branding-Links oder wiederkehrende Link-Nutzung vergleichen, beginnen oft hier.",
        linkLabel: "WhatsApp-Seite ansehen",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  "pt-BR": {
    eyebrow: "Central de links curtos",
    title: "Links curtos, QR code, links de marca e API mensal em um so lugar.",
    description: "ShortURL Wiki ajuda equipes a criar links curtos, publicar QR code, manter links de marca e avancar para uma API mensal simples a partir de uma unica entrada.",
    heroNote: "Feito para campanhas, compartilhamento social, materiais com QR e uso recorrente em equipe.",
    heroTags: ["Links curtos", "QR code", "Links de marca", "API mensal"],
    seoTitle: "Encurtador de URL, QR Code e links de marca API | ShortURL Wiki",
    seoDescription: "Encurte URLs, gere QR codes, use links de marca e integre uma API simples para campanhas, WhatsApp, redes sociais e equipes.",
    overviewTitle: "Casos de uso",
    overviewDescription: "Crie links para campanhas, WhatsApp, redes sociais, destinos com QR code e links de produto em um unico espaco de links curtos.",
    benefitsTitle: "O que times normalmente procuram",
    benefits: [
      "Resolver links curtos, QR code e links de marca em um unico lugar",
      "Usar links mais limpos em WhatsApp, redes, impresso e suporte",
      "Comecar com uso simples e evoluir para uma API mensal",
    ],
    scenariosTitle: "API e planos",
    scenarios: [
      "Comece pela ferramenta web gratuita quando precisar de um link curto, QR code ou URL limpa para compartilhar.",
      "Migre para a API quando precisar de volume estavel, uso recorrente em equipe e cota mensal previsivel.",
      "Se a necessidade ja estiver clara, voce pode ir direto para URL curta, QR code, links de marca ou tracking.",
    ],
    featuredTitle: "Paginas populares",
    featuredPages: [
      "Encurtador de URL",
      "Gerador de QR code",
      "Links de marca",
      "API mensal",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["A home apresenta uma ferramenta so?", {
        text: "Nao. Ela funciona como entrada geral para links curtos, QR code, links de marca, analitica e API.",
        linkLabel: "Ver a pagina do encurtador",
        linkSlug: "url-shortener",
      }],
      ["Quem costuma comecar por esta pagina?", {
        text: "Times que comparam campanhas, WhatsApp, distribuicao com QR, links de marca ou uso recorrente geralmente comecam aqui.",
        linkLabel: "Ver a pagina do WhatsApp",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  hi: {
    eyebrow: "Short-link workspace",
    title: "Short links, QR codes, branded links aur monthly API ek hi jagah.",
    description: "ShortURL Wiki teams ko short links banana, QR codes share karna, branded links manage karna aur monthly API par move karna ek hi clean entry point se allow karta hai.",
    heroNote: "Campaign links, social sharing, print QR flows aur recurring team operations ke liye bana hai.",
    heroTags: ["Short links", "QR codes", "Branded links", "Monthly API"],
    seoTitle: "URL shortener, QR code aur branded links API | ShortURL Wiki Hindi",
    seoDescription: "Short link banane, QR code generate karne, branded links chalane aur campaigns ke liye simple API use karne ka seedha tool.",
    overviewTitle: "इस्तेमाल के तरीके",
    overviewDescription: "Campaign links, WhatsApp links, social links, QR destinations aur recurring team use ko ek hi short-link hub se manage karein.",
    benefitsTitle: "Teams aam taur par kya chahti hain",
    benefits: [
      "Short links, QR code aur branded links ek hi jagah handle karna",
      "WhatsApp, social, print material aur support pages ke liye clean public links",
      "One-off use se simple monthly API tak seedha upgrade path",
    ],
    scenariosTitle: "API aur plans",
    scenarios: [
      "Agar aapko quick short link, QR code ya shareable URL chahiye to free web tool se shuru karein.",
      "Jab zyada recurring team use, stable volume aur predictable monthly quota chahiye ho to API par move karein.",
      "Agar need clear ho to URL shortener, QR generator, branded links ya tracking pages par seedha ja sakte hain.",
    ],
    featuredTitle: "Popular pages",
    featuredPages: [
      "URL shortener",
      "QR code generator",
      "Branded short links",
      "Monthly API",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["Kya homepage ek hi tool ke liye hai?", {
        text: "Nahin. Yeh short links, QR codes, branded links, analytics aur API jaise core use cases ko ek saath dikhata hai.",
        linkLabel: "URL shortener page dekhein",
        linkSlug: "url-shortener",
      }],
      ["Kaun log pehle homepage par aate hain?", {
        text: "Jo teams campaign links, WhatsApp sharing, QR distribution, branded links ya recurring operations compare kar rahi hoti hain, wo yahin se shuru karti hain.",
        linkLabel: "WhatsApp page dekhein",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
  id: {
    eyebrow: "Pusat short link",
    title: "Short link, QR code, branded link, dan API bulanan dalam satu tempat.",
    description: "ShortURL Wiki membantu tim membuat short link, membagikan QR code, menjaga branded link tetap rapi, dan masuk ke API bulanan dari satu pintu masuk.",
    heroNote: "Cocok untuk kampanye, distribusi sosial, materi QR cetak, dan penggunaan tim yang berulang.",
    heroTags: ["Short link", "QR code", "Branded link", "API bulanan"],
    seoTitle: "Pemendek URL, QR code, dan branded links API | ShortURL Wiki",
      seoDescription: "Perpendek URL, buat QR code, kelola branded link, dan gunakan API sederhana untuk kampanye, WhatsApp, media sosial, dan kebutuhan tim.",
    overviewTitle: "Contoh penggunaan",
    overviewDescription: "Buat tautan untuk kampanye, WhatsApp, media sosial, halaman QR, dan kebutuhan tim dari satu tempat short link yang rapi.",
    benefitsTitle: "Yang biasanya dicari tim",
    benefits: [
      "Mengelola short link, QR code, dan branded link dari satu tempat",
      "Memakai tautan yang lebih rapi untuk WhatsApp, media sosial, materi cetak, dan support",
      "Mulai dari kebutuhan cepat lalu naik ke API bulanan yang sederhana",
    ],
    scenariosTitle: "API dan paket",
    scenarios: [
      "Mulai dari tool web gratis saat Anda butuh short link, QR code, atau URL bersih untuk dibagikan.",
      "Pindah ke API saat Anda membutuhkan volume stabil, penggunaan tim berulang, dan kuota bulanan yang lebih terprediksi.",
      "Kalau kebutuhannya sudah jelas, Anda bisa langsung ke halaman pemendek URL, QR code, branded link, atau tracking.",
    ],
    featuredTitle: "Halaman populer",
    featuredPages: [
      "Pemendek URL",
      "Generator QR code",
      "Branded short link",
      "API bulanan",
    ],
    faqTitle: "FAQ",
    faqs: [
      ["Apakah homepage ini hanya untuk satu tool?", {
        text: "Tidak. Ini adalah pintu masuk umum yang merangkum short link, QR code, branded link, analitik, dan API.",
        linkLabel: "Lihat halaman short link",
        linkSlug: "url-shortener",
      }],
      ["Siapa yang biasanya mulai dari halaman ini?", {
        text: "Tim yang sedang membandingkan kebutuhan kampanye, WhatsApp, distribusi QR, branded link, atau penggunaan berulang biasanya mulai dari sini.",
        linkLabel: "Lihat halaman WhatsApp",
        linkSlug: "whatsapp-link-shortener",
      }],
    ],
  },
};

const pageCatalog = {
  "url-shortener": {
    en: {
      eyebrow: "URL shortener",
      title: "Shorten URLs for campaigns, social posts, and recurring team use.",
      description: "Use this URL shortener to create clean links for WhatsApp, social media, email campaigns, and recurring team use without extra setup.",
      seoTitle: "URL Shortener for Campaigns and Social Links | ShortURL Wiki",
      seoDescription: "Shorten URLs for campaigns, social posts, WhatsApp sharing, and team use with clean links, fast redirects, and a simple setup.",
      overviewTitle: "What users usually need from a URL shortener",
      overviewDescription: "People searching for a URL shortener usually want one of three things: a fast tool, cleaner sharing links, or a simple team setup they can trust.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Campaign links for paid social, community posts, and newsletters",
        "Cleaner links for WhatsApp bios, creator profiles, and support messages",
        "Short links for team docs, product pages, and quick-launch pages",
      ],
      faqs: [
        ["When should I use a short link instead of the original URL?", "Use a short link when the original address is too long, visually messy, or difficult to share in public channels."],
        ["Is this page meant for one-off use or recurring team use?", "Both. The web tool handles one-off creation, while the API and monthly plans support recurring team usage."],
      ],
    },
    "zh-CN": {
      eyebrow: "短链接生成器",
      title: "给活动投放、社媒分发和团队协作准备的短链接。",
      description: "适合活动页、WhatsApp 分享、社媒内容分发和内部工作流，用更短、更干净的链接提升点击和传播效率。",
      seoTitle: "短链接生成器，适合活动投放与社媒分发 | ShortURL Wiki",
      seoDescription: "生成适合活动投放、WhatsApp 分享、社媒分发和团队协作的短链接，保持跳转快速、链接整洁、使用简单。",
      overviewTitle: "用户打开短链接工具时通常想解决什么",
      overviewDescription: "搜索短链接工具的用户，通常想解决三件事：链接太长不好传播、分发场景太杂需要统一入口、以及团队后续可能要接 API。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "活动投放、社媒分发、社区运营和邮件营销中的链接整理",
        "简介页、客服入口、销售沟通和 WhatsApp 分享中的短链替换",
        "产品后台、内部文档、运营面板里的统一跳转入口",
      ],
      faqs: [
        ["什么时候应该把原链接换成短链？", "当原链接太长、展示不整洁、或者需要更适合公开传播时，就应该优先换成短链。"],
        ["这个页面更适合个人使用还是团队使用？", "两者都适合。网页工具适合即时生成，团队场景则可以进一步接入 API 做批量和自动化。"],
      ],
    },
    ja: {
      eyebrow: "URL短縮",
      title: "キャンペーン、SNS投稿、チーム運用向けの短縮URL。",
      description: "WhatsApp共有、SNS配信、メール施策、社内利用にも使いやすい、整理しやすい短縮リンクを作成できます。",
      seoTitle: "キャンペーン向けURL短縮ツール | ShortURL Wiki",
      seoDescription: "SNS投稿、WhatsApp共有、キャンペーン運用、チーム作業に使える短縮URLを高速に作成できます。",
      overviewTitle: "URL短縮ページで解決したいこと",
      overviewDescription: "URL短縮ツールを探す人の多くは、共有しやすい見た目、すぐ使える導線、そして後からチーム運用へ広げられる使い勝手を求めています。",
      scenariosTitle: "よくある使い方",
      scenarios: [
        "広告配信、SNS投稿、ニュースレター用のキャンペーンリンク",
        "WhatsAppプロフィール、クリエイタープロフィール、サポート案内用の共有リンク",
        "社内ドキュメント、運用画面、クイック導線用の短縮URL",
      ],
      faqs: [
        ["どんなときに元のURLではなく短縮リンクを使うべきですか？", "元のURLが長すぎるとき、見た目を整えたいとき、公開チャネルで共有しやすくしたいときに短縮リンクが向いています。"],
        ["このページは単発利用向けですか、それともチーム利用向けですか？", "両方に向いています。単発の作成はWebから、継続的な運用はAPIや月額プランへ広げられます。"],
      ],
    },
    ko: {
      eyebrow: "URL 단축",
      title: "캠페인, 소셜 공유, 팀 업무에 맞는 깔끔한 단축 링크.",
      description: "WhatsApp 공유, 소셜 게시물, 이메일 캠페인, 내부 운영 흐름에 바로 쓸 수 있는 짧고 정돈된 링크를 만듭니다.",
      seoTitle: "캠페인과 공유용 URL 단축 도구 | ShortURL Wiki",
      seoDescription: "캠페인, 소셜, WhatsApp, 팀 사용에 맞는 깔끔한 단축 링크를 빠르게 생성하세요.",
      overviewTitle: "사용자가 URL 단축 페이지에서 주로 해결하려는 것",
      overviewDescription: "URL 단축 도구를 찾는 사람들은 보통 더 깔끔한 공유 링크, 빠른 생성 흐름, 또는 팀에서 반복 사용할 수 있는 안정적인 방식을 원합니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "유료 캠페인, 커뮤니티 운영, 뉴스레터 배포용 링크",
        "WhatsApp 바이오, 크리에이터 프로필, 지원 메시지용 더 깔끔한 링크",
        "내부 문서, 제품 운영, 빠른 실행 페이지용 단축 링크",
      ],
      faqs: [
        ["원본 URL 대신 단축 링크를 언제 써야 하나요?", "원본 주소가 너무 길거나 지저분해서 공개 채널에 그대로 쓰기 어려울 때 단축 링크가 더 적합합니다."],
        ["이 페이지는 1회성 사용에 더 맞나요, 팀 사용에 더 맞나요?", "둘 다입니다. 웹 도구는 즉시 생성에 적합하고, 반복 업무는 API와 월간 플랜으로 확장할 수 있습니다."],
      ],
    },
    es: {
      eyebrow: "Acortador de URL",
      title: "Acorta URLs para campanas, redes sociales y flujos de equipo.",
      description: "Crea links mas limpios para WhatsApp, social media, email y uso en equipo sin montar un flujo complicado.",
      seoTitle: "Acortador de URL para campanas y distribucion | ShortURL Wiki",
      seoDescription: "Acorta URLs para campanas, redes, WhatsApp y uso en equipo con links limpios y un flujo simple para equipos.",
      overviewTitle: "Que suele buscar un usuario en un acortador de URL",
      overviewDescription: "Quien busca un acortador suele querer una herramienta rapida, links mas limpios para compartir o un flujo sencillo que luego pueda escalar al equipo.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Links de campana para social ads, comunidad y newsletters",
        "Links mas limpios para bios de WhatsApp, perfiles de creadores y mensajes de soporte",
        "Short links para documentos de equipo, paginas de producto y paginas de lanzamiento",
      ],
      faqs: [
        ["Cuando conviene usar un short link en lugar de la URL original?", "Cuando la direccion original es demasiado larga, se ve desordenada o no queda bien en canales publicos."],
        ["Esta pagina sirve mas para uso puntual o para uso recurrente en equipo?", "Para ambos. La herramienta web resuelve lo puntual y la API permite pasar a un uso recurrente en equipo."],
      ],
    },
    fr: {
      eyebrow: "Raccourcisseur d'URL",
      title: "Raccourcissez des URL pour les campagnes, les reseaux sociaux et les usages equipe.",
      description: "Creez des liens plus propres pour WhatsApp, les reseaux sociaux, les emails et les usages equipe sans mettre en place un flux complexe.",
      seoTitle: "Raccourcisseur d'URL pour campagnes et partage | ShortURL Wiki",
      seoDescription: "Raccourcissez vos URL pour les campagnes, le social, WhatsApp et les usages equipe avec des liens plus propres et un flux simple.",
      overviewTitle: "Ce que les utilisateurs attendent d'un raccourcisseur d'URL",
      overviewDescription: "Quand quelqu'un cherche un raccourcisseur d'URL, il veut souvent un outil rapide, des liens plus propres a partager ou un flux simple qui pourra ensuite s'etendre a l'equipe.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Liens de campagne pour social ads, communaute et newsletters",
        "Liens plus propres pour bios WhatsApp, profils createurs et messages support",
        "Short links pour documents d'equipe, pages produit et pages de lancement",
      ],
      faqs: [
        ["Quand faut-il utiliser un short link plutot que l'URL d'origine ?", "Quand l'adresse d'origine est trop longue, desordonnee ou peu adaptee aux canaux publics."],
        ["Cette page sert-elle plutot a un usage ponctuel ou a un usage equipe recurrent ?", "Aux deux. L'outil web couvre l'usage rapide, et l'API permet ensuite un usage equipe plus regulier."],
      ],
    },
    de: {
      eyebrow: "URL-Kurzlink",
      title: "Kurze URLs fur Kampagnen, Teilen in sozialen Kanalen und Teamnutzung.",
      description: "Erstelle sauberere Links fur WhatsApp, Social Media, E-Mail-Kampagnen und Teamnutzung ohne zusatzlichen Setup-Aufwand.",
      seoTitle: "URL-Kurzlinks fur Kampagnen und Verteilung | ShortURL Wiki",
      seoDescription: "Kurze, saubere URLs fur Kampagnen, Social Posts, WhatsApp und Teamnutzung.",
      overviewTitle: "Was Nutzer von einem URL-Kurzlink-Tool erwarten",
      overviewDescription: "Wer nach einem URL-Kurzlink-Tool sucht, will meist ein schnelles Werkzeug, sauberere Links zum Teilen oder einen einfachen Ablauf, der sich spater im Team ausbauen lasst.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Kampagnenlinks fur Paid Social, Community-Posts und Newsletter",
        "Sauberere Links fur WhatsApp-Bios, Creator-Profile und Support-Nachrichten",
        "Kurzlinks fur Team-Dokumente, Produktseiten und Launch-Seiten",
      ],
      faqs: [
        ["Wann sollte ich einen Kurzlink statt der Original-URL verwenden?", "Wenn die Originaladresse zu lang, unruhig oder in offentlichen Kanalen schlecht teilbar ist."],
        ["Ist diese Seite eher fur Einzelfalle oder fur Teamnutzung gedacht?", "Fur beides. Das Web-Tool deckt spontane Nutzung ab, und die API erweitert den Ablauf fur wiederkehrende Team-Nutzung."],
      ],
    },
    "pt-BR": {
      eyebrow: "Encurtador de URL",
      title: "Encurte URLs para campanhas, redes sociais e fluxos de equipe.",
      description: "Crie links mais limpos para WhatsApp, redes sociais, email e uso em equipe sem precisar montar um fluxo complicado.",
      seoTitle: "Encurtador de URL para campanhas e distribuicao | ShortURL Wiki",
      seoDescription: "Encurte URLs para campanhas, social, WhatsApp e uso em equipe com links mais limpos e um fluxo simples para equipes.",
      overviewTitle: "O que as pessoas buscam em um encurtador de URL",
      overviewDescription: "Quem procura um encurtador geralmente quer uma ferramenta rapida, links mais limpos para compartilhar ou um fluxo simples que depois possa crescer para o uso em equipe.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Links de campanha para social ads, comunidade e newsletters",
        "Links mais limpos para bios de WhatsApp, perfis de criadores e mensagens de suporte",
        "Short links para documentos de equipe, paginas de produto e paginas de lancamento",
      ],
      faqs: [
        ["Quando vale usar um short link em vez da URL original?", "Quando o endereco original e longo demais, confuso ou ruim de compartilhar em canais publicos."],
        ["Esta pagina serve mais para uso pontual ou para uso recorrente em equipe?", "Para ambos. A ferramenta web resolve o uso imediato, e a API permite evoluir para um uso recorrente em equipe."],
      ],
    },
    hi: {
      eyebrow: "URL shortener",
      title: "कैंपेन, शेयरिंग aur team use ke liye URLs ko short karein.",
      description: "WhatsApp sharing, social media distribution, email campaigns aur recurring team use ke liye saaf aur shareable short links banayein.",
      seoTitle: "कैंपेन और शेयरिंग के लिए URL shortener | ShortURL Wiki",
      seoDescription: "Campaign links, social posts, WhatsApp sharing aur team use ke liye saaf aur shareable short links banayein.",
      overviewTitle: "लोग URL shortener page पर क्या चाहते हैं",
      overviewDescription: "Aksar users ek fast tool, clean sharing link, ya simple team process dhoondh rahe hote hain jise wo bina jhanjhat use kar saken.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Paid social, community posts aur newsletters ke liye campaign links",
        "WhatsApp bios, creator profiles aur support messages ke liye cleaner links",
        "Team docs, product pages aur launch pages ke liye short links",
      ],
      faqs: [
        ["Original URL ki jagah short link kab use karna chahiye?", "Jab original address bahut lamba, visually messy, ya public channels me share karne me awkward lage."],
        ["Kya yeh page one-off use ke liye hai ya recurring team use ke liye?", "Dono ke liye. Web tool quick one-off creation handle karti hai, aur API plus monthly plans repeat team usage support karte hain."],
      ],
    },
    id: {
      eyebrow: "Pemendek URL",
      title: "Pendekkan URL untuk link kampanye, distribusi sosial, dan penggunaan tim.",
      description: "Gunakan pemendek URL ini untuk membuat tautan rapi bagi WhatsApp, media sosial, kampanye email, dan kebutuhan tim.",
      seoTitle: "Pemendek URL untuk kampanye dan distribusi link | ShortURL Wiki",
      seoDescription: "Pendekkan URL untuk kampanye, posting sosial, WhatsApp, dan kebutuhan tim dengan tautan yang lebih rapi dan cepat.",
      overviewTitle: "Apa yang biasanya dicari pengguna dari halaman pemendek URL",
      overviewDescription: "Biasanya pengguna mencari alat yang cepat, tautan yang lebih bersih untuk dibagikan, atau alur tim sederhana yang bisa mereka andalkan.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Link kampanye untuk iklan sosial, komunitas, dan newsletter",
        "Link yang lebih bersih untuk bio WhatsApp, profil kreator, dan pesan support",
        "Short link untuk dokumen tim, halaman produk, dan halaman peluncuran",
      ],
      faqs: [
        ["Kapan sebaiknya memakai short link daripada URL asli?", "Saat URL asli terlalu panjang, terlihat berantakan, atau kurang nyaman dibagikan di kanal publik."],
        ["Apakah halaman ini lebih cocok untuk kebutuhan sekali pakai atau penggunaan tim berulang?", "Keduanya. Tool web cocok untuk pembuatan cepat, sedangkan API dan paket bulanan mendukung penggunaan tim yang berulang."],
      ],
    },
  },
  "qr-code-generator": {
    en: {
      eyebrow: "QR code generator",
      title: "Turn any short link into a QR code ready for print and mobile sharing.",
      description: "Create a short URL first, then download a QR code for posters, packaging, events, menus, and mobile-first campaigns.",
      seoTitle: "QR Code Generator for Short Links and Campaigns | ShortURL Wiki",
      seoDescription: "Generate QR codes from short links for print, packaging, events, restaurant menus, and mobile campaigns with a clean short-link setup.",
      overviewTitle: "Why short links and QR codes work better together",
      overviewDescription: "A QR page performs better when the destination is already a clean short link. That makes print distribution easier to manage and future updates easier to handle.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Restaurant menus, table cards, and in-store quick access",
        "Event posters, badges, handouts, and registration flows",
        "Packaging inserts, after-sales support cards, and mobile campaign materials",
      ],
      faqs: [
        ["Why not generate a QR code from the original long URL directly?", "Long URLs create denser QR patterns and are harder to reuse. Short links keep the code cleaner and easier to manage."],
        ["Can the same short link be shared both as text and as a QR code?", "Yes. That is the main advantage of building the short link first and using it across both online and offline distribution."],
      ],
    },
    "zh-CN": {
      eyebrow: "二维码生成器",
      title: "把短链接直接变成适合打印和移动传播的二维码。",
      description: "先生成短链，再一键下载二维码，适合海报、包装、活动页、菜单页和移动端推广场景。",
      seoTitle: "二维码生成器，适合海报、菜单和活动页 | ShortURL Wiki",
      seoDescription: "基于短链接快速生成二维码，适合打印物料、包装、活动页、餐厅菜单和移动端传播。",
      overviewTitle: "为什么二维码页面最好和短链一起设计",
      overviewDescription: "如果二维码背后直接对应的是短链，而不是冗长原链接，那么打印、传播、复用和后续管理都会更轻。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "餐厅菜单、桌贴、门店海报和线下导流物料",
        "活动展板、参会证件、宣传单页和报名入口",
        "产品包装、售后卡片、安装说明和移动端推广物料",
      ],
      faqs: [
        ["为什么不直接把原链接生成二维码？", "原链接越长，二维码越复杂，既不利于打印也不利于统一管理。先做短链会更稳妥。"],
        ["同一个短链能否同时用于文字分享和二维码？", "可以，这正是短链加二维码组合的价值，同一条链路可以同时覆盖线上和线下传播。"],
      ],
    },
    ja: {
      eyebrow: "QRコード生成",
      title: "短縮リンクをそのまま印刷・配布向けQRコードに変換。",
      description: "ポスター、イベント、メニュー、パッケージ、モバイル施策向けにQRコードを簡単に作成できます。",
      seoTitle: "短縮URL対応QRコード生成ツール | ShortURL Wiki",
      seoDescription: "印刷物、イベント、メニュー、モバイル施策向けに短縮URLからQRコードを生成できます。",
      overviewTitle: "短縮リンクとQRコードを一緒に使う理由",
      overviewDescription: "QRコードの遷移先を短縮リンクにしておくと、印刷しやすさ、管理のしやすさ、再利用のしやすさが大きく変わります。",
      scenariosTitle: "よくある使い方",
      scenarios: [
        "レストランメニュー、テーブル案内、店頭ポスター",
        "イベントポスター、配布資料、来場登録の導線",
        "商品同梱カード、アフターサポート案内、モバイル施策",
      ],
      faqs: [
        ["長い元URLから直接QRコードを作ってはいけませんか？", "長いURLはQRコードが複雑になりやすく、印刷品質や再利用性にも不利です。短縮リンクを先に作る方が管理しやすくなります。"],
        ["同じ短縮リンクを文字リンクとQRコードの両方に使えますか？", "はい。それがこの運用の大きな利点です。1つの短縮リンクをオンライン共有とオフライン配布で共通利用できます。"],
      ],
    },
    ko: {
      eyebrow: "QR 코드 생성기",
      title: "짧은 링크를 인쇄물과 모바일 공유에 맞는 QR 코드로 바로 변환.",
      description: "포스터, 패키지, 행사, 메뉴, 오프라인 안내물에 쓰기 좋은 QR 코드를 단축 링크 기반으로 빠르게 만들 수 있습니다.",
      seoTitle: "단축 링크용 QR 코드 생성기 | ShortURL Wiki",
      seoDescription: "단축 링크에서 QR 코드를 만들어 포스터, 메뉴, 패키지, 행사 현장 배포에 활용하세요.",
      overviewTitle: "단축 링크와 QR 코드가 함께 설계되어야 하는 이유",
      overviewDescription: "QR 코드 뒤에 긴 원본 URL 대신 깔끔한 단축 링크가 연결되면 인쇄, 배포, 재사용, 이후 수정까지 훨씬 관리하기 쉬워집니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "레스토랑 메뉴, 테이블 카드, 매장 내 빠른 진입 안내",
        "행사 포스터, 배지, 인쇄물, 등록 안내 흐름",
        "패키지 인서트, A/S 카드, 모바일 캠페인 안내물",
      ],
      faqs: [
        ["긴 원본 URL에서 바로 QR 코드를 만들면 안 되나요?", "긴 URL은 QR 패턴이 더 복잡해져 인쇄와 재사용에 불리합니다. 단축 링크를 먼저 만드는 편이 훨씬 안정적입니다."],
        ["같은 단축 링크를 텍스트와 QR 코드에 같이 써도 되나요?", "네. 같은 링크를 온라인과 오프라인 모두에 재사용할 수 있다는 점이 이 방식의 큰 장점입니다."],
      ],
    },
    es: {
      eyebrow: "Generador de QR",
      title: "Convierte cualquier link corto en un QR listo para imprimir y compartir en el celular.",
      description: "Primero crea el link corto y luego descarga el QR para posters, packaging, eventos, menus y campanas con trafico movil.",
      seoTitle: "Generador de QR para links cortos y material impreso | ShortURL Wiki",
      seoDescription: "Genera codigos QR desde links cortos para posters, packaging, menus, eventos y campanas para celular con un flujo mas limpio.",
      overviewTitle: "Por que los codigos QR funcionan mejor con short links",
      overviewDescription: "Una pagina QR funciona mejor cuando el destino ya es un link corto limpio. Eso facilita imprimir, distribuir y actualizar el flujo despues.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Menus de restaurante, tarjetas de mesa y acceso rapido en tienda",
        "Posters de eventos, acreditaciones, folletos y registros",
        "Inserciones en packaging, tarjetas de soporte y material para celular",
      ],
      faqs: [
        ["Por que no generar el QR directamente desde la URL larga?", "Las URLs largas crean patrones QR mas densos y menos reutilizables. Un link corto deja el codigo mas limpio y el flujo mas controlable."],
        ["El mismo link corto puede usarse como texto y como QR?", "Si. Esa es precisamente la ventaja de crear primero el link corto y reutilizarlo en distribucion online y offline."],
      ],
    },
    fr: {
      eyebrow: "Generateur de QR code",
      title: "Transformez n'importe quel lien court en QR code pret pour l'impression et le partage sur smartphone.",
      description: "Creez d'abord un lien court, puis telechargez un QR code pour affiches, packaging, evenements, menus et campagnes sur smartphone.",
      seoTitle: "Generateur de QR code pour liens courts et supports imprimes | ShortURL Wiki",
      seoDescription: "Generez des QR codes a partir de liens courts pour affiches, packaging, menus, evenements et campagnes sur smartphone avec un flux plus propre.",
      overviewTitle: "Pourquoi les QR codes fonctionnent mieux avec des liens courts",
      overviewDescription: "Une page QR fonctionne mieux lorsque la destination est deja un lien court propre. Cela simplifie l'impression, la diffusion et les mises a jour ulterieures.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Menus de restaurant, cartes de table et acces rapide en boutique",
        "Affiches d'evenement, badges, brochures et inscriptions",
        "Encarts packaging, cartes de support et supports de campagne mobile",
      ],
      faqs: [
        ["Pourquoi ne pas generer le QR directement depuis l'URL longue ?", "Les URLs longues produisent des QR plus denses et moins reutilisables. Un short link rend le code plus propre et le flux plus simple a gerer."],
        ["Le meme short link peut-il servir en texte et en QR ?", "Oui. C'est justement l'avantage de creer d'abord le short link puis de le reutiliser online et offline."],
      ],
    },
    de: {
      eyebrow: "QR-Code-Generator",
      title: "Jeden Kurzlink direkt in einen QR-Code fur Print und Mobile verwandeln.",
      description: "Erstelle zuerst einen Kurzlink und lade danach den QR-Code fur Poster, Verpackungen, Events, Menus und Mobile-Kampagnen herunter.",
      seoTitle: "QR-Code-Generator fur Kurzlinks und Printmaterial | ShortURL Wiki",
      seoDescription: "Erzeuge QR-Codes aus Kurzlinks fur Poster, Verpackungen, Menus, Events und mobile Kampagnen mit einem saubereren Workflow.",
      overviewTitle: "Warum QR-Codes mit Kurzlinks besser funktionieren",
      overviewDescription: "Eine QR-Seite funktioniert besser, wenn das Ziel bereits ein sauberer Kurzlink ist. Das erleichtert Druck, Verteilung und spaetere Anpassungen.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Restaurant-Menues, Tischkarten und schneller In-Store-Zugang",
        "Event-Poster, Badges, Handouts und Registrierungs-Flows",
        "Packaging-Einleger, Service-Karten und mobile Kampagnenmaterialien",
      ],
      faqs: [
        ["Warum nicht direkt aus der langen URL einen QR-Code erzeugen?", "Lange URLs erzeugen dichtere QR-Muster und sind schwerer wiederzuverwenden. Ein Kurzlink macht den Code sauberer und den Workflow einfacher."],
        ["Kann derselbe Kurzlink als Text und als QR-Code genutzt werden?", "Ja. Genau darin liegt der Vorteil: erst den Kurzlink bauen und ihn dann online wie offline wiederverwenden."],
      ],
    },
    "pt-BR": {
      eyebrow: "Gerador de QR code",
      title: "Transforme qualquer link curto em um QR code pronto para impressao e compartilhamento no celular.",
      description: "Crie primeiro o link curto e depois baixe o QR code para posters, embalagens, eventos, menus e campanhas no celular.",
      seoTitle: "Gerador de QR code para links curtos e material impresso | ShortURL Wiki",
      seoDescription: "Gere QR codes a partir de links curtos para posters, embalagens, menus, eventos e campanhas no celular com um fluxo mais limpo.",
      overviewTitle: "Por que QR codes funcionam melhor com links curtos",
      overviewDescription: "Uma pagina de QR funciona melhor quando o destino ja e um link curto limpo. Isso facilita impressao, distribuicao e atualizacoes depois.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Menus de restaurante, cards de mesa e acesso rapido na loja",
        "Posters de evento, crachas, folhetos e fluxos de inscricao",
        "Insertos em embalagem, cartoes de suporte e materiais de campanha mobile",
      ],
      faqs: [
        ["Por que nao gerar o QR diretamente da URL longa?", "URLs longas criam padroes de QR mais densos e menos reutilizaveis. Um short link deixa o codigo mais limpo e o fluxo mais facil de controlar."],
        ["O mesmo short link pode ser usado como texto e como QR?", "Sim. Essa e justamente a vantagem de criar primeiro o short link e reaproveita-lo na distribuicao online e offline."],
      ],
    },
    hi: {
      eyebrow: "QR code generator",
      title: "Har short link ko print aur mobile sharing ke liye ready QR code me badlein.",
      description: "Pehle short URL banayein, phir posters, packaging, events, menus aur mobile campaigns ke liye QR code download karein.",
      seoTitle: "Short links और print sharing के लिए QR code generator | ShortURL Wiki",
      seoDescription: "Short links se QR code generate karein jo print material, packaging, events aur mobile campaigns me aaram se use ho sake.",
      overviewTitle: "Short links और QR codes साथ में बेहतर क्यों काम करते हैं",
      overviewDescription: "Jab destination pehle se clean short link ho to QR page ko manage karna, print karna aur baad me update karna sab aasaan ho jata hai.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Restaurant menus, table cards aur in-store quick access",
        "Event posters, badges, handouts aur registration flows",
        "Packaging inserts, support cards aur mobile campaign material",
      ],
      faqs: [
        ["Original long URL se direct QR code kyun na banayein?", "Long URLs dense QR patterns banati hain aur reuse karna mushkil hota hai. Short links QR sharing ko cleaner banati hain."],
        ["Kya same short link text aur QR dono me use ho sakta hai?", "Haan. Isi wajah se pehle short link banana aur phir use online plus offline dono jagah reuse karna useful hota hai."],
      ],
    },
    id: {
      eyebrow: "Generator QR code",
      title: "Ubah short link apa pun menjadi QR code yang siap untuk cetak dan berbagi di mobile.",
      description: "Buat short URL lebih dulu, lalu unduh QR code untuk poster, kemasan, acara, menu, dan kampanye mobile.",
      seoTitle: "Generator QR code untuk short link dan materi cetak | ShortURL Wiki",
      seoDescription: "Buat QR code dari short link untuk materi cetak, kemasan, acara, menu, dan kampanye mobile dengan alur yang rapi.",
      overviewTitle: "Mengapa short link dan QR code lebih efektif jika dipakai bersama",
      overviewDescription: "Halaman QR bekerja lebih baik ketika tujuan akhirnya sudah berupa short link yang rapi. Ini memudahkan distribusi cetak dan pembaruan di kemudian hari.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Menu restoran, kartu meja, dan akses cepat di toko",
        "Poster event, badge, handout, dan alur registrasi",
        "Sisipan kemasan, kartu dukungan, dan materi campaign mobile",
      ],
      faqs: [
        ["Mengapa tidak langsung membuat QR code dari URL panjang asli?", "URL panjang membuat pola QR lebih padat dan lebih sulit dipakai ulang. Short link membuat proses berbagi QR jauh lebih rapi."],
        ["Apakah short link yang sama bisa dipakai untuk teks dan QR code sekaligus?", "Ya. Itulah keuntungan membuat short link lebih dulu lalu memakainya untuk distribusi online dan offline."],
      ],
    },
  },
  "branded-short-links": {
    en: {
      eyebrow: "Branded short links",
      title: "Use cleaner branded links for trust, recall, and better campaign presentation.",
      description: "Branded short links help teams keep marketing links consistent across campaign pages, email, social posts, and public documents.",
      seoTitle: "Branded Short Links for Marketing Teams | ShortURL Wiki",
      seoDescription: "Create branded short links for cleaner campaigns, stronger trust, and consistent link presentation across social, email, and campaign pages.",
      overviewTitle: "Why branded short links matter for marketing teams",
      overviewDescription: "Users often search for branded short links when they care about trust, consistency, and how links look inside campaigns, bios, and shared documents.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Landing pages, newsletters, media kits, and creator collaboration briefs",
        "Support docs, onboarding links, and public help center references",
        "Campaign assets that need better recall and stronger visual trust",
      ],
      faqs: [
        ["Do branded links mainly help with aesthetics or trust?", "Both. Better presentation improves recall, while a recognizable domain reduces friction in public-facing channels."],
        ["Which teams benefit most from branded short links?", "Marketing, content, partnerships, support, and product teams that share links externally on a regular basis."],
      ],
    },
    "zh-CN": {
      eyebrow: "品牌短链",
      title: "用更整洁的品牌短链提升信任感和传播一致性。",
      description: "品牌短链适合投放、社媒、邮件和活动页，让团队在外部传播时保持统一的链接风格。",
      seoTitle: "品牌短链，适合营销和增长团队 | ShortURL Wiki",
      seoDescription: "创建更干净的品牌短链，用于投放、社媒、邮件和活动页，提升信任感和品牌一致性。",
      overviewTitle: "品牌短链为什么对营销团队更重要",
      overviewDescription: "很多用户搜索品牌短链，本质上不是为了技术，而是为了让链接更像品牌的一部分，而不是临时拼出来的跳转地址。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "活动页、邮件、媒体资料包和合作投放中的统一链接展示",
        "帮助中心、客服文档、产品引导和公开说明中的对外分享",
        "品牌活动、内容分发和渠道合作中的信任感提升",
      ],
      faqs: [
        ["品牌短链最大的价值是好看还是更可信？", "两者都有。它既让链接更整洁，也能让用户更快识别来源，从而提升点击意愿。"],
        ["哪些团队最值得优先上品牌短链？", "经常对外分享链接的团队都值得优先使用，尤其是市场、内容、商务、客服和产品团队。"],
      ],
    },
    ja: {
      eyebrow: "ブランド短縮リンク",
      title: "信頼感と運用の統一感を高めるブランド短縮リンク。",
      description: "広告、メール、SNS、ランディングページでリンク表記を揃えたいチームに向いています。",
      seoTitle: "ブランド短縮リンクで信頼感を向上 | ShortURL Wiki",
      seoDescription: "広告、SNS、メール、LP運用に向けたブランド短縮リンクでリンク体験を統一できます。",
      overviewTitle: "ブランド短縮リンクが必要とされる理由",
      overviewDescription: "ブランド短縮リンクを探す人は、ただ短くしたいのではなく、公開チャネルでの信頼感、統一感、見た目の整い方を重視しています。",
      scenariosTitle: "よくある使い方",
      scenarios: [
        "ランディングページ、ニュースレター、メディアキット、コラボ資料",
        "サポート記事、オンボーディング導線、公開ヘルプセンター",
        "記憶に残りやすさと信頼感が重要なキャンペーン素材",
      ],
      faqs: [
        ["ブランド短縮リンクの価値は見た目ですか、それとも信頼ですか？", "両方です。見た目が整うことでブランド想起が上がり、わかりやすいドメイン名がクリックの安心感につながります。"],
        ["どのチームが最も使うべきですか？", "外部に向けてリンクをよく共有するマーケティング、コンテンツ、営業、サポート、プロダクト系のチームです。"],
      ],
    },
    ko: {
      eyebrow: "브랜디드 단축 링크",
      title: "신뢰도와 캠페인 완성도를 높여 주는 더 깔끔한 브랜드 단축 링크.",
      description: "캠페인 페이지, 이메일, 소셜 게시물, 공개 문서 전반에서 링크 표현을 일관되게 유지하려는 팀에 잘 맞습니다.",
      seoTitle: "마케팅 팀을 위한 브랜드 단축 링크 | ShortURL Wiki",
      seoDescription: "캠페인, 이메일, 소셜, 공개 문서에서 더 깔끔하고 신뢰감 있는 브랜드 단축 링크를 사용하세요.",
      overviewTitle: "마케팅 팀이 브랜드 단축 링크를 찾는 이유",
      overviewDescription: "브랜드 단축 링크를 찾는 사람들은 단순히 짧은 URL이 아니라, 공개 채널에서 더 신뢰감 있고 정돈된 링크 표현을 원합니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "캠페인 페이지, 뉴스레터, 미디어 키트, 크리에이터 협업 브리프",
        "도움말 문서, 온보딩 링크, 공개 지원 센터 안내",
        "기억하기 쉽고 더 신뢰감 있게 보여야 하는 캠페인 자산",
      ],
      faqs: [
        ["브랜드 단축 링크는 보기 좋은 용도인가요, 신뢰용인가요?", "둘 다입니다. 더 정돈된 표현은 기억하기 쉽게 만들고, 익숙한 도메인은 공개 채널에서 클릭 장벽을 낮춰 줍니다."],
        ["어떤 팀이 가장 먼저 도입하면 좋나요?", "대외적으로 링크를 자주 공유하는 마케팅, 콘텐츠, 파트너십, 지원, 제품 팀이 가장 큰 효과를 봅니다."],
      ],
    },
    es: {
      eyebrow: "Links cortos de marca",
      title: "Usa links cortos de marca mas limpios para transmitir confianza y dar mejor forma a tus campanas.",
      description: "Ayudan a que equipos de marketing mantengan el mismo estilo de link en paginas de campana, email, redes sociales y documentos publicos.",
      seoTitle: "Links cortos de marca para equipos de marketing | ShortURL Wiki",
      seoDescription: "Crea links cortos de marca para campanas, email y redes con una presentacion mas limpia y consistente.",
      overviewTitle: "Por que los equipos de marketing usan links cortos de marca",
      overviewDescription: "Quien busca links cortos de marca normalmente quiere mas confianza, mejor consistencia y una presentacion mas cuidada en campanas y documentos compartidos.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Paginas de campana, newsletters, media kits y briefs para colaboradores",
        "Documentacion de soporte, enlaces de onboarding y referencias publicas",
        "Activos de campana que necesitan mas recordacion y confianza visual",
      ],
      faqs: [
        ["Los links de marca ayudan mas por imagen o por confianza?", "Por ambas cosas. Una mejor presentacion mejora el recuerdo y un dominio reconocible hace mas facil el clic en espacios publicos."],
        ["Que equipos aprovechan mas este tipo de links?", "Marketing, contenido, partnerships, soporte y producto, especialmente si comparten enlaces hacia afuera con frecuencia."],
      ],
    },
    fr: {
      eyebrow: "Liens courts de marque",
      title: "Des liens courts de marque plus propres pour inspirer confiance et mieux presenter vos campagnes.",
      description: "Ils aident les equipes a garder des liens coherents sur les pages de campagne, les emails, les reseaux sociaux et les documents publics.",
      seoTitle: "Liens courts de marque pour les equipes marketing | ShortURL Wiki",
      seoDescription: "Creez des liens courts de marque plus propres pour les campagnes, les emails, les reseaux sociaux et les documents publics.",
      overviewTitle: "Pourquoi les equipes marketing utilisent des liens courts de marque",
      overviewDescription: "Les recherches autour des liens courts de marque traduisent souvent un besoin de confiance, de coherence et d'une meilleure presentation dans les campagnes et documents publics.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Pages de campagne, newsletters, kits media et briefs de collaboration createur",
        "Documentation support, liens d'onboarding et references d'aide publiques",
        "Supports de campagne qui doivent etre plus memorables et plus rassurants",
      ],
      faqs: [
        ["Le principal avantage est-il esthetique ou lie a la confiance ?", "Les deux. Une presentation plus propre facilite la memorisation et un domaine reconnaissable inspire plus confiance."],
        ["Quelles equipes en tirent le plus de valeur ?", "Les equipes marketing, contenu, partenariats, support et produit qui partagent regulierement des liens en externe."],
      ],
    },
    de: {
      eyebrow: "Gebrandete Kurzlinks",
      title: "Saubere gebrandete Kurzlinks fur mehr Vertrauen, Wiedererkennung und bessere Kampagnenprasentation.",
      description: "Ideal fur Teams, die Links in Kampagnenseiten, E-Mails, Social Posts und offentlichen Dokumenten einheitlich halten wollen.",
      seoTitle: "Gebrandete Kurzlinks fur Marketing-Teams | ShortURL Wiki",
      seoDescription: "Nutze gebrandete Kurzlinks fur sauberere Kampagnen, mehr Vertrauen und konsistente Linkdarstellung.",
      overviewTitle: "Warum gebrandete Kurzlinks fur Marketing-Teams wichtig sind",
      overviewDescription: "Wer nach gebrandeten Kurzlinks sucht, will meist nicht nur kurze URLs, sondern mehr Vertrauen, klarere Wiedererkennung und sauberere Kampagnenauftritte.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Kampagnenseiten, Newsletter, Media Kits und Creator-Briefings",
        "Support-Dokumente, Onboarding-Links und offentliche Hilfeseiten",
        "Kampagnenmaterial mit hohem Anspruch an Wiedererkennung und Vertrauen",
      ],
      faqs: [
        ["Geht es bei gebrandeten Links eher um Optik oder Vertrauen?", "Um beides. Eine bessere Darstellung hilft bei der Wiedererkennung und eine vertraute Domain senkt die Klickhurde."],
        ["Welche Teams profitieren am meisten davon?", "Marketing-, Content-, Partnership-, Support- und Produkt-Teams, die regelmassig Links extern teilen."],
      ],
    },
    "pt-BR": {
      eyebrow: "Links curtos com marca",
      title: "Use links curtos com marca mais limpos para gerar confianca e melhorar a apresentacao das campanhas.",
      description: "Eles ajudam equipes a manter o mesmo padrao de link em paginas de campanha, email, redes sociais e documentos publicos.",
      seoTitle: "Links curtos com marca para times de marketing | ShortURL Wiki",
      seoDescription: "Crie links curtos com marca para campanhas, email e redes sociais com apresentacao mais limpa e consistente.",
      overviewTitle: "Por que links curtos com marca importam para times de marketing",
      overviewDescription: "Quem procura links curtos com marca normalmente quer mais confianca, consistencia e uma apresentacao melhor em campanhas, bios e materiais publicos.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Paginas de campanha, newsletters, media kits e briefs para criadores",
        "Documentacao de suporte, links de onboarding e referencias de ajuda publica",
        "Ativos de campanha que precisam de mais lembranca e confianca visual",
      ],
      faqs: [
        ["Links com marca ajudam mais na aparencia ou na confianca?", "Nos dois pontos. Uma apresentacao melhor aumenta a lembranca, e um dominio reconhecivel reduz a friccao no clique."],
        ["Quais times se beneficiam mais desse tipo de link?", "Times de marketing, conteudo, parcerias, suporte e produto que compartilham links publicamente com frequencia."],
      ],
    },
    hi: {
      eyebrow: "Branded short links",
      title: "Branded short links se campaigns ko zyada भरोसेमंद aur clean dikhayein.",
      description: "Marketing teams branded short links ki madad se campaign pages, email, social posts aur public docs me ek jaisa link format rakh sakti hain.",
      seoTitle: "Marketing teams के लिए branded short links | ShortURL Wiki Hindi",
      seoDescription: "Social, email aur campaign pages me saaf presentation aur बेहतर trust ke liye branded short links banayein.",
      overviewTitle: "Marketing teams branded short links क्यों खोजती हैं",
      overviewDescription: "Log branded short links tab dhoondhte hain jab unhe trust, consistency aur campaigns ya bios me links ka overall look important lagta hai.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Campaign pages, newsletters, media kits aur creator partnership briefs",
        "Support docs, onboarding links aur public help-center pages",
        "Campaign assets jahan better recall aur visual trust zaruri hota hai",
      ],
      faqs: [
        ["Branded links ka main fayda look hai ya trust?", "Dono. Clean presentation se brand yaad rehta hai, aur recognizable domain ki wajah se click karne se pehle hesitation kam hota hai."],
        ["Kin teams ko branded short links sabse zyada suit karti hain?", "Marketing, content, partnerships, support aur product teams jo links ko public channels me regularly share karti hain."],
        ["Kya kabhi-kabhi link share karne par bhi branded links useful hoti hain?", "Haan. Agar link campaigns, bios, creator pages ya public docs me dikhne wali hai, to branded format fir bhi farq lata hai."],
      ],
    },
    id: {
      eyebrow: "Short link bermerek",
      title: "Gunakan branded short link yang lebih rapi agar kampanye terlihat lebih meyakinkan.",
      description: "Branded short link membantu tim menjaga tampilan tautan tetap konsisten di halaman kampanye, email, posting sosial, dan dokumen publik.",
      seoTitle: "Branded short link untuk tim marketing | ShortURL Wiki",
      seoDescription: "Buat branded short link untuk kampanye yang lebih rapi, lebih dipercaya, dan lebih konsisten di sosial, email, dan halaman kampanye.",
      overviewTitle: "Mengapa branded short link penting untuk tim marketing",
      overviewDescription: "Orang biasanya mencari branded short link ketika mereka peduli pada kepercayaan, konsistensi, dan tampilan tautan di kampanye, bio, atau dokumen publik.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Halaman kampanye, newsletter, media kit, dan brief kolaborasi kreator",
        "Dokumen support, link onboarding, dan halaman help center publik",
        "Aset kampanye yang butuh daya ingat dan kepercayaan visual yang lebih kuat",
      ],
      faqs: [
        ["Apakah branded link lebih berguna untuk tampilan atau kepercayaan?", "Keduanya. Tampilan yang lebih rapi membantu orang mengingat, sementara domain yang mudah dikenali membuat orang lebih yakin untuk klik."],
        ["Tim mana yang paling terbantu dengan branded short link?", "Tim marketing, content, partnership, support, dan product yang rutin membagikan tautan ke publik."],
        ["Apakah branded short link tetap berguna jika tidak dipakai setiap hari?", "Ya. Selama tautan dipakai di kampanye, bio, atau dokumen yang mewakili merek, tampilan yang rapi tetap penting."],
      ],
    },
  },
  "url-shortener-api": {
    en: {
      eyebrow: "URL shortener API",
      title: "Use a URL shortener API for product teams, campaign tools, and automation tasks.",
      description: "Generate short links with one request, track monthly usage, and keep campaign or product usage predictable with monthly plans.",
      seoTitle: "URL Shortener API with Monthly Plans | ShortURL Wiki",
      seoDescription: "Use a short-link API for product tools, campaign tools, QR code pages, and automation tasks with predictable monthly plans.",
      overviewTitle: "What teams usually expect from a URL shortener API page",
      overviewDescription: "API-driven search intent is different from one-off shortener intent. Product, campaign, and support teams want predictable usage, clean responses, and an easy path to rollout.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Campaign builders, CMS flows, and product tools for campaign delivery",
        "QR pages and reporting dashboards",
        "Product notifications, customer journeys, and support automation",
      ],
      faqs: [
        ["Who searches for a URL shortener API instead of a normal shortener?", "Usually product teams, campaign teams, support teams, and anyone who needs repeatable link generation at scale."],
        ["Why emphasize monthly plans on this page?", "Because API buyers often want predictable costs and predictable quota limits, not vague pay-as-you-go usage."],
      ],
    },
    "zh-CN": {
      eyebrow: "短链 API",
      title: "给产品功能、活动系统和自动化场景使用的短链接 API。",
      description: "支持一键生成短链、查询月度用量，适合活动系统、内容后台、二维码页面和自动化场景。",
      seoTitle: "短链接 API，适合产品与增长系统接入 | ShortURL Wiki",
      seoDescription: "通过短链接 API 接入活动系统、二维码页面、产品后台和自动化场景，支持按月套餐和稳定用量控制。",
      overviewTitle: "短链 API 页面真正承接的是系统接入需求",
      overviewDescription: "搜索短链 API 的用户，和搜索普通短链工具的用户完全不同。他们更关注接入效率、额度管理、返回结构和后续扩展。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "活动系统、CMS 后台、增长面板和产品工具里的批量短链生成",
        "二维码页面、数据后台和运营场景中的统一跳转能力",
        "通知消息、CRM 触达、客服流程和产品内分享入口",
      ],
      faqs: [
        ["为什么会有人搜短链 API 而不是普通短链工具？", "因为他们需要的是可重复、可批量、可集成的短链能力，通常来自产品、增长或运营系统接入场景。"],
        ["为什么这个页面会强调按月套餐？", "API 采购方通常更看重可预测的额度和成本，而不是模糊的按量模式。"],
      ],
    },
    ja: {
      eyebrow: "URL短縮API",
      title: "プロダクト、キャンペーン基盤、社内自動化に組み込めるURL短縮API。",
      description: "短縮リンクをAPIで発行し、月間利用量を把握しながら、キャンペーンやプロダクト運用を安定化できます。",
      seoTitle: "月額プラン対応URL短縮API | ShortURL Wiki",
      seoDescription: "プロダクト機能、キャンペーン基盤、QR生成、社内自動化に使えるURL短縮APIを月額プランで運用できます。",
      overviewTitle: "URL短縮APIページでチームが確認したいこと",
      overviewDescription: "URL短縮APIを探すチームは、単発利用ではなく、安定した生成量、わかりやすいレスポンス、月額で管理しやすい運用を求めています。",
      scenariosTitle: "よくある使い方",
      scenarios: [
        "キャンペーンビルダー、CMSワークフロー、社内成長ツール",
        "QRコード生成パイプラインと運用ダッシュボード",
        "プロダクト通知、CRM施策、サポート自動化",
      ],
      faqs: [
        ["通常の短縮ツールではなくAPIを探すのはどんなチームですか？", "プロダクト、グロース、運用、開発チームなど、短縮リンクを繰り返し大量に発行する必要があるチームです。"],
        ["なぜこのページでは月額プランを強調しているのですか？", "API導入では料金と利用枠の予測しやすさが重要で、運用計画や調達判断に直結するからです。"],
      ],
    },
    ko: {
      eyebrow: "URL 단축 API",
      title: "제품 기능, 캠페인 도구, 자동화 작업을 위한 URL 단축 API.",
      description: "한 번의 요청으로 단축 링크를 만들고 월간 사용량까지 확인할 수 있어 팀 단위 운영에 잘 맞습니다.",
      seoTitle: "월간 요금 기반 URL 단축 API | ShortURL Wiki",
      seoDescription: "제품 기능, 캠페인 도구, QR 페이지, 자동화 작업을 위한 단축 링크 API를 월간 플랜으로 운영하세요.",
      overviewTitle: "팀이 URL 단축 API 페이지에서 기대하는 것",
      overviewDescription: "API를 찾는 사용자는 일반 소비자용 단축 도구와 다릅니다. 더 예측 가능한 사용량, 깔끔한 응답 구조, 빠른 운영 전환을 원합니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "캠페인 빌더, CMS 흐름, 내부 성장 도구",
        "QR 생성 파이프라인과 운영 대시보드",
        "제품 알림, CRM 여정, 지원 자동화",
      ],
      faqs: [
        ["일반 단축 도구 대신 API를 찾는 팀은 어떤 팀인가요?", "보통 제품 팀, 성장 엔지니어, 운영 팀처럼 대량으로 반복 생성해야 하는 팀입니다."],
        ["왜 이 페이지는 월간 플랜을 강조하나요?", "API 도입 팀은 비용과 사용량이 예측 가능해야 실제 운영에 넣기 쉽기 때문입니다."],
      ],
    },
    es: {
      eyebrow: "API de acortador de URL",
      title: "Usa una API de links cortos para producto, campanas y tareas automatizadas.",
      description: "Genera links cortos con una sola peticion, revisa el uso mensual y manten mas predecibles los flujos de producto y marketing.",
      seoTitle: "API de acortador de URL con planes mensuales | ShortURL Wiki",
      seoDescription: "Integra una API de links cortos para producto, campanas, paginas QR y tareas automatizadas con un modelo mensual mas predecible.",
      overviewTitle: "Lo que suele esperar un equipo de una API de acortador",
      overviewDescription: "La intencion de quien busca una API no es la misma que la de un usuario puntual. Quiere uso predecible, respuestas limpias y una integracion facil de operar.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Generadores de campana, flujos de CMS y herramientas de producto para adquisicion",
        "Pipelines de QR y paneles operativos",
        "Notificaciones de producto, recorridos de clientes y automatizacion de soporte",
      ],
      faqs: [
        ["Quien busca una API de links cortos en vez de un acortador normal?", "Normalmente equipos de producto, adquisicion, operaciones y cualquiera que necesite generar links de forma repetible a escala."],
        ["Por que esta pagina remarca los planes mensuales?", "Porque quien compra una API suele querer coste y cuota previsibles, no un uso ambiguo dificil de planificar."],
      ],
    },
    fr: {
      eyebrow: "API de raccourcisseur d'URL",
      title: "Utilisez une API de liens courts pour le produit, les campagnes et les taches automatisees.",
      description: "Generez des liens courts avec une seule requete, suivez l'usage mensuel et gardez des flux produit et marketing plus previsibles.",
      seoTitle: "API de raccourcisseur d'URL avec forfaits mensuels | ShortURL Wiki",
      seoDescription: "Integrez une API de liens courts pour le produit, les campagnes, les pages QR et les taches automatisees avec un modele mensuel plus previsible.",
      overviewTitle: "Ce qu'une equipe attend d'une API de raccourcisseur",
      overviewDescription: "L'intention de recherche autour d'une API est differente de celle d'un utilisateur ponctuel. L'equipe veut un usage previsible, des reponses propres et une integration simple a exploiter.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Generateurs de campagne, flux CMS et outils produit pour les campagnes",
        "Pipelines QR et tableaux de bord operationnels",
        "Notifications produit, parcours CRM et automatisation du support",
      ],
      faqs: [
        ["Qui cherche une API de short links plutot qu'un raccourcisseur classique ?", "Generalement les equipes produit, campagne, support et tous ceux qui doivent generer des liens de facon repetitive a grande echelle."],
        ["Pourquoi cette page insiste-t-elle sur les forfaits mensuels ?", "Parce que les acheteurs d'API veulent un cout et des quotas previsibles, pas un usage flou difficile a planifier."],
      ],
    },
    de: {
      eyebrow: "URL-Shortener-API",
      title: "Eine URL-Shortener-API fur Produktfunktionen, Kampagnen-Tools und Automatisierung.",
      description: "Erzeuge Kurzlinks per Anfrage, uberblicke die monatliche Nutzung und halte Produkt- und Kampagnenablaufe planbar.",
      seoTitle: "URL-Shortener-API mit Monatsplanen | ShortURL Wiki",
      seoDescription: "Integriere eine Kurzlink-API fur Produktfunktionen, Kampagnen, QR-Seiten und Automatisierung mit planbaren Monatskontingenten.",
      overviewTitle: "Was Teams von einer URL-Shortener-API erwarten",
      overviewDescription: "Die Suchintention rund um eine API unterscheidet sich von der eines einmaligen Nutzers. Teams wollen planbare Nutzung, saubere Antworten und eine leicht betreibbare Integration.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Kampagnen-Builder, CMS-Ablaufe und Produkt-Tools fur Kampagnen",
        "QR-Pipelines und operative Dashboards",
        "Produkt-Benachrichtigungen, CRM-Journeys und Support-Automatisierung",
      ],
      faqs: [
        ["Wer sucht eine URL-Shortener-API statt eines normalen Shorteners?", "Meist Produkt-, Kampagnen- und Support-Teams sowie alle, die wiederholbare Link-Erzeugung im grosseren Umfang brauchen."],
        ["Warum betont diese Seite monatliche Plane?", "Weil API-Kaufer planbare Kosten und Quoten wollen, nicht ein schwer kalkulierbares Nutzungsmodell."],
      ],
    },
    "pt-BR": {
      eyebrow: "API de encurtador de URL",
      title: "Use uma API de links curtos para produto, ferramentas de campanha e tarefas automatizadas.",
      description: "Gere links curtos com uma unica requisicao, acompanhe o uso mensal e mantenha rotinas de produto e marketing mais previsiveis.",
      seoTitle: "API de encurtador de URL com planos mensais | ShortURL Wiki",
      seoDescription: "Integre uma API de links curtos para produto, campanhas, paginas QR e tarefas automatizadas com um modelo mensal mais previsivel.",
      overviewTitle: "O que uma equipe espera de uma API de encurtador",
      overviewDescription: "A intencao de busca por API e diferente da de um usuario pontual. A equipe quer uso previsivel, respostas limpas e uma integracao facil de operar.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Construtores de campanha, fluxos de CMS e ferramentas de produto para campanhas",
        "Pipelines de QR e paineis de uso",
        "Notificacoes de produto, jornadas de CRM e automacao de suporte",
      ],
      faqs: [
        ["Quem procura uma API de short links em vez de um encurtador comum?", "Normalmente equipes de produto, campanha, suporte e qualquer pessoa que precise gerar links de forma repetivel em escala."],
        ["Por que esta pagina enfatiza planos mensais?", "Porque quem compra API costuma querer custo e quota previsiveis, nao um uso ambiguo dificil de planejar."],
      ],
    },
    hi: {
      eyebrow: "URL shortener API",
      title: "Product teams, campaign tools aur automation tasks ke liye URL shortener API use karein.",
      description: "Ek request me short links generate karein, monthly usage track karein, aur campaign ya product use ko predictable monthly plans ke saath stable rakhein.",
      seoTitle: "मासिक प्लान के साथ URL shortener API | ShortURL Wiki Hindi",
      seoDescription: "Product teams, campaign tools, QR pages aur automation tasks ke liye short-link API use karein, saath me predictable monthly plans.",
      overviewTitle: "Teams URL shortener API page se kya expect karti hain",
      overviewDescription: "API search intent normal shortener se alag hoti hai. Product, campaign aur support teams predictable usage, clean responses aur rollout ke liye easy path chahti hain.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Campaign builders, CMS setups aur product campaign tools",
        "QR pages aur reporting dashboards",
        "Product notifications, CRM journeys aur support automation",
      ],
      faqs: [
        ["URL shortener API kaun search karta hai, normal shortener ke bajay?", "Aam taur par product teams, campaign teams, support teams aur wo log jinko repeatable link generation scale par chahiye hota hai."],
        ["Is page par monthly plans par itna zor kyun hai?", "Kyuki API buyers ko predictable cost aur quota limits chahiye hote hain, vague pay-as-you-go usage nahi."],
      ],
    },
    id: {
      eyebrow: "API pemendek URL",
      title: "Gunakan API pemendek URL untuk produk, alat kampanye, dan tugas otomatis.",
      description: "Buat short link dengan satu request, cek penggunaan bulanan, dan jaga alur kampanye atau produk tetap stabil dengan paket bulanan.",
      seoTitle: "API pemendek URL dengan paket bulanan | ShortURL Wiki",
      seoDescription: "Gunakan API short link untuk alur produk, alat kampanye, halaman QR, dan tugas otomatis dengan paket bulanan yang terprediksi.",
      overviewTitle: "Apa yang biasanya dicari tim dari halaman API pemendek URL",
      overviewDescription: "Maksud pencarian untuk API berbeda dari pemendek URL biasa. Tim produk, kampanye, dan dukungan biasanya mencari penggunaan yang terprediksi, respons yang rapi, dan jalur rollout yang mudah.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Builder kampanye, alur CMS, dan alat produk untuk kampanye",
        "Pipeline pembuatan QR dan dashboard operasional",
        "Notifikasi produk, alur CRM, dan otomasi dukungan",
      ],
      faqs: [
        ["Siapa yang biasanya mencari API pemendek URL, bukan shortener biasa?", "Biasanya tim produk, tim kampanye, tim dukungan, dan siapa pun yang membutuhkan pembuatan link berulang dalam skala besar."],
        ["Mengapa halaman ini menekankan paket bulanan?", "Karena pembeli API biasanya ingin biaya dan batas kuota yang terprediksi, bukan model bayar sesuai pemakaian yang sulit diperkirakan."],
      ],
    },
  },
  "whatsapp-link-shortener": {
    en: {
      eyebrow: "WhatsApp link shortener",
      title: "Create cleaner WhatsApp links for sharing, support flows, and campaign entry points.",
      description: "Use shorter WhatsApp links in bios, ads, QR codes, and sales or support journeys where long URLs look messy.",
      seoTitle: "WhatsApp Link Shortener for Sharing and Campaigns | ShortURL Wiki",
      seoDescription: "Shorten WhatsApp links for bios, ads, QR codes, support flows, and campaign entry points with cleaner sharing URLs.",
      overviewTitle: "Why people search for a WhatsApp link shortener",
      overviewDescription: "Most WhatsApp short-link searches come from real distribution needs: bio links, ad entry points, QR materials, support entry, and sales conversations.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Instagram and TikTok bios that need a cleaner WhatsApp contact entry",
        "Ad campaigns and QR codes that lead into a support or sales conversation",
        "Packaging, cards, and event material that direct users into messaging",
      ],
      faqs: [
        ["Why shorten a WhatsApp link if the destination is already simple?", "Because the visible URL still matters in bios, ads, and printed material, where cleaner links improve presentation and trust."],
        ["Who typically needs this page?", "Businesses, creators, support teams, sales teams, and anyone using WhatsApp as an entry point."],
      ],
    },
    "zh-CN": {
      eyebrow: "WhatsApp 短链",
      title: "为 WhatsApp 分享、客服入口和投放链路生成更整洁的短链。",
      description: "适合放在简介页、广告入口、二维码和销售/客服流程里，避免原始链接过长影响点击。",
      seoTitle: "WhatsApp 短链生成器 | ShortURL Wiki",
      seoDescription: "把 WhatsApp 链接缩短成更适合简介页、广告、二维码和客服入口使用的干净短链。",
      overviewTitle: "用户搜索 WhatsApp 短链，本质上是在找更顺手的入口",
      overviewDescription: "WhatsApp 原始链接常常太长，不适合放在简介页、广告、二维码和客服入口里，所以短链页面承接的是很明确的分发需求。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "Instagram、TikTok 等简介页里的 WhatsApp 联系入口",
        "广告投放、二维码导流和活动物料中的客服或咨询入口",
        "产品包装、售后卡片、门店海报和线下传播中的消息入口",
      ],
      faqs: [
        ["为什么 WhatsApp 链接也要做短链？", "因为展示出来的链接形态会直接影响点击感受，尤其在公开渠道里，短链更干净也更可信。"],
        ["哪些团队最常用这种页面？", "商家、内容创作者、客服团队、销售团队，以及用 WhatsApp 做联系入口的运营团队。"],
      ],
    },
    ko: {
      eyebrow: "WhatsApp 링크 단축",
      title: "공유, 지원 흐름, 캠페인 진입용으로 더 깔끔한 WhatsApp 링크.",
      description: "바이오, 광고, QR 코드, 영업 또는 고객지원 흐름에서 긴 WhatsApp 링크를 더 짧고 정돈되게 보여 줄 수 있습니다.",
      seoTitle: "공유와 캠페인용 WhatsApp 링크 단축 | ShortURL Wiki",
      seoDescription: "바이오, 광고, QR 코드, 지원 흐름에 맞게 WhatsApp 링크를 더 짧고 깔끔하게 정리하세요.",
      overviewTitle: "사람들이 WhatsApp 링크 단축 페이지를 찾는 이유",
      overviewDescription: "WhatsApp 단축 링크 검색은 대부분 실제 배포 장면에서 나옵니다. 바이오 링크, 광고 진입, QR 안내물, 지원 연결, 영업 대화가 대표적입니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "더 깔끔한 WhatsApp 연락 진입이 필요한 Instagram, TikTok 바이오",
        "지원 또는 영업 대화로 연결되는 광고 캠페인과 QR 코드",
        "메시지로 유도하는 패키지, 카드, 행사 안내물",
      ],
      faqs: [
        ["도착지가 단순한데도 WhatsApp 링크를 줄여야 하나요?", "네. 바이오, 광고, 인쇄물에서는 보이는 링크 자체가 중요해서 더 깔끔한 표현이 신뢰와 클릭에 영향을 줍니다."],
        ["보통 누가 이런 페이지를 쓰나요?", "비즈니스, 크리에이터, 지원 팀, 영업 팀, 그리고 WhatsApp을 진입 채널로 쓰는 운영 담당자가 주로 사용합니다."],
      ],
    },
    es: {
      eyebrow: "Acortador de link de WhatsApp",
      title: "Crea links de WhatsApp mas limpios para compartir, soporte y entradas de campana.",
      description: "Usa links de WhatsApp mas cortos en bios, anuncios, QR y flujos de ventas o soporte donde una URL larga se ve desordenada.",
      seoTitle: "Acortador de link de WhatsApp para campanas y soporte | ShortURL Wiki",
      seoDescription: "Acorta links de WhatsApp para bios, anuncios, QR, soporte y entradas de campana con una presentacion mas limpia.",
      overviewTitle: "Por que la gente busca un acortador de links de WhatsApp",
      overviewDescription: "La mayoria de las busquedas de links cortos para WhatsApp vienen de necesidades reales de distribucion: bios, anuncios, materiales QR, paso a soporte y conversaciones de ventas.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Bios de Instagram y TikTok que necesitan un acceso mas limpio a WhatsApp",
        "Campanas de anuncios y QR que llevan a una conversacion de soporte o ventas",
        "Packaging, tarjetas y material de evento que dirige a mensajes",
      ],
      faqs: [
        ["Por que acortar un link de WhatsApp si el destino ya es simple?", "Porque la URL visible sigue importando en bios, anuncios y material impreso, donde un link mas limpio mejora la presentacion y la confianza."],
        ["Quien suele necesitar esta pagina?", "Negocios, creadores, equipos de soporte, equipos de ventas y cualquier operador que use WhatsApp como punto de entrada."],
      ],
    },
    ja: {
      eyebrow: "WhatsApp短縮リンク",
      title: "共有、サポート導線、広告流入向けにWhatsAppリンクを短縮。",
      description: "プロフィール、広告、QRコード、営業・サポート導線で長いWhatsAppリンクを見やすく整理できます。",
      seoTitle: "WhatsApp短縮リンク作成 | ShortURL Wiki",
      seoDescription: "プロフィール、広告、QRコード、サポート導線向けにWhatsAppリンクを短縮できます。",
      overviewTitle: "WhatsApp短縮リンクが探される理由",
      overviewDescription: "WhatsApp向け短縮リンクの検索は、実際の配布ニーズから生まれます。プロフィール導線、広告流入、QR配布、サポート誘導、営業会話が代表例です。",
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "InstagramやTikTokのプロフィールに置くWhatsApp連絡導線",
        "広告やQRコードからサポートや営業会話へつなぐ導線",
        "パッケージ、カード、イベント配布物からメッセージへ誘導する導線",
      ],
      faqs: [
        ["遷移先が単純でもWhatsAppリンクを短くする意味はありますか？", "あります。プロフィール、広告、印刷物では見えるURL自体が重要で、より整ったリンクの方が信頼感と見た目を高めます。"],
        ["このページはどんな人がよく使いますか？", "事業者、クリエイター、サポートチーム、営業チーム、そしてWhatsAppを入口に使う運用担当者です。"],
      ],
    },
    fr: {
      eyebrow: "Raccourcisseur de lien WhatsApp",
      title: "Creez des liens WhatsApp plus propres pour le partage, le support et les entrees de campagne.",
      description: "Utilisez des liens WhatsApp plus courts dans les bios, publicites, QR codes et parcours de vente ou support ou une URL longue parait desordonnee.",
      seoTitle: "Raccourcisseur de lien WhatsApp pour campagnes et support | ShortURL Wiki",
      seoDescription: "Raccourcissez vos liens WhatsApp pour les bios, publicites, QR codes, flux support et entrees de campagne avec une presentation plus propre.",
      overviewTitle: "Pourquoi les utilisateurs cherchent un raccourcisseur de lien WhatsApp",
      overviewDescription: "La plupart des recherches autour des liens WhatsApp courts viennent de besoins de diffusion tres concrets: bios, publicites, supports QR, acces au support et conversations commerciales.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Bios Instagram et TikTok qui ont besoin d'une entree WhatsApp plus propre",
        "Campagnes publicitaires et QR codes qui ouvrent une conversation support ou vente",
        "Packaging, cartes et supports evenementiels qui dirigent vers la messagerie",
      ],
      faqs: [
        ["Pourquoi raccourcir un lien WhatsApp si la destination est deja simple ?", "Parce que l'URL visible compte toujours dans les bios, publicites et supports imprimes, ou un lien plus propre ameliore la presentation et la confiance."],
        ["Qui a generalement besoin de cette page ?", "Les entreprises, createurs, equipes support, equipes commerciales et toute personne qui utilise WhatsApp comme point d'entree."],
      ],
    },
    de: {
      eyebrow: "WhatsApp-Link-Kurzlink",
      title: "Sauberere WhatsApp-Links fur Teilen, Support und Kampagnen-Einstiege.",
      description: "Nutze kurzere WhatsApp-Links in Bios, Anzeigen, QR-Codes sowie Support- oder Sales-Ablaufen, wenn lange URLs unruhig wirken.",
      seoTitle: "WhatsApp-Link-Kurzlink fur Kampagnen und Support | ShortURL Wiki",
      seoDescription: "Kurze WhatsApp-Links fur Bios, Anzeigen, QR-Codes, Support-Ablaufe und Kampagnen-Einstiege mit saubererer Darstellung.",
      overviewTitle: "Warum Menschen nach einem WhatsApp-Link-Kurzlink suchen",
      overviewDescription: "Die meisten Suchanfragen nach WhatsApp-Kurzlinks kommen aus echten Verteilungsaufgaben: Bios, Anzeigen, QR-Materialien, Support-Ubergaben und Sales-Gesprachen.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Instagram- und TikTok-Bios mit saubererem WhatsApp-Kontakteinstieg",
        "Anzeigenkampagnen und QR-Codes, die in Support- oder Verkaufsgesprachen landen",
        "Verpackungen, Karten und Eventmaterial mit Einstieg in Messaging",
      ],
      faqs: [
        ["Warum einen WhatsApp-Link kurzen, wenn das Ziel schon klar ist?", "Weil die sichtbare URL in Bios, Anzeigen und Druckmaterial trotzdem wichtig bleibt und eine saubere Darstellung Vertrauen schafft."],
        ["Wer braucht so eine Seite typischerweise?", "Unternehmen, Creator, Support-Teams, Vertriebs-Teams und alle, die WhatsApp als Kontakt-Einstieg nutzen."],
      ],
    },
    "pt-BR": {
      eyebrow: "Encurtador de link do WhatsApp",
      title: "Crie links do WhatsApp mais limpos para compartilhamento, suporte e entradas de campanha.",
      description: "Use links do WhatsApp mais curtos em bios, anuncios, QR codes e fluxos de vendas ou suporte onde uma URL longa parece confusa.",
      seoTitle: "Encurtador de link do WhatsApp para campanhas e suporte | ShortURL Wiki",
      seoDescription: "Encurte links do WhatsApp para bios, anuncios, QR codes, fluxos de suporte e entradas de campanha com apresentacao mais limpa.",
      overviewTitle: "Por que as pessoas procuram um encurtador de link do WhatsApp",
      overviewDescription: "A maior parte das buscas por links curtos de WhatsApp vem de necessidades reais de distribuicao: bios, anuncios, materiais com QR, acesso ao suporte e conversas de vendas.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Bios de Instagram e TikTok que precisam de uma entrada mais limpa para o WhatsApp",
        "Campanhas de anuncios e QR codes que levam a uma conversa de suporte ou vendas",
        "Embalagens, cartoes e materiais de evento que direcionam para mensagens",
      ],
      faqs: [
        ["Por que encurtar um link do WhatsApp se o destino ja e simples?", "Porque a URL visivel continua importando em bios, anuncios e materiais impressos, onde um link mais limpo melhora a apresentacao e a confianca."],
        ["Quem costuma precisar desta pagina?", "Empresas, criadores, times de suporte, times comerciais e qualquer operador que use o WhatsApp como ponto de entrada."],
      ],
    },
    hi: {
      eyebrow: "WhatsApp link shortener",
      title: "Sharing, support flows aur campaign entry points ke liye cleaner WhatsApp links banayein.",
      description: "WhatsApp links ko bios, ads, QR codes aur sales ya support journeys me use karne ke liye chhota aur zyada clean banayein.",
      seoTitle: "WhatsApp sharing और campaigns के लिए link shortener | ShortURL Wiki",
      seoDescription: "WhatsApp links ko bios, ads, QR codes, support flows aur campaign entry points ke liye short aur clean banayein.",
      overviewTitle: "लोग WhatsApp link shortener क्यों खोजते हैं",
      overviewDescription: "Zyadatar WhatsApp short-link searches real distribution needs se aati hain: bio links, ad entry points, QR materials, support entry aur sales conversations.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Instagram aur TikTok bios jahan clean WhatsApp contact entry chahiye hoti hai",
        "Ad campaigns aur QR handoff jo support ya sales conversation me le jate hain",
        "Packaging, visiting cards aur event material jo messaging entry point dete hain",
      ],
      faqs: [
        ["Jab WhatsApp destination simple hai to short karne ki zarurat kyun hai?", "Kyuki bios, ads aur print material me visible URL bhi matter karta hai. Cleaner link presentation aur trust dono improve karti hai."],
        ["Yeh page aam taur par kaun use karta hai?", "Businesses, creators, support teams, sales teams aur koi bhi team jo WhatsApp ko entry point ki tarah use karti hai."],
      ],
    },
    id: {
      eyebrow: "Pemendek link WhatsApp",
      title: "Buat link WhatsApp yang lebih rapi untuk dibagikan, dipakai di alur support, dan masuk ke campaign.",
      description: "Pendekkan link WhatsApp untuk bio, iklan, QR code, serta alur penjualan atau dukungan agar tampil lebih bersih.",
      seoTitle: "Pemendek link WhatsApp untuk kampanye dan distribusi | ShortURL Wiki",
      seoDescription: "Pendekkan link WhatsApp untuk bio, iklan, QR code, alur dukungan, dan distribusi kampanye dengan URL yang lebih rapi.",
      overviewTitle: "Mengapa orang mencari pemendek link WhatsApp",
      overviewDescription: "Sebagian besar pencarian short link WhatsApp datang dari kebutuhan distribusi nyata: link bio, pintu masuk iklan, materi QR, akses ke dukungan, dan percakapan penjualan.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Bio Instagram dan TikTok yang butuh pintu masuk kontak WhatsApp yang lebih rapi",
        "Kampanye iklan dan QR code yang mengarahkan pengguna ke percakapan dukungan atau sales",
        "Kemasan, kartu nama, dan materi acara yang mengarah ke pesan WhatsApp",
      ],
      faqs: [
        ["Mengapa link WhatsApp perlu dipendekkan jika tujuannya sudah jelas?", "Karena bentuk URL yang tampil tetap penting di bio, iklan, dan materi cetak. Link yang lebih rapi terlihat lebih meyakinkan."],
        ["Siapa yang paling sering membutuhkan halaman seperti ini?", "Bisnis, kreator, tim support, tim sales, dan siapa pun yang memakai WhatsApp sebagai pintu masuk komunikasi."],
      ],
    },
  },
  "link-analytics": {
    en: {
      eyebrow: "Link analytics",
      title: "Track link usage with a simpler monthly quota model.",
      description: "Review how many links your team creates through the API and keep campaign or product usage inside a predictable monthly plan.",
      seoTitle: "Short Link Analytics and Usage Tracking | ShortURL Wiki",
      seoDescription: "Track link usage through a cleaner monthly plan model for campaigns, teams, and product use.",
      overviewTitle: "What teams usually want from short-link analytics pages",
      overviewDescription: "Search intent around link analytics is often usage-focused. Teams want a simple way to understand how much short-link usage is happening inside a monthly model.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Monthly API usage checks for campaign and support teams",
        "Capacity planning before campaigns, launches, and partner pushes",
        "Internal reporting around short-link generation volume",
      ],
      faqs: [
        ["Is this analytics page focused on clicks or on usage?", "This page is mainly positioned around usage visibility and monthly planning, which is often what API buyers care about first."],
        ["Who benefits from a simpler analytics model?", "Teams that need clearer usage visibility without the weight of a full analytics stack."],
      ],
    },
    "zh-CN": {
      eyebrow: "链接统计",
      title: "用更简单的按月额度方式查看短链使用情况。",
      description: "适合团队按月管理 API 使用量，观察活动链路、产品功能和产品工具里的短链消耗。",
      seoTitle: "短链接统计与用量管理 | ShortURL Wiki",
      seoDescription: "通过按月额度查看短链 API 使用量，适合活动投放、产品功能和团队工具管理。",
      overviewTitle: "短链统计页更像一个运营管理页，而不只是数据页",
      overviewDescription: "很多人搜索链接统计，并不是想要复杂归因，而是想知道自己生成了多少短链、还剩多少额度、团队是否需要升级。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "增长和运营团队做月度 API 用量复盘",
        "活动、发布、合作推广前做短链容量预估",
        "内部汇报里查看短链生成量和套餐匹配情况",
      ],
      faqs: [
        ["这里的统计更偏点击数据还是用量数据？", "当前页面定位更偏向用量可见性和月度管理，这通常是 API 使用方最先关心的问题。"],
        ["什么样的团队更适合这种轻量统计方式？", "不想接入复杂分析平台，但需要明确看到短链消耗和套餐状态的团队都会受益。"],
      ],
    },
    ko: {
      eyebrow: "링크 분석",
      title: "더 단순한 월간 한도 방식으로 단축 링크 사용량을 확인.",
      description: "팀이 API로 얼마나 많은 링크를 만들고 있는지 보고 캠페인이나 제품 사용량을 예측 가능한 월간 플랜 안에서 관리할 수 있습니다.",
      seoTitle: "단축 링크 분석과 사용량 추적 | ShortURL Wiki",
      seoDescription: "캠페인, 팀 운영, 내부 제품 흐름을 위해 단축 링크 사용량을 더 간단한 월간 모델로 추적하세요.",
      overviewTitle: "팀이 링크 분석 페이지에서 주로 원하는 것",
      overviewDescription: "링크 분석 검색 의도는 보통 운영 관점입니다. 팀은 월간 모델 안에서 단축 링크 사용량이 얼마나 되는지 단순하게 파악하길 원합니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "성장팀과 운영팀의 월간 API 사용량 점검",
        "캠페인, 런칭, 파트너 배포 전 용량 계획",
        "단축 링크 생성량에 대한 내부 보고",
      ],
      faqs: [
        ["이 분석 페이지는 클릭보다 사용량 중심인가요?", "네. 현재는 월간 계획과 사용량 가시성에 더 초점을 두고 있으며, 이는 API 도입 팀이 먼저 보는 정보입니다."],
        ["누가 이런 단순한 분석 모델의 도움을 가장 많이 받나요?", "무거운 분석 도구 없이도 운영 현황과 플랜 상태를 명확하게 보고 싶은 팀입니다."],
      ],
    },
    es: {
      eyebrow: "Analitica de links",
      title: "Sigue el uso de enlaces cortos con un modelo mensual mas simple.",
      description: "Revisa cuantos links crea tu equipo mediante la API y mantien el uso de campanas o producto dentro de un plan mensual mas predecible.",
      seoTitle: "Analitica de enlaces cortos y seguimiento de uso | ShortURL Wiki",
      seoDescription: "Controla el uso de enlaces cortos con un modelo mensual mas claro para campanas, equipos y uso de producto.",
      overviewTitle: "Lo que suele querer un equipo de una pagina de analitica de links",
      overviewDescription: "La intencion de busqueda alrededor de analitica de links suele ser operativa. Los equipos quieren una forma simple de entender cuanto uso de enlaces cortos ocurre dentro de un modelo mensual.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Revisiones mensuales de uso API para adquisicion y operaciones",
        "Planificacion de capacidad antes de campanas, lanzamientos y empujes con partners",
        "Reporting de equipo sobre volumen de enlaces cortos generados",
      ],
      faqs: [
        ["Esta pagina se centra en clics o en uso?", "Principalmente en visibilidad de uso y planificacion mensual, que suele ser lo primero que mira quien compra una API."],
        ["Quien se beneficia mas de un modelo de analitica simple?", "Equipos que necesitan claridad operativa sin cargar con una plataforma completa de analytics."],
      ],
    },
    ja: {
      eyebrow: "リンク分析",
      title: "月額プラン前提で短縮リンク利用量を把握。",
      description: "チームのAPI利用量を確認し、施策やプロダクト運用での短縮リンク消費を見通しやすくします。",
      seoTitle: "短縮リンク分析と利用量確認 | ShortURL Wiki",
      seoDescription: "月額プランベースで短縮リンクAPIの利用量を把握しやすくします。",
      overviewTitle: "短縮リンク分析ページでチームが知りたいこと",
      overviewDescription: "リンク分析を探す意図は多くの場合オペレーション寄りです。チームは月額モデルの中でどれだけ短縮リンクを使っているかをシンプルに把握したいと考えています。",
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "集客チームや運用チームによる月次API利用量の確認",
        "キャンペーン、ローンチ、提携配布前の容量計画",
        "短縮リンク生成量に関する内部レポート",
      ],
      faqs: [
        ["この分析ページはクリックより利用量を見るためのものですか？", "はい。現状は利用量の可視化と月次計画を重視しており、API導入チームが最初に気にするポイントに寄せています。"],
        ["こうした軽量な分析モデルはどんなチームに向いていますか？", "重い分析基盤を持たずに、運用状況やプラン残量を明確に見たいチームです。"],
      ],
    },
    fr: {
      eyebrow: "Analytique des liens",
      title: "Suivez l'usage des liens courts avec un modele mensuel plus simple.",
      description: "Consultez combien de liens votre equipe cree via l'API et gardez les usages campagne ou produit dans un forfait mensuel plus previsible.",
      seoTitle: "Analytique des liens courts et suivi d'usage | ShortURL Wiki",
      seoDescription: "Suivez l'usage des liens courts avec un modele mensuel plus clair pour les campagnes, les equipes et les usages produit.",
      overviewTitle: "Ce qu'une equipe attend souvent d'une page d'analytique des liens",
      overviewDescription: "L'intention de recherche autour de l'analytique de liens porte souvent sur l'usage. Les equipes veulent une facon simple de comprendre l'usage des liens courts dans un cadre mensuel.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Revues mensuelles d'usage API pour les equipes campagne et support",
        "Planification de capacite avant campagnes, lancements et distributions partenaires",
        "Reporting d'equipe sur le volume de liens courts generes",
      ],
      faqs: [
        ["Cette page d'analytique porte-t-elle sur les clics ou sur l'usage ?", "Elle est surtout positionnee sur la visibilite d'usage et la planification mensuelle, ce qui interesse souvent d'abord les acheteurs d'API."],
        ["Qui profite le plus d'un modele d'analytique simplifie ?", "Les equipes qui ont besoin d'une meilleure visibilite d'usage sans supporter tout le poids d'une stack analytics complete."],
      ],
    },
    de: {
      eyebrow: "Link-Analytics",
      title: "Kurzlink-Nutzung mit einem einfacheren Monatsmodell verfolgen.",
      description: "Sieh dir an, wie viele Links dein Team uber die API erstellt, und halte Kampagnen- oder Produktnutzung in einem planbaren Monatskontingent.",
      seoTitle: "Kurzlink-Analytics und Nutzungsverfolgung | ShortURL Wiki",
      seoDescription: "Verfolge Kurzlink-Nutzung mit einem klareren Monatsmodell fur Kampagnen, Teams und Produktnutzung.",
      overviewTitle: "Was Teams auf einer Link-Analytics-Seite meist wissen wollen",
      overviewDescription: "Die Suchintention rund um Link-Analytics ist oft operativ. Teams wollen einfach verstehen, wie viel Kurzlink-Nutzung in einem Monatsmodell stattfindet.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Monatliche API-Nutzungschecks fur Kampagnen- und Support-Teams",
        "Kapazitatsplanung vor Kampagnen, Launches und Partner-Pushes",
        "Internes Reporting zum Volumen erzeugter Kurzlinks",
      ],
      faqs: [
        ["Geht es auf dieser Analytics-Seite eher um Klicks oder um Nutzung?", "Der Fokus liegt vor allem auf Nutzungssicht und Monatsplanung, weil genau das API-Kaufer meist zuerst verstehen wollen."],
        ["Wer profitiert am meisten von einem einfacheren Analytics-Modell?", "Teams, die operative Klarheit brauchen, ohne einen kompletten Analytics-Stack mitzutragen."],
      ],
    },
    "pt-BR": {
      eyebrow: "Analitica de links",
      title: "Acompanhe o uso de links curtos com um modelo mensal mais simples.",
      description: "Veja quantos links sua equipe cria via API e mantenha o uso de campanhas ou produto dentro de um plano mensal mais previsivel.",
      seoTitle: "Analitica de links curtos e acompanhamento de uso | ShortURL Wiki",
      seoDescription: "Acompanhe o uso de links curtos com um modelo mensal mais claro para campanhas, equipes e uso de produto.",
      overviewTitle: "O que uma equipe costuma querer de uma pagina de analitica de links",
      overviewDescription: "A intencao de busca em torno de analitica de links costuma ser focada em uso. As equipes querem uma forma simples de entender quanto uso de links curtos acontece dentro de um modelo mensal.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Revisoes mensais de uso de API para times de campanha e suporte",
        "Planejamento de capacidade antes de campanhas, lancamentos e distribuicao com parceiros",
        "Relatorios de equipe sobre volume de links curtos gerados",
      ],
      faqs: [
        ["Esta pagina de analitica e focada em cliques ou em uso?", "Ela esta principalmente posicionada em visibilidade de uso e planejamento mensal, que costuma ser o primeiro ponto observado por quem compra API."],
        ["Quem mais se beneficia de um modelo de analitica mais simples?", "Equipes que precisam de visibilidade clara de uso sem carregar uma stack completa de analytics."],
      ],
    },
    hi: {
      eyebrow: "Link analytics",
      title: "Short-link usage ko simple monthly model ke saath track karein.",
      description: "Dekhiye aapki team API ke through kitne short links banati hai aur campaign ya product usage ko predictable monthly plan ke andar rakhiye.",
      seoTitle: "Short link analytics और usage tracking | ShortURL Wiki Hindi",
      seoDescription: "Campaigns, teams aur product use ke liye short-link usage ko simple monthly plan model me track karein.",
      overviewTitle: "Teams short-link analytics page se kya dekhna chahti hain",
      overviewDescription: "Link analytics ke around search intent aksar usage-focused hota hai. Teams ek seedha tareeka chahti hain samajhne ke liye ki monthly model ke andar short-link usage kitna ho raha hai.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Campaign aur support teams ke liye monthly API usage checks",
        "Campaigns, launches aur partner pushes se pehle capacity planning",
        "Internal reporting ke liye short-link generation volume ko dekhna",
      ],
      faqs: [
        ["Yeh analytics page clicks par focused hai ya usage par?", "Yeh page mainly usage visibility aur monthly planning ke around positioned hai, jo API buyers aksar sabse pehle dekhna chahte hain."],
        ["Simpler analytics model se kin teams ko fayda hota hai?", "Un teams ko jo full analytics stack ke bina clear usage visibility chahti hain."],
      ],
    },
    id: {
      eyebrow: "Analitik link",
      title: "Lacak penggunaan short link dengan model kuota bulanan yang lebih sederhana.",
      description: "Lihat berapa banyak short link yang dibuat tim Anda lewat API dan jaga penggunaan kampanye atau produk tetap dalam paket bulanan yang terprediksi.",
      seoTitle: "Analitik short link dan pelacakan penggunaan | ShortURL Wiki",
      seoDescription: "Lacak penggunaan short link dengan model paket bulanan yang lebih rapi untuk kampanye, tim, dan penggunaan produk.",
      overviewTitle: "Apa yang biasanya dicari tim dari halaman analitik short link",
      overviewDescription: "Maksud pencarian untuk analitik link biasanya bersifat operasional. Tim ingin cara yang sederhana untuk memahami seberapa besar penggunaan short link di dalam model bulanan.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Pengecekan penggunaan API bulanan untuk tim kampanye dan dukungan",
        "Perencanaan kapasitas sebelum campaign, peluncuran, dan distribusi partner",
        "Pelaporan tim tentang volume pembuatan short link",
      ],
      faqs: [
        ["Apakah halaman analitik ini fokus pada klik atau penggunaan?", "Halaman ini terutama diposisikan untuk visibilitas penggunaan dan perencanaan bulanan, karena itu yang biasanya paling dibutuhkan pembeli API."],
        ["Siapa yang paling terbantu dengan model analitik yang lebih sederhana?", "Tim yang membutuhkan kejelasan operasional tanpa harus memakai stack analitik yang berat."],
      ],
    },
  },
  "bio-link-shortener": {
    en: {
      eyebrow: "Bio link shortener",
      title: "Create cleaner bio links for Instagram, TikTok, and creator profile pages.",
      description: "Shorten links used in bios, creator profiles, and personal pages so they look cleaner and are easier to trust across social platforms.",
      seoTitle: "Bio Link Shortener for Instagram and TikTok | ShortURL Wiki",
      seoDescription: "Shorten bio links for Instagram, TikTok, creator profiles, and social profile pages with cleaner URLs that fit public-facing distribution.",
      overviewTitle: "Why bio links need cleaner short URLs",
      overviewDescription: "Bio links sit in public-facing profile areas where a messy long URL hurts presentation and trust. A short link keeps the profile cleaner and easier to scan.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Instagram and TikTok profile links",
        "Creator link-in-bio pages and personal profile pages",
        "Public profile links shared in social posts and media kits",
      ],
      faqs: [
        ["Why shorten bio links?", "Because profile links are highly visible and need to look clean, memorable, and trustworthy."],
        ["Who typically uses this page?", "Creators, brands, and social teams that manage public-facing profile links."],
      ],
    },
    "zh-CN": {
      eyebrow: "简介页短链",
      title: "给 Instagram、TikTok 和创作者简介页准备的干净短链。",
      description: "适合简介页、个人主页、创作者页面和社媒资料页，让公开展示出来的链接更短、更整洁、更容易点击。",
      seoTitle: "简介页短链，适合 Instagram 与 TikTok | ShortURL Wiki",
      seoDescription: "把简介页和创作者资料页里的链接缩短成更适合社媒公开展示的干净短链。",
      overviewTitle: "为什么简介页链接更适合做短链",
      overviewDescription: "简介页和资料页属于公开展示区域，链接的观感会直接影响点击意愿。短链能让页面看起来更整洁、更专业。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "Instagram、TikTok 等资料页入口",
        "创作者个人主页和 link in bio 页面",
        "公开资料包、社媒名片和个人页面",
      ],
      faqs: [
        ["为什么简介页链接要做短链？", "因为它长期公开展示，链接越干净，用户越容易理解和点击。"],
        ["谁最常用这类页面？", "创作者、品牌、社媒运营和需要维护公开资料页入口的团队。"],
      ],
    },
    ja: {
      eyebrow: "bioリンク短縮",
      title: "Instagram、TikTok、クリエイタープロフィール向けの見やすいbioリンク。",
      description: "プロフィール欄、クリエイターページ、個人ページで見せるURLを短く整え、公開面での見た目と安心感を高められます。",
      seoTitle: "Instagram・TikTok向けbioリンク短縮 | ShortURL Wiki",
      seoDescription: "Instagram、TikTok、クリエイタープロフィール向けのbioリンクを短く整理し、公開プロフィールに合う見やすいURLにできます。",
      overviewTitle: "プロフィールリンクに短縮URLが向いている理由",
      overviewDescription: "プロフィール欄は公開表示されるため、長いURLは見た目と信頼感の両方を下げます。短縮リンクならページ全体をすっきり見せられます。",
      scenariosTitle: "よくある使い方",
      scenarios: [
        "InstagramやTikTokのプロフィールリンク",
        "クリエイターのlink in bioページや個人プロフィールページ",
        "SNS投稿やメディアキットで共有する公開プロフィールリンク",
      ],
      faqs: [
        ["なぜbioリンクを短くするのですか？", "プロフィールリンクは人目に触れやすく、見た目が整っていて覚えやすく、信頼しやすいことが重要だからです。"],
        ["このページは主に誰が使いますか？", "クリエイター、ブランド、SNS運用チーム、公開プロフィールリンクを管理する担当者です。"],
      ],
    },
    ko: {
      eyebrow: "바이오 링크 단축",
      title: "Instagram, TikTok, 크리에이터 프로필에 어울리는 더 깔끔한 바이오 링크.",
      description: "바이오, 크리에이터 프로필, 개인 페이지에 노출되는 링크를 더 짧고 보기 좋게 정리해 공개 채널에서 신뢰감을 높입니다.",
      seoTitle: "Instagram과 TikTok용 바이오 링크 단축 | ShortURL Wiki",
      seoDescription: "Instagram, TikTok, 크리에이터 프로필용 바이오 링크를 더 짧고 깔끔하게 정리하세요.",
      overviewTitle: "바이오 링크에 더 깔끔한 짧은 URL이 필요한 이유",
      overviewDescription: "바이오 링크는 공개 프로필 영역에 노출되기 때문에 길고 복잡한 URL은 인상과 신뢰를 함께 떨어뜨립니다. 짧은 링크가 프로필을 더 정돈되게 보이게 합니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "Instagram, TikTok 프로필 링크",
        "크리에이터 link-in-bio 페이지와 개인 프로필 페이지",
        "소셜 게시물과 미디어 키트에서 공유되는 공개 프로필 링크",
      ],
      faqs: [
        ["바이오 링크는 왜 짧게 만들어야 하나요?", "프로필 링크는 노출이 많기 때문에 깔끔하고 기억하기 쉬우며 신뢰감 있게 보여야 합니다."],
        ["보통 누가 이런 페이지를 쓰나요?", "크리에이터, 브랜드, 소셜 팀, 공개 프로필 링크를 관리하는 운영 담당자가 많이 사용합니다."],
      ],
    },
    es: {
      eyebrow: "Acortador de link bio",
      title: "Crea links bio mas limpios para Instagram, TikTok y perfiles de creadores.",
      description: "Acorta los links que muestras en bios, perfiles y paginas personales para que se vean mas ordenados y generen mas confianza en redes.",
      seoTitle: "Acortador de link bio para Instagram y TikTok | ShortURL Wiki",
      seoDescription: "Acorta links bio para Instagram, TikTok y perfiles de creadores con URLs mas limpias para espacios publicos.",
      overviewTitle: "Por que los links bio necesitan URLs cortas mas limpias",
      overviewDescription: "Los links bio viven en perfiles publicos, donde una URL larga y desordenada afecta la presentacion y la confianza. Un link corto mantiene el perfil mas limpio.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Links de perfil en Instagram y TikTok",
        "Paginas link-in-bio de creadores y perfiles personales",
        "Links de perfil publico compartidos en posts sociales y media kits",
      ],
      faqs: [
        ["Por que conviene acortar los links bio?", "Porque son enlaces muy visibles y necesitan verse limpios, memorables y confiables."],
        ["Quien suele usar este tipo de pagina?", "Creadores, marcas, equipos sociales y operadores que gestionan links de perfil publicos."],
      ],
    },
    fr: {
      eyebrow: "Raccourcisseur de lien bio",
      title: "Creez des liens bio plus propres pour Instagram, TikTok et les profils de createurs.",
      description: "Raccourcissez les liens affiches dans les bios, profils createurs et pages personnelles pour un rendu plus net et plus rassurant.",
      seoTitle: "Raccourcisseur de lien bio pour Instagram et TikTok | ShortURL Wiki",
      seoDescription: "Raccourcissez vos liens bio Instagram, TikTok et profils createurs avec des URLs plus propres pour les espaces publics.",
      overviewTitle: "Pourquoi les liens bio ont besoin d'URLs courtes plus propres",
      overviewDescription: "Les liens bio apparaissent dans des profils publics ou une URL longue et brouillonne nuit a la presentation et a la confiance. Un lien court rend le profil plus net.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Liens de profil Instagram et TikTok",
        "Pages link-in-bio de createurs et profils personnels",
        "Liens de profil public partages dans les posts sociaux et media kits",
      ],
      faqs: [
        ["Pourquoi raccourcir un lien bio ?", "Parce qu'un lien de profil est tres visible et doit rester propre, memorisable et rassurant."],
        ["Qui utilise generalement cette page ?", "Les createurs, les marques, les equipes social media et les personnes qui gerent des liens de profil publics."],
      ],
    },
    de: {
      eyebrow: "Bio-Link-Kurzlink",
      title: "Erstelle sauberere Bio-Links fur Instagram, TikTok und Creator-Profile.",
      description: "Kurzere Links fur Bios, Creator-Profile und personliche Seiten sehen offentlich sauberer aus und wirken vertrauenswurdiger.",
      seoTitle: "Bio-Link-Kurzlink fur Instagram und TikTok | ShortURL Wiki",
      seoDescription: "Kurze Bio-Links fur Instagram, TikTok und Creator-Profile mit saubereren URLs fur offentliche Profile.",
      overviewTitle: "Warum Bio-Links sauberere Kurz-URLs brauchen",
      overviewDescription: "Bio-Links stehen in offentlichen Profilbereichen. Lange und unruhige URLs schwachen dort sowohl die Wirkung als auch das Vertrauen. Ein Kurzlink halt das Profil sauberer.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Instagram- und TikTok-Profillinks",
        "Creator-Link-in-Bio-Seiten und personliche Profilseiten",
        "Offentliche Profillinks in Social Posts und Media Kits",
      ],
      faqs: [
        ["Warum sollte man Bio-Links kurzen?", "Weil Profil-Links sehr sichtbar sind und sauber, einpragsam und vertrauenswurdig wirken sollten."],
        ["Wer nutzt solche Seiten typischerweise?", "Creator, Marken, Social-Teams und alle, die offentliche Profil-Links verwalten."],
      ],
    },
    "pt-BR": {
      eyebrow: "Encurtador de link da bio",
      title: "Crie links de bio mais limpos para Instagram, TikTok e perfis de criadores.",
      description: "Encurte os links usados em bios, perfis de criadores e paginas pessoais para que parecam mais organizados e confiaveis nas redes.",
      seoTitle: "Encurtador de link da bio para Instagram e TikTok | ShortURL Wiki",
      seoDescription: "Encurte links da bio para Instagram, TikTok e perfis de criadores com URLs mais limpas para exibicao publica.",
      overviewTitle: "Por que links da bio precisam de URLs curtas mais limpas",
      overviewDescription: "Links da bio aparecem em areas publicas do perfil, onde uma URL longa e confusa prejudica apresentacao e confianca. Um link curto deixa o perfil mais limpo.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Links de perfil no Instagram e TikTok",
        "Paginas link-in-bio de criadores e paginas de perfil pessoal",
        "Links de perfil publico compartilhados em posts sociais e media kits",
      ],
      faqs: [
        ["Por que encurtar links da bio?", "Porque links de perfil sao muito visiveis e precisam parecer limpos, memoraveis e confiaveis."],
        ["Quem costuma usar esse tipo de pagina?", "Criadores, marcas, times sociais e operadores que gerenciam links de perfil publico."],
      ],
    },
    hi: {
      eyebrow: "Bio link shortener",
      title: "Instagram, TikTok aur creator pages ke liye clean bio links banayein.",
      description: "Bio, creator pages aur personal profiles par dikhne wale links ko short karke unhe zyada clean aur trustworthy banaya ja sakta hai.",
      seoTitle: "Instagram और TikTok के लिए bio link shortener | ShortURL Wiki Hindi",
      seoDescription: "Instagram, TikTok, creator pages aur social profiles ke liye clean bio links banayein.",
      overviewTitle: "Bio links ko साफ short URL ki zarurat क्यों होती है",
      overviewDescription: "Bio links public profile areas me dikhte hain, jahan lambi aur messy URL presentation aur trust dono ko hurt karti hai. Short link profile ko cleaner banati hai.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Instagram aur TikTok profile links",
        "Creator link-in-bio pages aur personal profile pages",
        "Public profile links jo social posts aur media kits me share hote hain",
      ],
      faqs: [
        ["Bio links ko short kyun karna chahiye?", "Kyuki profile links highly visible hoti hain aur unka clean, memorable aur trustworthy lagna zaruri hota hai."],
        ["Yeh page aam taur par kaun use karta hai?", "Creators, brands, social teams aur wo log jo public-facing profile links manage karte hain."],
      ],
    },
    id: {
      eyebrow: "Pemendek link bio",
      title: "Buat link bio yang lebih rapi untuk Instagram, TikTok, dan halaman profil kreator.",
      description: "Pendekkan link yang dipakai di bio, profil kreator, dan halaman pribadi agar terlihat lebih bersih dan lebih mudah dipercaya di platform sosial.",
      seoTitle: "Pemendek link bio untuk Instagram dan TikTok | ShortURL Wiki",
      seoDescription: "Pendekkan link bio untuk Instagram, TikTok, profil kreator, dan halaman profil sosial dengan URL yang lebih rapi.",
      overviewTitle: "Mengapa link bio butuh short URL yang lebih rapi",
      overviewDescription: "Link bio muncul di area profil publik, jadi URL yang panjang dan berantakan bisa mengganggu tampilan dan rasa percaya. Short link membuat profil lebih bersih dan lebih mudah dibaca.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Link profil Instagram dan TikTok",
        "Halaman link-in-bio kreator dan halaman profil pribadi",
        "Link profil publik yang dibagikan di posting sosial dan media kit",
      ],
      faqs: [
        ["Mengapa link bio perlu dipendekkan?", "Karena link di profil sangat terlihat, jadi tampilannya perlu tetap bersih, mudah diingat, dan meyakinkan."],
        ["Siapa yang biasanya memakai halaman seperti ini?", "Kreator, brand, tim sosial, dan siapa pun yang mengelola link profil publik."],
      ],
    },
  },
  "sms-link-shortener": {
    ja: {
      eyebrow: "SMS短縮リンク",
      title: "SMS配信、通知、モバイルメッセージ向けの短縮リンク。",
      description: "SMSキャンペーン、通知、サポート案内、取引メッセージに入れるリンクを短く整えられます。",
      seoTitle: "SMS向け短縮リンク | ShortURL Wiki",
      seoDescription: "SMS配信や通知メッセージ向けに短く見やすいリンクを作成できます。",
      overviewTitle: "SMSリンクを短く読みやすく保つ理由",
      overviewDescription: "テキストメッセージは表示スペースが限られ、URLがそのまま見えます。短いリンクはノイズを減らし、通知や配信文面を信頼しやすくします。",
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "SMSキャンペーンや販促配信",
        "サポート通知、リマインダー、取引メッセージ",
        "認証、OTP後続案内、モバイル通知フロー",
      ],
      faqs: [
        ["SMSで短縮リンクを使う利点は何ですか？", "文字数を節約でき、文面が整理され、長いURLによる読みにくさを減らせます。"],
        ["どんなチームがSMS短縮リンクをよく必要としますか？", "集客チーム、CRMチーム、サポートチーム、そしてスマホ通知を送るプロダクトです。"],
      ],
    },
    en: {
      eyebrow: "SMS link shortener",
      title: "Use shorter links in SMS campaigns, alerts, and phone notifications.",
      description: "Make links easier to read and share inside SMS campaigns, one-time alerts, support texts, and transactional phone messages.",
      seoTitle: "SMS Link Shortener for Campaigns and Alerts | ShortURL Wiki",
      seoDescription: "Shorten links for SMS campaigns, alerts, support messages, and phone notifications with cleaner URLs for text-based delivery.",
      overviewTitle: "Why SMS links should stay short and readable",
      overviewDescription: "Text messages have limited space and high visibility. Shorter links reduce clutter and make campaign, support, and notification messages easier to trust.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "SMS campaigns and promotional sends",
        "Support alerts and transactional reminders",
        "Verification and notification flows sent to phone users",
      ],
      faqs: [
        ["Why are short links useful in SMS?", "They save space, look cleaner, and reduce the friction of long URLs inside text-heavy messages."],
        ["Who needs SMS short links most?", "Campaign teams, CRM teams, support teams, and products that send phone notifications."],
      ],
    },
    "zh-CN": {
      eyebrow: "短信短链",
      title: "适合短信营销、通知提醒和移动消息推送的短链。",
      description: "让短信里的链接更短、更清晰，适合营销短信、一次性提醒、客服短信和事务型通知。",
      seoTitle: "短信短链，适合营销与通知提醒 | ShortURL Wiki",
      seoDescription: "把短信营销、提醒通知和移动消息里的链接缩短成更适合文本分发的短链。",
      overviewTitle: "为什么短信里的链接更适合做短链",
      overviewDescription: "短信空间有限，而且用户会直接看到完整链接。短链能减少冗余字符，让提醒和营销消息更干净、更容易理解。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "营销短信和促销通知",
        "提醒类消息和事务型推送",
        "客服短信、验证码后续引导和移动端通知",
      ],
      faqs: [
        ["为什么短信链接适合做短链？", "因为短信本身字数有限，链接越短，整条消息越清晰，也更容易被点击。"],
        ["哪些团队最常用短信短链？", "增长团队、CRM 团队、客服团队和需要发送移动端通知的产品团队。"],
      ],
    },
    ko: {
      eyebrow: "SMS 링크 단축",
      title: "SMS 캠페인, 알림, 모바일 메시지에 더 잘 맞는 짧은 링크.",
      description: "SMS 캠페인, 리마인더, 지원 문자, 거래 메시지 안에서 링크를 더 짧고 읽기 쉽게 만들 수 있습니다.",
      seoTitle: "캠페인과 알림용 SMS 링크 단축 | ShortURL Wiki",
      seoDescription: "SMS 캠페인, 알림, 지원 메시지, 모바일 알림용 링크를 더 짧고 깔끔하게 정리하세요.",
      overviewTitle: "SMS 링크는 왜 짧고 읽기 쉬워야 하는가",
      overviewDescription: "문자 메시지는 공간이 제한적이고 링크가 그대로 노출됩니다. 더 짧은 링크는 메시지를 덜 복잡하게 만들고 신뢰도를 높여 줍니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "SMS 캠페인과 프로모션 발송",
        "지원 알림, 리마인더, 거래 메시지",
        "인증, OTP 후속 안내, 모바일 알림 흐름",
      ],
      faqs: [
        ["SMS에서 짧은 링크가 왜 유용한가요?", "공간을 절약하고 메시지를 더 깔끔하게 만들며 긴 URL이 주는 부담을 줄여 줍니다."],
        ["누가 SMS 단축 링크를 가장 많이 필요로 하나요?", "성장팀, CRM 팀, 지원팀, 그리고 모바일 알림을 보내는 제품 팀입니다."],
      ],
    },
    es: {
      eyebrow: "Acortador de links SMS",
      title: "Usa links mas cortos en campanas SMS, alertas y mensajes al celular.",
      description: "Haz mas faciles de leer los links dentro de campanas SMS, avisos puntuales, mensajes de soporte y notificaciones transaccionales.",
      seoTitle: "Acortador de links SMS para campanas y alertas | ShortURL Wiki",
      seoDescription: "Acorta links para campanas SMS, alertas, soporte y mensajes al celular con URLs mas limpias para texto.",
      overviewTitle: "Por que los links en SMS deben ser cortos y faciles de leer",
      overviewDescription: "Los mensajes de texto tienen poco espacio y el usuario ve la URL completa. Un link corto reduce ruido y hace mas confiables campañas, avisos y soporte.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Campanas SMS y envios promocionales",
        "Alertas de soporte, recordatorios y mensajes transaccionales",
        "Verificacion, seguimientos OTP y flujos de mensajes al celular",
      ],
      faqs: [
        ["Por que los short links son utiles en SMS?", "Ahorran espacio, limpian el mensaje y reducen la friccion que generan las URLs largas dentro de textos breves."],
        ["Que equipos necesitan mas este tipo de link?", "Equipos de adquisicion, CRM, soporte y productos que envian mensajes a usuarios en el celular."],
      ],
    },
    fr: {
      eyebrow: "Raccourcisseur de lien SMS",
      title: "Utilisez des liens plus courts dans les campagnes SMS, alertes et notifications sur telephone.",
      description: "Rendez les liens plus lisibles dans les SMS marketing, rappels, messages support et notifications transactionnelles.",
      seoTitle: "Raccourcisseur de lien SMS pour campagnes et alertes | ShortURL Wiki",
      seoDescription: "Raccourcissez vos liens pour campagnes SMS, alertes, support et notifications sur telephone avec des URLs plus propres pour le texte.",
      overviewTitle: "Pourquoi les liens SMS doivent rester courts et lisibles",
      overviewDescription: "Les messages texte ont peu d'espace et l'utilisateur voit l'URL entiere. Un lien court reduit le bruit et rend campagnes, alertes et support plus rassurants.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Campagnes SMS et envois promotionnels",
        "Alertes support, rappels et messages transactionnels",
        "Verification, suivis OTP et notifications sur telephone",
      ],
      faqs: [
        ["Pourquoi les liens courts sont-ils utiles dans les SMS ?", "Ils economisent de l'espace, rendent le message plus propre et reduisent la friction provoquee par les URLs longues dans des textes courts."],
        ["Quelles equipes ont le plus besoin de ce type de lien ?", "Les equipes campagne, CRM, support et les produits qui envoient des notifications a des utilisateurs sur telephone."],
      ],
    },
    de: {
      eyebrow: "SMS-Link-Kurzlink",
      title: "Kurzere Links fur SMS-Kampagnen, Alerts und Handy-Benachrichtigungen.",
      description: "Mache Links in SMS-Kampagnen, Erinnerungen, Support-Nachrichten und transaktionalen Meldungen leichter lesbar und sauberer teilbar.",
      seoTitle: "SMS-Link-Kurzlink fur Kampagnen und Alerts | ShortURL Wiki",
      seoDescription: "Kurze Links fur SMS-Kampagnen, Alerts, Support-Nachrichten und Hinweise aufs Handy mit saubereren URLs fur textbasierte Zustellung.",
      overviewTitle: "Warum SMS-Links kurz und gut lesbar bleiben sollten",
      overviewDescription: "Textnachrichten haben wenig Platz und Nutzer sehen die komplette URL. Ein kurzer Link reduziert Unruhe und macht Kampagnen-, Alert- und Support-Nachrichten vertrauenswurdiger.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "SMS-Kampagnen und Promo-Versand",
        "Support-Alerts, Erinnerungen und transaktionale Nachrichten",
        "Verifizierung, OTP-Follow-ups und Benachrichtigungsflusse aufs Handy",
      ],
      faqs: [
        ["Warum sind Kurzlinks in SMS so hilfreich?", "Sie sparen Platz, machen die Nachricht sauberer und verringern Reibung durch lange URLs in knappen Texten."],
        ["Welche Teams brauchen SMS-Kurzlinks am meisten?", "Akquise-Teams, CRM-Teams, Support-Teams und Produkte, die Benachrichtigungen aufs Handy versenden."],
      ],
    },
    "pt-BR": {
      eyebrow: "Encurtador de link para SMS",
      title: "Use links mais curtos em campanhas SMS, alertas e notificacoes no celular.",
      description: "Deixe os links mais faceis de ler e compartilhar em campanhas SMS, avisos pontuais, mensagens de suporte e notificacoes transacionais.",
      seoTitle: "Encurtador de link para SMS em campanhas e alertas | ShortURL Wiki",
      seoDescription: "Encurte links para campanhas SMS, alertas, suporte e notificacoes no celular com URLs mais limpas para mensagens de texto.",
      overviewTitle: "Por que links em SMS devem ser curtos e faceis de ler",
      overviewDescription: "Mensagens de texto tem pouco espaco e o usuario ve a URL inteira. Um link curto reduz ruido e deixa campanhas, alertas e suporte mais confiaveis.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Campanhas SMS e envios promocionais",
        "Alertas de suporte, lembretes e mensagens transacionais",
        "Verificacao, seguimentos de OTP e notificacoes no celular",
      ],
      faqs: [
        ["Por que links curtos sao uteis em SMS?", "Eles economizam espaco, deixam a mensagem mais limpa e reduzem a friccao causada por URLs longas em textos curtos."],
        ["Quais equipes mais precisam desse tipo de link?", "Times de campanha, CRM, suporte e produtos que enviam notificacoes para usuarios no celular."],
      ],
    },
    hi: {
      eyebrow: "SMS link shortener",
      title: "SMS campaigns, alerts aur phone notifications ke liye short links ko saaf aur readable rakhein.",
      description: "SMS campaigns, reminders, support texts aur transactional messages me links ko chhota aur readable rakhein.",
      seoTitle: "SMS campaigns और alerts के लिए link shortener | ShortURL Wiki Hindi",
      seoDescription: "SMS campaigns, alerts, support messages aur phone notifications ke liye saaf short links banayein.",
      overviewTitle: "SMS links ko short aur readable rakhna क्यों ज़रूरी है",
      overviewDescription: "Text messages me jagah kam hoti hai aur poora link seedha dikhta hai. Chhota link message ko saaf rakhta hai aur trust badhata hai.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "SMS campaigns aur promotional sends",
        "Support alerts, reminders aur transactional messages",
        "Verification, OTP follow-up aur phone notification flows",
      ],
      faqs: [
        ["SMS me short links ka fayda kya hai?", "Yeh space bachate hain, message ko cleaner banate hain aur lambi URLs ki wajah se hone wali friction kam karte hain."],
        ["Kaun si teams SMS short links sabse zyada use karti hain?", "Campaign teams, CRM teams, support teams aur phone notifications bhejne wale product teams."],
      ],
    },
    id: {
      eyebrow: "Pemendek link SMS",
      title: "Gunakan link yang lebih singkat untuk kampanye SMS, alert, dan notifikasi di ponsel.",
      description: "Buat link di kampanye SMS, reminder, pesan dukungan, dan pesan transaksional menjadi lebih ringkas dan mudah dibaca.",
      seoTitle: "Pemendek link SMS untuk kampanye dan notifikasi | ShortURL Wiki",
      seoDescription: "Pendekkan link untuk kampanye SMS, alert, pesan dukungan, dan notifikasi di ponsel dengan URL yang lebih rapi.",
      overviewTitle: "Mengapa link di SMS sebaiknya tetap singkat dan mudah dibaca",
      overviewDescription: "Ruang di SMS terbatas dan pengguna langsung melihat seluruh link. Short link membuat pesan lebih rapi dan lebih mudah dipercaya.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Kampanye SMS dan pesan promosi",
        "Alert dukungan, reminder, dan pesan transaksional",
        "Verifikasi, tindak lanjut OTP, dan alur notifikasi di ponsel",
      ],
      faqs: [
        ["Apa manfaat short link di SMS?", "Short link menghemat ruang, membuat pesan lebih rapi, dan mengurangi hambatan dari URL panjang di dalam teks."],
        ["Siapa yang paling sering membutuhkan short link SMS?", "Tim kampanye, tim CRM, tim support, dan produk yang mengirim notifikasi ke pengguna di ponsel."],
      ],
    },
  },
  "utm-link-shortener": {
    en: {
      eyebrow: "UTM link shortener",
      title: "Shorten tracked UTM links without exposing long campaign parameters.",
      description: "Wrap long UTM links into cleaner short URLs for ads, email campaigns, social posts, partner links, and reporting pages.",
      seoTitle: "UTM Link Shortener for Campaign Tracking | ShortURL Wiki",
      seoDescription: "Shorten UTM links for paid ads, email campaigns, social posts, and partner distribution while keeping campaign tracking intact.",
      overviewTitle: "Why UTM links often need a short-link layer",
      overviewDescription: "UTM parameters are useful for attribution but messy in public channels. A short link hides that complexity while keeping tracking logic in place.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Paid ad destinations with tracked parameters",
        "Email campaign links and newsletter distribution",
        "Social posts, partner links, and attribution tracking",
      ],
      faqs: [
        ["Why shorten UTM links?", "Because raw UTM URLs are long, hard to read, and visually noisy in public-facing channels."],
        ["Does shortening remove tracking?", "No. The goal is to preserve tracking while improving how the link looks and gets shared."],
      ],
    },
    "zh-CN": {
      eyebrow: "UTM 短链",
      title: "把带追踪参数的 UTM 长链接缩成更适合投放的短链。",
      description: "适合广告投放、邮件营销、社媒内容、渠道合作和数据归因场景，在保留追踪参数的同时让链接更整洁。",
      seoTitle: "UTM 短链，适合广告投放与追踪归因 | ShortURL Wiki",
      seoDescription: "在保留 UTM 追踪参数的同时，把广告、邮件和社媒里的长链接缩成更适合公开传播的短链。",
      overviewTitle: "为什么 UTM 链接通常需要再包一层短链",
      overviewDescription: "UTM 参数对归因有用，但直接展示出来会很长很乱。短链可以保留追踪逻辑，同时让外部展示更干净。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "广告投放和带参数的目标页链接",
        "邮件营销、newsletter 和内容分发",
        "社媒传播、渠道合作和内部归因分析",
      ],
      faqs: [
        ["为什么 UTM 链接适合做短链？", "因为原始 UTM 链接通常很长，公开展示会影响点击和信任感。"],
        ["做成短链后还会保留追踪吗？", "会。目标就是在保留追踪参数的同时，让链接更适合公开传播。"],
      ],
    },
    ko: {
      eyebrow: "UTM 링크 단축",
      title: "긴 UTM 추적 링크를 노출하지 않고 더 깔끔한 짧은 링크로 정리.",
      description: "광고, 이메일, 소셜 게시물, 파트너 배포, 리포팅 흐름에서 긴 UTM 링크를 보기 좋은 짧은 URL로 감쌀 수 있습니다.",
      seoTitle: "캠페인 추적용 UTM 링크 단축 | ShortURL Wiki",
      seoDescription: "광고, 이메일, 소셜, 파트너 배포용 UTM 링크를 추적은 유지한 채 더 짧게 만드세요.",
      overviewTitle: "UTM 링크에 단축 링크 레이어가 필요한 이유",
      overviewDescription: "UTM 파라미터는 분석에는 유용하지만 공개 채널에서는 너무 길고 복잡합니다. 짧은 링크는 추적은 유지하면서 표현만 더 깔끔하게 만듭니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "추적 파라미터가 붙은 광고 랜딩 링크",
        "이메일 캠페인과 뉴스레터 배포 링크",
        "소셜 게시물, 파트너 링크, 어트리뷰션 흐름",
      ],
      faqs: [
        ["UTM 링크를 왜 짧게 만들어야 하나요?", "원본 UTM URL은 너무 길고 공개 채널에서 지저분하게 보여 신뢰와 클릭에 불리할 수 있기 때문입니다."],
        ["짧게 만들면 추적 정보가 사라지나요?", "아니요. 목표는 추적을 유지하면서도 링크 표현을 더 깔끔하게 만드는 것입니다."],
      ],
    },
    es: {
      eyebrow: "Acortador de links UTM",
      title: "Acorta links UTM sin exponer parametros largos de campana.",
      description: "Envuelve links UTM largos en URLs cortas mas limpias para anuncios, email, redes sociales, socios y reportes.",
      seoTitle: "Acortador de links UTM para seguimiento de campanas | ShortURL Wiki",
      seoDescription: "Acorta links UTM para anuncios, email, redes sociales y distribucion con socios sin perder el seguimiento.",
      overviewTitle: "Por que los links UTM suelen necesitar una capa de short link",
      overviewDescription: "Los parametros UTM sirven para atribucion, pero se ven largos y ruidosos en canales publicos. Un link corto oculta esa complejidad sin romper el seguimiento.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Destinos de anuncios con parametros de seguimiento",
        "Links de email y newsletters",
        "Posts sociales, links de socios y flujos de atribucion",
      ],
      faqs: [
        ["Por que conviene acortar links UTM?", "Porque las URLs UTM en crudo son largas, dificiles de leer y visualmente ruidosas en canales publicos."],
        ["Acortar elimina el seguimiento?", "No. La idea es mantener la medicion mientras mejoras la forma en que el link se ve y se comparte."],
      ],
    },
    ja: {
      eyebrow: "UTM短縮リンク",
      title: "長いUTM付きURLを配信しやすい短縮リンクに変換。",
      description: "広告、メール、SNS、提携配信向けにトラッキングを維持したまま見やすい短縮リンクを作れます。",
      seoTitle: "UTM付きURL短縮ツール | ShortURL Wiki",
      seoDescription: "UTMパラメータを保ちながら広告・SNS・メール向けURLを短縮できます。",
      overviewTitle: "UTMリンクに短縮リンク層が必要になる理由",
      overviewDescription: "UTMパラメータは計測に便利ですが、公開チャネルでは長くて複雑に見えます。短縮リンクを挟めば、計測を保ったまま見た目を整えられます。",
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "追跡パラメータ付き広告遷移リンク",
        "メールキャンペーンやニュースレター配布リンク",
        "SNS投稿、提携リンク、アトリビューション運用",
      ],
      faqs: [
        ["UTMリンクを短くする理由は何ですか？", "生のUTM URLは長く読みにくく、公開チャネルで見た目のノイズになりやすいからです。"],
        ["短縮するとトラッキングは消えますか？", "消えません。計測を保ったまま、リンクの見た目と共有しやすさを改善するのが目的です。"],
      ],
    },
    fr: {
      eyebrow: "Raccourcisseur de lien UTM",
      title: "Raccourcissez des liens UTM sans exposer de longs parametres de campagne.",
      description: "Transformez de longs liens UTM en URLs courtes plus propres pour les publicites, emails, reseaux sociaux, partenaires et rapports.",
      seoTitle: "Raccourcisseur de lien UTM pour le suivi de campagne | ShortURL Wiki",
      seoDescription: "Raccourcissez vos liens UTM pour les publicites, emails, reseaux sociaux et distributions partenaires sans perdre le suivi.",
      overviewTitle: "Pourquoi les liens UTM ont souvent besoin d'une couche short link",
      overviewDescription: "Les parametres UTM sont utiles pour l'attribution, mais paraissent longs et bruyants dans les canaux publics. Un lien court masque cette complexite sans casser le suivi.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Destinations publicitaires avec parametres de suivi",
        "Liens d'email et de newsletters",
        "Posts sociaux, liens partenaires et flux d'attribution",
      ],
      faqs: [
        ["Pourquoi raccourcir des liens UTM ?", "Parce que les URLs UTM brutes sont longues, difficiles a lire et visuellement bruyantes dans les canaux publics."],
        ["Le raccourcissement supprime-t-il le suivi ?", "Non. L'objectif est de conserver la mesure tout en ameliorant la facon dont le lien se voit et se partage."],
      ],
    },
    de: {
      eyebrow: "UTM-Link-Kurzlink",
      title: "Getrackte UTM-Links kurzen, ohne lange Kampagnenparameter offenzulegen.",
      description: "Verpacke lange UTM-Links in sauberere Kurz-URLs fur Anzeigen, E-Mail-Kampagnen, Social Posts, Partner-Links und Berichte.",
      seoTitle: "UTM-Link-Kurzlink fur Kampagnen-Tracking | ShortURL Wiki",
      seoDescription: "Kurze UTM-Links fur Anzeigen, E-Mail, Social Media und Partnerverteilung bei erhaltenem Tracking.",
      overviewTitle: "Warum UTM-Links oft eine Kurzlink-Ebene brauchen",
      overviewDescription: "UTM-Parameter sind fur Attribution nutzlich, wirken in offentlichen Kanalen aber lang und unruhig. Ein Kurzlink verbirgt diese Komplexitat und lasst das Tracking intakt.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Anzeigen-Ziele mit Tracking-Parametern",
        "Links fur E-Mail-Kampagnen und Newsletter",
        "Social Posts, Partner-Links und Attributions-Auswertungen",
      ],
      faqs: [
        ["Warum sollte man UTM-Links kurzen?", "Weil rohe UTM-URLs lang, schwer lesbar und in offentlichen Kanalen visuell unruhig sind."],
        ["Geht beim Kurzen das Tracking verloren?", "Nein. Ziel ist es, das Tracking zu erhalten und gleichzeitig die Darstellung und Teilbarkeit des Links zu verbessern."],
      ],
    },
    "pt-BR": {
      eyebrow: "Encurtador de link UTM",
      title: "Encurte links UTM rastreados sem expor parametros longos de campanha.",
      description: "Transforme links UTM longos em URLs curtas mais limpas para anuncios, email, redes sociais, parceiros e relatorios.",
      seoTitle: "Encurtador de link UTM para rastreamento de campanha | ShortURL Wiki",
      seoDescription: "Encurte links UTM para anuncios, email, redes sociais e distribuicao com parceiros sem perder o rastreamento.",
      overviewTitle: "Por que links UTM costumam precisar de uma camada de short link",
      overviewDescription: "Parametros UTM sao uteis para atribuicao, mas ficam longos e ruidosos em canais publicos. Um link curto esconde essa complexidade sem quebrar o rastreamento.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Destinos de anuncios com parametros de rastreamento",
        "Links de email e newsletters",
        "Posts sociais, links de parceiros e fluxos de atribuicao",
      ],
      faqs: [
        ["Por que vale encurtar links UTM?", "Porque URLs UTM brutas sao longas, dificeis de ler e visualmente ruidosas em canais publicos."],
        ["Encurtar remove o rastreamento?", "Nao. A ideia e manter a mensuracao enquanto melhora a forma como o link aparece e e compartilhado."],
      ],
    },
    hi: {
      eyebrow: "UTM link shortener",
      title: "Tracked UTM links ko short karein bina lambe campaign parameters dikhaye.",
      description: "Ads, email campaigns, social posts, partner links aur reporting dashboards ke liye lambe UTM links ko cleaner short URLs me wrap karein.",
      seoTitle: "Campaign tracking के लिए UTM link shortener | ShortURL Wiki Hindi",
      seoDescription: "Paid ads, email campaigns, social posts aur partner distribution ke liye UTM links short karein, tracking ko intact rakhte hue.",
      overviewTitle: "UTM links ko short-link layer ki zarurat क्यों पड़ती है",
      overviewDescription: "UTM parameters attribution ke liye useful hote hain, lekin public channels me kaafi messy lagte hain. Short link us complexity ko hide karta hai aur tracking logic ko barkarar rakhta hai.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Paid ad destinations jahan tracked parameters already lage hote hain",
        "Email campaigns, newsletters aur tracked share links",
        "Social posts, partner links aur attribution reporting",
      ],
      faqs: [
        ["UTM links ko short kyun karna chahiye?", "Kyuki raw UTM URLs bahut lambe, unreadable aur public-facing channels me visually noisy hote hain."],
        ["Kya short karne se tracking hat jati hai?", "Nahi. Maqsad tracking ko preserve rakhna hai aur link ko share karne layak clean banana hai."],
      ],
    },
    id: {
      eyebrow: "Pemendek link UTM",
      title: "Pendekkan link UTM yang terlacak tanpa menampilkan parameter kampanye yang panjang.",
      description: "Bungkus link UTM yang panjang menjadi short URL yang lebih rapi untuk iklan, kampanye email, posting sosial, link partner, dan alur pelaporan.",
      seoTitle: "Pemendek link UTM untuk pelacakan kampanye | ShortURL Wiki",
      seoDescription: "Pendekkan link UTM untuk iklan berbayar, kampanye email, posting sosial, dan distribusi partner sambil menjaga pelacakan kampanye tetap utuh.",
      overviewTitle: "Mengapa link UTM sering membutuhkan lapisan short link",
      overviewDescription: "Parameter UTM berguna untuk atribusi, tetapi terlihat berantakan di kanal publik. Short link menyembunyikan kerumitan itu sambil menjaga logika tracking tetap berjalan.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Halaman tujuan iklan berbayar dengan parameter tracking",
        "Tautan kampanye email dan distribusi newsletter",
        "Posting sosial, tautan partner, dan pelacakan atribusi",
      ],
      faqs: [
        ["Mengapa link UTM perlu dipendekkan?", "Karena URL UTM mentah biasanya panjang, sulit dibaca, dan mengganggu tampilan di kanal publik."],
        ["Apakah memendekkan link akan menghilangkan tracking?", "Tidak. Tujuannya justru menjaga tracking tetap ada sambil membuat link lebih rapi untuk dibagikan."],
      ],
    },
  },
  "campaign-url-builder": {
    en: {
      eyebrow: "Campaign URL builder",
      title: "Build cleaner campaign URLs for launches, paid traffic, and partner distribution.",
      description: "Use short links as the final layer for campaign URLs shared in ads, creator collaborations, newsletters, launch pages, and distribution docs.",
      seoTitle: "Campaign URL Builder for Marketing Teams | ShortURL Wiki",
      seoDescription: "Create cleaner campaign URLs for launches, paid traffic, creator collaborations, partner distribution, and tracking pages.",
      overviewTitle: "Why campaign URLs benefit from a cleaner short-link layer",
      overviewDescription: "Campaign links often get shared across multiple channels and stakeholders. A cleaner short URL makes launch coordination and public distribution easier to manage.",
      scenariosTitle: "Common use cases",
      scenarios: [
        "Launch pages and paid traffic campaigns",
        "Creator collaborations, affiliate pushes, and partner sends",
        "Internal campaign tracking docs and distribution planning",
      ],
      faqs: [
        ["Why use short links in campaign URLs?", "Because campaign links get reused widely and need to stay clean across ads, docs, and public channels."],
        ["Who typically needs a campaign URL builder page?", "Marketing teams, campaign teams, partner teams, and agencies coordinating launch or distribution work."],
      ],
    },
    "zh-CN": {
      eyebrow: "活动链接构建",
      title: "给活动发布、广告投放和渠道分发准备的活动短链。",
      description: "适合新品发布、广告投放、渠道合作、邮件营销和内部归因管理，把复杂活动链接整理成统一短链入口。",
      seoTitle: "活动链接构建器，适合营销与增长团队 | ShortURL Wiki",
      seoDescription: "为活动发布、投放链路和渠道合作生成更干净的活动短链，适合营销与增长团队统一管理。",
      overviewTitle: "为什么活动链接通常需要统一成短链入口",
      overviewDescription: "活动链接会在广告、合作、邮件、内部文档和多个团队之间反复流转。统一的短链层更适合发布和协作。",
      scenariosTitle: "常见使用场景",
      scenarios: [
        "新品发布页、广告投放和活动推广",
        "达人合作、联盟分发和渠道投放",
        "活动排期、归因表格和内部投放文档",
      ],
      faqs: [
        ["为什么活动链接要统一成短链？", "因为活动链接通常会跨渠道分发，越统一、越整洁，团队管理和对外展示越轻松。"],
        ["哪些团队最需要活动链接构建页？", "市场团队、增长团队、运营团队、代理商和负责投放协作的团队。"],
      ],
    },
    ko: {
      eyebrow: "캠페인 URL 빌더",
      title: "런칭, 유료 트래픽, 파트너 배포에 맞는 더 깔끔한 캠페인 URL.",
      description: "광고, 크리에이터 협업, 뉴스레터, 런칭 페이지, 배포 문서에 들어가는 캠페인 URL을 짧은 링크 레이어로 정리할 수 있습니다.",
      seoTitle: "마케팅 팀을 위한 캠페인 URL 빌더 | ShortURL Wiki",
      seoDescription: "런칭, 광고, 크리에이터 협업, 파트너 배포에 맞는 더 정돈된 캠페인 URL을 만드세요.",
      overviewTitle: "캠페인 URL 빌더가 필요한 대표 장면",
      overviewDescription: "런칭, 광고, 파트너 배포에서 캠페인 URL은 빠르게 길어지고 복잡해집니다. 마지막에 짧은 링크 레이어를 두면 배포가 훨씬 정돈됩니다.",
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "런칭 페이지, 유료 광고, 프로모션 링크",
        "크리에이터 협업, 파트너 배포, 뉴스레터",
        "내부 추적 문서와 외부 배포 자산의 링크 정리",
      ],
      faqs: [
        ["캠페인 URL은 왜 따로 정리해야 하나요?", "여러 채널에 동시에 배포할수록 링크 구조가 복잡해지기 때문에, 최종 공유용 링크를 정리하는 과정이 필요합니다."],
        ["이 페이지는 마케팅 팀에만 필요한가요?", "주로 마케팅과 성장 팀이 많이 쓰지만, 파트너십과 운영 팀도 동일한 문제를 자주 겪습니다."],
      ],
    },
    es: {
      eyebrow: "Builder de URL de campana",
      title: "Crea URLs de campana mas limpias para lanzamientos, trafico pago y distribucion con socios.",
      description: "Usa links cortos como capa final para URLs de campana que compartes en anuncios, colaboraciones, newsletters, paginas de lanzamiento y documentos de distribucion.",
      seoTitle: "Builder de URL de campana para equipos de marketing | ShortURL Wiki",
      seoDescription: "Crea URLs de campana mas limpias para lanzamientos, trafico pago, colaboraciones y distribucion con socios.",
      overviewTitle: "Por que un builder de URL de campana resulta util",
      overviewDescription: "En lanzamientos, trafico pago y distribucion con socios, las URLs de campana se vuelven largas y dificiles de manejar. Un link corto final ordena mejor toda la distribucion.",
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Paginas de lanzamiento, anuncios pagados y links promocionales",
        "Colaboraciones con creadores, socios y newsletters",
        "Organizacion de links entre documentos de equipo y activos publicos",
      ],
      faqs: [
        ["Por que conviene ordenar una URL de campana antes de compartirla?", "Porque cuando una campana sale a varios canales, la URL final suele hacerse larga y desordenada, y eso afecta distribucion y presentacion."],
        ["Esta pagina es solo para equipos de marketing?", "La usan sobre todo marketing y campanas, pero alianzas y equipos de distribucion tambien la necesitan cuando coordinan difusion externa."],
      ],
    },
    ja: {
      eyebrow: "キャンペーンURL作成",
      title: "配信、広告、提携施策向けのキャンペーン短縮URL。",
      description: "ローンチ、広告、提携配信、ニュースレター、社内共有向けにキャンペーンURLを見やすく整理できます。",
      seoTitle: "キャンペーンURL作成ツール | ShortURL Wiki",
      seoDescription: "配信、広告、提携施策向けに整理しやすいキャンペーン短縮URLを作成できます。",
      overviewTitle: "キャンペーンURLビルダーが役立つ理由",
      overviewDescription: "ローンチ、広告配信、提携先配布ではキャンペーンURLがすぐ長く複雑になります。最後に短縮リンクを挟むと配布全体が整理しやすくなります。",
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "ローンチページ、広告配信、販促リンク",
        "クリエイター連携、提携配布、ニュースレター",
        "内部トラッキング資料と公開配布素材のリンク整理",
      ],
      faqs: [
        ["共有前にキャンペーンURLを整える理由は何ですか？", "複数チャネルに出すほど最終URLは長く複雑になりやすく、配布と見た目の両方に影響するからです。"],
        ["このページはマーケティングチーム専用ですか？", "主にマーケティングや獲得チームが使いますが、提携や運用チームにも同じ課題があります。"],
      ],
    },
    fr: {
      eyebrow: "Constructeur d'URL de campagne",
      title: "Creez des URLs de campagne plus propres pour les lancements, le trafic payant et la distribution partenaire.",
      description: "Utilisez des liens courts comme couche finale pour les URLs de campagne partagees dans les publicites, collaborations createurs, newsletters, pages de lancement et documents de diffusion.",
      seoTitle: "Constructeur d'URL de campagne pour equipes marketing | ShortURL Wiki",
      seoDescription: "Creez des URLs de campagne plus propres pour les lancements, le trafic payant, les collaborations createurs et la distribution partenaire.",
      overviewTitle: "Pourquoi un constructeur d'URL de campagne est utile",
      overviewDescription: "Dans les lancements, le trafic payant et la distribution partenaire, les URLs de campagne deviennent vite longues et difficiles a gerer. Un short link final remet de l'ordre dans la diffusion.",
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Pages de lancement, annonces payantes et liens promotionnels",
        "Collaborations createurs, partenaires et newsletters",
        "Organisation des liens entre documents d'equipe et supports publics",
      ],
      faqs: [
        ["Pourquoi faut-il nettoyer une URL de campagne avant de la partager ?", "Parce qu'une campagne diffusee sur plusieurs canaux produit souvent une URL finale longue et brouillonne, ce qui nuit a la diffusion et a la presentation."],
        ["Cette page sert-elle seulement aux equipes marketing ?", "Elle est surtout utilisee par les equipes marketing et campagne, mais les equipes partenariat et diffusion en ont aussi besoin quand elles coordonnent une diffusion externe."],
      ],
    },
    de: {
      eyebrow: "Kampagnen-URL-Builder",
      title: "Saubere Kampagnen-URLs fur Launches, Paid Traffic und Partnerverteilung erstellen.",
      description: "Nutze Kurzlinks als letzte Ebene fur Kampagnen-URLs, die in Anzeigen, Creator-Kooperationen, Newslettern, Launch-Seiten und Verteilungsdokumenten geteilt werden.",
      seoTitle: "Kampagnen-URL-Builder fur Marketing-Teams | ShortURL Wiki",
      seoDescription: "Erstelle sauberere Kampagnen-URLs fur Launches, Paid Traffic, Creator-Kooperationen, Partnerverteilung und Tracking-Seiten.",
      overviewTitle: "Warum ein Kampagnen-URL-Builder hilfreich ist",
      overviewDescription: "Bei Launches, Paid Traffic und Partnerverteilung werden Kampagnen-URLs schnell lang und schwer zu handhaben. Ein finaler Kurzlink bringt mehr Ordnung in die Ausspielung.",
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Launch-Seiten, bezahlte Anzeigen und Promo-Links",
        "Creator-Kooperationen, Partnerverteilung und Newsletter",
        "Ordnung von Links zwischen Tracking-Dokumenten und offentlichen Assets",
      ],
      faqs: [
        ["Warum sollte man eine Kampagnen-URL vor dem Teilen aufraumen?", "Weil die finale URL bei Ausspielung uber mehrere Kanale oft lang und unruhig wird und das Verteilung wie Darstellung erschwert."],
        ["Ist diese Seite nur fur Marketing-Teams gedacht?", "Vor allem Marketing- und Kampagnen-Teams nutzen sie, aber auch Partner- und Distributionsteams stehen oft vor demselben Problem."],
      ],
    },
    "pt-BR": {
      eyebrow: "Construtor de URL de campanha",
      title: "Monte URLs de campanha mais limpas para lancamentos, trafego pago e distribuicao com parceiros.",
      description: "Use links curtos como camada final para URLs de campanha compartilhadas em anuncios, colaboracoes com criadores, newsletters, paginas de lancamento e materiais de distribuicao.",
      seoTitle: "Construtor de URL de campanha para times de marketing | ShortURL Wiki",
      seoDescription: "Crie URLs de campanha mais limpas para lancamentos, trafego pago, colaboracoes com criadores e distribuicao com parceiros.",
      overviewTitle: "Por que um construtor de URL de campanha e util",
      overviewDescription: "Em lancamentos, trafego pago e distribuicao com parceiros, as URLs de campanha ficam longas e dificeis de gerenciar. Um short link final organiza melhor toda a distribuicao.",
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Paginas de lancamento, anuncios pagos e links promocionais",
        "Colaboracoes com criadores, parceiros e newsletters",
        "Organizacao de links entre documentos de equipe e ativos publicos",
      ],
      faqs: [
        ["Por que vale organizar uma URL de campanha antes de compartilhar?", "Porque, quando uma campanha vai para varios canais, a URL final costuma ficar longa e baguncada, o que prejudica distribuicao e apresentacao."],
        ["Esta pagina serve so para times de marketing?", "Ela e usada principalmente por marketing e campanhas, mas parcerias e distribuicao tambem precisam dela quando coordenam distribuicao externa."],
      ],
    },
    hi: {
      eyebrow: "Campaign URL builder",
      title: "Launches, paid campaigns aur partner sharing ke liye clean campaign URLs banayein.",
      description: "Ads, creator collaborations, newsletters, launch pages aur partner docs me jaane wale campaign URLs ko ek clean short-link layer dein.",
      seoTitle: "Marketing teams के लिए campaign URL builder | ShortURL Wiki Hindi",
      seoDescription: "Launches, paid campaigns, creator collaborations aur partner sharing ke liye clean campaign URLs banayein.",
      overviewTitle: "Campaign URLs ko short-link layer se फायदा क्यों होता है",
      overviewDescription: "Campaign links kai channels aur stakeholders ke beech ghoomte hain. Clean short URL launch coordination aur public sharing dono ko aasaan banata hai.",
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Launch pages aur paid campaigns",
        "Creator collaborations, affiliate pushes aur partner sharing",
        "Internal campaign tracking docs aur launch planning",
      ],
      faqs: [
        ["Campaign URLs me short links kyun use karni chahiye?", "Kyuki yeh links bahut jagah reuse hoti hain aur ads, docs aur public channels me clean dikhni chahiye."],
        ["Is page ki zarurat aam taur par kise hoti hai?", "Marketing teams, campaign teams, partner teams aur agencies jo launches ya distribution coordinate karti hain."],
      ],
    },
    id: {
      eyebrow: "Builder URL kampanye",
      title: "Buat URL kampanye yang lebih rapi untuk peluncuran, iklan berbayar, dan distribusi partner.",
      description: "Tambahkan short link sebagai lapisan akhir untuk URL kampanye yang dibagikan di iklan, kolaborasi kreator, newsletter, halaman peluncuran, dan dokumen distribusi.",
      seoTitle: "Builder URL kampanye untuk tim marketing | ShortURL Wiki",
      seoDescription: "Buat URL kampanye yang lebih rapi untuk peluncuran, trafik berbayar, kolaborasi kreator, dan distribusi partner.",
      overviewTitle: "Mengapa URL kampanye terbantu dengan lapisan short link yang rapi",
      overviewDescription: "Link kampanye sering berpindah di banyak kanal dan ke banyak pihak. Short URL yang bersih memudahkan koordinasi peluncuran dan distribusi publik.",
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Halaman peluncuran dan kampanye trafik berbayar",
        "Kolaborasi kreator, affiliate push, dan pengiriman partner",
        "Dokumen tracking kampanye dan perencanaan distribusi",
      ],
      faqs: [
        ["Mengapa URL kampanye sebaiknya memakai short link?", "Karena link kampanye dipakai berulang di banyak tempat dan perlu tetap rapi di iklan, dokumen, dan kanal publik."],
        ["Siapa yang biasanya membutuhkan halaman seperti ini?", "Tim marketing, tim kampanye, tim partner, dan agensi yang mengatur peluncuran atau distribusi."],
      ],
    },
  },
};

const genericFallbacks = {
  ko: {
    eyebrow: "쇼트링크 가이드",
    title: "쇼트링크, QR 코드, 브랜드 링크, API 도구를 한곳에서 확인하세요.",
    description: "QR 캠페인, 브랜드 링크, 공유 링크, 팀 API 활용을 위한 다국어 쇼트링크 안내입니다.",
    overviewTitle: "이 페이지가 도와주는 일",
    overviewDescription: "이 페이지는 실제 쇼트링크 작업을 지금 바로 처리하고, 나중에 사용이 늘어나면 자연스럽게 확장할 수 있도록 구성되어 있습니다.",
    scenariosTitle: "주요 사용 사례",
    scenarios: [
      "캠페인, 소셜, 반복 팀 사용을 위한 공개 공유 링크",
      "QR, WhatsApp, 제품, 지원 진입 경로용 쇼트링크",
      "반복 팀 사용으로 넘어가기 전의 가벼운 시작점",
    ],
    faqs: [
      ["이 페이지는 누구를 위한 것인가요?", "더 깔끔한 링크 흐름이 필요하고, 나중에 반복 팀 사용으로 확장할 가능성이 있는 사용자를 위한 페이지입니다."],
      ["나중에 팀 사용으로도 확장할 수 있나요?", "네. 수동 생성에서 API와 월간 플랜 사용으로 자연스럽게 이어질 수 있도록 구성되어 있습니다."],
    ],
  },
  es: {
    eyebrow: "Guia de links cortos",
    title: "Usa enlaces cortos, QR, enlaces de marca y flujos con API.",
    description: "Enlaces cortos, QR, campanas y uso de API en equipo desde un solo lugar.",
    overviewTitle: "Lo que esta pagina intenta resolver",
    overviewDescription: "Esta pagina responde a una necesidad real de short links con un flujo simple y una ruta clara hacia uso en equipo.",
    scenariosTitle: "Casos de uso comunes",
    scenarios: [
      "Campanas, social media y tareas de distribucion",
      "Entradas por QR, WhatsApp, producto o soporte",
      "Paso inicial antes de un uso recurrente en equipo",
    ],
    faqs: [
      ["Para quien es esta pagina?", "Para usuarios que necesitan enlaces mas limpios y que despues pueden pasar a un flujo repetible en equipo."],
      ["Se puede ampliar a uso en equipo despues?", "Si. La pagina esta pensada para pasar del uso manual al uso con API."],
    ],
  },
  fr: {
    eyebrow: "Guide liens courts",
    title: "Utilisez liens courts, QR codes, liens de marque et API.",
    description: "Liens courts, QR codes, campagnes et usage d'API en equipe reunis sur une seule page.",
    overviewTitle: "Ce que cette page cherche a resoudre",
    overviewDescription: "Cette page repond a une demande concrete autour des liens courts avec un parcours simple et une extension possible vers un usage equipe.",
    scenariosTitle: "Cas d'usage frequents",
    scenarios: [
      "Campagnes, social media et taches de diffusion",
      "Entrees QR, WhatsApp, produit ou support",
      "Point de depart avant un usage equipe regulier",
    ],
    faqs: [
      ["A qui s'adresse cette page ?", "A des utilisateurs qui veulent un flux de liens plus propre et une extension possible vers un usage equipe."],
      ["Peut-on l'etendre ensuite a un usage equipe ?", "Oui. La page prepare une transition naturelle du manuel vers l'API."],
    ],
  },
  de: {
    eyebrow: "Kurzlink-Guide",
    title: "Nutzen Sie Kurzlinks, QR-Codes, Branding-Links und eine einfache API.",
    description: "Eine mehrsprachige Ubersicht fur Kurzlinks, QR-Kampagnen und API-Nutzung im Team.",
    overviewTitle: "Welches Problem diese Seite losen soll",
    overviewDescription: "Diese Seite richtet sich an konkrete Kurzlink-Anwendungen mit einfacher Nutzung und einem klaren Weg zur Teamnutzung.",
    scenariosTitle: "Haufige Einsatzszenarien",
    scenarios: [
      "Kampagnen, Teilen in sozialen Kanalen und laufende Verteilung",
      "QR-, WhatsApp-, Produkt- oder Support-Einstiege",
      "Leichter Start vor wiederkehrender Team-Nutzung",
    ],
    faqs: [
      ["Fur wen ist diese Seite gedacht?", "Fur Nutzer, die einen saubereren Link-Ablauf brauchen und spater auf Team-Nutzung erweitern wollen."],
      ["Lasst sich das spater fur Teams ausbauen?", "Ja. Die Seite ist so aufgebaut, dass manueller Einsatz in API-Nutzung ubergehen kann."],
    ],
  },
  "pt-BR": {
    eyebrow: "Guia de links curtos",
    title: "Use links curtos, QR code, links de marca e fluxos com API.",
    description: "Links curtos, campanhas com QR e uso de API por equipes em um so lugar.",
    overviewTitle: "O que esta pagina busca resolver",
    overviewDescription: "Esta pagina atende uma demanda pratica de short links com fluxo simples e caminho claro para uso em equipe.",
    scenariosTitle: "Casos de uso comuns",
    scenarios: [
      "Campanhas, redes sociais e uso em equipe",
      "Entradas por QR, WhatsApp, produto ou suporte",
      "Primeiro passo antes de um uso recorrente em equipe",
    ],
    faqs: [
      ["Para quem esta pagina serve?", "Para usuarios que precisam de links mais limpos e depois podem expandir para um processo em equipe."],
      ["Isso pode crescer para uso em equipe depois?", "Sim. A estrutura facilita a transicao do uso manual para API."],
    ],
  },
  hi: {
    eyebrow: "Short-link guide",
    title: "Short links, QR codes, branded links aur simple API ek hi jagah.",
    description: "Campaign links, QR pages aur team API usage ke liye ek simple multilingual guide.",
    overviewTitle: "यह पेज आपके किस काम में मदद करता है",
    overviewDescription: "Yeh page real short-link use case ko simple setup ke saath handle karti hai, aur zarurat badhne par team use tak badh sakti hai.",
    scenariosTitle: "आम इस्तेमाल के मामले",
    scenarios: [
      "Campaigns, social sharing aur team use cases",
      "QR, WhatsApp, product ya support entry points",
      "Team usage se pehle ek halka starting point",
    ],
    faqs: [
      ["Yeh page kis type ke users ke liye hai?", "Un users ke liye jo clean link setup chahte hain aur baad me team process tak expand kar sakte hain."],
      ["Kya baad me isse team setup me badla ja sakta hai?", "Haan. Yeh page manual se API usage tak natural path support karti hai."],
    ],
  },
  id: {
    eyebrow: "Panduan short link",
    title: "Short link, QR code, branded link, dan API sederhana dalam satu halaman.",
    description: "Panduan multibahasa untuk link kampanye, alur QR, dan penggunaan API tim.",
    overviewTitle: "Apa yang bisa Anda selesaikan dari halaman ini",
    overviewDescription: "Halaman ini dibuat untuk kebutuhan short link yang nyata, dengan alur sederhana hari ini dan jalur yang jelas jika nanti dipakai oleh tim.",
    scenariosTitle: "Skenario penggunaan umum",
    scenarios: [
      "Kampanye, berbagi sosial, dan penggunaan tim berulang",
      "Titik masuk QR, WhatsApp, produk, atau support",
      "Awal yang ringan sebelum masuk ke penggunaan tim berulang",
    ],
    faqs: [
      ["Halaman ini untuk siapa?", "Untuk pengguna yang membutuhkan alur link yang lebih rapi dan mungkin nanti berkembang ke proses tim."],
      ["Apakah nanti bisa berkembang jadi penggunaan tim?", "Ya. Struktur halaman ini memang mendukung perpindahan dari penggunaan manual ke API."],
    ],
  },
};

const resolveLanguage = (language) => {
  if (!language) return DEFAULT_LANGUAGE;
  if (SUPPORTED_LANGUAGES.includes(language)) return language;
  const fromPath = LANGUAGE_DETAILS.find((candidate) => candidate.path.toLowerCase() === String(language).toLowerCase());
  if (fromPath) return fromPath.code;
  const normalized = String(language).toLowerCase();
  const matched = SUPPORTED_LANGUAGES.find((candidate) => {
    const candidateNormalized = candidate.toLowerCase();
    return candidateNormalized === normalized || candidateNormalized.startsWith(`${normalized}-`) || normalized.startsWith(`${candidateNormalized}-`);
  });
  return matched || DEFAULT_LANGUAGE;
};

const getLanguagePathSegment = (language) =>
  LANGUAGE_DETAILS.find((item) => item.code === resolveLanguage(language))?.path || DEFAULT_LANGUAGE;

const parseSeoRoute = (pathname) => {
  const segments = String(pathname || "/").split("/").filter(Boolean);
  if (segments.length >= 2 && LANGUAGE_PATH_SEGMENTS.includes(segments[0]) && SEO_PAGE_SLUGS.includes(segments[1])) {
    return { language: resolveLanguage(segments[0]), slug: segments[1], isSeoPage: true, isExplicitLanguagePath: true };
  }
  if (segments.length === 1 && LANGUAGE_PATH_SEGMENTS.includes(segments[0])) {
    return { language: resolveLanguage(segments[0]), slug: null, isSeoPage: false, isExplicitLanguagePath: true };
  }
  return { language: DEFAULT_LANGUAGE, slug: null, isSeoPage: false, isExplicitLanguagePath: false };
};

const getRequestSeoState = (pathname, requestedLanguage) => {
  const route = parseSeoRoute(pathname);
  if (route.isSeoPage || route.isExplicitLanguagePath) {
    return route;
  }

  return {
    language: resolveLanguage(requestedLanguage),
    slug: null,
    isSeoPage: false,
    isExplicitLanguagePath: false,
  };
};

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getSeoContent = (language, slug) => {
  if (!slug) return null;
  const resolved = resolveLanguage(language);
  const page = pageCatalog[slug];
  if (!page) return null;
  return page[resolved] || genericFallbacks[resolved] || page[DEFAULT_LANGUAGE] || null;
};

const getHomeSeoContent = (language) => {
  const resolved = resolveLanguage(language);
  if (homepageCatalog[resolved]) {
    return homepageCatalog[resolved];
  }

  const fallback = genericFallbacks[resolved] || genericFallbacks[DEFAULT_LANGUAGE] || genericFallbacks.es;
  return {
    title: siteName,
    description: fallback.description,
    seoTitle: `${fallback.title} | ${siteName}`,
    seoDescription: fallback.description,
    overviewTitle: fallback.overviewTitle,
    overviewDescription: fallback.overviewDescription,
    benefitsTitle: fallback.overviewTitle,
    benefits: fallback.scenarios,
    scenariosTitle: fallback.scenariosTitle,
    scenarios: fallback.scenarios,
    featuredTitle: fallback.scenariosTitle,
    featuredPages: fallback.scenarios,
    faqTitle: "FAQ",
    faqs: [],
  };
};

const buildLocalizedUrl = (baseUrl, language, slug, isSeoPage) => {
  const resolved = resolveLanguage(language);
  const segment = getLanguagePathSegment(resolved);
  if (isSeoPage && slug) {
    return `${baseUrl}/${segment}/${slug}`;
  }
  return `${baseUrl}/${segment}/`;
};

const buildAlternateLinks = (baseUrl, slug, isSeoPage) => {
  const links = SUPPORTED_LANGUAGES.map((language) => (
    `<link rel="alternate" hreflang="${language}" href="${escapeHtml(buildLocalizedUrl(baseUrl, language, slug, isSeoPage))}" />`
  )).join("\n    ");

  return `${links}\n    <link rel="alternate" hreflang="x-default" href="${escapeHtml(buildLocalizedUrl(baseUrl, DEFAULT_LANGUAGE, slug, isSeoPage))}" />`;
};

const buildStructuredData = (url, language, content, includeFaq) => {
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: "https://shorturl.wiki/",
      inLanguage: language,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: content.seoTitle || content.title,
      url,
      inLanguage: language,
      description: content.seoDescription || content.description,
      image: siteImage,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url,
      image: siteImage,
      description: content.seoDescription || content.description,
    },
  ];

  if (includeFaq && content.faqs.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: getFaqAnswerText(answer),
        },
      })),
    });
  }

  return JSON.stringify(graph).replace(/</g, "\\u003c");
};

const buildFeaturedHref = (language, slug) => {
  const segment = getLanguagePathSegment(language);
  return `/${segment}/${slug}`;
};

const getFaqAnswerText = (answer) =>
  typeof answer === "string" ? answer : answer?.text || "";

const getFaqLinkSpacing = (language) => {
  const resolved = resolveLanguage(language);
  return resolved === "zh-CN" || resolved === "ja" ? "" : " ";
};

const getFaqLinkPunctuation = (language) => {
  const resolved = resolveLanguage(language);
  if (resolved === "ko") return "";
  if (resolved === "zh-CN" || resolved === "ja") return "。";
  return ".";
};

const renderFaqAnswer = (language, answer) => {
  const text = getFaqAnswerText(answer);
  if (!answer || typeof answer === "string" || !answer.linkSlug || !answer.linkLabel) {
    return `<p>${escapeHtml(text)}</p>`;
  }

  return `<p>${escapeHtml(text)}${getFaqLinkSpacing(language)}<a class="seo-inline-link" href="${escapeHtml(buildFeaturedHref(language, answer.linkSlug))}">${escapeHtml(answer.linkLabel)}</a>${getFaqLinkPunctuation(language)}</p>`;
};

const buildFeaturedCards = (content, language) =>
  (content.featuredPages || [])
    .map((item, index) => {
      const slug = HOMEPAGE_FEATURED_SLUGS[index];
      if (!slug) {
        return `<li>${escapeHtml(item)}</li>`;
      }
      const featuredContent = getSeoContent(language, slug);
      const description = featuredContent?.description || featuredContent?.overviewDescription || "";
      return `<li class="seo-feature-card">
        <a class="seo-link" href="${escapeHtml(buildFeaturedHref(language, slug))}">
          <span class="seo-feature-title">${escapeHtml(item)}</span>
          <span class="seo-feature-copy">${escapeHtml(description)}</span>
        </a>
      </li>`;
    })
    .join("");

const getRelatedSectionTitle = (language) => {
  const resolved = resolveLanguage(language);
  if (resolved === "zh-CN") return "相关页面";
  if (resolved === "ja") return "関連ページ";
  if (resolved === "ko") return "관련 페이지";
  if (resolved === "es") return "Paginas relacionadas";
  if (resolved === "fr") return "Pages liees";
  if (resolved === "de") return "Verwandte Seiten";
  if (resolved === "pt-BR") return "Paginas relacionadas";
  if (resolved === "hi") return "Related pages";
  if (resolved === "id") return "Halaman terkait";
  return "Related pages";
};

const getRelatedSlugs = (slug) => RELATED_PAGE_GROUPS[slug] || HOMEPAGE_FEATURED_SLUGS.filter((item) => item !== slug).slice(0, 3);

const buildRelatedCards = (language, slug) =>
  getRelatedSlugs(slug)
    .map((relatedSlug) => {
      const relatedContent = getSeoContent(language, relatedSlug);
      if (!relatedContent) return "";
      return `<li class="seo-feature-card">
        <a class="seo-link" href="${escapeHtml(buildFeaturedHref(language, relatedSlug))}">
          <span class="seo-feature-title">${escapeHtml(relatedContent.seoTitle || relatedContent.title)}</span>
          <span class="seo-feature-copy">${escapeHtml(relatedContent.description || relatedContent.overviewDescription || "")}</span>
        </a>
      </li>`;
    })
    .join("");

const buildBenefitCards = (content) =>
  (content.benefits || [])
    .map((item, index) => `<li class="seo-benefit-card">
        <span class="seo-benefit-kicker">0${index + 1}</span>
        <span class="seo-benefit-copy">${escapeHtml(item)}</span>
      </li>`)
    .join("");

const getScenarioStepLabel = (language, index) => {
  const resolved = resolveLanguage(language);
  const number = `0${index + 1}`;
  if (resolved === "zh-CN") return `步骤 ${number}`;
  if (resolved === "ja") return `ステップ ${number}`;
  if (resolved === "ko") return `단계 ${number}`;
  if (resolved === "es") return `Paso ${number}`;
  if (resolved === "fr") return `Etape ${number}`;
  if (resolved === "de") return `Schritt ${number}`;
  if (resolved === "pt-BR") return `Etapa ${number}`;
  if (resolved === "hi") return `चरण ${number}`;
  if (resolved === "id") return `Langkah ${number}`;
  return `Step ${number}`;
};

const buildOverviewHighlights = (content) => {
  const source = (content.heroTags && content.heroTags.length ? content.heroTags : content.benefits || []).slice(0, 3);
  return source
    .map((item) => `<li class="seo-overview-card"><span>${escapeHtml(item)}</span></li>`)
    .join("");
};

const buildScenarioCards = (content, language) =>
  (content.scenarios || [])
    .map((item, index) => `<li class="seo-scenario-card">
        <span class="seo-scenario-kicker">${escapeHtml(getScenarioStepLabel(language, index))}</span>
        <span class="seo-scenario-copy">${escapeHtml(item)}</span>
      </li>`)
    .join("");

const buildHeroTags = (content) =>
  (content.heroTags || [])
    .map((item) => `<li class="seo-hero-tag">${escapeHtml(item)}</li>`)
    .join("");

const buildHeroSummaryCards = (content) => {
  const items = [
    content.overviewTitle,
    content.benefitsTitle || content.scenariosTitle,
    content.scenariosTitle,
    content.featuredTitle,
    content.faqTitle || "FAQ",
  ].filter(Boolean);
  const uniqueItems = [...new Set(items)].slice(0, 3);

  return uniqueItems
    .map((item) => `<li class="seo-hero-summary-card"><span>${escapeHtml(item)}</span></li>`)
    .join("");
};

const getHeroNote = (content) =>
  content.heroNote || content.overviewDescription || "";

const buildRootHtml = (content, language, slug, isSeoPage) => {
  const heroTagsHtml = buildHeroTags(content);
  const heroSummaryHtml = buildHeroSummaryCards(content);
  const benefitsHtml = buildBenefitCards(content);
  const overviewHighlightsHtml = buildOverviewHighlights(content);
  const scenariosHtml = buildScenarioCards(content, language);
  const featuredHtml = buildFeaturedCards(content, language);
  const relatedHtml = isSeoPage && slug ? buildRelatedCards(language, slug) : "";
  const heroNote = getHeroNote(content);
  const faqHtml = content.faqs
    .map(([question, answer]) => `<article class="seo-faq-item"><h3>${escapeHtml(question)}</h3>${renderFaqAnswer(language, answer)}</article>`)
    .join("");
  const benefitsSection = benefitsHtml
    ? `<section class="seo-section">
        <div class="seo-section-head">
          <p class="seo-eyebrow">${escapeHtml(content.benefitsTitle || "Highlights")}</p>
          <h2>${escapeHtml(content.benefitsTitle || "Highlights")}</h2>
        </div>
        <ul class="seo-list">${benefitsHtml}</ul>
      </section>`
    : "";
  const featuredSection = featuredHtml
    ? `<section class="seo-section">
        <div class="seo-section-head">
          <p class="seo-eyebrow">${escapeHtml(content.featuredTitle || "Popular pages")}</p>
          <h2>${escapeHtml(content.featuredTitle || "Popular pages")}</h2>
        </div>
        <ul class="seo-list">${featuredHtml}</ul>
      </section>`
    : "";
  const faqSection = faqHtml
    ? `<section class="seo-section seo-faq">
        <div class="seo-section-head">
          <p class="seo-eyebrow">${escapeHtml(content.faqTitle || "FAQ")}</p>
          <h2>${escapeHtml(content.faqTitle || "FAQ")}</h2>
        </div>
        <div class="seo-faq-grid">${faqHtml}</div>
      </section>`
    : "";
  const relatedSection = relatedHtml
    ? `<section class="seo-section">
        <div class="seo-section-head">
          <p class="seo-eyebrow">${escapeHtml(getRelatedSectionTitle(language))}</p>
          <h2>${escapeHtml(getRelatedSectionTitle(language))}</h2>
        </div>
        <ul class="seo-list">${relatedHtml}</ul>
      </section>`
    : "";

  return `
      <main class="seo-shell">
        <section class="seo-hero">
          <p class="seo-eyebrow">${escapeHtml(content.eyebrow || siteName)}</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p class="seo-lead">${escapeHtml(content.description)}</p>
          ${heroTagsHtml ? `<ul class="seo-hero-tags">${heroTagsHtml}</ul>` : ""}
          ${heroNote ? `<p class="seo-hero-note">${escapeHtml(heroNote)}</p>` : ""}
          ${heroSummaryHtml ? `<ul class="seo-hero-summary">${heroSummaryHtml}</ul>` : ""}
        </section>
        <section class="seo-section">
          <div class="seo-section-head">
            <p class="seo-eyebrow">${escapeHtml(content.overviewTitle)}</p>
            <h2>${escapeHtml(content.overviewTitle)}</h2>
          </div>
          <div class="seo-overview-layout">
            <p class="seo-copy">${escapeHtml(content.overviewDescription)}</p>
            ${overviewHighlightsHtml ? `<ul class="seo-overview-grid">${overviewHighlightsHtml}</ul>` : ""}
          </div>
        </section>
        ${benefitsSection}
        <section class="seo-section">
          <div class="seo-section-head">
            <p class="seo-eyebrow">${escapeHtml(content.scenariosTitle)}</p>
            <h2>${escapeHtml(content.scenariosTitle)}</h2>
          </div>
          <ul class="seo-list">${scenariosHtml}</ul>
        </section>
        ${featuredSection}
        ${relatedSection}
        ${faqSection}
      </main>
    `;
};

const serverFallbackStyles = `
        :root {
            color-scheme: light;
            --seo-ink: #111827;
            --seo-muted: #5b6473;
            --seo-line: rgba(148, 163, 184, 0.28);
            --seo-surface: rgba(255, 255, 255, 0.82);
            --seo-accent: #f59e0b;
            --seo-accent-soft: rgba(245, 158, 11, 0.14);
            --seo-bg-top: #fff7ed;
            --seo-bg-bottom: #fffdf8;
        }
        * { box-sizing: border-box; }
        html { min-height: 100%; }
        body {
            margin: 0;
            min-height: 100vh;
            font-family: "SF Pro Display", "Segoe UI", sans-serif;
            color: var(--seo-ink);
            line-height: 1.65;
            background:
                radial-gradient(circle at top left, rgba(245, 158, 11, 0.18), transparent 30%),
                linear-gradient(180deg, var(--seo-bg-top) 0%, var(--seo-bg-bottom) 100%);
        }
        #root {
            width: 100%;
            padding: 40px 18px 72px;
        }
        .seo-shell {
            width: min(920px, 100%);
            margin: 0 auto;
        }
        .seo-hero,
        .seo-section {
            background: var(--seo-surface);
            backdrop-filter: blur(10px);
            border: 1px solid var(--seo-line);
            border-radius: 28px;
            box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
        }
        .seo-hero {
            position: relative;
            padding: 32px 26px;
            margin-bottom: 18px;
            overflow: hidden;
            background:
                radial-gradient(circle at top right, rgba(245, 158, 11, 0.22), transparent 34%),
                radial-gradient(circle at bottom left, rgba(251, 191, 36, 0.14), transparent 36%),
                linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,250,240,0.84));
        }
        .seo-hero::before {
            content: "";
            position: absolute;
            inset: -20% auto auto 62%;
            width: 240px;
            height: 240px;
            border-radius: 999px;
            background: radial-gradient(circle, rgba(245, 158, 11, 0.16), transparent 68%);
            pointer-events: none;
        }
        .seo-hero > * {
            position: relative;
            z-index: 1;
        }
        .seo-section {
            padding: 24px 26px;
            margin-bottom: 16px;
        }
        .seo-section-head {
            margin-bottom: 14px;
        }
        .seo-eyebrow {
            margin: 0 0 8px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #b45309;
        }
        h1, h2, h3 {
            margin: 0;
            color: var(--seo-ink);
        }
        h1 {
            font-size: clamp(2rem, 5vw, 3.25rem);
            line-height: 1.06;
            letter-spacing: -0.04em;
        }
        h2 {
            font-size: clamp(1.25rem, 3vw, 1.8rem);
            line-height: 1.15;
            letter-spacing: -0.03em;
        }
        h3 {
            font-size: 1rem;
            line-height: 1.3;
        }
        p {
            margin: 0;
        }
        .seo-lead,
        .seo-copy,
        .seo-faq-item p {
            color: var(--seo-muted);
            font-size: 1rem;
        }
        .seo-lead {
            margin-top: 14px;
            max-width: 64ch;
            font-size: 1.05rem;
        }
        .seo-hero-tags {
            list-style: none;
            margin: 18px 0 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .seo-hero-tag {
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid var(--seo-line);
            background: rgba(255, 255, 255, 0.72);
            color: #7c2d12;
            font-size: 0.92rem;
            font-weight: 600;
            letter-spacing: 0.01em;
        }
        .seo-hero-note {
            margin-top: 14px;
            max-width: 62ch;
            color: var(--seo-muted);
            font-size: 0.98rem;
        }
        .seo-hero-summary {
            list-style: none;
            margin: 18px 0 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }
        .seo-hero-summary-card {
            min-height: 74px;
            padding: 14px 15px;
            border-radius: 18px;
            border: 1px solid rgba(180, 83, 9, 0.14);
            background: rgba(255, 255, 255, 0.7);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.45);
            display: flex;
            align-items: flex-start;
        }
        .seo-hero-summary-card span {
            color: #7c2d12;
            font-size: 0.94rem;
            font-weight: 700;
            line-height: 1.45;
        }
        .seo-overview-layout {
            display: grid;
            gap: 16px;
        }
        .seo-overview-grid {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }
        .seo-overview-card {
            min-height: 84px;
            padding: 14px 16px;
            border-radius: 18px;
            border: 1px solid var(--seo-line);
            background: linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,247,237,0.84));
            color: #7c2d12;
            font-size: 0.95rem;
            font-weight: 700;
            line-height: 1.45;
            display: flex;
            align-items: flex-start;
        }
        .seo-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 12px;
        }
        .seo-list li,
        .seo-faq-item {
            padding: 14px 16px;
            border-radius: 18px;
            border: 1px solid var(--seo-line);
            background: linear-gradient(180deg, rgba(255,255,255,0.84), rgba(255,255,255,0.68));
        }
        .seo-link {
            color: inherit;
            text-decoration: none;
            font-weight: 600;
        }
        .seo-feature-card {
            padding: 0 !important;
            overflow: hidden;
        }
        .seo-benefit-card {
            display: grid;
            gap: 12px;
            align-content: start;
        }
        .seo-scenario-card {
            display: grid;
            gap: 12px;
            align-content: start;
        }
        .seo-benefit-card::before {
            display: none !important;
        }
        .seo-scenario-card::before {
            display: none !important;
        }
        .seo-benefit-kicker,
        .seo-benefit-copy,
        .seo-scenario-kicker,
        .seo-scenario-copy {
            display: block;
        }
        .seo-benefit-kicker {
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #b45309;
        }
        .seo-scenario-kicker {
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #92400e;
        }
        .seo-benefit-copy {
            font-size: 1rem;
            color: var(--seo-ink);
            font-weight: 600;
            line-height: 1.55;
        }
        .seo-scenario-copy {
            font-size: 1rem;
            color: var(--seo-ink);
            font-weight: 600;
            line-height: 1.55;
        }
        .seo-feature-card::before {
            display: none !important;
        }
        .seo-feature-card .seo-link {
            display: block;
            padding: 16px 18px;
        }
        .seo-feature-title,
        .seo-feature-copy {
            display: block;
        }
        .seo-feature-title {
            margin-bottom: 8px;
        }
        .seo-feature-copy {
            color: var(--seo-muted);
            font-weight: 400;
            font-size: 0.96rem;
            line-height: 1.6;
        }
        .seo-link:hover,
        .seo-link:focus-visible {
            color: #92400e;
            text-decoration: underline;
        }
        .seo-inline-link {
            color: #92400e;
            font-weight: 600;
            text-decoration: underline;
            text-underline-offset: 0.14em;
        }
        .seo-list li::before {
            content: "";
            display: inline-block;
            width: 9px;
            height: 9px;
            margin-right: 10px;
            border-radius: 999px;
            background: var(--seo-accent);
            box-shadow: 0 0 0 6px var(--seo-accent-soft);
            vertical-align: middle;
        }
        .seo-faq-grid {
            display: grid;
            gap: 12px;
        }
        .seo-faq-item h3 {
            margin-bottom: 8px;
        }
        @media (max-width: 640px) {
            #root { padding: 24px 14px 48px; }
            .seo-hero { padding: 24px 18px; border-radius: 22px; }
            .seo-section { padding: 18px; border-radius: 22px; }
            .seo-hero-summary { grid-template-columns: 1fr; }
            .seo-overview-grid { grid-template-columns: 1fr; }
            .seo-list li,
            .seo-faq-item { padding: 13px 14px; }
        }
    `;

const injectSeoIntoHtml = (html, { baseUrl, url, language, content, isSeoPage, slug }) => {
  const title = escapeHtml(content.seoTitle || content.title);
  const description = escapeHtml(content.seoDescription || content.description);
  const rootHtml = buildRootHtml(content, language, slug, isSeoPage);
  const structuredData = buildStructuredData(url, language, content, isSeoPage);
  const alternateLinks = buildAlternateLinks(baseUrl, slug, isSeoPage);

  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:type" content="[^"]*"\s*\/>/, `<meta property="og:type" content="${isSeoPage ? "article" : "website"}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${escapeHtml(url)}" />`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${siteImage}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`)
    .replace(/<style>[\s\S]*?<\/style>/, `<style>${serverFallbackStyles}</style>`)
    .replace(/<body>[\s\S]*?<div id="root">[\s\S]*?<\/div>/, `<body>\n    <div id="root">${rootHtml}</div>`)
    .replace(/<\/head>/, `    <link rel="canonical" href="${escapeHtml(url)}" />\n    ${alternateLinks}\n    <script id="server-structured-data" type="application/ld+json">${structuredData}</script>\n</head>`);
};

module.exports = {
  parseSeoRoute,
  getRequestSeoState,
  getSeoContent,
  getHomeSeoContent,
  injectSeoIntoHtml,
};
