import { DEFAULT_LANGUAGE, resolveLanguage } from "./i18n";
import { getSeoPageBody } from "./seoPageBodies";

const pageCatalog = {
  "url-shortener": {
    en: {
      eyebrow: "URL shortener",
      title: "Shorten URLs for campaigns, social posts, and recurring team use.",
      description:
        "Use this URL shortener to create clean links for WhatsApp, social media, email campaigns, and recurring team use without extra setup.",
      seoTitle: "URL Shortener for Campaigns and Social Links | ShortURL Wiki",
      seoDescription:
        "Shorten URLs for campaigns, social posts, WhatsApp sharing, and team use with clean links, fast redirects, and a simple setup.",
    },
    "zh-CN": {
      eyebrow: "短链接生成器",
      title: "给活动投放、社媒分发和团队协作准备的短链接。",
      description:
        "适合活动页、WhatsApp 分享、社媒内容分发和内部工作流，用更短、更干净的链接提升点击和传播效率。",
      seoTitle: "短链接生成器，适合活动投放与社媒分发 | ShortURL Wiki",
      seoDescription:
        "生成适合活动投放、WhatsApp 分享、社媒分发和团队协作的短链接，保持跳转快速、链接整洁、使用简单。",
    },
    ja: {
      eyebrow: "URL短縮",
      title: "キャンペーン、SNS投稿、チーム運用向けの短縮URL。",
      description:
        "WhatsApp共有、SNS配信、メール施策、社内ワークフローに使える、整理しやすい短縮リンクを作成できます。",
      seoTitle: "キャンペーン向けURL短縮ツール | ShortURL Wiki",
      seoDescription:
        "SNS投稿、WhatsApp共有、キャンペーン運用、チーム作業に使える短縮URLを高速に作成できます。",
    },
    ko: {
      eyebrow: "URL 단축",
      title: "캠페인, 소셜 공유, 팀 업무에 맞는 깔끔한 단축 링크.",
      description:
        "WhatsApp 공유, 소셜 게시물, 이메일 캠페인, 내부 운영 흐름에 바로 쓸 수 있는 짧고 정돈된 링크를 만듭니다.",
      seoTitle: "캠페인과 공유용 URL 단축 도구 | ShortURL Wiki",
      seoDescription:
        "캠페인, 소셜, WhatsApp, 팀 워크플로에 맞는 깔끔한 단축 링크를 빠르게 생성하세요.",
    },
    es: {
      eyebrow: "Acortador de URL",
      title: "Acorta URLs para campanas, redes sociales y flujos de equipo.",
      description:
        "Crea links mas limpios para WhatsApp, social media, email y uso en equipo sin montar un flujo complicado.",
      seoTitle: "Acortador de URL para campanas y distribucion | ShortURL Wiki",
      seoDescription:
        "Acorta URLs para campanas, redes, WhatsApp y uso en equipo con links limpios y un flujo simple para equipos.",
    },
    fr: {
      eyebrow: "Raccourcisseur d'URL",
      title: "Raccourcissez des URL pour les campagnes, les reseaux sociaux et les usages equipe.",
      description:
        "Creez des liens plus propres pour WhatsApp, les reseaux sociaux, les emails et les usages equipe sans mettre en place un flux complexe.",
      seoTitle: "Raccourcisseur d'URL pour campagnes et partage | ShortURL Wiki",
      seoDescription:
        "Raccourcissez vos URL pour les campagnes, le social, WhatsApp et les usages equipe avec des liens plus propres et un flux simple.",
    },
    de: {
      eyebrow: "URL-Kurzlink",
      title: "Kurze URLs fur Kampagnen, Teilen in sozialen Kanalen und Teamnutzung.",
      description:
        "Erstelle sauberere Links fur WhatsApp, Social Media, E-Mail-Kampagnen und Teamnutzung ohne zusatzlichen Setup-Aufwand.",
      seoTitle: "URL-Kurzlinks fur Kampagnen und Verteilung | ShortURL Wiki",
      seoDescription:
        "Kurze, saubere URLs fur Kampagnen, Social Posts, WhatsApp und Teamnutzung.",
    },
    "pt-BR": {
      eyebrow: "Encurtador de URL",
      title: "Encurte URLs para campanhas, redes sociais e fluxos de equipe.",
      description:
        "Crie links mais limpos para WhatsApp, redes sociais, email e uso em equipe sem precisar montar um fluxo complicado.",
      seoTitle: "Encurtador de URL para campanhas e distribuicao | ShortURL Wiki",
      seoDescription:
        "Encurte URLs para campanhas, social, WhatsApp e uso em equipe com links mais limpos e um fluxo simples para equipes.",
    },
  },
  "qr-code-generator": {
    en: {
      eyebrow: "QR code generator",
      title: "Turn any short link into a QR code ready for print and mobile sharing.",
      description:
        "Create a short URL first, then download a QR code for posters, packaging, events, menus, and mobile-first campaigns.",
      seoTitle: "QR Code Generator for Short Links and Campaigns | ShortURL Wiki",
      seoDescription:
        "Generate QR codes from short links for print, packaging, events, restaurant menus, and mobile campaigns with a clean short-link setup.",
    },
    "zh-CN": {
      eyebrow: "二维码生成器",
      title: "把短链接直接变成适合打印和移动传播的二维码。",
      description:
        "先生成短链，再一键下载二维码，适合海报、包装、活动页、菜单页和移动端推广场景。",
      seoTitle: "二维码生成器，适合海报、菜单和活动页 | ShortURL Wiki",
      seoDescription:
        "基于短链接快速生成二维码，适合打印物料、包装、活动页、餐厅菜单和移动端传播。",
    },
    ja: {
      eyebrow: "QRコード生成",
      title: "短縮リンクをそのまま印刷・配布向けQRコードに変換。",
      description:
        "ポスター、イベント、メニュー、パッケージ、モバイル施策向けにQRコードを簡単に作成できます。",
      seoTitle: "短縮URL対応QRコード生成ツール | ShortURL Wiki",
      seoDescription:
        "印刷物、イベント、メニュー、モバイル施策向けに短縮URLからQRコードを生成できます。",
    },
    ko: {
      eyebrow: "QR 코드 생성기",
      title: "짧은 링크를 인쇄물과 모바일 공유에 맞는 QR 코드로 바로 변환.",
      description:
        "포스터, 패키지, 행사, 메뉴, 오프라인 안내물에 쓰기 좋은 QR 코드를 단축 링크 기반으로 빠르게 만들 수 있습니다.",
      seoTitle: "단축 링크용 QR 코드 생성기 | ShortURL Wiki",
      seoDescription:
        "단축 링크에서 QR 코드를 만들어 포스터, 메뉴, 패키지, 행사 현장 배포에 활용하세요.",
    },
    es: {
      eyebrow: "Generador de QR",
      title: "Convierte cualquier link corto en un QR listo para imprimir y compartir en el celular.",
      description:
        "Primero crea el link corto y luego descarga el QR para posters, packaging, eventos, menus y campanas con trafico movil.",
      seoTitle: "Generador de QR para links cortos y material impreso | ShortURL Wiki",
      seoDescription:
        "Genera codigos QR desde links cortos para posters, packaging, menus, eventos y campanas para celular con un flujo mas limpio.",
    },
    fr: {
      eyebrow: "Generateur de QR code",
      title: "Transformez n'importe quel lien court en QR code pret pour l'impression et le partage sur smartphone.",
      description:
        "Creez d'abord un lien court, puis telechargez un QR code pour affiches, packaging, evenements, menus et campagnes sur smartphone.",
      seoTitle: "Generateur de QR code pour liens courts et supports imprimes | ShortURL Wiki",
      seoDescription:
        "Generez des QR codes a partir de liens courts pour affiches, packaging, menus, evenements et campagnes sur smartphone avec un flux plus propre.",
    },
    de: {
      eyebrow: "QR-Code-Generator",
      title: "Jeden Kurzlink direkt in einen QR-Code fur Print und Mobile verwandeln.",
      description:
        "Erstelle zuerst einen Kurzlink und lade danach den QR-Code fur Poster, Verpackungen, Events, Menus und Mobile-Kampagnen herunter.",
      seoTitle: "QR-Code-Generator fur Kurzlinks und Printmaterial | ShortURL Wiki",
      seoDescription:
        "Erzeuge QR-Codes aus Kurzlinks fur Poster, Verpackungen, Menus, Events und mobile Kampagnen mit einem saubereren Workflow.",
    },
    "pt-BR": {
      eyebrow: "Gerador de QR code",
      title: "Transforme qualquer link curto em um QR code pronto para impressao e compartilhamento no celular.",
      description:
        "Crie primeiro o link curto e depois baixe o QR code para posters, embalagens, eventos, menus e campanhas no celular.",
      seoTitle: "Gerador de QR code para links curtos e material impresso | ShortURL Wiki",
      seoDescription:
        "Gere QR codes a partir de links curtos para posters, embalagens, menus, eventos e campanhas no celular com um fluxo mais limpo.",
    },
  },
  "branded-short-links": {
    en: {
      eyebrow: "Branded short links",
      title: "Use cleaner branded links for trust, recall, and better campaign presentation.",
      description:
        "Branded short links help teams keep marketing links consistent across campaign pages, email, social posts, and public documents.",
      seoTitle: "Branded Short Links for Marketing Teams | ShortURL Wiki",
      seoDescription:
        "Create branded short links for cleaner campaigns, stronger trust, and consistent link presentation across social, email, and campaign pages.",
    },
    "zh-CN": {
      eyebrow: "品牌短链",
      title: "用更整洁的品牌短链提升信任感和传播一致性。",
      description:
        "品牌短链适合投放、社媒、邮件和活动页，让团队在外部传播时保持统一的链接风格。",
      seoTitle: "品牌短链，适合营销和增长团队 | ShortURL Wiki",
      seoDescription:
        "创建更干净的品牌短链，用于投放、社媒、邮件和活动页，提升信任感和品牌一致性。",
    },
    ja: {
      eyebrow: "ブランド短縮リンク",
      title: "信頼感と運用の統一感を高めるブランド短縮リンク。",
      description:
        "広告、メール、SNS、ランディングページでリンク表記を揃えたいチームに向いています。",
      seoTitle: "ブランド短縮リンクで信頼感を向上 | ShortURL Wiki",
      seoDescription:
        "広告、SNS、メール、LP運用に向けたブランド短縮リンクでリンク体験を統一できます。",
    },
    ko: {
      eyebrow: "브랜디드 단축 링크",
      title: "신뢰도와 캠페인 완성도를 높여 주는 더 깔끔한 브랜드 단축 링크.",
      description:
        "캠페인 페이지, 이메일, 소셜 게시물, 공개 문서 전반에서 링크 표현을 일관되게 유지하려는 팀에 잘 맞습니다.",
      seoTitle: "마케팅 팀을 위한 브랜드 단축 링크 | ShortURL Wiki",
      seoDescription:
        "캠페인, 이메일, 소셜, 공개 문서에서 더 깔끔하고 신뢰감 있는 브랜드 단축 링크를 사용하세요.",
    },
    es: {
      eyebrow: "Links cortos de marca",
      title: "Usa links cortos de marca mas limpios para transmitir confianza y dar mejor forma a tus campanas.",
      description:
        "Ayudan a que equipos de marketing mantengan el mismo estilo de link en paginas de campana, email, redes sociales y documentos publicos.",
      seoTitle: "Links cortos de marca para equipos de marketing | ShortURL Wiki",
      seoDescription:
        "Crea links cortos de marca para campanas, email y redes con una presentacion mas limpia y consistente.",
    },
    fr: {
      eyebrow: "Liens courts de marque",
      title: "Des liens courts de marque plus propres pour inspirer confiance et mieux presenter vos campagnes.",
      description:
        "Ils aident les equipes a garder des liens coherents sur les pages de campagne, les emails, les reseaux sociaux et les documents publics.",
      seoTitle: "Liens courts de marque pour les equipes marketing | ShortURL Wiki",
      seoDescription:
        "Creez des liens courts de marque plus propres pour les campagnes, les emails, les reseaux sociaux et les documents publics.",
    },
    de: {
      eyebrow: "Gebrandete Kurzlinks",
      title: "Saubere gebrandete Kurzlinks fur mehr Vertrauen, Wiedererkennung und bessere Kampagnenprasentation.",
      description:
        "Ideal fur Teams, die Links in Kampagnenseiten, E-Mails, Social Posts und offentlichen Dokumenten einheitlich halten wollen.",
      seoTitle: "Gebrandete Kurzlinks fur Marketing-Teams | ShortURL Wiki",
      seoDescription:
        "Nutze gebrandete Kurzlinks fur sauberere Kampagnen, mehr Vertrauen und konsistente Linkdarstellung.",
    },
    "pt-BR": {
      eyebrow: "Links curtos com marca",
      title: "Use links curtos com marca mais limpos para gerar confianca e melhorar a apresentacao das campanhas.",
      description:
        "Eles ajudam equipes a manter o mesmo padrao de link em paginas de campanha, email, redes sociais e documentos publicos.",
      seoTitle: "Links curtos com marca para times de marketing | ShortURL Wiki",
      seoDescription:
        "Crie links curtos com marca para campanhas, email e redes sociais com apresentacao mais limpa e consistente.",
    },
    hi: {
      eyebrow: "Branded short links",
      title: "Branded short links se campaigns ko zyada भरोसेमंद aur clean dikhayein.",
      description:
        "Marketing teams branded short links ki madad se campaign pages, email, social posts aur public docs me ek jaisa link format rakh sakti hain.",
      seoTitle: "Marketing teams के लिए branded short links | ShortURL Wiki Hindi",
      seoDescription:
        "Social, email aur campaign pages me साफ presentation aur बेहतर trust ke liye branded short links banayein.",
    },
    id: {
      eyebrow: "Short link bermerek",
      title: "Gunakan branded short link yang lebih rapi agar kampanye terlihat lebih meyakinkan.",
      description:
        "Branded short link membantu tim menjaga tampilan tautan tetap konsisten di halaman kampanye, email, posting sosial, dan dokumen publik.",
      seoTitle: "Branded short link untuk tim marketing | ShortURL Wiki",
      seoDescription:
        "Buat branded short link untuk kampanye yang lebih rapi, lebih dipercaya, dan lebih konsisten di sosial, email, dan halaman kampanye.",
    },
  },
  "url-shortener-api": {
    en: {
      eyebrow: "URL shortener API",
      title: "Use a URL shortener API for product teams, campaign tools, and automation tasks.",
      description:
        "Generate short links with one request, track monthly usage, and keep campaign or product usage predictable with monthly plans.",
      seoTitle: "URL Shortener API with Monthly Plans | ShortURL Wiki",
      seoDescription:
        "Use a short-link API for product tools, campaign tools, QR code pages, and automation tasks with predictable monthly plans.",
    },
    "zh-CN": {
      eyebrow: "短链 API",
      title: "给产品功能、活动系统和自动化场景使用的短链接 API。",
      description:
        "支持一键生成短链、查询月度用量，适合活动系统、内容后台、二维码页面和自动化场景。",
      seoTitle: "短链接 API，适合产品与增长系统接入 | ShortURL Wiki",
      seoDescription:
        "通过短链接 API 接入活动系统、二维码页面、产品后台和自动化场景，支持按月套餐和稳定用量控制。",
    },
    ja: {
      eyebrow: "短縮リンクAPI",
      title: "プロダクト、施策ツール、社内自動化向けの短縮リンクAPI。",
      description:
        "1リクエストで短縮URLを生成し、月間使用量も確認できるため、チーム運用に向いています。",
      seoTitle: "月額型URL短縮API | ShortURL Wiki",
      seoDescription:
        "プロダクト機能、施策ツール、QR導線、社内自動化向けに使える月額型のURL短縮APIです。",
    },
    ko: {
      eyebrow: "URL 단축 API",
      title: "제품 기능, 캠페인 도구, 자동화 작업을 위한 URL 단축 API.",
      description:
        "한 번의 요청으로 단축 링크를 만들고 월간 사용량까지 확인할 수 있어 팀 단위 운영에 잘 맞습니다.",
      seoTitle: "월간 요금 기반 URL 단축 API | ShortURL Wiki",
      seoDescription:
        "제품 기능, 캠페인 도구, QR 페이지, 자동화 작업을 위한 단축 링크 API를 월간 플랜으로 운영하세요.",
    },
    es: {
      eyebrow: "API de acortador de URL",
      title: "Usa una API de links cortos para producto, campanas y tareas automatizadas.",
      description:
        "Genera links cortos con una sola peticion, revisa el uso mensual y manten mas predecibles los flujos de producto y marketing.",
      seoTitle: "API de acortador de URL con planes mensuales | ShortURL Wiki",
      seoDescription:
        "Integra una API de links cortos para producto, campanas, paginas QR y tareas automatizadas con un modelo mensual mas predecible.",
    },
    fr: {
      eyebrow: "API de raccourcisseur d'URL",
      title: "Utilisez une API de liens courts pour le produit, les campagnes et les taches automatisees.",
      description:
        "Generez des liens courts avec une seule requete, suivez l'usage mensuel et gardez des flux produit et marketing plus previsibles.",
      seoTitle: "API de raccourcisseur d'URL avec forfaits mensuels | ShortURL Wiki",
      seoDescription:
        "Integrez une API de liens courts pour le produit, les campagnes, les pages QR et les taches automatisees avec un modele mensuel plus previsible.",
    },
    de: {
      eyebrow: "URL-Shortener-API",
      title: "Eine URL-Shortener-API fur Produktfunktionen, Kampagnen-Tools und Automatisierung.",
      description:
        "Erzeuge Kurzlinks per Anfrage, uberblicke die monatliche Nutzung und halte Produkt- und Kampagnenablaufe planbar.",
      seoTitle: "URL-Shortener-API mit Monatsplanen | ShortURL Wiki",
      seoDescription:
        "Integriere eine Kurzlink-API fur Produktfunktionen, Kampagnen, QR-Seiten und Automatisierung mit planbaren Monatskontingenten.",
    },
    "pt-BR": {
      eyebrow: "API de encurtador de URL",
      title: "Use uma API de links curtos para produto, ferramentas de campanha e tarefas automatizadas.",
      description:
        "Gere links curtos com uma unica requisicao, acompanhe o uso mensal e mantenha rotinas de produto e marketing mais previsiveis.",
      seoTitle: "API de encurtador de URL com planos mensais | ShortURL Wiki",
      seoDescription:
        "Integre uma API de links curtos para produto, campanhas, paginas QR e tarefas automatizadas com um modelo mensal mais previsivel.",
    },
  },
  "whatsapp-link-shortener": {
    en: {
      eyebrow: "WhatsApp link shortener",
      title: "Create cleaner WhatsApp links for sharing, support flows, and campaign entry points.",
      description:
        "Use shorter WhatsApp links in bios, ads, QR codes, and sales or support journeys where long URLs look messy.",
      seoTitle: "WhatsApp Link Shortener for Sharing and Campaigns | ShortURL Wiki",
      seoDescription:
        "Shorten WhatsApp links for bios, ads, QR codes, support flows, and campaign entry points with cleaner sharing URLs.",
    },
    "zh-CN": {
      eyebrow: "WhatsApp 短链",
      title: "为 WhatsApp 分享、客服入口和投放链路生成更整洁的短链。",
      description:
        "适合放在简介页、广告入口、二维码和销售/客服流程里，避免原始链接过长影响点击。",
      seoTitle: "WhatsApp 短链生成器 | ShortURL Wiki",
      seoDescription:
        "把 WhatsApp 链接缩短成更适合简介页、广告、二维码和客服入口使用的干净短链。",
    },
    ja: {
      eyebrow: "WhatsApp短縮リンク",
      title: "共有、サポート導線、広告流入向けにWhatsAppリンクを短縮。",
      description:
        "プロフィール、広告、QRコード、営業・サポート導線で長いWhatsAppリンクを見やすく整理できます。",
      seoTitle: "WhatsApp短縮リンク作成 | ShortURL Wiki",
      seoDescription:
        "プロフィール、広告、QRコード、サポート導線向けにWhatsAppリンクを短縮できます。",
    },
    ko: {
      eyebrow: "WhatsApp 링크 단축",
      title: "공유, 지원 흐름, 캠페인 진입용으로 더 깔끔한 WhatsApp 링크.",
      description:
        "바이오, 광고, QR 코드, 영업 또는 고객지원 흐름에서 긴 WhatsApp 링크를 더 짧고 정돈되게 보여 줄 수 있습니다.",
      seoTitle: "공유와 캠페인용 WhatsApp 링크 단축 | ShortURL Wiki",
      seoDescription:
        "바이오, 광고, QR 코드, 지원 흐름에 맞게 WhatsApp 링크를 더 짧고 깔끔하게 정리하세요.",
    },
    es: {
      eyebrow: "Acortador de link de WhatsApp",
      title: "Crea links de WhatsApp mas limpios para compartir, soporte y entradas de campana.",
      description:
        "Usa links de WhatsApp mas cortos en bios, anuncios, QR y flujos de ventas o soporte donde una URL larga se ve desordenada.",
      seoTitle: "Acortador de link de WhatsApp para campanas y soporte | ShortURL Wiki",
      seoDescription:
        "Acorta links de WhatsApp para bios, anuncios, QR, soporte y entradas de campana con una presentacion mas limpia.",
    },
    fr: {
      eyebrow: "Raccourcisseur de lien WhatsApp",
      title: "Creez des liens WhatsApp plus propres pour le partage, le support et les entrees de campagne.",
      description:
        "Utilisez des liens WhatsApp plus courts dans les bios, publicites, QR codes et parcours de vente ou support ou une URL longue parait desordonnee.",
      seoTitle: "Raccourcisseur de lien WhatsApp pour campagnes et support | ShortURL Wiki",
      seoDescription:
        "Raccourcissez vos liens WhatsApp pour les bios, publicites, QR codes, flux support et entrees de campagne avec une presentation plus propre.",
    },
    de: {
      eyebrow: "WhatsApp-Link-Kurzlink",
      title: "Sauberere WhatsApp-Links fur Teilen, Support und Kampagnen-Einstiege.",
      description:
        "Nutze kurzere WhatsApp-Links in Bios, Anzeigen, QR-Codes sowie Support- oder Sales-Ablaufen, wenn lange URLs unruhig wirken.",
      seoTitle: "WhatsApp-Link-Kurzlink fur Kampagnen und Support | ShortURL Wiki",
      seoDescription:
        "Kurze WhatsApp-Links fur Bios, Anzeigen, QR-Codes, Support-Flows und Kampagnen-Einstiege mit saubererer Darstellung.",
    },
    "pt-BR": {
      eyebrow: "Encurtador de link do WhatsApp",
      title: "Crie links do WhatsApp mais limpos para compartilhamento, suporte e entradas de campanha.",
      description:
        "Use links do WhatsApp mais curtos em bios, anuncios, QR codes e fluxos de vendas ou suporte onde uma URL longa parece confusa.",
      seoTitle: "Encurtador de link do WhatsApp para campanhas e suporte | ShortURL Wiki",
      seoDescription:
        "Encurte links do WhatsApp para bios, anuncios, QR codes, fluxos de suporte e entradas de campanha com apresentacao mais limpa.",
    },
  },
  "link-analytics": {
    en: {
      eyebrow: "Link analytics",
      title: "Track link usage with a simpler monthly quota model.",
      description:
        "Review how many links your team creates through the API and keep campaign or product usage inside a predictable monthly plan.",
      seoTitle: "Short Link Analytics and Usage Tracking | ShortURL Wiki",
      seoDescription:
        "Track link usage through a cleaner monthly plan model for campaigns, teams, and product use.",
    },
    "zh-CN": {
      eyebrow: "链接统计",
      title: "用更简单的按月额度方式查看短链使用情况。",
      description:
        "适合团队按月管理 API 使用量，观察活动链路、产品功能和产品工具里的短链消耗。",
      seoTitle: "短链接统计与用量管理 | ShortURL Wiki",
      seoDescription:
        "通过按月额度查看短链 API 使用量，适合活动投放、产品功能和团队工具管理。",
    },
    ja: {
      eyebrow: "リンク分析",
      title: "月額プラン前提で短縮リンク利用量を把握。",
      description:
        "チームのAPI利用量を確認し、施策やプロダクト運用での短縮リンク消費を見通しやすくします。",
      seoTitle: "短縮リンク分析と利用量確認 | ShortURL Wiki",
      seoDescription:
        "月額プランベースで短縮リンクAPIの利用量を把握しやすくします。",
    },
    ko: {
      eyebrow: "링크 분석",
      title: "더 단순한 월간 한도 방식으로 단축 링크 사용량을 확인.",
      description:
        "팀이 API로 얼마나 많은 링크를 만들고 있는지 보고 캠페인이나 제품 사용량을 예측 가능한 월간 플랜 안에서 관리할 수 있습니다.",
      seoTitle: "단축 링크 분석과 사용량 추적 | ShortURL Wiki",
      seoDescription:
        "캠페인, 팀 운영, 내부 제품 흐름을 위해 단축 링크 사용량을 더 간단한 월간 모델로 추적하세요.",
    },
    es: {
      eyebrow: "Analitica de links",
      title: "Sigue el uso de enlaces cortos con un modelo mensual mas simple.",
      description:
        "Revisa cuantos links crea tu equipo mediante la API y mantien el uso de campanas o producto dentro de un plan mensual mas predecible.",
      seoTitle: "Analitica de enlaces cortos y seguimiento de uso | ShortURL Wiki",
      seoDescription:
        "Controla el uso de enlaces cortos con un modelo mensual mas claro para campanas, equipos y uso de producto.",
    },
    fr: {
      eyebrow: "Analytique des liens",
      title: "Suivez l'usage des liens courts avec un modele mensuel plus simple.",
      description:
        "Consultez combien de liens votre equipe cree via l'API et gardez les usages campagne ou produit dans un forfait mensuel plus previsible.",
      seoTitle: "Analytique des liens courts et suivi d'usage | ShortURL Wiki",
      seoDescription:
        "Suivez l'usage des liens courts avec un modele mensuel plus clair pour les campagnes, les equipes et les usages produit.",
    },
    de: {
      eyebrow: "Link-Analytics",
      title: "Kurzlink-Nutzung mit einem einfacheren Monatsmodell verfolgen.",
      description:
        "Sieh dir an, wie viele Links dein Team uber die API erstellt, und halte Kampagnen- oder Produktnutzung in einem planbaren Monatskontingent.",
      seoTitle: "Kurzlink-Analytics und Nutzungsverfolgung | ShortURL Wiki",
      seoDescription:
        "Verfolge Kurzlink-Nutzung mit einem klareren Monatsmodell fur Kampagnen, Teams und Produktnutzung.",
    },
    "pt-BR": {
      eyebrow: "Analitica de links",
      title: "Acompanhe o uso de links curtos com um modelo mensal mais simples.",
      description:
        "Veja quantos links sua equipe cria via API e mantenha o uso de campanhas ou produto dentro de um plano mensal mais previsivel.",
      seoTitle: "Analitica de links curtos e acompanhamento de uso | ShortURL Wiki",
      seoDescription:
        "Acompanhe o uso de links curtos com um modelo mensal mais claro para campanhas, equipes e uso de produto.",
    },
  },
  "bio-link-shortener": {
    en: {
      eyebrow: "Bio link shortener",
      title: "Create cleaner bio links for Instagram, TikTok, and creator profile pages.",
      description:
        "Shorten links used in bios, creator profiles, and personal pages so they look cleaner and are easier to trust across social platforms.",
      seoTitle: "Bio Link Shortener for Instagram and TikTok | ShortURL Wiki",
      seoDescription:
        "Shorten bio links for Instagram, TikTok, creator profiles, and social profile pages with cleaner URLs that fit public-facing distribution.",
    },
    "zh-CN": {
      eyebrow: "简介页短链",
      title: "给 Instagram、TikTok 和创作者简介页准备的干净短链。",
      description:
        "适合简介页、个人主页、创作者页面和社媒资料页，让公开展示出来的链接更短、更整洁、更容易点击。",
      seoTitle: "简介页短链，适合 Instagram 与 TikTok | ShortURL Wiki",
      seoDescription:
        "把简介页和创作者资料页里的链接缩短成更适合社媒公开展示的干净短链。",
    },
    ja: {
      eyebrow: "プロフィール短縮リンク",
      title: "Instagram、TikTok、プロフィールページ向けの短縮リンク。",
      description:
        "SNSプロフィール、クリエイターページ、個人LPに使うリンクを短く整理して見やすくできます。",
      seoTitle: "プロフィール向け短縮リンク | ShortURL Wiki",
      seoDescription:
        "Instagram、TikTok、プロフィールLP向けに見やすい短縮リンクを作成できます。",
    },
    ko: {
      eyebrow: "바이오 링크 단축",
      title: "Instagram, TikTok, 크리에이터 프로필에 어울리는 더 깔끔한 바이오 링크.",
      description:
        "바이오, 크리에이터 프로필, 개인 페이지에 노출되는 링크를 더 짧고 보기 좋게 정리해 공개 채널에서 신뢰감을 높입니다.",
      seoTitle: "Instagram과 TikTok용 바이오 링크 단축 | ShortURL Wiki",
      seoDescription:
        "Instagram, TikTok, 크리에이터 프로필용 바이오 링크를 더 짧고 깔끔하게 정리하세요.",
    },
    es: {
      eyebrow: "Acortador de link bio",
      title: "Crea links bio mas limpios para Instagram, TikTok y perfiles de creadores.",
      description:
        "Acorta los links que muestras en bios, perfiles y paginas personales para que se vean mas ordenados y generen mas confianza en redes.",
      seoTitle: "Acortador de link bio para Instagram y TikTok | ShortURL Wiki",
      seoDescription:
        "Acorta links bio para Instagram, TikTok y perfiles de creadores con URLs mas limpias para espacios publicos.",
    },
    fr: {
      eyebrow: "Raccourcisseur de lien bio",
      title: "Creez des liens bio plus propres pour Instagram, TikTok et les profils de createurs.",
      description:
        "Raccourcissez les liens affiches dans les bios, profils createurs et pages personnelles pour un rendu plus net et plus rassurant.",
      seoTitle: "Raccourcisseur de lien bio pour Instagram et TikTok | ShortURL Wiki",
      seoDescription:
        "Raccourcissez vos liens bio Instagram, TikTok et profils createurs avec des URLs plus propres pour les espaces publics.",
    },
    de: {
      eyebrow: "Bio-Link-Kurzlink",
      title: "Erstelle sauberere Bio-Links fur Instagram, TikTok und Creator-Profile.",
      description:
        "Kurzere Links fur Bios, Creator-Profile und personliche Seiten sehen offentlich sauberer aus und wirken vertrauenswurdiger.",
      seoTitle: "Bio-Link-Kurzlink fur Instagram und TikTok | ShortURL Wiki",
      seoDescription:
        "Kurze Bio-Links fur Instagram, TikTok und Creator-Profile mit saubereren URLs fur offentliche Profile.",
    },
    "pt-BR": {
      eyebrow: "Encurtador de link da bio",
      title: "Crie links de bio mais limpos para Instagram, TikTok e perfis de criadores.",
      description:
        "Encurte os links usados em bios, perfis de criadores e paginas pessoais para que parecam mais organizados e confiaveis nas redes.",
      seoTitle: "Encurtador de link da bio para Instagram e TikTok | ShortURL Wiki",
      seoDescription:
        "Encurte links da bio para Instagram, TikTok e perfis de criadores com URLs mais limpas para exibicao publica.",
    },
    hi: {
      eyebrow: "Bio link shortener",
      title: "Instagram, TikTok aur creator pages ke liye clean bio links banayein.",
      description:
        "Bio, creator pages aur personal profiles par dikhne wale links ko short karke unhe zyada clean aur trustworthy banaya ja sakta hai.",
      seoTitle: "Instagram और TikTok के लिए bio link shortener | ShortURL Wiki Hindi",
      seoDescription:
        "Instagram, TikTok, creator pages aur social profiles ke liye clean bio links banayein.",
    },
    id: {
      eyebrow: "Pemendek link bio",
      title: "Buat link bio yang lebih rapi untuk Instagram, TikTok, dan halaman profil kreator.",
      description:
        "Pendekkan link yang dipakai di bio, profil kreator, dan halaman pribadi agar terlihat lebih bersih dan lebih mudah dipercaya di platform sosial.",
      seoTitle: "Pemendek link bio untuk Instagram dan TikTok | ShortURL Wiki",
      seoDescription:
        "Pendekkan link bio untuk Instagram, TikTok, profil kreator, dan halaman profil sosial dengan URL yang lebih rapi.",
    },
  },
  "sms-link-shortener": {
    en: {
      eyebrow: "SMS link shortener",
      title: "Use shorter links in SMS campaigns, alerts, and phone notifications.",
      description:
        "Make links easier to read and share inside SMS campaigns, one-time alerts, support texts, and transactional phone messages.",
      seoTitle: "SMS Link Shortener for Campaigns and Alerts | ShortURL Wiki",
      seoDescription:
        "Shorten links for SMS campaigns, alerts, support messages, and phone notifications with cleaner URLs for text-based delivery.",
    },
    "zh-CN": {
      eyebrow: "短信短链",
      title: "适合短信营销、通知提醒和移动消息推送的短链。",
      description:
        "让短信里的链接更短、更清晰，适合营销短信、一次性提醒、客服短信和事务型通知。",
      seoTitle: "短信短链，适合营销与通知提醒 | ShortURL Wiki",
      seoDescription:
        "把短信营销、提醒通知和移动消息里的链接缩短成更适合文本分发的短链。",
    },
    ja: {
      eyebrow: "SMS短縮リンク",
      title: "SMS配信、通知、モバイルメッセージ向けの短縮リンク。",
      description:
        "SMSキャンペーン、通知、サポート案内、取引メッセージに入れるリンクを短く整えられます。",
      seoTitle: "SMS向け短縮リンク | ShortURL Wiki",
      seoDescription:
        "SMS配信や通知メッセージ向けに短く見やすいリンクを作成できます。",
    },
    ko: {
      eyebrow: "SMS 링크 단축",
      title: "SMS 캠페인, 알림, 모바일 메시지에 더 잘 맞는 짧은 링크.",
      description:
        "SMS 캠페인, 리마인더, 지원 문자, 거래 메시지 안에서 링크를 더 짧고 읽기 쉽게 만들 수 있습니다.",
      seoTitle: "캠페인과 알림용 SMS 링크 단축 | ShortURL Wiki",
      seoDescription:
        "SMS 캠페인, 알림, 지원 메시지, 모바일 알림용 링크를 더 짧고 깔끔하게 정리하세요.",
    },
    es: {
      eyebrow: "Acortador de links SMS",
      title: "Usa links mas cortos en campanas SMS, alertas y mensajes al celular.",
      description:
        "Haz mas faciles de leer los links dentro de campanas SMS, avisos puntuales, mensajes de soporte y notificaciones transaccionales.",
      seoTitle: "Acortador de links SMS para campanas y alertas | ShortURL Wiki",
      seoDescription:
        "Acorta links para campanas SMS, alertas, soporte y mensajes al celular con URLs mas limpias para texto.",
    },
    fr: {
      eyebrow: "Raccourcisseur de lien SMS",
      title: "Utilisez des liens plus courts dans les campagnes SMS, alertes et notifications sur telephone.",
      description:
        "Rendez les liens plus lisibles dans les SMS marketing, rappels, messages support et notifications transactionnelles.",
      seoTitle: "Raccourcisseur de lien SMS pour campagnes et alertes | ShortURL Wiki",
      seoDescription:
        "Raccourcissez vos liens pour campagnes SMS, alertes, support et notifications sur telephone avec des URLs plus propres pour le texte.",
    },
    de: {
      eyebrow: "SMS-Link-Kurzlink",
      title: "Kurzere Links fur SMS-Kampagnen, Alerts und Handy-Benachrichtigungen.",
      description:
        "Mache Links in SMS-Kampagnen, Erinnerungen, Support-Nachrichten und transaktionalen Meldungen leichter lesbar und sauberer teilbar.",
      seoTitle: "SMS-Link-Kurzlink fur Kampagnen und Alerts | ShortURL Wiki",
      seoDescription:
        "Kurze Links fur SMS-Kampagnen, Alerts, Support-Nachrichten und Hinweise aufs Handy mit saubereren URLs fur textbasierte Zustellung.",
    },
    "pt-BR": {
      eyebrow: "Encurtador de link para SMS",
      title: "Use links mais curtos em campanhas SMS, alertas e notificacoes no celular.",
      description:
        "Deixe os links mais faceis de ler e compartilhar em campanhas SMS, avisos pontuais, mensagens de suporte e notificacoes transacionais.",
      seoTitle: "Encurtador de link para SMS em campanhas e alertas | ShortURL Wiki",
      seoDescription:
        "Encurte links para campanhas SMS, alertas, suporte e notificacoes no celular com URLs mais limpas para mensagens de texto.",
    },
    hi: {
      eyebrow: "SMS link shortener",
      title: "SMS campaigns, alerts aur phone notifications ke liye short links ko saaf aur readable rakhein.",
      description:
        "SMS campaigns, reminders, support texts aur transactional messages me links ko chhota aur readable rakhein.",
      seoTitle: "SMS campaigns और alerts के लिए link shortener | ShortURL Wiki Hindi",
      seoDescription:
        "SMS campaigns, alerts, support messages aur phone notifications ke liye saaf short links banayein.",
    },
    id: {
      eyebrow: "Pemendek link SMS",
      title: "Gunakan link yang lebih singkat untuk kampanye SMS, alert, dan notifikasi di ponsel.",
      description:
        "Buat link di kampanye SMS, reminder, pesan dukungan, dan pesan transaksional menjadi lebih ringkas dan mudah dibaca.",
      seoTitle: "Pemendek link SMS untuk kampanye dan notifikasi | ShortURL Wiki",
      seoDescription:
        "Pendekkan link untuk kampanye SMS, alert, pesan dukungan, dan notifikasi di ponsel dengan URL yang lebih rapi.",
    },
  },
  "utm-link-shortener": {
    en: {
      eyebrow: "UTM link shortener",
      title: "Shorten tracked UTM links without exposing long campaign parameters.",
      description:
        "Wrap long UTM links into cleaner short URLs for ads, email campaigns, social posts, partner links, and reporting pages.",
      seoTitle: "UTM Link Shortener for Campaign Tracking | ShortURL Wiki",
      seoDescription:
        "Shorten UTM links for paid ads, email campaigns, social posts, and partner distribution while keeping campaign tracking intact.",
    },
    "zh-CN": {
      eyebrow: "UTM 短链",
      title: "把带追踪参数的 UTM 长链接缩成更适合投放的短链。",
      description:
        "适合广告投放、邮件营销、社媒内容、渠道合作和数据归因场景，在保留追踪参数的同时让链接更整洁。",
      seoTitle: "UTM 短链，适合广告投放与追踪归因 | ShortURL Wiki",
      seoDescription:
        "在保留 UTM 追踪参数的同时，把广告、邮件和社媒里的长链接缩成更适合公开传播的短链。",
    },
    ja: {
      eyebrow: "UTM短縮リンク",
      title: "長いUTM付きURLを配信しやすい短縮リンクに変換。",
      description:
        "広告、メール、SNS、提携配信向けにトラッキングを維持したまま見やすい短縮リンクを作れます。",
      seoTitle: "UTM付きURL短縮ツール | ShortURL Wiki",
      seoDescription:
        "UTMパラメータを保ちながら広告・SNS・メール向けURLを短縮できます。",
    },
    ko: {
      eyebrow: "UTM 링크 단축",
      title: "긴 UTM 추적 링크를 노출하지 않고 더 깔끔한 짧은 링크로 정리.",
      description:
        "광고, 이메일, 소셜 게시물, 파트너 배포, 리포팅 흐름에서 긴 UTM 링크를 보기 좋은 짧은 URL로 감쌀 수 있습니다.",
      seoTitle: "캠페인 추적용 UTM 링크 단축 | ShortURL Wiki",
      seoDescription:
        "광고, 이메일, 소셜, 파트너 배포용 UTM 링크를 추적은 유지한 채 더 짧게 만드세요.",
    },
    es: {
      eyebrow: "Acortador de links UTM",
      title: "Acorta links UTM sin exponer parametros largos de campana.",
      description:
        "Envuelve links UTM largos en URLs cortas mas limpias para anuncios, email, redes sociales, socios y reportes.",
      seoTitle: "Acortador de links UTM para seguimiento de campanas | ShortURL Wiki",
      seoDescription:
        "Acorta links UTM para anuncios, email, redes sociales y distribucion con socios sin perder el seguimiento.",
    },
    fr: {
      eyebrow: "Raccourcisseur de lien UTM",
      title: "Raccourcissez des liens UTM sans exposer de longs parametres de campagne.",
      description:
        "Transformez de longs liens UTM en URLs courtes plus propres pour les publicites, emails, reseaux sociaux, partenaires et rapports.",
      seoTitle: "Raccourcisseur de lien UTM pour le suivi de campagne | ShortURL Wiki",
      seoDescription:
        "Raccourcissez vos liens UTM pour les publicites, emails, reseaux sociaux et distributions partenaires sans perdre le suivi.",
    },
    de: {
      eyebrow: "UTM-Link-Kurzlink",
      title: "Getrackte UTM-Links kurzen, ohne lange Kampagnenparameter offenzulegen.",
      description:
        "Verpacke lange UTM-Links in sauberere Kurz-URLs fur Anzeigen, E-Mail-Kampagnen, Social Posts, Partner-Links und Berichte.",
      seoTitle: "UTM-Link-Kurzlink fur Kampagnen-Tracking | ShortURL Wiki",
      seoDescription:
        "Kurze UTM-Links fur Anzeigen, E-Mail, Social Media und Partnerverteilung bei erhaltenem Tracking.",
    },
    "pt-BR": {
      eyebrow: "Encurtador de link UTM",
      title: "Encurte links UTM rastreados sem expor parametros longos de campanha.",
      description:
        "Transforme links UTM longos em URLs curtas mais limpas para anuncios, email, redes sociais, parceiros e relatorios.",
      seoTitle: "Encurtador de link UTM para rastreamento de campanha | ShortURL Wiki",
      seoDescription:
        "Encurte links UTM para anuncios, email, redes sociais e distribuicao com parceiros sem perder o rastreamento.",
    },
  },
  "campaign-url-builder": {
    en: {
      eyebrow: "Campaign URL builder",
      title: "Build cleaner campaign URLs for launches, paid traffic, and partner distribution.",
      description:
        "Use short links as the final layer for campaign URLs shared in ads, creator collaborations, newsletters, launch pages, and distribution docs.",
      seoTitle: "Campaign URL Builder for Marketing Teams | ShortURL Wiki",
      seoDescription:
        "Create cleaner campaign URLs for launches, paid traffic, creator collaborations, partner distribution, and tracking pages.",
    },
    "zh-CN": {
      eyebrow: "活动链接构建",
      title: "给活动发布、广告投放和渠道分发准备的活动短链。",
      description:
        "适合新品发布、广告投放、渠道合作、邮件营销和内部归因管理，把复杂活动链接整理成统一短链入口。",
      seoTitle: "活动链接构建器，适合营销与增长团队 | ShortURL Wiki",
      seoDescription:
        "为活动发布、投放链路和渠道合作生成更干净的活动短链，适合营销与增长团队统一管理。",
    },
    ja: {
      eyebrow: "キャンペーンURL作成",
      title: "配信、広告、提携施策向けのキャンペーン短縮URL。",
      description:
        "ローンチ、広告、提携配信、ニュースレター、社内共有向けにキャンペーンURLを見やすく整理できます。",
      seoTitle: "キャンペーンURL作成ツール | ShortURL Wiki",
      seoDescription:
        "配信、広告、提携施策向けに整理しやすいキャンペーン短縮URLを作成できます。",
    },
    ko: {
      eyebrow: "캠페인 URL 빌더",
      title: "런칭, 유료 트래픽, 파트너 배포에 맞는 더 깔끔한 캠페인 URL.",
      description:
        "광고, 크리에이터 협업, 뉴스레터, 런칭 페이지, 배포 문서에 들어가는 캠페인 URL을 짧은 링크 레이어로 정리할 수 있습니다.",
      seoTitle: "마케팅 팀을 위한 캠페인 URL 빌더 | ShortURL Wiki",
      seoDescription:
        "런칭, 광고, 크리에이터 협업, 파트너 배포에 맞는 더 정돈된 캠페인 URL을 만드세요.",
    },
    es: {
      eyebrow: "Builder de URL de campana",
      title: "Crea URLs de campana mas limpias para lanzamientos, trafico pago y distribucion con socios.",
      description:
        "Usa links cortos como capa final para URLs de campana que compartes en anuncios, colaboraciones, newsletters, paginas de lanzamiento y documentos de distribucion.",
      seoTitle: "Builder de URL de campana para equipos de marketing | ShortURL Wiki",
      seoDescription:
        "Crea URLs de campana mas limpias para lanzamientos, trafico pago, colaboraciones y distribucion con socios.",
    },
    fr: {
      eyebrow: "Constructeur d'URL de campagne",
      title: "Creez des URLs de campagne plus propres pour les lancements, le trafic payant et la distribution partenaire.",
      description:
        "Utilisez des liens courts comme couche finale pour les URLs de campagne partagees dans les publicites, collaborations createurs, newsletters, pages de lancement et documents de diffusion.",
      seoTitle: "Constructeur d'URL de campagne pour equipes marketing | ShortURL Wiki",
      seoDescription:
        "Creez des URLs de campagne plus propres pour les lancements, le trafic payant, les collaborations createurs et la distribution partenaire.",
    },
    de: {
      eyebrow: "Kampagnen-URL-Builder",
      title: "Saubere Kampagnen-URLs fur Launches, Paid Traffic und Partnerverteilung erstellen.",
      description:
        "Nutze Kurzlinks als letzte Ebene fur Kampagnen-URLs, die in Anzeigen, Creator-Kooperationen, Newslettern, Launch-Seiten und Verteilungsdokumenten geteilt werden.",
      seoTitle: "Kampagnen-URL-Builder fur Marketing-Teams | ShortURL Wiki",
      seoDescription:
        "Erstelle sauberere Kampagnen-URLs fur Launches, Paid Traffic, Creator-Kooperationen, Partnerverteilung und Tracking-Seiten.",
    },
    "pt-BR": {
      eyebrow: "Construtor de URL de campanha",
      title: "Monte URLs de campanha mais limpas para lancamentos, trafego pago e distribuicao com parceiros.",
      description:
        "Use links curtos como camada final para URLs de campanha compartilhadas em anuncios, colaboracoes com criadores, newsletters, paginas de lancamento e materiais de distribuicao.",
      seoTitle: "Construtor de URL de campanha para times de marketing | ShortURL Wiki",
      seoDescription:
        "Crie URLs de campanha mais limpas para lancamentos, trafego pago, colaboracoes com criadores e distribuicao com parceiros.",
    },
    hi: {
      eyebrow: "Campaign URL builder",
      title: "Launches, paid campaigns aur partner sharing ke liye clean campaign URLs banayein.",
      description:
        "Ads, creator collaborations, newsletters, launch pages aur partner docs me jaane wale campaign URLs ko ek clean short-link layer dein.",
      seoTitle: "Marketing teams के लिए campaign URL builder | ShortURL Wiki Hindi",
      seoDescription:
        "Launches, paid campaigns, creator collaborations aur partner sharing ke liye clean campaign URLs banayein.",
    },
    id: {
      eyebrow: "Builder URL kampanye",
      title: "Buat URL kampanye yang lebih rapi untuk peluncuran, iklan berbayar, dan distribusi partner.",
      description:
        "Tambahkan short link sebagai lapisan akhir untuk URL kampanye yang dibagikan di iklan, kolaborasi kreator, newsletter, halaman peluncuran, dan dokumen distribusi.",
      seoTitle: "Builder URL kampanye untuk tim marketing | ShortURL Wiki",
      seoDescription:
        "Buat URL kampanye yang lebih rapi untuk peluncuran, trafik berbayar, kolaborasi kreator, dan distribusi partner.",
    },
  },
};

const genericFallbacks = {
  ko: {
    eyebrow: "쇼트링크 가이드",
    title: "쇼트링크, QR 코드, 브랜드 링크, API 도구를 한곳에서 확인하세요.",
    description: "QR 캠페인, 브랜드 링크, 공유 링크, 팀 API 활용을 위한 다국어 쇼트링크 안내입니다.",
  },
  es: {
    eyebrow: "Guia de links cortos",
    title: "Usa enlaces cortos, QR, enlaces de marca y flujos con API.",
    description: "Una guia multilingue para enlaces cortos, QR, campanas y uso de API en equipo.",
  },
  fr: {
    eyebrow: "Guide liens courts",
    title: "Utilisez liens courts, QR codes, liens de marque et API.",
    description: "Une page multilingue pour liens courts, QR codes, campagnes et usage d'API en equipe.",
  },
  de: {
    eyebrow: "Kurzlink-Guide",
    title: "Nutzen Sie Kurzlinks, QR-Codes, Branding-Links und eine einfache API.",
    description: "Eine mehrsprachige Ubersicht fur Kurzlinks, QR-Kampagnen und API-Nutzung im Team.",
  },
  "pt-BR": {
    eyebrow: "Guia de links curtos",
    title: "Use links curtos, QR code, links de marca e fluxos com API.",
    description: "Uma guia multilingue para links curtos, campanhas com QR e uso de API por equipes.",
  },
  hi: {
    eyebrow: "Short-link guide",
    title: "Short links, QR codes, branded links aur simple API ek hi jagah.",
    description: "Campaign links, QR pages aur team API usage ke liye ek simple multilingual guide.",
  },
  id: {
    eyebrow: "Panduan short link",
    title: "Short link, QR code, branded link, dan API sederhana dalam satu halaman.",
    description: "Panduan multibahasa untuk link kampanye, alur QR, dan penggunaan API tim.",
  },
};

export const getSeoPageContent = (language, slug) => {
  const resolved = resolveLanguage(language);
  const page = pageCatalog[slug];
  if (!page) return null;
  const content = page[resolved] || genericFallbacks[resolved] || page[DEFAULT_LANGUAGE] || null;
  if (!content) {
    return null;
  }

  return {
    ...content,
    seoTitle: content.seoTitle || `${content.title} | ShortURL Wiki`,
    seoDescription: content.seoDescription || content.description,
    body: getSeoPageBody(resolved, slug, content),
  };
};
