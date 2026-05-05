import { DEFAULT_LANGUAGE, resolveLanguage } from "./i18n";

const customBodies = {
  "url-shortener": {
    en: {
      overviewEyebrow: "OVERVIEW",
      overviewTitle: "What users usually need from a URL shortener",
      overviewDescription:
        "People searching for a URL shortener usually want one of three things: a fast tool, cleaner sharing links, or a simple team setup they can trust.",
      highlights: [
        {
          title: "Clean links for public sharing",
          body: "Use short links in social posts, WhatsApp messages, email campaigns, and public documents where long URLs hurt trust and click-through.",
        },
        {
          title: "Fast setup without extra overhead",
          body: "Paste a full link, generate the short URL, copy it, and move on. This page stays useful for lightweight marketing and team tasks.",
        },
        {
          title: "Easy bridge to API usage",
          body: "When manual link creation turns into recurring team use, teams can move from the web tool into a monthly API plan.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Campaign links for paid social, community posts, and newsletters",
        "Cleaner links for WhatsApp bios, creator profiles, and support messages",
        "Short links for team docs, product pages, and quick-launch pages",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "When should I use a short link instead of the original URL?",
          answer: "Use a short link when the original address is too long, visually messy, or difficult to share in public channels.",
        },
        {
          question: "Is this page meant for one-off use or recurring team use?",
          answer: "Both. The web tool handles one-off creation, while the API and monthly plans support recurring team usage.",
        },
        {
          question: "Can I create a QR code after shortening the link?",
          answer: "Yes. The same flow supports QR downloads so the short link can also work in print and offline distribution.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "页面说明",
      overviewTitle: "用户打开短链接工具时通常想解决什么",
      overviewDescription:
        "搜索短链接工具的用户，通常想解决三件事：链接太长不好传播、分发场景太杂需要统一入口、以及团队后续可能要接 API。",
      highlights: [
        {
          title: "适合公开传播的干净短链",
          body: "适合投放素材、社媒内容、WhatsApp 消息、邮件和公开文档，避免原链接过长影响点击和信任感。",
        },
        {
          title: "不需要复杂配置就能直接用",
          body: "用户只需要粘贴链接、生成、复制即可完成一次完整流程，适合增长、运营、内容团队的日常高频小任务。",
        },
        {
          title: "可自然升级到 API 流程",
          body: "当人工生成短链开始变成批量动作时，可以进一步接入按月套餐的 API，保持团队链路一致。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "活动投放、社媒分发、社区运营和邮件营销中的链接整理",
        "简介页、客服入口、销售沟通和 WhatsApp 分享中的短链替换",
        "产品后台、内部文档、运营面板里的统一跳转入口",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "什么时候应该把原链接换成短链？",
          answer: "当原链接太长、展示不整洁、或者需要更适合公开传播时，就应该优先换成短链。",
        },
        {
          question: "这个页面更适合个人使用还是团队使用？",
          answer: "两者都适合。网页工具适合即时生成，团队场景则可以进一步接入 API 做批量和自动化。",
        },
        {
          question: "生成短链之后还能继续做二维码吗？",
          answer: "可以。短链生成后可以继续下载二维码，用于海报、包装、菜单或线下传播。",
        },
      ],
    },
    ja: {
      overviewEyebrow: "OVERVIEW",
      overviewTitle: "URL短縮ページで解決したいこと",
      overviewDescription:
        "URL短縮ツールを探す人の多くは、共有しやすい見た目、すぐ使える導線、そして後からチーム運用へ広げられる使い勝手を求めています。",
      highlights: [
        {
          title: "公開共有で見た目を整えやすい",
          body: "SNS投稿、WhatsApp共有、メール、公開ドキュメントで長いURLをそのまま見せたくないときに、短縮リンクが役立ちます。",
        },
        {
          title: "設定なしですぐ作成できる",
          body: "元のURLを貼り付けて短縮し、そのままコピーして使えるので、日々のキャンペーン運用や配布作業に向いています。",
        },
        {
          title: "必要になればAPI運用へ移行できる",
          body: "最初はWebで手動作成し、生成量が増えてきたら月額APIプランへつなげる流れが自然です。",
        },
      ],
      scenariosTitle: "よくある使い方",
      scenarios: [
        "広告配信、SNS投稿、ニュースレター用のキャンペーンリンク",
        "WhatsAppプロフィール、クリエイタープロフィール、サポート案内用の共有リンク",
        "社内ドキュメント、運用画面、クイック導線用の短縮URL",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "どんなときに元のURLではなく短縮リンクを使うべきですか？",
          answer: "元のURLが長すぎるとき、見た目を整えたいとき、公開チャネルで共有しやすくしたいときに短縮リンクが向いています。",
        },
        {
          question: "このページは単発利用向けですか、それともチーム利用向けですか？",
          answer: "両方に向いています。単発の作成はWebから、継続的な運用はAPIや月額プランへ広げられます。",
        },
        {
          question: "短縮したあとにQRコードも作れますか？",
          answer: "はい。同じ短縮リンクをそのままQRコード化できるので、印刷物やオフライン配布にもつなげやすくなります。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "OVERVIEW",
      overviewTitle: "사용자가 URL 단축 페이지에서 주로 해결하려는 것",
      overviewDescription:
        "URL 단축 도구를 찾는 사람들은 보통 더 깔끔한 공유 링크, 빠른 생성 흐름, 또는 팀에서 반복 사용할 수 있는 안정적인 방식을 원합니다.",
      highlights: [
        {
          title: "공개 공유에 맞는 깔끔한 링크",
          body: "소셜 게시물, WhatsApp 메시지, 이메일, 공개 문서처럼 긴 URL이 신뢰를 떨어뜨리는 곳에서 더 보기 좋은 링크를 쓸 수 있습니다.",
        },
        {
          title: "설정 부담 없이 바로 사용",
          body: "원본 링크를 붙여 넣고 단축 URL을 만든 뒤 복사하면 끝이라서 마케팅과 운영의 잦은 작은 작업에 잘 맞습니다.",
        },
        {
          title: "API로 자연스럽게 확장 가능",
          body: "수동 생성이 반복 업무가 되기 시작하면 월간 API 플랜으로 넘어가 팀 흐름을 더 안정적으로 만들 수 있습니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "유료 캠페인, 커뮤니티 운영, 뉴스레터 배포용 링크",
        "WhatsApp 바이오, 크리에이터 프로필, 지원 메시지용 더 깔끔한 링크",
        "내부 문서, 제품 운영, 빠른 실행 페이지용 단축 링크",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "원본 URL 대신 단축 링크를 언제 써야 하나요?",
          answer: "원본 주소가 너무 길거나 지저분해서 공개 채널에 그대로 쓰기 어려울 때 단축 링크가 더 적합합니다.",
        },
        {
          question: "이 페이지는 1회성 사용에 더 맞나요, 팀 사용에 더 맞나요?",
          answer: "둘 다입니다. 웹 도구는 즉시 생성에 적합하고, 반복 업무는 API와 월간 플랜으로 확장할 수 있습니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "RESUMEN",
      overviewTitle: "Que suele buscar un usuario en un acortador de URL",
      overviewDescription:
        "Quien busca un acortador suele querer una herramienta rapida, links mas limpios para compartir o un flujo sencillo que luego pueda escalar al equipo.",
      highlights: [
        {
          title: "Links mas limpios para compartir en publico",
          body: "Sirve para redes, WhatsApp, email y documentos publicos donde una URL larga afecta la confianza y el clic.",
        },
        {
          title: "Flujo rapido sin configuracion pesada",
          body: "Pegas el link, generas la version corta, la copias y sigues. Es util para tareas recurrentes de marketing y equipo.",
        },
        {
          title: "Puente natural hacia uso con API",
          body: "Cuando crear links a mano deja de ser suficiente, el equipo puede pasar a un plan mensual con API sin cambiar de logica.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Links de campana para social ads, comunidad y newsletters",
        "Links mas limpios para bios de WhatsApp, perfiles de creadores y mensajes de soporte",
        "Short links para documentos de equipo, paginas de producto y paginas de lanzamiento",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Cuando conviene usar un short link en lugar de la URL original?",
          answer: "Cuando la direccion original es demasiado larga, se ve desordenada o no queda bien en canales publicos.",
        },
        {
          question: "Esta pagina sirve mas para uso puntual o para uso recurrente en equipo?",
          answer: "Para ambos. La herramienta web resuelve lo puntual y la API permite pasar a un uso recurrente en equipo.",
        },
      ],
    },
    fr: {
      overviewEyebrow: "RESUME",
      overviewTitle: "Ce que les utilisateurs attendent d'un raccourcisseur d'URL",
      overviewDescription:
        "Quand quelqu'un cherche un raccourcisseur d'URL, il veut souvent un outil rapide, des liens plus propres a partager ou un flux simple qui pourra ensuite s'etendre a l'equipe.",
      highlights: [
        {
          title: "Des liens plus propres pour les espaces publics",
          body: "Utile pour les reseaux sociaux, WhatsApp, l'email et les documents publics ou une URL longue nuit a la confiance et au clic.",
        },
        {
          title: "Un flux rapide sans lourde configuration",
          body: "On colle le lien, on genere la version courte, on copie et on avance. Cela reste tres pratique pour des taches recurrentes de marketing et d'equipe.",
        },
        {
          title: "Une transition naturelle vers l'API",
          body: "Quand la creation manuelle ne suffit plus, l'equipe peut passer a un plan mensuel avec API sans changer de logique.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Liens de campagne pour social ads, communaute et newsletters",
        "Liens plus propres pour bios WhatsApp, profils createurs et messages support",
        "Short links pour documents d'equipe, pages produit et pages de lancement",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Quand faut-il utiliser un short link plutot que l'URL d'origine ?",
          answer: "Quand l'adresse d'origine est trop longue, desordonnee ou peu adaptee aux canaux publics.",
        },
        {
          question: "Cette page sert-elle plutot a un usage ponctuel ou a un usage equipe recurrent ?",
          answer: "Aux deux. L'outil web couvre l'usage rapide, et l'API permet ensuite un usage equipe plus regulier.",
        },
      ],
    },
    de: {
      overviewEyebrow: "UEBERBLICK",
      overviewTitle: "Was Nutzer von einem URL-Kurzlink-Tool erwarten",
      overviewDescription:
        "Wer nach einem URL-Kurzlink-Tool sucht, will meist ein schnelles Werkzeug, sauberere Links zum Teilen oder einen einfachen Ablauf, der sich spater im Team ausbauen lasst.",
      highlights: [
        {
          title: "Saubere Links fur offentliche Kanale",
          body: "Hilfreich fur Social Posts, WhatsApp, E-Mail und offentliche Dokumente, in denen lange URLs Vertrauen und Klicks bremsen.",
        },
        {
          title: "Schneller Ablauf ohne schweren Setup",
          body: "Link einfugen, Kurzlink erzeugen, kopieren und weiterarbeiten. Das passt gut zu wiederkehrenden Aufgaben in Marketing und Operations.",
        },
        {
          title: "Natuerliche Bruecke zur API-Nutzung",
          body: "Wenn manuelle Erstellung zum Regelprozess wird, kann das Team in einen monatlichen API-Plan wechseln, ohne den Ablauf neu zu denken.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Kampagnenlinks fur Paid Social, Community-Posts und Newsletter",
        "Sauberere Links fur WhatsApp-Bios, Creator-Profile und Support-Nachrichten",
        "Kurzlinks fur Team-Dokumente, Produktseiten und Launch-Seiten",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Wann sollte ich einen Kurzlink statt der Original-URL verwenden?",
          answer: "Wenn die Originaladresse zu lang, unruhig oder in offentlichen Kanalen schlecht teilbar ist.",
        },
        {
          question: "Ist diese Seite eher fur Einzelfalle oder fur Teamnutzung gedacht?",
          answer: "Fur beides. Das Web-Tool deckt spontane Nutzung ab, und die API erweitert den Ablauf fur wiederkehrende Team-Nutzung.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "RESUMO",
      overviewTitle: "O que as pessoas buscam em um encurtador de URL",
      overviewDescription:
        "Quem procura um encurtador geralmente quer uma ferramenta rapida, links mais limpos para compartilhar ou um fluxo simples que depois possa crescer para o uso em equipe.",
      highlights: [
        {
          title: "Links mais limpos para compartilhamento publico",
          body: "Serve para redes sociais, WhatsApp, email e documentos publicos onde uma URL longa atrapalha a confianca e o clique.",
        },
        {
          title: "Fluxo rapido sem configuracao pesada",
          body: "Voce cola o link, gera a versao curta, copia e segue. Isso funciona bem para tarefas recorrentes de marketing e equipe.",
        },
        {
          title: "Transicao natural para uso com API",
          body: "Quando criar links manualmente deixa de ser suficiente, a equipe pode migrar para um plano mensal com API sem mudar a logica do processo.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Links de campanha para social ads, comunidade e newsletters",
        "Links mais limpos para bios de WhatsApp, perfis de criadores e mensagens de suporte",
        "Short links para documentos de equipe, paginas de produto e paginas de lancamento",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Quando vale usar um short link em vez da URL original?",
          answer: "Quando o endereco original e longo demais, confuso ou ruim de compartilhar em canais publicos.",
        },
        {
          question: "Esta pagina serve mais para uso pontual ou para uso recorrente em equipe?",
          answer: "Para ambos. A ferramenta web resolve o uso imediato, e a API permite evoluir para um uso recorrente em equipe.",
        },
      ],
    },
  },
  "qr-code-generator": {
    en: {
      overviewEyebrow: "QR WORKFLOW",
      overviewTitle: "Why short links and QR codes work better together",
      overviewDescription:
        "A QR page performs better when the destination is already a clean short link. That makes print distribution easier to manage and future updates easier to handle.",
      highlights: [
        {
          title: "Better fit for posters and packaging",
          body: "Short links convert naturally into compact QR codes that are easier to print on menus, packaging, flyers, event material, and product inserts.",
        },
        {
          title: "Cleaner mobile handoff",
          body: "Users scan once, land on a stable short URL, and get a simple mobile entry point for campaigns, check-ins, ordering, or support.",
        },
        {
          title: "One short link for online and offline sharing",
          body: "Teams can build the short link once, then reuse it across QR placements, social links, and direct browser sharing.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Restaurant menus, table cards, and in-store quick access",
        "Event posters, badges, handouts, and registration flows",
        "Packaging inserts, after-sales support cards, and mobile campaign materials",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Why not generate a QR code from the original long URL directly?",
          answer: "Long URLs create denser QR patterns and are harder to reuse. Short links keep the code cleaner and easier to manage.",
        },
        {
          question: "Can the same short link be shared both as text and as a QR code?",
          answer: "Yes. That is the main advantage of building the short link first and using it across both online and offline distribution.",
        },
        {
          question: "Who usually needs this type of page?",
          answer: "Marketers, restaurant teams, event organizers, and product teams with offline touchpoints.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "二维码流程",
      overviewTitle: "为什么二维码页面最好和短链一起设计",
      overviewDescription:
        "如果二维码背后直接对应的是短链，而不是冗长原链接，那么打印、传播、复用和后续管理都会更轻。",
      highlights: [
        {
          title: "更适合海报、包装和菜单打印",
          body: "短链生成的二维码通常更紧凑，适合用在海报、菜单页、包装物料、活动页和产品随附卡片上。",
        },
        {
          title: "扫码到达路径更清晰",
          body: "用户扫描后直接进入稳定的短链入口，适合活动报名、下单、客服、到店和移动端导流。",
        },
        {
          title: "线上线下共用一套链接流程",
          body: "团队可以先生成短链，再同时用于二维码、社媒传播和直接复制分享，减少重复管理。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "餐厅菜单、桌贴、门店海报和线下导流物料",
        "活动展板、参会证件、宣传单页和报名入口",
        "产品包装、售后卡片、安装说明和移动端推广物料",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "为什么不直接把原链接生成二维码？",
          answer: "原链接越长，二维码越复杂，既不利于打印也不利于统一管理。先做短链会更稳妥。",
        },
        {
          question: "同一个短链能否同时用于文字分享和二维码？",
          answer: "可以，这正是短链加二维码组合的价值，同一条链路可以同时覆盖线上和线下传播。",
        },
        {
          question: "哪些团队最常用这种页面？",
          answer: "餐饮、活动、零售、线下门店、产品运营和需要实体物料分发的团队都会经常用到。",
        },
      ],
    },
    ja: {
      overviewEyebrow: "QR WORKFLOW",
      overviewTitle: "短縮リンクとQRコードを一緒に使う理由",
      overviewDescription:
        "QRコードの遷移先を短縮リンクにしておくと、印刷しやすさ、管理のしやすさ、再利用のしやすさが大きく変わります。",
      highlights: [
        {
          title: "ポスターやパッケージに載せやすい",
          body: "短縮リンクから作るQRコードは複雑になりにくく、ポスター、メニュー、パッケージ、イベント配布物でも扱いやすくなります。",
        },
        {
          title: "モバイル導線をまとめやすい",
          body: "ユーザーは一度スキャンするだけで、注文、申込み、サポート、チェックインなどの入口へすぐ進めます。",
        },
        {
          title: "オンラインとオフラインで同じリンクを使える",
          body: "まず短縮リンクを作っておけば、そのままQRコードにもテキスト共有にも流用でき、運用がばらつきません。",
        },
      ],
      scenariosTitle: "よくある使い方",
      scenarios: [
        "レストランメニュー、テーブル案内、店頭ポスター",
        "イベントポスター、配布資料、来場登録の導線",
        "商品同梱カード、アフターサポート案内、モバイル施策",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "長い元URLから直接QRコードを作ってはいけませんか？",
          answer: "長いURLはQRコードが複雑になりやすく、印刷品質や再利用性にも不利です。短縮リンクを先に作る方が管理しやすくなります。",
        },
        {
          question: "同じ短縮リンクを文字リンクとQRコードの両方に使えますか？",
          answer: "はい。それがこの運用の大きな利点です。1つの短縮リンクをオンライン共有とオフライン配布で共通利用できます。",
        },
        {
          question: "このページはどんなチームに向いていますか？",
          answer: "飲食、イベント、店舗運営、小売、商品運用など、紙や現場導線を扱うチームに特に向いています。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "QR WORKFLOW",
      overviewTitle: "단축 링크와 QR 코드가 함께 설계되어야 하는 이유",
      overviewDescription:
        "QR 코드 뒤에 긴 원본 URL 대신 깔끔한 단축 링크가 연결되면 인쇄, 배포, 재사용, 이후 수정까지 훨씬 관리하기 쉬워집니다.",
      highlights: [
        {
          title: "포스터와 패키지에 더 잘 맞습니다",
          body: "단축 링크 기반 QR 코드는 더 간결해서 메뉴, 패키지, 전단지, 행사 안내물에 넣기 쉽습니다.",
        },
        {
          title: "모바일 진입 흐름이 더 깔끔합니다",
          body: "사용자는 한 번 스캔하고 안정적인 짧은 링크로 들어가 주문, 등록, 지원, 체크인 같은 흐름을 바로 이어갈 수 있습니다.",
        },
        {
          title: "온라인과 오프라인에 같은 링크를 사용",
          body: "팀은 먼저 단축 링크를 만든 뒤 QR, 소셜 공유, 직접 전달에 같은 링크를 재사용할 수 있습니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "레스토랑 메뉴, 테이블 카드, 매장 내 빠른 진입 안내",
        "행사 포스터, 배지, 인쇄물, 등록 안내 흐름",
        "패키지 인서트, A/S 카드, 모바일 캠페인 안내물",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "긴 원본 URL에서 바로 QR 코드를 만들면 안 되나요?",
          answer: "긴 URL은 QR 패턴이 더 복잡해져 인쇄와 재사용에 불리합니다. 단축 링크를 먼저 만드는 편이 훨씬 안정적입니다.",
        },
        {
          question: "같은 단축 링크를 텍스트와 QR 코드에 같이 써도 되나요?",
          answer: "네. 같은 링크를 온라인과 오프라인 모두에 재사용할 수 있다는 점이 이 방식의 큰 장점입니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "FLUJO QR",
      overviewTitle: "Por que los codigos QR funcionan mejor con enlaces cortos",
      overviewDescription:
        "Una pagina QR funciona mejor cuando el destino ya es un link corto limpio. Eso facilita imprimir, distribuir y actualizar el flujo despues.",
      highlights: [
        {
          title: "Mejor ajuste para posters y packaging",
          body: "Los links cortos generan QR mas compactos y mas faciles de usar en menus, packaging, flyers, eventos y material fisico.",
        },
        {
          title: "Entrada al celular mas clara",
          body: "El usuario escanea una vez, cae en un link corto estable y entra a un flujo simple de campana, registro, pedido o soporte.",
        },
        {
          title: "Un mismo flujo para online y offline",
          body: "El equipo crea primero el link corto y luego lo reutiliza en QR, redes sociales y compartidos directos sin duplicar trabajo.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Menus de restaurante, tarjetas de mesa y acceso rapido en tienda",
        "Posters de eventos, acreditaciones, folletos y registros",
        "Inserciones en packaging, tarjetas de soporte y material para celular",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que no generar el QR directamente desde la URL larga?",
          answer: "Las URLs largas crean patrones QR mas densos y menos reutilizables. Un link corto deja el codigo mas limpio y el flujo mas controlable.",
        },
        {
          question: "El mismo link corto puede usarse como texto y como QR?",
          answer: "Si. Esa es precisamente la ventaja de crear primero el link corto y reutilizarlo en distribucion online y offline.",
        },
      ],
    },
    fr: {
      overviewEyebrow: "FLUX QR",
      overviewTitle: "Pourquoi les QR codes fonctionnent mieux avec des liens courts",
      overviewDescription:
        "Une page QR fonctionne mieux lorsque la destination est deja un lien court propre. Cela simplifie l'impression, la diffusion et les mises a jour ulterieures.",
      highlights: [
        {
          title: "Mieux adapte aux affiches et au packaging",
          body: "Les liens courts produisent des QR codes plus compacts, plus faciles a utiliser sur menus, packaging, flyers, evenements et supports physiques.",
        },
        {
          title: "Une entree mobile plus claire",
          body: "L'utilisateur scanne une fois, arrive sur un lien court stable et entre dans un flux simple de campagne, commande, inscription ou support.",
        },
        {
          title: "Un meme flux pour online et offline",
          body: "L'equipe cree d'abord le lien court, puis le reutilise dans les QR, les reseaux sociaux et les partages directs.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Menus de restaurant, cartes de table et acces rapide en boutique",
        "Affiches d'evenement, badges, brochures et inscriptions",
        "Encarts packaging, cartes de support et supports de campagne mobile",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Pourquoi ne pas generer le QR directement depuis l'URL longue ?",
          answer: "Les URLs longues produisent des QR plus denses et moins reutilisables. Un lien court rend le code plus propre et le flux plus simple a gerer.",
        },
        {
          question: "Le meme lien court peut-il servir en texte et en QR ?",
          answer: "Oui. C'est justement l'avantage de creer d'abord le lien court puis de le reutiliser online et offline.",
        },
      ],
    },
    de: {
      overviewEyebrow: "QR-WORKFLOW",
      overviewTitle: "Warum QR-Codes mit Kurzlinks besser funktionieren",
      overviewDescription:
        "Eine QR-Seite funktioniert besser, wenn das Ziel bereits ein sauberer Kurzlink ist. Das erleichtert Druck, Verteilung und spaetere Anpassungen.",
      highlights: [
        {
          title: "Besser fur Poster und Verpackung",
          body: "Kurzlinks erzeugen kompaktere QR-Codes, die sich leichter auf Menus, Verpackungen, Flyern, Event-Material und Print einsetzen lassen.",
        },
        {
          title: "Klarerer mobiler Einstieg",
          body: "Nutzer scannen einmal, landen auf einem stabilen Kurzlink und gelangen einfacher in Kampagnen-, Bestell-, Registrierungs- oder Support-Ablaufe.",
        },
        {
          title: "Ein gemeinsamer Ablauf fur online und offline",
          body: "Teams erstellen zuerst den Kurzlink und nutzen ihn dann fur QR-Platzierungen, das Teilen in sozialen Kanalen und die direkte Weitergabe wieder.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Restaurant-Menues, Tischkarten und schneller In-Store-Zugang",
        "Event-Poster, Badges, Handouts und Registrierungs-Flows",
        "Packaging-Einleger, Service-Karten und mobile Kampagnenmaterialien",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Warum nicht direkt aus der langen URL einen QR-Code erzeugen?",
          answer: "Lange URLs erzeugen dichtere QR-Muster und sind schwerer wiederzuverwenden. Ein Kurzlink macht den Code sauberer und den Ablauf einfacher.",
        },
        {
          question: "Kann derselbe Kurzlink als Text und als QR-Code genutzt werden?",
          answer: "Ja. Genau darin liegt der Vorteil: erst den Kurzlink bauen und ihn dann online wie offline wiederverwenden.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "FLUXO QR",
      overviewTitle: "Por que QR codes funcionam melhor com links curtos",
      overviewDescription:
        "Uma pagina de QR funciona melhor quando o destino ja e um link curto limpo. Isso facilita impressao, distribuicao e atualizacoes depois.",
      highlights: [
        {
          title: "Melhor para posters e embalagens",
          body: "Links curtos geram QR codes mais compactos e mais faceis de usar em menus, embalagens, folhetos, eventos e materiais fisicos.",
        },
        {
          title: "Entrada mobile mais clara",
          body: "A pessoa escaneia uma vez, cai em um link curto estavel e entra em um fluxo simples de campanha, pedido, cadastro ou suporte.",
        },
        {
          title: "Um mesmo fluxo para online e offline",
          body: "A equipe cria primeiro o link curto e depois o reutiliza em QR, redes sociais e compartilhamentos diretos.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Menus de restaurante, cards de mesa e acesso rapido na loja",
        "Posters de evento, crachas, folhetos e fluxos de inscricao",
        "Insertos em embalagem, cartoes de suporte e materiais de campanha mobile",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que nao gerar o QR diretamente da URL longa?",
          answer: "URLs longas criam padroes de QR mais densos e menos reutilizaveis. Um link curto deixa o codigo mais limpo e o fluxo mais facil de controlar.",
        },
        {
          question: "O mesmo link curto pode ser usado como texto e como QR?",
          answer: "Sim. Essa e justamente a vantagem de criar primeiro o link curto e reaproveita-lo na distribuicao online e offline.",
        },
      ],
    },
  },
  "branded-short-links": {
    en: {
      overviewEyebrow: "BRAND TRUST",
      overviewTitle: "Why branded short links matter for marketing teams",
      overviewDescription:
        "Users often search for branded short links when they care about trust, consistency, and how links look inside campaigns, bios, and shared documents.",
      highlights: [
        {
          title: "Cleaner brand presentation",
          body: "A better-looking short link helps campaigns feel intentional instead of improvised, especially in ads, creator collaborations, and external docs.",
        },
        {
          title: "More trust in public channels",
          body: "Branded links reduce the suspicion that often comes from generic redirect domains and help audiences recognize the source immediately.",
        },
        {
          title: "Consistent links across teams",
          body: "Campaign, content, support, and partnership teams can keep link formatting aligned instead of inventing new patterns every week.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Landing pages, newsletters, media kits, and creator collaboration briefs",
        "Support docs, onboarding links, and public help center references",
        "Campaign assets that need better recall and stronger visual trust",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Do branded links mainly help with aesthetics or trust?",
          answer: "Both. Better presentation improves recall, while a recognizable domain reduces friction in public-facing channels.",
        },
        {
          question: "Which teams benefit most from branded short links?",
          answer: "Marketing, content, partnerships, support, and product teams that share links externally on a regular basis.",
        },
        {
          question: "Is this still useful if I only share links occasionally?",
          answer: "Yes, especially when those links are part of campaigns, bios, or documents that represent the brand publicly.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "品牌信任",
      overviewTitle: "品牌短链为什么对营销团队更重要",
      overviewDescription:
        "很多用户搜索品牌短链，本质上不是为了技术，而是为了让链接更像品牌的一部分，而不是临时拼出来的跳转地址。",
      highlights: [
        {
          title: "品牌呈现更整洁",
          body: "无论是投放素材、联名合作、官网入口还是邮件内容，品牌短链都能让整体传播看起来更统一。",
        },
        {
          title: "公开场景里更容易建立信任",
          body: "相比通用跳转域名，品牌短链更容易让用户识别来源，减少陌生感和点击犹豫。",
        },
        {
          title: "让不同团队共用一套链接风格",
          body: "增长、内容、客服、商务等团队都可以围绕同一套链接规范工作，减少外部表达混乱。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "活动页、邮件、媒体资料包和合作投放中的统一链接展示",
        "帮助中心、客服文档、产品引导和公开说明中的对外分享",
        "品牌活动、内容分发和渠道合作中的信任感提升",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "品牌短链最大的价值是好看还是更可信？",
          answer: "两者都有。它既让链接更整洁，也能让用户更快识别来源，从而提升点击意愿。",
        },
        {
          question: "哪些团队最值得优先上品牌短链？",
          answer: "经常对外分享链接的团队都值得优先使用，尤其是市场、内容、商务、客服和产品团队。",
        },
        {
          question: "如果分享链接频率不高，还有必要吗？",
          answer: "如果这些链接会出现在公开场景里，品牌短链依然有价值，因为它影响的是外部感知和信任。",
        },
      ],
    },
    ja: {
      overviewEyebrow: "BRAND TRUST",
      overviewTitle: "ブランド短縮リンクが必要とされる理由",
      overviewDescription:
        "ブランド短縮リンクを探す人は、ただ短くしたいのではなく、公開チャネルでの信頼感、統一感、見た目の整い方を重視しています。",
      highlights: [
        {
          title: "ブランド表現をきれいに揃えやすい",
          body: "広告、メール、SNS投稿、資料ページでリンクの見え方を揃えると、キャンペーン全体が雑に見えにくくなります。",
        },
        {
          title: "公開チャネルで安心感を出しやすい",
          body: "見慣れない汎用ドメインより、ブランド名が見える短縮リンクのほうがクリック前の不安を減らしやすくなります。",
        },
        {
          title: "複数チームで同じルールを保てる",
          body: "マーケティング、コンテンツ、サポート、パートナー運用でリンク形式を統一しやすくなります。",
        },
      ],
      scenariosTitle: "よくある使い方",
      scenarios: [
        "ランディングページ、ニュースレター、メディアキット、コラボ資料",
        "サポート記事、オンボーディング導線、公開ヘルプセンター",
        "記憶に残りやすさと信頼感が重要なキャンペーン素材",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "ブランド短縮リンクの価値は見た目ですか、それとも信頼ですか？",
          answer: "両方です。見た目が整うことでブランド想起が上がり、わかりやすいドメイン名がクリックの安心感につながります。",
        },
        {
          question: "どのチームが最も使うべきですか？",
          answer: "外部に向けてリンクをよく共有するマーケティング、コンテンツ、営業、サポート、プロダクト系のチームです。",
        },
        {
          question: "共有頻度が高くなくても導入する価値はありますか？",
          answer: "公開キャンペーンやブランド資料に出るリンクであれば、頻度が低くても十分に価値があります。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "브랜드 신뢰",
      overviewTitle: "마케팅 팀이 브랜드 단축 링크를 찾는 이유",
      overviewDescription:
        "브랜드 단축 링크를 찾는 사람들은 단순히 짧은 URL이 아니라, 공개 채널에서 더 신뢰감 있고 정돈된 링크 표현을 원합니다.",
      highlights: [
        {
          title: "브랜드 표현이 더 정돈됩니다",
          body: "광고, 협업 페이지, 이메일, 소개 자료에서 링크 하나만 봐도 팀이 준비된 인상을 줄 수 있습니다.",
        },
        {
          title: "공개 채널에서 신뢰를 높입니다",
          body: "익숙하지 않은 일반 리다이렉트 도메인보다 브랜드가 드러나는 링크가 클릭 전 망설임을 줄여 줍니다.",
        },
        {
          title: "팀 전체 링크 스타일을 맞추기 쉽습니다",
          body: "마케팅, 콘텐츠, 세일즈, 지원 팀이 제각각 다른 형식을 쓰지 않고 하나의 기준을 유지할 수 있습니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "캠페인 페이지, 뉴스레터, 미디어 키트, 크리에이터 협업 브리프",
        "도움말 문서, 온보딩 링크, 공개 지원 센터 안내",
        "기억하기 쉽고 더 신뢰감 있게 보여야 하는 캠페인 자산",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "브랜드 단축 링크는 보기 좋은 용도인가요, 신뢰용인가요?",
          answer: "둘 다입니다. 더 정돈된 표현은 기억하기 쉽게 만들고, 익숙한 도메인은 공개 채널에서 클릭 장벽을 낮춰 줍니다.",
        },
        {
          question: "어떤 팀이 가장 먼저 도입하면 좋나요?",
          answer: "대외적으로 링크를 자주 공유하는 마케팅, 콘텐츠, 파트너십, 지원, 제품 팀이 가장 큰 효과를 봅니다.",
        },
        {
          question: "링크를 자주 공유하지 않아도 필요할까요?",
          answer: "공개 캠페인이나 브랜드 자료에 쓰는 링크라면 빈도가 낮아도 충분히 가치가 있습니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "CONFIANZA DE MARCA",
      overviewTitle: "Por que los equipos de marketing usan links cortos de marca",
      overviewDescription:
        "Quien busca links cortos de marca normalmente quiere mas confianza, mejor consistencia y una presentacion mas cuidada en campanas y documentos compartidos.",
      highlights: [
        {
          title: "La marca se ve mas ordenada",
          body: "Un link mejor presentado hace que campanas, colaboraciones y materiales externos se sientan mas preparados y menos improvisados.",
        },
        {
          title: "Generan mas confianza en canales publicos",
          body: "Un dominio reconocible reduce la friccion que suelen provocar los redireccionamientos genericos.",
        },
        {
          title: "Ayudan a alinear a todo el equipo",
          body: "Marketing, contenido, soporte y alianzas pueden compartir links con el mismo criterio en lugar de inventar formatos nuevos cada semana.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Paginas de campana, newsletters, media kits y briefs para colaboradores",
        "Documentacion de soporte, enlaces de onboarding y referencias publicas",
        "Activos de campana que necesitan mas recordacion y confianza visual",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Los links de marca ayudan mas por imagen o por confianza?",
          answer: "Por ambas cosas. Una mejor presentacion mejora el recuerdo y un dominio reconocible hace mas facil el clic en espacios publicos.",
        },
        {
          question: "Que equipos aprovechan mas este tipo de links?",
          answer: "Marketing, contenido, partnerships, soporte y producto, especialmente si comparten enlaces hacia afuera con frecuencia.",
        },
        {
          question: "Sigue teniendo sentido si comparto links solo de vez en cuando?",
          answer: "Si esos links aparecen en campanas, bios o documentos de marca, sigue valiendo la pena.",
        },
      ],
    },
    fr: {
      overviewEyebrow: "CONFIANCE DE MARQUE",
      overviewTitle: "Pourquoi les equipes marketing utilisent des liens courts de marque",
      overviewDescription:
        "Les recherches autour des liens courts de marque traduisent souvent un besoin de confiance, de coherence et d'une meilleure presentation dans les campagnes et documents publics.",
      highlights: [
        {
          title: "Une image de marque plus propre",
          body: "Un lien plus soigne donne aux campagnes, collaborations et supports externes une impression plus maitrisee.",
        },
        {
          title: "Plus de confiance dans les espaces publics",
          body: "Un domaine identifiable rassure davantage qu'un domaine de redirection generique.",
        },
        {
          title: "Un format commun pour toutes les equipes",
          body: "Marketing, contenu, support et partenariats peuvent partager des liens avec la meme logique plutot que multiplier les formats.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Pages de campagne, newsletters, kits media et briefs de collaboration createur",
        "Documentation support, liens d'onboarding et references d'aide publiques",
        "Supports de campagne qui doivent etre plus memorables et plus rassurants",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Le principal avantage est-il esthetique ou lie a la confiance ?",
          answer: "Les deux. Une presentation plus propre facilite la memorisation et un domaine reconnaissable inspire plus confiance.",
        },
        {
          question: "Quelles equipes en tirent le plus de valeur ?",
          answer: "Les equipes marketing, contenu, partenariats, support et produit qui partagent regulierement des liens en externe.",
        },
        {
          question: "Est-ce utile si je partage peu de liens ?",
          answer: "Oui, surtout si ces liens representent publiquement la marque dans une campagne, une bio ou un document.",
        },
      ],
    },
    de: {
      overviewEyebrow: "MARKENVERTRAUEN",
      overviewTitle: "Warum gebrandete Kurzlinks fur Marketing-Teams wichtig sind",
      overviewDescription:
        "Wer nach gebrandeten Kurzlinks sucht, will meist nicht nur kurze URLs, sondern mehr Vertrauen, klarere Wiedererkennung und sauberere Kampagnenauftritte.",
      highlights: [
        {
          title: "Markenauftritt wirkt geordneter",
          body: "Ein sauberer Kurzlink lasst Kampagnen, Kooperationen und offentliche Materialien deutlich vorbereiteter wirken.",
        },
        {
          title: "Mehr Vertrauen in offentlichen Kanalen",
          body: "Eine erkennbare Domain nimmt Nutzern schneller die Skepsis als eine generische Weiterleitungsdomain.",
        },
        {
          title: "Ein gemeinsamer Stil fur alle Teams",
          body: "Marketing, Content, Support und Partnerschaften konnen sich auf ein konsistentes Linkformat einigen.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Kampagnenseiten, Newsletter, Media Kits und Creator-Briefings",
        "Support-Dokumente, Onboarding-Links und offentliche Hilfeseiten",
        "Kampagnenmaterial mit hohem Anspruch an Wiedererkennung und Vertrauen",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Geht es bei gebrandeten Links eher um Optik oder Vertrauen?",
          answer: "Um beides. Eine bessere Darstellung hilft bei der Wiedererkennung und eine vertraute Domain senkt die Klickhürde.",
        },
        {
          question: "Welche Teams profitieren am meisten davon?",
          answer: "Marketing-, Content-, Partnership-, Support- und Produkt-Teams, die regelmassig Links extern teilen.",
        },
        {
          question: "Ist das auch bei seltenem Einsatz sinnvoll?",
          answer: "Ja, vor allem wenn diese Links in offentlichen Kampagnen, Bios oder Markenunterlagen erscheinen.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "CONFIANCA DE MARCA",
      overviewTitle: "Por que links curtos com marca importam para times de marketing",
      overviewDescription:
        "Quem procura links curtos com marca normalmente quer mais confianca, consistencia e uma apresentacao melhor em campanhas, bios e materiais publicos.",
      highlights: [
        {
          title: "A marca fica mais bem apresentada",
          body: "Um link curto com melhor aparencia faz campanhas, colaboracoes e materiais externos parecerem mais planejados.",
        },
        {
          title: "Mais confianca em canais publicos",
          body: "Um dominio reconhecivel reduz a desconfiança que links genericos costumam causar antes do clique.",
        },
        {
          title: "Padrao unico para varios times",
          body: "Marketing, conteudo, suporte e parcerias conseguem compartilhar links com o mesmo formato em vez de criar padroes diferentes.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Paginas de campanha, newsletters, media kits e briefs para criadores",
        "Documentacao de suporte, links de onboarding e referencias de ajuda publica",
        "Ativos de campanha que precisam de mais lembranca e confianca visual",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Links com marca ajudam mais na aparencia ou na confianca?",
          answer: "Nos dois pontos. Uma apresentacao melhor aumenta a lembranca, e um dominio reconhecivel reduz a friccao no clique.",
        },
        {
          question: "Quais times se beneficiam mais desse tipo de link?",
          answer: "Times de marketing, conteudo, parcerias, suporte e produto que compartilham links publicamente com frequencia.",
        },
        {
          question: "Ainda vale a pena se eu compartilhar links so de vez em quando?",
          answer: "Sim, principalmente se esses links aparecem em campanhas, bios ou documentos que representam a marca.",
        },
      ],
    },
    hi: {
      overviewEyebrow: "BRAND TRUST",
      overviewTitle: "Marketing teams branded short links क्यों खोजती हैं",
      overviewDescription:
        "Log branded short links tab dhoondhte hain jab unhe trust, consistency aur campaigns ya bios me links ka overall look important lagta hai.",
      highlights: [
        {
          title: "Brand presentation zyada polished lagti hai",
          body: "Ads, creator partnerships, docs aur public pages me clean branded link poori campaign ko zyada planned aur professional dikhati hai.",
        },
        {
          title: "Public channels me trust badhta hai",
          body: "Branded link dekhkar users ko source samajhna aasaan hota hai, isliye generic redirect domain ke muqable zyada भरोसा banta hai.",
        },
        {
          title: "Teams ek hi link style follow kar sakti hain",
          body: "Marketing, content, support aur partnerships teams alag patterns banane ke bajay ek consistent format use kar sakti hain.",
        },
      ],
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Campaign pages, newsletters, media kits aur creator partnership briefs",
        "Support docs, onboarding links aur public help-center pages",
        "Campaign assets jahan better recall aur visual trust zaruri hota hai",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Branded links ka main fayda look hai ya trust?",
          answer: "Dono. Clean presentation se brand yaad rehta hai, aur recognizable domain ki wajah se click karne se pehle hesitation kam hota hai.",
        },
        {
          question: "Kin teams ko branded short links sabse zyada suit karti hain?",
          answer: "Marketing, content, partnerships, support aur product teams jo links ko public channels me regularly share karti hain.",
        },
        {
          question: "Kya kabhi-kabhi link share karne par bhi branded links useful hoti hain?",
          answer: "Haan. Agar link campaigns, bios, creator pages ya public docs me dikhne wali hai, to branded format fir bhi farq lata hai.",
        },
      ],
    },
    id: {
      overviewEyebrow: "KEPERCAYAAN MEREK",
      overviewTitle: "Mengapa branded short link penting untuk tim marketing",
      overviewDescription:
        "Orang biasanya mencari branded short link ketika mereka peduli pada kepercayaan, konsistensi, dan tampilan tautan di kampanye, bio, atau dokumen publik.",
      highlights: [
        {
          title: "Tampilan merek jadi lebih rapi",
          body: "Short link yang rapi membuat kampanye terasa lebih siap dan lebih konsisten di iklan, kolaborasi kreator, dan dokumen eksternal.",
        },
        {
          title: "Lebih dipercaya di kanal publik",
          body: "Branded link membantu audiens lebih cepat mengenali sumber tautan dibanding domain redirect generik.",
        },
        {
          title: "Format tautan lebih konsisten antar tim",
          body: "Tim kampanye, konten, support, dan partnership bisa memakai format tautan yang sama tanpa membuat pola baru setiap saat.",
        },
      ],
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Halaman kampanye, newsletter, media kit, dan brief kolaborasi kreator",
        "Dokumen support, link onboarding, dan halaman help center publik",
        "Aset kampanye yang butuh daya ingat dan kepercayaan visual yang lebih kuat",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Apakah branded link lebih berguna untuk tampilan atau kepercayaan?",
          answer: "Keduanya. Tampilan yang lebih rapi membantu orang mengingat, sementara domain yang mudah dikenali membuat orang lebih yakin untuk klik.",
        },
        {
          question: "Tim mana yang paling terbantu dengan branded short link?",
          answer: "Tim marketing, content, partnership, support, dan product yang rutin membagikan tautan ke publik.",
        },
        {
          question: "Apakah branded short link tetap berguna jika tidak dipakai setiap hari?",
          answer: "Ya. Selama tautan dipakai di kampanye, bio, atau dokumen yang mewakili merek, tampilan yang rapi tetap penting.",
        },
      ],
    },
  },
  "url-shortener-api": {
    ja: {
      overviewEyebrow: "API WORKFLOW",
      overviewTitle: "URL短縮APIページでチームが確認したいこと",
      overviewDescription:
        "URL短縮APIを探すチームは、単発利用ではなく、安定した生成量、わかりやすいレスポンス、月額で管理しやすい運用を求めています。",
      highlights: [
        {
          title: "プロダクトや内部ツールへ組み込みやすい",
          body: "キャンペーンビルダー、CMS、社内ツール、通知基盤など、短縮リンクを繰り返し作るフローにそのまま組み込みやすい構成です。",
        },
        {
          title: "月間利用量を見積もりやすい",
          body: "月額プラン前提で使えると、生成数、コスト、運用負荷をチーム単位で把握しやすくなります。",
        },
        {
          title: "手作業の発行を自動化へ移しやすい",
          body: "Web画面で手動発行していた短縮リンクを、CRM、QR生成、運用ダッシュボードへ自然に移行できます。",
        },
      ],
      scenariosTitle: "よくある使い方",
      scenarios: [
        "キャンペーンビルダー、CMSワークフロー、社内成長ツール",
        "QRコード生成パイプラインと運用ダッシュボード",
        "プロダクト通知、CRM施策、サポート自動化",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "通常の短縮ツールではなくAPIを探すのはどんなチームですか？",
          answer: "プロダクト、グロース、運用、開発チームなど、短縮リンクを繰り返し大量に発行する必要があるチームです。",
        },
        {
          question: "なぜこのページでは月額プランを強調しているのですか？",
          answer: "API導入では料金と利用枠の予測しやすさが重要で、運用計画や調達判断に直結するからです。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "API WORKFLOW",
      overviewTitle: "팀이 URL 단축 API 페이지에서 기대하는 것",
      overviewDescription:
        "API를 찾는 사용자는 일반 소비자용 단축 도구와 다릅니다. 더 예측 가능한 사용량, 깔끔한 응답 구조, 빠른 운영 전환을 원합니다.",
      highlights: [
        {
          title: "제품과 내부 도구에 바로 연결 가능",
          body: "제품 기능, 캠페인 도구, 운영 시스템에서 반복적으로 단축 링크를 만들 때 API가 가장 자연스럽습니다.",
        },
        {
          title: "월간 사용량 관리가 쉬움",
          body: "매월 얼마나 생성하는지 예측 가능한 한도 안에서 운영할 수 있어 캠페인과 제품 비용을 관리하기 쉽습니다.",
        },
        {
          title: "수동 작업을 자동화로 전환",
          body: "웹에서 손으로 만들던 링크 생성 흐름을 백오피스, CRM, QR 파이프라인으로 옮길 수 있습니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "캠페인 빌더, CMS 흐름, 내부 성장 도구",
        "QR 생성 파이프라인과 운영 대시보드",
        "제품 알림, CRM 여정, 지원 자동화",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "일반 단축 도구 대신 API를 찾는 팀은 어떤 팀인가요?",
          answer: "보통 제품 팀, 성장 엔지니어, 운영 팀처럼 대량으로 반복 생성해야 하는 팀입니다.",
        },
        {
          question: "왜 이 페이지는 월간 플랜을 강조하나요?",
          answer: "API 도입 팀은 비용과 사용량이 예측 가능해야 실제 운영에 넣기 쉽기 때문입니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "FLUJO API",
      overviewTitle: "Lo que suele esperar un equipo de una API de acortador",
      overviewDescription:
        "La intencion de quien busca una API no es la misma que la de un usuario puntual. Quiere uso predecible, respuestas limpias y una integracion facil de operar.",
      highlights: [
        {
          title: "Lista para producto y herramientas de producto",
          body: "Encaja bien en funciones de producto, generadores de campana y sistemas de producto donde crear links cortos es una tarea repetida.",
        },
        {
          title: "Uso mensual mas claro",
          body: "El equipo puede controlar mejor volumen, capacidad y coste cuando trabaja con una cuota mensual comprensible.",
        },
        {
          title: "Paso natural de manual a automatizado",
          body: "Lo que hoy se hace a mano en la web puede pasar despues a mensajes, paneles y tareas automatizadas.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Generadores de campana, flujos de CMS y herramientas de producto para adquisicion",
        "Pipelines de QR y paneles operativos",
        "Notificaciones de producto, recorridos de clientes y automatizacion de soporte",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Quien busca una API de links cortos en vez de un acortador normal?",
          answer: "Normalmente equipos de producto, adquisicion, operaciones y cualquiera que necesite generar links de forma repetible a escala.",
        },
        {
          question: "Por que esta pagina remarca los planes mensuales?",
          answer: "Porque quien compra una API suele querer coste y cuota previsibles, no un uso ambiguo dificil de planificar.",
        },
      ],
    },
    fr: {
      overviewEyebrow: "FLUX API",
      overviewTitle: "Ce qu'une equipe attend d'une API de raccourcisseur",
      overviewDescription:
        "L'intention de recherche autour d'une API est differente de celle d'un utilisateur ponctuel. L'equipe veut un usage previsible, des reponses propres et une integration simple a exploiter.",
      highlights: [
        {
          title: "Prete pour le produit et les outils metier",
          body: "Elle s'integre bien dans les fonctions produit, les generateurs de campagne et les systemes metier ou la creation de liens courts est repetitive.",
        },
        {
          title: "Lecture plus claire de l'usage mensuel",
          body: "L'equipe controle mieux volume, capacite et cout lorsqu'elle travaille avec un quota mensuel simple a comprendre.",
        },
        {
          title: "Passage naturel du manuel a l'automatique",
          body: "Ce qui est fait a la main sur le web peut ensuite passer dans le CRM, les tableaux de bord et les taches automatisees.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Generateurs de campagne, flux CMS et outils produit pour les campagnes",
        "Pipelines QR et tableaux de bord d'usage",
        "Notifications produit, parcours CRM et automatisation du support",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Qui cherche une API de short links plutot qu'un raccourcisseur classique ?",
          answer: "Generalement les equipes produit, campagne, support et tous ceux qui doivent generer des liens de facon repetitive a grande echelle.",
        },
        {
          question: "Pourquoi cette page insiste-t-elle sur les forfaits mensuels ?",
          answer: "Parce que les acheteurs d'API veulent un cout et des quotas previsibles, pas un usage flou difficile a planifier.",
        },
      ],
    },
    de: {
      overviewEyebrow: "API-WORKFLOW",
      overviewTitle: "Was Teams von einer URL-Shortener-API erwarten",
      overviewDescription:
        "Die Suchintention rund um eine API unterscheidet sich von der eines einmaligen Nutzers. Teams wollen planbare Nutzung, saubere Antworten und eine leicht betreibbare Integration.",
      highlights: [
        {
          title: "Bereit fur Produkt und Produkt-Tools",
          body: "Passt gut in Produktfunktionen, Kampagnen-Builder und Produktsysteme, in denen Kurzlinks wiederholt erzeugt werden.",
        },
        {
          title: "Klarerer Blick auf monatliche Nutzung",
          body: "Teams konnen Volumen, Kapazitat und Kosten besser steuern, wenn sie mit einem verstandlichen Monatskontingent arbeiten.",
        },
        {
          title: "Natuerlicher Schritt von manuell zu automatisiert",
          body: "Was heute im Web manuell geschieht, kann spaeter in CRM, Dashboards, QR-Seiten und Automatisierung uebergehen.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Kampagnen-Builder, CMS-Ablaufe und Produkt-Tools fur Kampagnen",
        "QR-Pipelines und operative Dashboards",
        "Produkt-Benachrichtigungen, CRM-Journeys und Support-Automatisierung",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Wer sucht eine URL-Shortener-API statt eines normalen Shorteners?",
          answer: "Meist Produkt-, Kampagnen- und Support-Teams sowie alle, die wiederholbare Link-Erzeugung im grosseren Umfang brauchen.",
        },
        {
          question: "Warum betont diese Seite monatliche Plane?",
          answer: "Weil API-Kaufer planbare Kosten und Quoten wollen, nicht ein schwer kalkulierbares Nutzungsmodell.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "FLUXO API",
      overviewTitle: "O que uma equipe espera de uma API de encurtador",
      overviewDescription:
        "A intencao de busca por API e diferente da de um usuario pontual. A equipe quer uso previsivel, respostas limpas e uma integracao facil de operar.",
      highlights: [
        {
          title: "Pronta para produto e ferramentas de produto",
          body: "Ela se encaixa bem em funcoes de produto, construtores de campanha e sistemas de produto onde criar links curtos e uma tarefa repetida.",
        },
        {
          title: "Leitura mais clara do uso mensal",
          body: "A equipe controla melhor volume, capacidade e custo quando trabalha com uma cota mensal facil de entender.",
        },
        {
          title: "Passagem natural do manual para o automatizado",
          body: "O que hoje e feito manualmente na web pode depois ir para CRM, paineis e tarefas automatizadas.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Construtores de campanha, fluxos de CMS e ferramentas de produto para campanhas",
        "Pipelines de QR e paineis de uso",
        "Notificacoes de produto, jornadas de CRM e automacao de suporte",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Quem procura uma API de short links em vez de um encurtador comum?",
          answer: "Normalmente equipes de produto, campanha, suporte e qualquer pessoa que precise gerar links de forma repetivel em escala.",
        },
        {
          question: "Por que esta pagina enfatiza planos mensais?",
          answer: "Porque quem compra API costuma querer custo e quota previsiveis, nao um uso ambiguo dificil de planejar.",
        },
      ],
    },
    en: {
      overviewEyebrow: "PRODUCT INTEGRATION",
      overviewTitle: "What teams usually expect from a URL shortener API page",
      overviewDescription:
        "API-driven search intent is different from one-off shortener intent. Product, campaign, and support teams want predictable usage, clean responses, and an easy path to rollout.",
      highlights: [
        {
          title: "One request to create links",
          body: "The main expectation is a stable endpoint that lets products and product tools create short links without manual work.",
        },
        {
          title: "Monthly usage that is easy to plan",
          body: "Teams care about fixed monthly quotas because campaign tools and automation tasks need predictability more than metered complexity.",
        },
        {
          title: "Works across product and reporting systems",
          body: "The same API can support campaigns, QR pages, onboarding flows, customer messages, and reporting dashboards.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Campaign builders, CMS flows, and product tools for campaign delivery",
        "QR pages and reporting dashboards",
        "Product notifications, customer journeys, and support automation",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Who searches for a URL shortener API instead of a normal shortener?",
          answer: "Usually product teams, campaign teams, support teams, and anyone who needs repeatable link generation at scale.",
        },
        {
          question: "Why emphasize monthly plans on this page?",
          answer: "Because API buyers often want predictable costs and predictable quota limits, not vague pay-as-you-go usage.",
        },
        {
          question: "Is this page still useful if I just want to test manually first?",
          answer: "Yes. Teams can start with the web tool and move to the API once the approach proves useful.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "产品接入",
      overviewTitle: "短链 API 页面真正承接的是系统接入需求",
      overviewDescription:
        "搜索短链 API 的用户，和搜索普通短链工具的用户完全不同。他们更关注接入效率、额度管理、返回结构和后续扩展。",
      highlights: [
        {
          title: "一个请求就能生成短链",
          body: "产品功能、活动后台和内部系统最关心的是稳定接口，而不是手工操作流程。",
        },
        {
          title: "按月额度更容易做预算和管理",
          body: "对增长系统、内容后台和自动化流程来说，固定月额度比复杂按量计费更容易规划。",
        },
        {
          title: "能同时服务产品和运营链路",
          body: "同一个 API 可以支持活动系统、二维码流程、通知消息、CRM 场景和内部工作流。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "活动系统、CMS 后台、增长面板和产品工具里的批量短链生成",
        "二维码页面、数据后台和运营场景中的统一跳转能力",
        "通知消息、CRM 触达、客服流程和产品内分享入口",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "为什么会有人搜短链 API 而不是普通短链工具？",
          answer: "因为他们需要的是可重复、可批量、可集成的短链能力，通常来自产品、增长或运营系统接入场景。",
        },
        {
          question: "为什么这个页面会强调按月套餐？",
          answer: "API 采购方通常更看重可预测的额度和成本，而不是模糊的按量模式。",
        },
        {
          question: "如果我还在评估阶段，适合先从哪里开始？",
          answer: "可以先用网页工具验证场景，再在确定需求后接入 API，路径会更自然。",
        },
      ],
    },
  },
  "whatsapp-link-shortener": {
    en: {
      overviewEyebrow: "WHATSAPP SHARING",
      overviewTitle: "Why people search for a WhatsApp link shortener",
      overviewDescription:
        "Most WhatsApp short-link searches come from real distribution needs: bio links, ad entry points, QR materials, support entry, and sales conversations.",
      highlights: [
        {
          title: "Cleaner public sharing links",
          body: "WhatsApp entry URLs can become long and awkward. Shortening them makes bios, ads, QR codes, and campaign assets easier to present.",
        },
        {
          title: "Better fit for support and sales flows",
          body: "Teams often need a simple, recognizable WhatsApp link for customer service, lead qualification, or direct contact CTAs.",
        },
        {
          title: "Useful across online and offline channels",
          body: "The same short WhatsApp link can work in social bios, print QR campaigns, product packaging, and event materials.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Instagram and TikTok bios that need a cleaner WhatsApp contact entry",
        "Ad campaigns and QR codes that lead into a support or sales conversation",
        "Packaging, cards, and event material that direct users into messaging",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Why shorten a WhatsApp link if the destination is already simple?",
          answer: "Because the visible URL still matters in bios, ads, and printed material, where cleaner links improve presentation and trust.",
        },
        {
          question: "Who typically needs this page?",
          answer: "Businesses, creators, support teams, sales teams, and anyone using WhatsApp as an entry point.",
        },
        {
          question: "Can this also support QR code usage?",
          answer: "Yes. A short WhatsApp link is much easier to reuse in QR pages and printed materials than a long raw destination URL.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "WhatsApp 分享",
      overviewTitle: "用户搜索 WhatsApp 短链，本质上是在找更顺手的入口",
      overviewDescription:
        "WhatsApp 原始链接常常太长，不适合放在简介页、广告、二维码和客服入口里，所以短链页面承接的是很明确的分发需求。",
      highlights: [
        {
          title: "公开展示时更干净",
          body: "放在简介页、广告物料、活动页和外部说明里时，短链比原始 WhatsApp 链接更整洁，也更容易点击。",
        },
        {
          title: "适合客服和销售入口",
          body: "很多团队需要把 WhatsApp 作为客服、咨询、留资或销售沟通入口，短链会让路径更清晰。",
        },
        {
          title: "可以同时服务线上和线下导流",
          body: "同一个 WhatsApp 短链既可以用于社媒，也可以用于二维码、包装、门店和活动物料。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "Instagram、TikTok 等简介页里的 WhatsApp 联系入口",
        "广告投放、二维码导流和活动物料中的客服或咨询入口",
        "产品包装、售后卡片、门店海报和线下传播中的消息入口",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "为什么 WhatsApp 链接也要做短链？",
          answer: "因为展示出来的链接形态会直接影响点击感受，尤其在公开渠道里，短链更干净也更可信。",
        },
        {
          question: "哪些团队最常用这种页面？",
          answer: "商家、内容创作者、客服团队、销售团队，以及用 WhatsApp 做联系入口的运营团队。",
        },
        {
          question: "这种短链也能配合二维码一起用吗？",
          answer: "可以，而且效果很好。先做短链再做二维码，会比直接使用原始链接更适合打印和传播。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "WHATSAPP SHARING",
      overviewTitle: "사람들이 WhatsApp 링크 단축 페이지를 찾는 이유",
      overviewDescription:
        "WhatsApp 단축 링크 검색은 대부분 실제 배포 장면에서 나옵니다. 바이오 링크, 광고 진입, QR 안내물, 지원 연결, 영업 대화가 대표적입니다.",
      highlights: [
        {
          title: "공개 공유용 링크가 더 깔끔해집니다",
          body: "WhatsApp 진입 URL은 길고 어색해지기 쉽습니다. 짧게 만들면 바이오, 광고, QR 코드, 캠페인 자산에서 훨씬 보기 좋아집니다.",
        },
        {
          title: "지원과 영업 흐름에 더 잘 맞습니다",
          body: "많은 팀이 고객지원, 리드 상담, 직접 문의 CTA에 쓸 간단하고 알아보기 쉬운 WhatsApp 링크를 원합니다.",
        },
        {
          title: "온라인과 오프라인 모두에 재사용 가능",
          body: "같은 WhatsApp 단축 링크를 소셜 바이오, QR 캠페인, 패키지, 행사 안내물에 함께 쓸 수 있습니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "더 깔끔한 WhatsApp 연락 진입이 필요한 Instagram, TikTok 바이오",
        "지원 또는 영업 대화로 연결되는 광고 캠페인과 QR 코드",
        "메시지로 유도하는 패키지, 카드, 행사 안내물",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "도착지가 단순한데도 WhatsApp 링크를 줄여야 하나요?",
          answer: "네. 바이오, 광고, 인쇄물에서는 보이는 링크 자체가 중요해서 더 깔끔한 표현이 신뢰와 클릭에 영향을 줍니다.",
        },
        {
          question: "보통 누가 이런 페이지를 쓰나요?",
          answer: "비즈니스, 크리에이터, 지원 팀, 영업 팀, 그리고 WhatsApp을 진입 채널로 쓰는 운영 담당자가 주로 사용합니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "WHATSAPP",
      overviewTitle: "Por que la gente busca un acortador de links de WhatsApp",
      overviewDescription:
        "La mayoria de las busquedas de links cortos para WhatsApp vienen de necesidades reales de distribucion: bios, anuncios, materiales QR, paso a soporte y conversaciones de ventas.",
      highlights: [
        {
          title: "Links mas limpios para espacios publicos",
          body: "Las URLs de entrada a WhatsApp suelen ser largas e incomodas. Acortarlas mejora su aspecto en bios, anuncios, QR y materiales de campana.",
        },
        {
          title: "Mejor para soporte y ventas",
          body: "Muchos equipos necesitan un link simple y reconocible para atencion al cliente, calificacion de leads o CTAs de contacto directo.",
        },
        {
          title: "Sirve en canales online y offline",
          body: "El mismo link corto de WhatsApp puede usarse en bios sociales, campanas QR, packaging y materiales de evento.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Bios de Instagram y TikTok que necesitan un acceso mas limpio a WhatsApp",
        "Campanas de anuncios y QR que llevan a una conversacion de soporte o ventas",
        "Packaging, tarjetas y material de evento que dirige a mensajes",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que acortar un link de WhatsApp si el destino ya es simple?",
          answer: "Porque la URL visible sigue importando en bios, anuncios y material impreso, donde un link mas limpio mejora la presentacion y la confianza.",
        },
        {
          question: "Quien suele necesitar esta pagina?",
          answer: "Negocios, creadores, equipos de soporte, equipos de ventas y cualquier operador que use WhatsApp como punto de entrada.",
        },
      ],
    },
    ja: {
      overviewEyebrow: "WHATSAPP",
      overviewTitle: "WhatsApp短縮リンクが探される理由",
      overviewDescription:
        "WhatsApp向け短縮リンクの検索は、実際の配布ニーズから生まれます。プロフィール導線、広告流入、QR配布、サポート誘導、営業会話が代表例です。",
      highlights: [
        {
          title: "公開導線で見やすいリンクになる",
          body: "WhatsAppの導線URLは長くなりやすく、プロフィール、広告、QR、キャンペーン素材で見た目が重くなります。短縮すると共有しやすくなります。",
        },
        {
          title: "サポートや営業導線に向いている",
          body: "顧客対応、問い合わせ、リード対応、直接連絡CTAに使うため、分かりやすいWhatsAppリンクを求めるチームが多くあります。",
        },
        {
          title: "オンラインとオフラインの両方で使える",
          body: "同じ短縮WhatsAppリンクをSNSプロフィール、QR配布、パッケージ、イベント案内でまとめて再利用できます。",
        },
      ],
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "InstagramやTikTokのプロフィールに置くWhatsApp連絡導線",
        "広告やQRコードからサポートや営業会話へつなぐ導線",
        "パッケージ、カード、イベント配布物からメッセージへ誘導する導線",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "遷移先が単純でもWhatsAppリンクを短くする意味はありますか？",
          answer: "あります。プロフィール、広告、印刷物では見えるURL自体が重要で、より整ったリンクの方が信頼感と見た目を高めます。",
        },
        {
          question: "このページはどんな人がよく使いますか？",
          answer: "事業者、クリエイター、サポートチーム、営業チーム、そしてWhatsAppを入口に使う運用担当者です。",
        },
      ],
    },
    fr: {
      overviewEyebrow: "WHATSAPP",
      overviewTitle: "Pourquoi les utilisateurs cherchent un raccourcisseur de lien WhatsApp",
      overviewDescription:
        "La plupart des recherches autour des liens WhatsApp courts viennent de besoins de diffusion tres concrets: bios, publicites, supports QR, acces au support et conversations commerciales.",
      highlights: [
        {
          title: "Des liens plus propres dans les espaces publics",
          body: "Les URLs d'entree WhatsApp deviennent vite longues et peu elegantes. Les raccourcir les rend plus presentables dans les bios, publicites, QR codes et assets de campagne.",
        },
        {
          title: "Mieux adaptes aux flux support et vente",
          body: "De nombreuses equipes veulent un lien WhatsApp simple et reconnaissable pour le service client, la qualification de leads ou les CTA de contact direct.",
        },
        {
          title: "Utiles en ligne comme hors ligne",
          body: "Le meme lien WhatsApp court peut etre reutilise dans des bios sociales, des campagnes QR, des packagings ou des supports evenementiels.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Bios Instagram et TikTok qui ont besoin d'une entree WhatsApp plus propre",
        "Campagnes publicitaires et QR codes qui ouvrent une conversation support ou vente",
        "Packaging, cartes et supports evenementiels qui dirigent vers la messagerie",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Pourquoi raccourcir un lien WhatsApp si la destination est deja simple ?",
          answer: "Parce que l'URL visible compte toujours dans les bios, publicites et supports imprimes, ou un lien plus propre ameliore la presentation et la confiance.",
        },
        {
          question: "Qui a generalement besoin de cette page ?",
          answer: "Les entreprises, createurs, equipes support, equipes commerciales et toute personne qui utilise WhatsApp comme point d'entree.",
        },
      ],
    },
    de: {
      overviewEyebrow: "WHATSAPP",
      overviewTitle: "Warum Menschen nach einem WhatsApp-Link-Kurzlink suchen",
      overviewDescription:
        "Die meisten Suchanfragen nach WhatsApp-Kurzlinks kommen aus echten Verteilungsaufgaben: Bios, Anzeigen, QR-Materialien, Support-Ubergaben und Sales-Gesprachen.",
      highlights: [
        {
          title: "Sauberere Links fur offentliche Flachen",
          body: "WhatsApp-Einstiegslinks werden schnell lang und unruhig. Gekurzt sehen sie in Bios, Anzeigen, QR-Codes und Kampagnenmaterial deutlich besser aus.",
        },
        {
          title: "Besser fur Support- und Sales-Flows",
          body: "Viele Teams brauchen einen einfachen, leicht erkennbaren WhatsApp-Link fur Kundenservice, Lead-Qualifizierung oder direkte Kontakt-CTAs.",
        },
        {
          title: "Online und offline wiederverwendbar",
          body: "Derselbe kurze WhatsApp-Link kann in Social-Bios, QR-Kampagnen, Verpackungen und Eventmaterial eingesetzt werden.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Instagram- und TikTok-Bios mit saubererem WhatsApp-Kontakteinstieg",
        "Anzeigenkampagnen und QR-Codes, die in Support- oder Verkaufsgesprachen landen",
        "Verpackungen, Karten und Eventmaterial mit Einstieg in Messaging",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Warum einen WhatsApp-Link kurzen, wenn das Ziel schon klar ist?",
          answer: "Weil die sichtbare URL in Bios, Anzeigen und Druckmaterial trotzdem wichtig bleibt und eine saubere Darstellung Vertrauen schafft.",
        },
        {
          question: "Wer braucht so eine Seite typischerweise?",
          answer: "Unternehmen, Creator, Support-Teams, Vertriebs-Teams und alle, die WhatsApp als Kontakt-Einstieg nutzen.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "WHATSAPP",
      overviewTitle: "Por que as pessoas procuram um encurtador de link do WhatsApp",
      overviewDescription:
        "A maior parte das buscas por links curtos de WhatsApp vem de necessidades reais de distribuicao: bios, anuncios, materiais com QR, acesso ao suporte e conversas de vendas.",
      highlights: [
        {
          title: "Links mais limpos em espacos publicos",
          body: "As URLs de entrada do WhatsApp podem ficar longas e estranhas. Encurtar deixa bios, anuncios, QR codes e materiais de campanha mais apresentaveis.",
        },
        {
          title: "Melhor encaixe em fluxos de suporte e vendas",
          body: "Muitas equipes precisam de um link simples e reconhecivel para atendimento, qualificacao de leads ou CTAs de contato direto.",
        },
        {
          title: "Funciona bem online e offline",
          body: "O mesmo short link do WhatsApp pode ser reutilizado em bios sociais, campanhas com QR, embalagens e materiais de evento.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Bios de Instagram e TikTok que precisam de uma entrada mais limpa para o WhatsApp",
        "Campanhas de anuncios e QR codes que levam a uma conversa de suporte ou vendas",
        "Embalagens, cartoes e materiais de evento que direcionam para mensagens",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que encurtar um link do WhatsApp se o destino ja e simples?",
          answer: "Porque a URL visivel continua importando em bios, anuncios e materiais impressos, onde um link mais limpo melhora a apresentacao e a confianca.",
        },
        {
          question: "Quem costuma precisar desta pagina?",
          answer: "Empresas, criadores, times de suporte, times comerciais e qualquer operador que use o WhatsApp como ponto de entrada.",
        },
      ],
    },
  },
  "link-analytics": {
    en: {
      overviewEyebrow: "USAGE VISIBILITY",
      overviewTitle: "What teams usually want from short-link analytics pages",
      overviewDescription:
        "Search intent around link analytics is often usage-focused. Teams want a simple way to understand how much short-link usage is happening inside a monthly model.",
      highlights: [
        {
          title: "Usage visibility without analytics bloat",
          body: "Not every team needs a full attribution suite. Many just need a clear view of link volume and API consumption inside a monthly plan.",
        },
        {
          title: "Better planning for campaigns and product tools",
          body: "When monthly usage is visible, teams can avoid sudden quota surprises during launches, promotions, or recurring campaigns.",
        },
        {
          title: "Shared reference point for ops and product",
          body: "A simple usage view helps finance, campaign, and product teams speak about the same short-link workload in one place.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Monthly API usage checks for campaign and support teams",
        "Capacity planning before campaigns, launches, and partner pushes",
        "Internal reporting around short-link generation volume",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Is this analytics page focused on clicks or on usage?",
          answer: "This page is mainly positioned around usage visibility and monthly planning, which is often what API buyers care about first.",
        },
        {
          question: "Who benefits from a simpler analytics model?",
          answer: "Teams that need clearer usage visibility without the weight of a full analytics stack.",
        },
        {
          question: "Why is this page useful during tool comparison?",
          answer: "Because people often look up link analytics or short-link tracking when they are comparing tools for a real purchase or rollout decision.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "用量可见性",
      overviewTitle: "短链统计页更像一个运营管理页，而不只是数据页",
      overviewDescription:
        "很多人搜索链接统计，并不是想要复杂归因，而是想知道自己生成了多少短链、还剩多少额度、团队是否需要升级。",
      highlights: [
        {
          title: "不需要很重的数据系统也能看用量",
          body: "对很多团队来说，只要能清楚看到 API 用量和月度消耗，就足以支撑日常决策。",
        },
        {
          title: "更适合活动前后的容量规划",
          body: "当活动投放、产品发布或合作推广开始前，团队可以先看清短链消耗，避免额度临时不够。",
        },
        {
          title: "让产品、运营和管理层说同一套数据",
          body: "简单的短链用量视图，可以让产品、运营、财务和负责人围绕同一组指标沟通。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "增长和运营团队做月度 API 用量复盘",
        "活动、发布、合作推广前做短链容量预估",
        "内部汇报里查看短链生成量和套餐匹配情况",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "这里的统计更偏点击数据还是用量数据？",
          answer: "当前页面定位更偏向用量可见性和月度管理，这通常是 API 使用方最先关心的问题。",
        },
        {
          question: "什么样的团队更适合这种轻量统计方式？",
          answer: "不想接入复杂分析平台，但需要明确看到短链消耗和套餐状态的团队都会受益。",
        },
        {
          question: "为什么链接统计页对比工具时很重要？",
          answer: "因为很多用户在比较工具时，会直接关注 link analytics、short-link tracking 这类能力，背后往往是明确的采购或接入需求。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "LINK ANALYTICS",
      overviewTitle: "팀이 링크 분석 페이지에서 주로 원하는 것",
      overviewDescription:
        "링크 분석 검색 의도는 보통 운영 관점입니다. 팀은 월간 모델 안에서 단축 링크 사용량이 얼마나 되는지 단순하게 파악하길 원합니다.",
      highlights: [
        {
          title: "월간 API 사용량을 빠르게 확인",
          body: "성장팀과 운영팀은 이번 달에 얼마나 많은 링크를 만들었는지, 남은 여유가 어느 정도인지 바로 알고 싶어 합니다.",
        },
        {
          title: "캠페인 전 용량 계획에 도움",
          body: "런칭, 대형 배포, 파트너 푸시 전에 예상 링크 생성량을 확인하면 계획이 훨씬 쉬워집니다.",
        },
        {
          title: "복잡한 분석 스택 없이 운영 가시성 확보",
          body: "이 페이지는 클릭 분석보다 사용량과 플랜 관리에 초점을 두어 팀 운영 결정을 더 빠르게 만듭니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "성장팀과 운영팀의 월간 API 사용량 점검",
        "캠페인, 런칭, 파트너 배포 전 용량 계획",
        "단축 링크 생성량에 대한 내부 보고",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "이 분석 페이지는 클릭보다 사용량 중심인가요?",
          answer: "네. 현재는 월간 계획과 사용량 가시성에 더 초점을 두고 있으며, 이는 API 도입 팀이 먼저 보는 정보입니다.",
        },
        {
          question: "누가 이런 단순한 분석 모델의 도움을 가장 많이 받나요?",
          answer: "무거운 분석 도구 없이도 운영 현황과 플랜 상태를 명확하게 보고 싶은 팀입니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "ANALITICA",
      overviewTitle: "Lo que suele querer un equipo de una pagina de analitica de links",
      overviewDescription:
        "La intencion de busqueda alrededor de analitica de links suele ser operativa. Los equipos quieren una forma simple de entender cuanto uso de short links ocurre dentro de un modelo mensual.",
      highlights: [
        {
          title: "Chequeo rapido del uso mensual",
          body: "Los equipos de adquisicion y operaciones quieren ver cuantas URLs se generan via API y cuanto margen queda dentro del plan.",
        },
        {
          title: "Mejor planificacion antes de campanas",
          body: "Antes de lanzamientos, pushes comerciales o distribucion con partners, mirar el volumen esperado ayuda a evitar cuellos de botella.",
        },
        {
          title: "Visibilidad operativa sin stack pesado",
          body: "La pagina se centra mas en uso y gestion mensual que en analitica compleja de clics, que no siempre es lo primero que el equipo necesita.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Revisiones mensuales de uso API para adquisicion y operaciones",
        "Planificacion de capacidad antes de campanas, lanzamientos y empujes con partners",
        "Reporting de equipo sobre volumen de enlaces cortos generados",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Esta pagina se centra en clics o en uso?",
          answer: "Principalmente en visibilidad de uso y planificacion mensual, que suele ser lo primero que mira quien compra una API.",
        },
        {
          question: "Quien se beneficia mas de un modelo de analitica simple?",
          answer: "Equipos que necesitan claridad operativa sin cargar con una plataforma completa de analytics.",
        },
      ],
    },
    ja: {
      overviewEyebrow: "LINK ANALYTICS",
      overviewTitle: "短縮リンク分析ページでチームが知りたいこと",
      overviewDescription:
        "リンク分析を探す意図は多くの場合オペレーション寄りです。チームは月額モデルの中でどれだけ短縮リンクを使っているかをシンプルに把握したいと考えています。",
      highlights: [
        {
          title: "大きな分析基盤なしで利用量を把握",
          body: "全てのチームが本格的なアトリビューション基盤を必要とするわけではありません。月間のリンク量とAPI消費が分かれば十分なことも多いです。",
        },
        {
          title: "キャンペーン前の計画に役立つ",
          body: "月次利用量が見えていれば、ローンチや配信前にクオータ不足を避けやすくなります。",
        },
        {
          title: "運用とプロダクトで同じ数字を見られる",
          body: "シンプルな利用量の見え方があると、運用、プロダクト、管理側が同じ短縮リンク負荷を前提に話せます。",
        },
      ],
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "獲得チームや運用チームによる月次API利用量の確認",
        "キャンペーン、ローンチ、提携配布前の容量計画",
        "短縮リンク生成量に関する内部レポート",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "この分析ページはクリックより利用量を見るためのものですか？",
          answer: "はい。現状は利用量の可視化と月次計画を重視しており、API導入チームが最初に気にするポイントに寄せています。",
        },
        {
          question: "こうした軽量な分析モデルはどんなチームに向いていますか？",
          answer: "重い分析基盤を持たずに、運用状況やプラン残量を明確に見たいチームです。",
        },
      ],
    },
    fr: {
      overviewEyebrow: "ANALYTIQUE",
      overviewTitle: "Ce qu'une equipe attend souvent d'une page d'analytique des liens",
      overviewDescription:
        "L'intention de recherche autour de l'analytique de liens porte souvent sur l'usage. Les equipes veulent une facon simple de comprendre l'usage des liens courts dans un cadre mensuel.",
      highlights: [
        {
          title: "Visibilite d'usage sans couche analytique lourde",
          body: "Toutes les equipes n'ont pas besoin d'une suite d'attribution complete. Beaucoup veulent seulement une vue claire sur le volume de liens et la consommation API.",
        },
        {
          title: "Meilleure planification pour campagnes et outils produit",
          body: "Quand l'usage mensuel est visible, il devient plus simple d'eviter les surprises de quota pendant un lancement, une promotion ou une campagne recurrente.",
        },
        {
          title: "Point de reference commun pour ops et produit",
          body: "Une vue d'usage simple aide finance, campagne et produit a parler de la meme charge short-link au meme endroit.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Revues mensuelles d'usage API pour les equipes campagne et support",
        "Planification de capacite avant campagnes, lancements et distributions partenaires",
        "Reporting d'equipe sur le volume de liens courts generes",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Cette page d'analytique porte-t-elle sur les clics ou sur l'usage ?",
          answer: "Elle est surtout positionnee sur la visibilite d'usage et la planification mensuelle, ce qui interesse souvent d'abord les acheteurs d'API.",
        },
        {
          question: "Qui profite le plus d'un modele d'analytique simplifie ?",
          answer: "Les equipes qui ont besoin d'une meilleure visibilite d'usage sans supporter tout le poids d'une stack analytics complete.",
        },
      ],
    },
    de: {
      overviewEyebrow: "ANALYTICS",
      overviewTitle: "Was Teams auf einer Link-Analytics-Seite meist wissen wollen",
      overviewDescription:
        "Die Suchintention rund um Link-Analytics ist oft operativ. Teams wollen einfach verstehen, wie viel Kurzlink-Nutzung in einem Monatsmodell stattfindet.",
      highlights: [
        {
          title: "Nutzungssicht ohne Analytics-Overhead",
          body: "Nicht jedes Team braucht eine komplette Attribution-Suite. Vielen reicht ein klarer Blick auf Link-Volumen und API-Verbrauch im Monatsplan.",
        },
        {
          title: "Bessere Planung fur Kampagnen und Produkt-Tools",
          body: "Wenn die monatliche Nutzung sichtbar ist, lassen sich Quoten-Uberraschungen bei Launches, Promotionen oder wiederkehrenden Workflows leichter vermeiden.",
        },
        {
          title: "Gemeinsame Grundlage fur Kampagne und Produkt",
          body: "Eine einfache Nutzungssicht hilft Finance, Kampagne und Produkt dabei, uber dieselbe Kurzlink-Last zu sprechen.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Monatliche API-Nutzungschecks fur Kampagnen- und Support-Teams",
        "Kapazitatsplanung vor Kampagnen, Launches und Partner-Pushes",
        "Internes Reporting zum Volumen erzeugter Kurzlinks",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Geht es auf dieser Analytics-Seite eher um Klicks oder um Nutzung?",
          answer: "Der Fokus liegt vor allem auf Nutzungssicht und Monatsplanung, weil genau das API-Kaufer meist zuerst verstehen wollen.",
        },
        {
          question: "Wer profitiert am meisten von einem einfacheren Analytics-Modell?",
          answer: "Teams, die operative Klarheit brauchen, ohne einen kompletten Analytics-Stack mitzutragen.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "ANALITICA",
      overviewTitle: "O que uma equipe costuma querer de uma pagina de analitica de links",
      overviewDescription:
        "A intencao de busca em torno de analitica de links costuma ser focada em uso. As equipes querem uma forma simples de entender quanto uso de links curtos acontece dentro de um modelo mensal.",
      highlights: [
        {
          title: "Visibilidade de uso sem analitica pesada",
          body: "Nem toda equipe precisa de uma suite completa de atribuicao. Muitas so precisam de uma visao clara de volume de links e consumo de API dentro do plano mensal.",
        },
        {
          title: "Melhor planejamento para campanhas e ferramentas de produto",
          body: "Quando o uso mensal esta visivel, a equipe evita surpresas de cota durante lancamentos, promocoes ou fluxos recorrentes.",
        },
        {
          title: "Uma referencia compartilhada para campanha e produto",
          body: "Uma visao simples de uso ajuda financeiro, campanha e produto a falar sobre a mesma carga de links curtos em um unico lugar.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Revisoes mensais de uso de API para times de campanha e suporte",
        "Planejamento de capacidade antes de campanhas, lancamentos e distribuicao com parceiros",
        "Relatorios de equipe sobre volume de links curtos gerados",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Esta pagina de analitica e focada em cliques ou em uso?",
          answer: "Ela esta principalmente posicionada em visibilidade de uso e planejamento mensal, que costuma ser o primeiro ponto observado por quem compra API.",
        },
        {
          question: "Quem mais se beneficia de um modelo de analitica mais simples?",
          answer: "Equipes que precisam de visibilidade clara de uso sem carregar uma stack completa de analytics.",
        },
      ],
    },
  },
  "bio-link-shortener": {
    en: {
      overviewEyebrow: "BIO LINKS",
      overviewTitle: "Why bio links need cleaner short URLs",
      overviewDescription:
        "Bio links sit in public-facing profile areas where a messy long URL hurts presentation and trust. A short link keeps the profile cleaner and easier to scan.",
      highlights: [
        {
          title: "Better first impression in profiles",
          body: "On Instagram, TikTok, and creator pages, a cleaner link looks more polished and is easier to scan quickly.",
        },
        {
          title: "Easy to reuse across creator surfaces",
          body: "The same short link can work in a bio, media kit, profile page, and public post without feeling messy.",
        },
        {
          title: "More confidence in public-facing sharing",
          body: "When the visible link is cleaner, people understand it faster and feel more comfortable clicking it.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Instagram and TikTok profile links",
        "Creator link-in-bio pages and personal profile pages",
        "Public profile links shared in social posts and media kits",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Why shorten bio links?",
          answer: "Because profile links are highly visible and need to look clean, memorable, and trustworthy.",
        },
        {
          question: "Who typically uses this page?",
          answer: "Creators, brands, and social teams that manage public-facing profile links.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "简介链接",
      overviewTitle: "为什么简介页链接更适合做短链",
      overviewDescription:
        "简介页属于公开展示区域，过长链接会直接影响观感和信任。更干净的短链能让资料页看起来更整洁。",
      highlights: [
        {
          title: "资料页第一眼更舒服",
          body: "Instagram、TikTok 和创作者页面上，短一点的可见链接会显得更完整、更专业。",
        },
        {
          title: "创作者和品牌更容易复用",
          body: "同一条短链可以同时放进 bio、媒体资料包、个人主页和公开内容里，不会显得杂乱。",
        },
        {
          title: "公开场景里更容易被点击",
          body: "链接展示更干净时，用户更容易理解它是什么，也更愿意点进去。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "Instagram、TikTok 等资料页入口",
        "创作者 link in bio 页面和个人主页",
        "出现在社媒帖子和媒体资料包里的公开资料页链接",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "为什么简介页链接要做短链？",
          answer: "因为它通常长期公开展示，链接越干净，越容易建立专业感和点击意愿。",
        },
        {
          question: "这类页面通常是谁在用？",
          answer: "创作者、品牌、社媒团队，以及需要维护公开资料页入口的人都会用到。",
        },
      ],
    },
    ja: {
      overviewEyebrow: "BIO LINKS",
      overviewTitle: "プロフィールリンクに短縮URLが向いている理由",
      overviewDescription:
        "プロフィール欄は公開表示されるため、長いURLは見た目と信頼感の両方を下げます。短縮リンクならページ全体をすっきり見せられます。",
      highlights: [
        {
          title: "プロフィールの第一印象が整う",
          body: "Instagram、TikTok、クリエイターページで短いリンクはより洗練されて見え、ひと目で理解しやすくなります。",
        },
        {
          title: "複数の公開面で使い回しやすい",
          body: "同じ短縮リンクをbio、メディアキット、プロフィールページ、公開投稿で使っても散らかった印象になりません。",
        },
        {
          title: "公開リンクとして安心感が出る",
          body: "見えているリンクが整っていると、ユーザーは内容を把握しやすくクリックしやすくなります。",
        },
      ],
      scenariosTitle: "よくある使い方",
      scenarios: [
        "InstagramやTikTokのプロフィールリンク",
        "クリエイターのlink in bioページや個人プロフィールページ",
        "SNS投稿やメディアキットで共有する公開プロフィールリンク",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "なぜbioリンクを短くするのですか？",
          answer: "プロフィールリンクは人目に触れやすく、見た目が整っていて覚えやすく、信頼しやすいことが重要だからです。",
        },
        {
          question: "このページは主に誰が使いますか？",
          answer: "クリエイター、ブランド、SNS運用チーム、公開プロフィールリンクを管理する担当者です。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "BIO LINKS",
      overviewTitle: "바이오 링크에 더 깔끔한 짧은 URL이 필요한 이유",
      overviewDescription:
        "바이오 링크는 공개 프로필 영역에 노출되기 때문에 길고 복잡한 URL은 인상과 신뢰를 함께 떨어뜨립니다. 짧은 링크가 프로필을 더 정돈되게 보이게 합니다.",
      highlights: [
        {
          title: "프로필 첫인상이 더 좋아집니다",
          body: "Instagram, TikTok, 크리에이터 페이지에서 짧고 깔끔한 링크는 더 세련되고 빠르게 이해됩니다.",
        },
        {
          title: "여러 공개 채널에서 재사용하기 쉽습니다",
          body: "같은 짧은 링크를 바이오, 미디어 키트, 프로필 페이지, 공개 게시물에 반복해서 써도 지저분해 보이지 않습니다.",
        },
        {
          title: "공개 공유에서 클릭 부담을 줄입니다",
          body: "보이는 링크가 정리되어 있으면 사용자가 목적을 더 빨리 파악하고 클릭하기 쉬워집니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "Instagram, TikTok 프로필 링크",
        "크리에이터 link-in-bio 페이지와 개인 프로필 페이지",
        "소셜 게시물과 미디어 키트에서 공유되는 공개 프로필 링크",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "바이오 링크는 왜 짧게 만들어야 하나요?",
          answer: "프로필 링크는 노출이 많기 때문에 깔끔하고 기억하기 쉬우며 신뢰감 있게 보여야 합니다.",
        },
        {
          question: "보통 누가 이런 페이지를 쓰나요?",
          answer: "크리에이터, 브랜드, 소셜 팀, 공개 프로필 링크를 관리하는 운영 담당자가 많이 사용합니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "BIO LINKS",
      overviewTitle: "Por que los links bio necesitan URLs cortas mas limpias",
      overviewDescription:
        "Los links bio viven en perfiles publicos, donde una URL larga y desordenada afecta la presentacion y la confianza. Un link corto mantiene el perfil mas limpio.",
      highlights: [
        {
          title: "Mejor primera impresion en el perfil",
          body: "En Instagram, TikTok y paginas de creadores, un link mas limpio se ve mas cuidado y se entiende mas rapido.",
        },
        {
          title: "Facil de reutilizar en distintos espacios",
          body: "El mismo link corto puede ir en la bio, el media kit, la pagina de perfil y publicaciones publicas sin verse improvisado.",
        },
        {
          title: "Mas confianza al compartir en publico",
          body: "Cuando el link visible se ve ordenado, la gente entiende mejor a donde va y le cuesta menos hacer clic.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Links de perfil en Instagram y TikTok",
        "Paginas link-in-bio de creadores y perfiles personales",
        "Links de perfil publico compartidos en posts sociales y media kits",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que conviene acortar los links bio?",
          answer: "Porque son enlaces muy visibles y necesitan verse limpios, memorables y confiables.",
        },
        {
          question: "Quien suele usar este tipo de pagina?",
          answer: "Creadores, marcas, equipos sociales y operadores que gestionan links de perfil publicos.",
        },
      ],
    },
    fr: {
      overviewEyebrow: "BIO LINKS",
      overviewTitle: "Pourquoi les liens bio ont besoin d'URLs courtes plus propres",
      overviewDescription:
        "Les liens bio apparaissent dans des profils publics ou une URL longue et brouillonne nuit a la presentation et a la confiance. Un lien court rend le profil plus net.",
      highlights: [
        {
          title: "Une meilleure premiere impression",
          body: "Sur Instagram, TikTok et les pages createurs, un lien plus propre parait plus soigne et se comprend plus vite.",
        },
        {
          title: "Facile a reutiliser partout",
          body: "Le meme lien court peut etre utilise dans la bio, le media kit, la page profil et les posts publics sans donner une impression brouillonne.",
        },
        {
          title: "Plus rassurant en diffusion publique",
          body: "Quand le lien visible est plus propre, les utilisateurs comprennent plus vite sa destination et cliquent plus facilement.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Liens de profil Instagram et TikTok",
        "Pages link-in-bio de createurs et profils personnels",
        "Liens de profil public partages dans les posts sociaux et media kits",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Pourquoi raccourcir un lien bio ?",
          answer: "Parce qu'un lien de profil est tres visible et doit rester propre, memorisable et rassurant.",
        },
        {
          question: "Qui utilise generalement cette page ?",
          answer: "Les createurs, les marques, les equipes social media et les personnes qui gerent des liens de profil publics.",
        },
      ],
    },
    de: {
      overviewEyebrow: "BIO LINKS",
      overviewTitle: "Warum Bio-Links sauberere Kurz-URLs brauchen",
      overviewDescription:
        "Bio-Links stehen in offentlichen Profilbereichen. Lange und unruhige URLs schwachen dort sowohl die Wirkung als auch das Vertrauen. Ein Kurzlink halt das Profil sauberer.",
      highlights: [
        {
          title: "Besserer erster Eindruck im Profil",
          body: "Auf Instagram, TikTok und Creator-Seiten wirkt ein sauberer Link professioneller und lasst sich schneller erfassen.",
        },
        {
          title: "Leicht uber mehrere Flachen wiederverwendbar",
          body: "Derselbe Kurzlink kann in Bio, Media Kit, Profilseite und offentlichen Posts verwendet werden, ohne unordentlich zu wirken.",
        },
        {
          title: "Mehr Vertrauen beim offentlichen Teilen",
          body: "Wenn der sichtbare Link sauber aussieht, verstehen Nutzer schneller das Ziel und klicken eher darauf.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Instagram- und TikTok-Profillinks",
        "Creator-Link-in-Bio-Seiten und personliche Profilseiten",
        "Offentliche Profillinks in Social Posts und Media Kits",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Warum sollte man Bio-Links kurzen?",
          answer: "Weil Profil-Links sehr sichtbar sind und sauber, einpragsam und vertrauenswurdig wirken sollten.",
        },
        {
          question: "Wer nutzt solche Seiten typischerweise?",
          answer: "Creator, Marken, Social-Teams und alle, die offentliche Profil-Links verwalten.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "BIO LINKS",
      overviewTitle: "Por que links da bio precisam de URLs curtas mais limpas",
      overviewDescription:
        "Links da bio aparecem em areas publicas do perfil, onde uma URL longa e confusa prejudica apresentacao e confianca. Um link curto deixa o perfil mais limpo.",
      highlights: [
        {
          title: "Melhor primeira impressao no perfil",
          body: "No Instagram, TikTok e paginas de criadores, um link mais limpo parece mais bem cuidado e mais facil de entender rapidamente.",
        },
        {
          title: "Facil de reutilizar em varios pontos",
          body: "O mesmo link curto pode ser usado na bio, no media kit, na pagina de perfil e em posts publicos sem parecer baguncado.",
        },
        {
          title: "Mais confianca em compartilhamento publico",
          body: "Quando o link visivel esta limpo, as pessoas entendem melhor o destino e clicam com mais seguranca.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Links de perfil no Instagram e TikTok",
        "Paginas link-in-bio de criadores e paginas de perfil pessoal",
        "Links de perfil publico compartilhados em posts sociais e media kits",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que encurtar links da bio?",
          answer: "Porque links de perfil sao muito visiveis e precisam parecer limpos, memoraveis e confiaveis.",
        },
        {
          question: "Quem costuma usar esse tipo de pagina?",
          answer: "Criadores, marcas, times sociais e operadores que gerenciam links de perfil publico.",
        },
      ],
    },
    hi: {
      overviewEyebrow: "BIO LINKS",
      overviewTitle: "Bio links ko साफ short URL ki zarurat क्यों होती है",
      overviewDescription:
        "Bio links public profile areas me dikhte hain, jahan lambi aur messy URL presentation aur trust dono ko hurt karti hai. Short link profile ko cleaner banati hai.",
      highlights: [
        {
          title: "Profile par first impression better hota hai",
          body: "Instagram, TikTok aur creator pages par clean link zyada polished lagti hai aur ek nazar me samajh aati hai.",
        },
        {
          title: "Creators aur brands ke liye reuse aasaan hota hai",
          body: "Same short link ko bio, media kit, profile page aur public posts me bina odd lage use kiya ja sakta hai.",
        },
        {
          title: "Public sharing me trust badhta hai",
          body: "Jab visible link clean hoti hai to users ke liye samajhna aur click karna dono aasaan ho jata hai.",
        },
      ],
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Instagram aur TikTok profile links",
        "Creator link-in-bio pages aur personal profiles",
        "Public profile links jo social posts aur media kits me share hote hain",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Bio links ko short kyun karna chahiye?",
          answer: "Kyuki profile links highly visible hoti hain aur unka clean, memorable aur trustworthy lagna zaruri hota hai.",
        },
        {
          question: "Yeh page aam taur par kaun use karta hai?",
          answer: "Creators, brands, social teams aur wo log jo public-facing profile links manage karte hain.",
        },
      ],
    },
    id: {
      overviewEyebrow: "LINK BIO",
      overviewTitle: "Mengapa link bio butuh short URL yang lebih rapi",
      overviewDescription:
        "Link bio muncul di area profil publik, jadi URL yang panjang dan berantakan bisa mengganggu tampilan dan rasa percaya. Short link membuat profil lebih bersih dan lebih mudah dibaca.",
      highlights: [
        {
          title: "Tampilan profil jadi lebih rapi",
          body: "Di Instagram, TikTok, dan halaman kreator, link yang pendek terlihat lebih siap pakai dan lebih mudah dipahami sekilas.",
        },
        {
          title: "Mudah dipakai ulang oleh kreator dan brand",
          body: "Link yang sama bisa dipakai di bio, media kit, halaman profil, dan posting publik tanpa terlihat berantakan.",
        },
        {
          title: "Lebih meyakinkan di ruang publik",
          body: "Saat link yang terlihat lebih rapi, orang lebih mudah memahami tujuannya dan merasa lebih yakin untuk klik.",
        },
      ],
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Link profil Instagram dan TikTok",
        "Halaman link-in-bio kreator dan halaman profil pribadi",
        "Link profil publik yang dibagikan di posting sosial dan media kit",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Mengapa link bio perlu dipendekkan?",
          answer: "Karena link di profil sangat terlihat, jadi tampilannya perlu tetap bersih, mudah diingat, dan meyakinkan.",
        },
        {
          question: "Siapa yang biasanya memakai halaman seperti ini?",
          answer: "Kreator, brand, tim sosial, dan siapa pun yang mengelola link profil publik.",
        },
      ],
    },
  },
  "sms-link-shortener": {
    ja: {
      overviewEyebrow: "SMS",
      overviewTitle: "SMSリンクを短く読みやすく保つ理由",
      overviewDescription:
        "テキストメッセージは表示スペースが限られ、URLがそのまま見えます。短いリンクはノイズを減らし、通知や配信文面を信頼しやすくします。",
      highlights: [
        {
          title: "SMS内での見た目がすっきりする",
          body: "短縮リンクは販促SMS、リマインダー、サポート案内をより読みやすくします。",
        },
        {
          title: "通知やアラートに収まりやすい",
          body: "取引通知やモバイル案内では、短いリンクの方が文面全体を詰まり過ぎに見せません。",
        },
        {
          title: "CRMや定期導線で再利用しやすい",
          body: "同じリンクをキャンペーン、リマインダー、フォローアップ導線で何度も使いやすくなります。",
        },
      ],
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "SMSキャンペーンや販促配信",
        "サポート通知、リマインダー、取引メッセージ",
        "認証、OTP後続案内、モバイル通知フロー",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "SMSで短縮リンクを使う利点は何ですか？",
          answer: "文字数を節約でき、文面が整理され、長いURLによる読みにくさを減らせます。",
        },
        {
          question: "どんなチームがSMS短縮リンクをよく必要としますか？",
          answer: "集客チーム、CRMチーム、サポートチーム、そしてスマホ通知を送るプロダクトです。",
        },
      ],
    },
    en: {
      overviewEyebrow: "SMS SHARING",
      overviewTitle: "Why SMS links should stay short and readable",
      overviewDescription:
        "Text messages have limited space and high visibility. Shorter links reduce clutter and make campaign, support, and notification messages easier to trust.",
      highlights: [
        {
          title: "Better presentation inside SMS",
          body: "Short links make promotional SMS, reminders, and support texts easier to read.",
        },
        {
          title: "Better fit for alerts and notifications",
          body: "In transactional messages and phone alerts, a shorter link prevents the message from feeling crowded.",
        },
        {
          title: "Useful for repeat flows",
          body: "The same link can be reused across campaigns, reminders, and follow-up flows without reworking the format.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "SMS campaigns and promotional sends",
        "Support alerts and transactional reminders",
        "Verification and notification flows sent to phone users",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Why are short links useful in SMS?",
          answer: "They save space, look cleaner, and reduce the friction of long URLs inside text-heavy messages.",
        },
        {
          question: "Who needs SMS short links most?",
          answer: "Campaign teams, CRM teams, support teams, and products that send phone notifications.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "短信分享",
      overviewTitle: "为什么短信里的链接更适合做短链",
      overviewDescription:
        "短信空间有限，而且用户会直接看到完整链接。短链能减少冗余字符，让提醒和营销消息更干净、更容易理解。",
      highlights: [
        {
          title: "短信里展示更干净",
          body: "短链能让营销短信、提醒消息和客服短信更容易阅读。",
        },
        {
          title: "更适合通知和提醒场景",
          body: "在事务型消息和移动端通知里，短一点的链接能避免整条消息显得拥挤。",
        },
        {
          title: "适合 CRM 和重复触达流程",
          body: "同一个链接可以在营销、提醒和后续跟进里反复使用，不必每次重做格式。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "营销短信和促销通知",
        "提醒类消息和事务型推送",
        "客服短信、验证码后续引导和移动端通知",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "为什么短信链接适合做短链？",
          answer: "因为短信本身字数有限，链接越短，整条消息越清晰，也更容易被点击。",
        },
        {
          question: "哪些团队最常用短信短链？",
          answer: "增长团队、CRM 团队、客服团队和需要发送移动端通知的产品团队。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "SMS SHARING",
      overviewTitle: "SMS 링크는 왜 짧고 읽기 쉬워야 하는가",
      overviewDescription:
        "문자 메시지는 공간이 제한적이고 링크가 그대로 노출됩니다. 더 짧은 링크는 메시지를 덜 복잡하게 만들고 신뢰도를 높여 줍니다.",
      highlights: [
        {
          title: "문자 안에서 더 깔끔한 표현",
          body: "프로모션 SMS, 리마인더, 지원 문자 안에서 짧은 링크는 전체 메시지를 더 읽기 쉽게 만듭니다.",
        },
        {
          title: "알림과 거래 메시지에 잘 맞음",
          body: "거래성 알림이나 모바일 안내에서는 짧은 링크가 메시지를 덜 답답하게 보이게 합니다.",
        },
        {
          title: "CRM과 모바일 흐름에서 반복 사용 가능",
          body: "같은 링크를 캠페인, 리마인더, 후속 메시지 흐름에 재사용하기 좋습니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "SMS 캠페인과 프로모션 발송",
        "지원 알림, 리마인더, 거래 메시지",
        "인증, OTP 후속 안내, 모바일 알림 흐름",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "SMS에서 짧은 링크가 왜 유용한가요?",
          answer: "공간을 절약하고 메시지를 더 깔끔하게 만들며 긴 URL이 주는 부담을 줄여 줍니다.",
        },
        {
          question: "누가 SMS 단축 링크를 가장 많이 필요로 하나요?",
          answer: "성장팀, CRM 팀, 지원팀, 그리고 모바일 알림을 보내는 제품 팀입니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "SMS",
      overviewTitle: "Por que los links en SMS deben ser cortos y faciles de leer",
      overviewDescription:
        "Los mensajes de texto tienen poco espacio y el usuario ve la URL completa. Un link corto reduce ruido y hace mas confiables campañas, avisos y soporte.",
      highlights: [
        {
          title: "Mejor presentacion dentro del SMS",
          body: "Los short links hacen mas legibles los SMS promocionales, recordatorios y mensajes de soporte.",
        },
        {
          title: "Encajan mejor en alertas y notificaciones",
          body: "En mensajes transaccionales y avisos mobile, un link corto evita que el texto se vea saturado.",
        },
        {
          title: "Utiles para CRM y flujos repetidos",
          body: "El mismo link puede reutilizarse en campanas, recordatorios y seguimientos sin complicar el formato.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Campanas SMS y envios promocionales",
        "Alertas de soporte, recordatorios y mensajes transaccionales",
        "Verificacion, seguimientos OTP y flujos de notificacion mobile",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que los short links son utiles en SMS?",
          answer: "Ahorran espacio, limpian el mensaje y reducen la friccion que generan las URLs largas dentro de textos breves.",
        },
        {
          question: "Que equipos necesitan mas este tipo de link?",
          answer: "Equipos de campanas, CRM, soporte y producto que envian notificaciones a usuarios mobile.",
        },
      ],
    },
    fr: {
      overviewEyebrow: "SMS",
      overviewTitle: "Pourquoi les liens SMS doivent rester courts et lisibles",
      overviewDescription:
        "Les messages texte ont peu d'espace et l'utilisateur voit l'URL entiere. Un lien court reduit le bruit et rend campagnes, alertes et support plus rassurants.",
      highlights: [
        {
          title: "Meilleure presentation dans le SMS",
          body: "Les short links rendent les SMS promotionnels, rappels et messages support plus faciles a lire.",
        },
        {
          title: "Mieux adaptes aux alertes et notifications",
          body: "Dans les messages transactionnels et notifications sur telephone, un lien court evite que le texte paraisse surcharge.",
        },
        {
          title: "Utiles pour le CRM et les flux repetes",
          body: "Le meme lien peut etre reutilise dans des campagnes, rappels et suivis sans compliquer le format.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Campagnes SMS et envois promotionnels",
        "Alertes support, rappels et messages transactionnels",
        "Verification, suivis OTP et flux de notification sur telephone",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Pourquoi les short links sont-ils utiles dans les SMS ?",
          answer: "Ils economisent de l'espace, rendent le message plus propre et reduisent la friction provoquee par les URLs longues dans des textes courts.",
        },
        {
          question: "Quelles equipes ont le plus besoin de ce type de lien ?",
          answer: "Les equipes campagne, CRM, support et les produits qui envoient des notifications a des utilisateurs sur telephone.",
        },
      ],
    },
    de: {
      overviewEyebrow: "SMS",
      overviewTitle: "Warum SMS-Links kurz und gut lesbar bleiben sollten",
      overviewDescription:
        "Textnachrichten haben wenig Platz und Nutzer sehen die komplette URL. Ein kurzer Link reduziert Unruhe und macht Kampagnen-, Alert- und Support-Nachrichten vertrauenswurdiger.",
      highlights: [
        {
          title: "Bessere Darstellung innerhalb der SMS",
          body: "Kurzlinks machen Promo-SMS, Erinnerungen und Support-Nachrichten lesbarer.",
        },
        {
          title: "Passt besser zu Alerts und Benachrichtigungen",
          body: "In transaktionalen Nachrichten und Hinweisen aufs Handy verhindert ein kurzer Link, dass der Text uberladen wirkt.",
        },
        {
          title: "Hilfreich fur wiederkehrende Ablaufe",
          body: "Derselbe Link kann in Kampagnen, Erinnerungen und Follow-ups wiederverwendet werden, ohne das Format neu denken zu mussen.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "SMS-Kampagnen und Promo-Versand",
        "Support-Alerts, Erinnerungen und transaktionale Nachrichten",
        "Verifizierung, OTP-Follow-ups und Benachrichtigungsflusse aufs Handy",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Warum sind Kurzlinks in SMS so hilfreich?",
          answer: "Sie sparen Platz, machen die Nachricht sauberer und verringern Reibung durch lange URLs in knappen Texten.",
        },
        {
          question: "Welche Teams brauchen SMS-Kurzlinks am meisten?",
          answer: "Akquise-Teams, CRM-Teams, Support-Teams und Produkte, die Benachrichtigungen aufs Handy versenden.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "SMS",
      overviewTitle: "Por que links em SMS devem ser curtos e faceis de ler",
      overviewDescription:
        "Mensagens de texto tem pouco espaco e o usuario ve a URL inteira. Um link curto reduz ruido e deixa campanhas, alertas e suporte mais confiaveis.",
      highlights: [
        {
          title: "Melhor apresentacao dentro do SMS",
          body: "Links curtos deixam SMS promocionais, lembretes e mensagens de suporte mais faceis de ler.",
        },
        {
          title: "Melhor encaixe em alertas e notificacoes",
          body: "Em mensagens transacionais e avisos no celular, um link curto evita que o texto pareca carregado demais.",
        },
        {
          title: "Uteis para CRM e fluxos repetidos",
          body: "O mesmo link pode ser reutilizado em campanhas, lembretes e acompanhamentos sem complicar o formato.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Campanhas SMS e envios promocionais",
        "Alertas de suporte, lembretes e mensagens transacionais",
        "Verificacao, seguimentos de OTP e notificacoes no celular",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que links curtos sao uteis em SMS?",
          answer: "Eles economizam espaco, deixam a mensagem mais limpa e reduzem a friccao causada por URLs longas em textos curtos.",
        },
        {
          question: "Quais equipes mais precisam desse tipo de link?",
          answer: "Times de campanha, CRM, suporte e produtos que enviam notificacoes para usuarios no celular.",
        },
      ],
    },
    hi: {
      overviewEyebrow: "SMS SHARING",
      overviewTitle: "SMS links ko short aur readable rakhna क्यों ज़रूरी है",
      overviewDescription:
        "Text messages me jagah kam hoti hai aur poora link seedha dikhta hai. Chhota link message ko saaf rakhta hai aur trust badhata hai.",
      highlights: [
        {
          title: "SMS me kam jagah me clean presentation",
          body: "Short links promotional SMS, reminders aur support texts ko zyada readable aur less cluttered banati hain.",
        },
        {
          title: "Notifications aur alerts ke liye better fit",
          body: "Transactional ya mobile alerts me chhota link message ko overcrowded dikhne se bachata hai.",
        },
        {
          title: "CRM aur mobile flows me easy reuse",
          body: "Same short link ko campaigns, reminders aur follow-up flows me baar-baar reuse kiya ja sakta hai.",
        },
      ],
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "SMS campaigns aur promotional sends",
        "Support alerts, reminders aur transactional messages",
        "Verification, OTP follow-up aur mobile notification flows",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "SMS me short links ka fayda kya hai?",
          answer: "Yeh space bachate hain, message ko cleaner banate hain aur lambi URLs ki wajah se hone wali friction kam karte hain.",
        },
        {
          question: "Kaun si teams SMS short links sabse zyada use karti hain?",
          answer: "Campaign teams, CRM teams, support teams aur mobile notifications bhejne wale product teams.",
        },
      ],
    },
    id: {
      overviewEyebrow: "LINK SMS",
      overviewTitle: "Mengapa link di SMS sebaiknya tetap singkat dan mudah dibaca",
      overviewDescription:
        "Ruang di SMS terbatas dan pengguna langsung melihat seluruh link. Short link membuat pesan lebih rapi dan lebih mudah dipercaya.",
      highlights: [
        {
          title: "Lebih rapi untuk pesan singkat",
          body: "Short link membuat SMS promosi, reminder, dan pesan support terlihat lebih bersih dan cepat dipahami.",
        },
        {
          title: "Cocok untuk alert dan notifikasi di ponsel",
          body: "Di pesan transaksional atau alert di ponsel, link yang lebih singkat mengurangi kesan penuh dan berantakan.",
        },
        {
          title: "Mudah dipakai ulang di alur CRM",
          body: "Link yang sama bisa dipakai lagi di kampanye, reminder, dan follow-up tanpa harus membuat format baru setiap kali.",
        },
      ],
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Campaign SMS dan pesan promosi",
        "Alert support, reminder, dan pesan transaksional",
        "Verifikasi, tindak lanjut OTP, dan alur notifikasi di ponsel",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Apa manfaat short link di SMS?",
          answer: "Short link menghemat ruang, membuat pesan lebih rapi, dan mengurangi hambatan dari URL panjang di dalam teks.",
        },
        {
          question: "Siapa yang paling sering membutuhkan short link SMS?",
          answer: "Tim kampanye, tim CRM, tim support, dan produk yang mengirim notifikasi ke pengguna di ponsel.",
        },
      ],
    },
  },
  "utm-link-shortener": {
    en: {
      overviewEyebrow: "UTM LINKS",
      overviewTitle: "Why UTM links often need a short-link layer",
      overviewDescription:
        "UTM parameters are useful for attribution but messy in public channels. A short link hides that complexity while keeping tracking logic in place.",
      highlights: [
        {
          title: "Cleaner distribution in public channels",
          body: "Long tracked URLs look noisy in ads, emails, and social posts. A short link makes them easier to share without changing the destination logic.",
        },
        {
          title: "Tracking stays intact",
          body: "You can preserve campaign attribution while improving the visible link format used by marketers, partners, and campaign teams.",
        },
        {
          title: "Better fit for campaign coordination",
          body: "A short-link layer helps teams move one campaign URL across ads, newsletters, partner docs, and reporting pages more cleanly.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Paid ad destinations with tracked parameters",
        "Email campaign links and newsletter distribution",
        "Social posts, partner links, and attribution tracking",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Why shorten UTM links?",
          answer: "Because raw UTM URLs are long, hard to read, and visually noisy in public-facing channels.",
        },
        {
          question: "Does shortening remove tracking?",
          answer: "No. The goal is to preserve tracking while improving how the link looks and gets shared.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "UTM 链接",
      overviewTitle: "为什么 UTM 链接通常需要再包一层短链",
      overviewDescription:
        "UTM 参数对归因有用，但直接展示出来会很长很乱。短链可以保留追踪逻辑，同时让外部展示更干净。",
      highlights: [
        {
          title: "公开渠道里的展示更干净",
          body: "广告、邮件和社媒里的原始跟踪链接通常很长。加一层短链，用户看到的链接会更容易理解和分享。",
        },
        {
          title: "追踪参数仍然保留",
          body: "你可以保留原有归因逻辑，同时让市场、渠道和运营团队使用更简洁的可见链接。",
        },
        {
          title: "更适合活动协作和分发",
          body: "一层短链能让同一个活动链接更容易在广告、newsletter、渠道资料和归因流程中复用。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "广告投放和带参数的目标页链接",
        "邮件营销、newsletter 和内容分发",
        "社媒传播、渠道合作和内部归因分析",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "为什么 UTM 链接适合做短链？",
          answer: "因为原始 UTM 链接通常很长，公开展示会影响点击和信任感。",
        },
        {
          question: "做成短链后还会保留追踪吗？",
          answer: "会。目标就是在保留追踪参数的同时，让链接更适合公开传播。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "UTM LINKS",
      overviewTitle: "UTM 링크에 단축 링크 레이어가 필요한 이유",
      overviewDescription:
        "UTM 파라미터는 분석에는 유용하지만 공개 채널에서는 너무 길고 복잡합니다. 짧은 링크는 추적은 유지하면서 표현만 더 깔끔하게 만듭니다.",
      highlights: [
        {
          title: "공개 채널에서 더 깔끔한 배포",
          body: "긴 추적 URL은 광고, 이메일, 소셜에서 지저분해 보입니다. 짧은 링크는 도착 로직은 유지하면서 공유만 더 쉽게 만듭니다.",
        },
        {
          title: "추적은 그대로 유지",
          body: "마케터, 파트너, 운영 담당자가 쓰는 보이는 링크 형식만 개선하면서 캠페인 어트리뷰션은 유지할 수 있습니다.",
        },
        {
          title: "캠페인 협업에 더 적합",
          body: "짧은 링크 레이어는 하나의 캠페인 URL을 광고, 뉴스레터, 파트너 문서, 리포팅 흐름으로 더 깔끔하게 옮기게 돕습니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "추적 파라미터가 붙은 광고 랜딩 링크",
        "이메일 캠페인과 뉴스레터 배포 링크",
        "소셜 게시물, 파트너 링크, 어트리뷰션 흐름",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "UTM 링크를 왜 짧게 만들어야 하나요?",
          answer: "원본 UTM URL은 너무 길고 공개 채널에서 지저분하게 보여 신뢰와 클릭에 불리할 수 있기 때문입니다.",
        },
        {
          question: "짧게 만들면 추적 정보가 사라지나요?",
          answer: "아니요. 목표는 추적을 유지하면서도 링크 표현을 더 깔끔하게 만드는 것입니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "LINKS UTM",
      overviewTitle: "Por que los links UTM suelen necesitar una capa de short link",
      overviewDescription:
        "Los parametros UTM sirven para atribucion, pero se ven largos y ruidosos en canales publicos. Un link corto oculta esa complejidad sin romper el seguimiento.",
      highlights: [
        {
          title: "Distribucion mas limpia en canales publicos",
          body: "Las URLs largas con seguimiento se ven ruidosas en anuncios, emails y posts sociales. Un link corto las hace mas faciles de compartir sin cambiar la logica de destino.",
        },
        {
          title: "El tracking sigue intacto",
          body: "Puedes conservar la atribucion de campana mientras mejoras la forma visible del link que usan marketers, socios y operadores.",
        },
        {
          title: "Mejor encaje para coordinacion de campanas",
          body: "Una capa corta ayuda a mover la misma URL entre anuncios, newsletters, documentos de socios y reportes con menos friccion.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Destinos de anuncios con parametros de seguimiento",
        "Links de email y newsletters",
        "Posts sociales, links de socios y flujos de atribucion",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que conviene acortar links UTM?",
          answer: "Porque las URLs UTM en crudo son largas, dificiles de leer y visualmente ruidosas en canales publicos.",
        },
        {
          question: "Acortar elimina el seguimiento?",
          answer: "No. La idea es mantener la medicion mientras mejoras la forma en que el link se ve y se comparte.",
        },
      ],
    },
    fr: {
      overviewEyebrow: "LIENS UTM",
      overviewTitle: "Pourquoi les liens UTM ont souvent besoin d'une couche short link",
      overviewDescription:
        "Les parametres UTM sont utiles pour l'attribution, mais paraissent longs et bruyants dans les canaux publics. Un lien court masque cette complexite sans casser le suivi.",
      highlights: [
        {
          title: "Une diffusion plus propre dans les canaux publics",
          body: "Les longues URLs trackees paraissent brouillonnes dans les publicites, emails et posts sociaux. Un lien court les rend plus faciles a partager sans changer la logique de destination.",
        },
        {
          title: "Le tracking reste intact",
          body: "Vous conservez l'attribution de campagne tout en ameliorant la forme visible du lien utilise par les equipes, partenaires et equipes de campagne.",
        },
        {
          title: "Mieux adapte a la coordination de campagne",
          body: "Une couche courte aide a faire circuler la meme URL entre publicites, newsletters, documents partenaires et rapports avec moins de friction.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Destinations publicitaires avec parametres de suivi",
        "Liens d'email et de newsletters",
        "Posts sociaux, liens partenaires et flux d'attribution",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Pourquoi raccourcir des liens UTM ?",
          answer: "Parce que les URLs UTM brutes sont longues, difficiles a lire et visuellement bruyantes dans les canaux publics.",
        },
        {
          question: "Le raccourcissement supprime-t-il le suivi ?",
          answer: "Non. L'objectif est de conserver la mesure tout en ameliorant la facon dont le lien se voit et se partage.",
        },
      ],
    },
    de: {
      overviewEyebrow: "UTM-LINKS",
      overviewTitle: "Warum UTM-Links oft eine Kurzlink-Ebene brauchen",
      overviewDescription:
        "UTM-Parameter sind fur Attribution nutzlich, wirken in offentlichen Kanalen aber lang und unruhig. Ein Kurzlink verbirgt diese Komplexitat und lasst das Tracking intakt.",
      highlights: [
        {
          title: "Sauberere Verteilung in offentlichen Kanalen",
          body: "Lange Tracking-URLs sehen in Anzeigen, E-Mails und Social Posts schnell unordentlich aus. Ein Kurzlink macht sie leichter teilbar, ohne die Ziellogik zu verandern.",
        },
        {
          title: "Tracking bleibt erhalten",
          body: "Die Kampagnen-Attribution bleibt bestehen, wahrend die sichtbare Linkform fur Marketing, Partner und Operations verbessert wird.",
        },
        {
          title: "Besser fur Kampagnenkoordination",
          body: "Eine Kurzlink-Ebene hilft dabei, dieselbe URL sauberer durch Anzeigen, Newsletter, Partner-Dokumente und Berichte zu bewegen.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Anzeigen-Ziele mit Tracking-Parametern",
        "Links fur E-Mail-Kampagnen und Newsletter",
        "Social Posts, Partner-Links und Attributions-Auswertungen",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Warum sollte man UTM-Links kurzen?",
          answer: "Weil rohe UTM-URLs lang, schwer lesbar und in offentlichen Kanalen visuell unruhig sind.",
        },
        {
          question: "Geht beim Kurzen das Tracking verloren?",
          answer: "Nein. Ziel ist es, das Tracking zu erhalten und gleichzeitig die Darstellung und Teilbarkeit des Links zu verbessern.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "LINKS UTM",
      overviewTitle: "Por que links UTM costumam precisar de uma camada de short link",
      overviewDescription:
        "Parametros UTM sao uteis para atribuicao, mas ficam longos e ruidosos em canais publicos. Um link curto esconde essa complexidade sem quebrar o rastreamento.",
      highlights: [
        {
          title: "Distribuicao mais limpa em canais publicos",
          body: "URLs longas com rastreamento parecem baguncadas em anuncios, emails e posts sociais. Um link curto facilita o compartilhamento sem mudar a logica de destino.",
        },
        {
          title: "O tracking continua intacto",
          body: "Voce preserva a atribuicao de campanha enquanto melhora a forma visivel do link usada por marketing, parceiros e time de campanha.",
        },
        {
          title: "Melhor para coordenacao de campanhas",
          body: "Uma camada curta ajuda a mover a mesma URL entre anuncios, newsletters, documentos de parceiros e relatorios com menos friccao.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Destinos de anuncios com parametros de rastreamento",
        "Links de email e newsletters",
        "Posts sociais, links de parceiros e fluxos de atribuicao",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que vale encurtar links UTM?",
          answer: "Porque URLs UTM brutas sao longas, dificeis de ler e visualmente ruidosas em canais publicos.",
        },
        {
          question: "Encurtar remove o rastreamento?",
          answer: "Nao. A ideia e manter a mensuracao enquanto melhora a forma como o link aparece e e compartilhado.",
        },
      ],
    },
    ja: {
      overviewEyebrow: "UTM LINKS",
      overviewTitle: "UTMリンクに短縮リンク層が必要になる理由",
      overviewDescription:
        "UTMパラメータは計測に便利ですが、公開チャネルでは長くて複雑に見えます。短縮リンクを挟めば、計測を保ったまま見た目を整えられます。",
      highlights: [
        {
          title: "公開チャネルで配布しやすくなる",
          body: "長い追跡URLは広告、メール、SNSで見た目が重くなります。短縮リンクなら遷移ロジックを変えずに共有しやすくなります。",
        },
        {
          title: "トラッキングはそのまま維持できる",
          body: "マーケティングや提携先が使う見えるリンクだけを整えつつ、キャンペーン計測は維持できます。",
        },
        {
          title: "キャンペーン運用全体を整理しやすい",
          body: "同じURLを広告、ニュースレター、提携資料、レポート導線へ移す時に、短縮リンク層があると扱いやすくなります。",
        },
      ],
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "追跡パラメータ付き広告遷移リンク",
        "メールキャンペーンやニュースレター配布リンク",
        "SNS投稿、提携リンク、アトリビューション運用",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "UTMリンクを短くする理由は何ですか？",
          answer: "生のUTM URLは長く読みにくく、公開チャネルで見た目のノイズになりやすいからです。",
        },
        {
          question: "短縮するとトラッキングは消えますか？",
          answer: "消えません。計測を保ったまま、リンクの見た目と共有しやすさを改善するのが目的です。",
        },
      ],
    },
    hi: {
      overviewEyebrow: "UTM LINKS",
      overviewTitle: "UTM links ko short-link layer ki zarurat क्यों पड़ती है",
      overviewDescription:
        "UTM parameters attribution ke liye useful hote hain, lekin public channels me kaafi messy lagte hain. Short link us complexity ko hide karta hai aur tracking logic ko barkarar rakhta hai.",
      highlights: [
        {
          title: "Public channels me cleaner distribution",
          body: "Long tracked URLs ads, emails aur social posts me noisy lagti hain. Short link sharing ko easy banata hai bina destination logic badle.",
        },
        {
          title: "Tracking intact rehta hai",
          body: "Aap campaign attribution preserve rakh sakte hain aur visible link format ko marketers, partners aur campaign teams ke liye better bana sakte hain.",
        },
        {
          title: "Campaign coordination ke liye better fit",
          body: "Short-link layer ek hi URL ko ads, newsletters, partner docs aur reporting dashboards me zyada aasani se reuse karne deti hai.",
        },
      ],
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Paid ad destinations jahan tracked parameters already lage hote hain",
        "Email campaigns, newsletters aur tracked share links",
        "Social posts, partner links aur attribution reporting",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "UTM links ko short kyun karna chahiye?",
          answer: "Kyuki raw UTM URLs bahut lambe, unreadable aur public-facing channels me visually noisy hote hain.",
        },
        {
          question: "Kya short karne se tracking hat jati hai?",
          answer: "Nahi. Maqsad tracking ko preserve rakhna hai aur link ko share karne layak clean banana hai.",
        },
      ],
    },
    id: {
      overviewEyebrow: "LINK UTM",
      overviewTitle: "Mengapa link UTM sering membutuhkan lapisan short link",
      overviewDescription:
        "Parameter UTM berguna untuk atribusi, tetapi terlihat berantakan di kanal publik. Short link menyembunyikan kerumitan itu sambil menjaga logika tracking tetap berjalan.",
      highlights: [
        {
          title: "Distribusi lebih rapi di kanal publik",
          body: "URL tracking yang panjang terlihat berisik di iklan, email, dan posting sosial. Short link membuatnya lebih mudah dibagikan tanpa mengubah logika tujuan.",
        },
        {
          title: "Tracking tetap utuh",
          body: "Anda bisa menjaga atribusi kampanye sambil memperbaiki bentuk tautan yang terlihat oleh tim marketing, partner, dan tim kampanye.",
        },
        {
          title: "Lebih cocok untuk koordinasi kampanye",
          body: "Lapisan short link membantu memindahkan URL yang sama ke iklan, newsletter, dokumen partner, dan alur pelaporan dengan lebih rapi.",
        },
      ],
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Halaman tujuan iklan berbayar dengan parameter tracking",
        "Tautan kampanye email dan distribusi newsletter",
        "Posting sosial, tautan partner, dan pelacakan atribusi",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Mengapa link UTM perlu dipendekkan?",
          answer: "Karena URL UTM mentah biasanya panjang, sulit dibaca, dan mengganggu tampilan di kanal publik.",
        },
        {
          question: "Apakah memendekkan link akan menghilangkan tracking?",
          answer: "Tidak. Tujuannya justru menjaga tracking tetap ada sambil membuat link lebih rapi untuk dibagikan.",
        },
      ],
    },
  },
  "campaign-url-builder": {
    en: {
      overviewEyebrow: "CAMPAIGN URLS",
      overviewTitle: "Why campaign URLs benefit from a cleaner short-link layer",
      overviewDescription:
        "Campaign links often get shared across multiple channels and stakeholders. A cleaner short URL makes launch coordination and public distribution easier to manage.",
      highlights: [
        {
          title: "Cleaner links for launches and paid traffic",
          body: "URLs shared in ads, newsletters, and creator collaborations become much easier to present with a final short-link layer.",
        },
        {
          title: "More order in partner distribution",
          body: "It helps teams keep a common link format across affiliates, partners, and external distribution documents.",
        },
        {
          title: "Attribution and presentation at the same time",
          body: "You can preserve campaign logic and tracking while improving the visible form of the link.",
        },
      ],
      scenariosTitle: "Common use cases",
      scenarios: [
        "Launch pages and paid traffic campaigns",
        "Creator collaborations, affiliate pushes, and partner sends",
        "Internal campaign tracking docs and distribution planning",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Why use short links in campaign URLs?",
          answer: "Because campaign links get reused widely and need to stay clean across ads, docs, and public channels.",
        },
        {
          question: "Who typically needs a campaign URL builder page?",
          answer: "Marketing teams, campaign teams, partner teams, and agencies coordinating launch or distribution work.",
        },
      ],
    },
    "zh-CN": {
      overviewEyebrow: "活动链接",
      overviewTitle: "为什么活动链接通常需要统一成短链入口",
      overviewDescription:
        "活动链接会在广告、合作、邮件、内部文档和多个团队之间反复流转。统一的短链层更适合发布和协作。",
      highlights: [
        {
          title: "投放和发布时更整洁",
          body: "广告、newsletter、达人合作里分享的活动链接，加一层短链之后会更清楚也更方便分发。",
        },
        {
          title: "渠道和合作分发更统一",
          body: "它能帮助团队在联盟、合作伙伴和外部分发资料中保持统一的链接格式。",
        },
        {
          title: "追踪和展示同时兼顾",
          body: "你可以保留原本的活动归因逻辑，同时让用户看到的链接形式更简洁。",
        },
      ],
      scenariosTitle: "常见使用场景",
      scenarios: [
        "新品发布页、广告投放和活动推广",
        "达人合作、联盟分发和渠道投放",
        "活动排期、归因表格和内部投放文档",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          question: "为什么活动链接要统一成短链？",
          answer: "因为活动链接通常会跨渠道分发，越统一、越整洁，团队管理和对外展示越轻松。",
        },
        {
          question: "哪些团队最需要活动链接构建页？",
          answer: "市场团队、增长团队、运营团队、代理商和负责投放协作的团队。",
        },
      ],
    },
    ko: {
      overviewEyebrow: "CAMPAIGN URLS",
      overviewTitle: "캠페인 URL 빌더가 필요한 대표 장면",
      overviewDescription:
        "런칭, 광고, 파트너 배포에서 캠페인 URL은 빠르게 길어지고 복잡해집니다. 마지막에 짧은 링크 레이어를 두면 배포가 훨씬 정돈됩니다.",
      highlights: [
        {
          title: "런칭과 유료 트래픽에 더 적합한 링크",
          body: "광고 플랫폼, 뉴스레터, 크리에이터 협업에서 공유하는 URL을 더 보기 쉽고 기억하기 쉽게 만들 수 있습니다.",
        },
        {
          title: "파트너와 외부 배포 문서 정리",
          body: "파트너, 제휴, 배포 자료에 넣는 링크를 통일된 형식으로 유지해 운영 혼선을 줄입니다.",
        },
        {
          title: "어트리뷰션과 배포를 함께 관리",
          body: "캠페인 목적과 추적 구조는 유지하면서 외부에 보이는 링크만 더 간결하게 만들 수 있습니다.",
        },
      ],
      scenariosTitle: "대표 사용 장면",
      scenarios: [
        "런칭 페이지, 유료 광고, 프로모션 링크",
        "크리에이터 협업, 파트너 배포, 뉴스레터",
        "내부 추적 문서와 외부 배포 자산의 링크 정리",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "캠페인 URL은 왜 따로 정리해야 하나요?",
          answer: "여러 채널에 동시에 배포할수록 링크 구조가 복잡해지기 때문에, 최종 공유용 링크를 정리하는 과정이 필요합니다.",
        },
        {
          question: "이 페이지는 마케팅 팀에만 필요한가요?",
          answer: "주로 마케팅과 성장 팀이 많이 쓰지만, 파트너십과 운영 팀도 동일한 문제를 자주 겪습니다.",
        },
      ],
    },
    es: {
      overviewEyebrow: "URLS DE CAMPANA",
      overviewTitle: "Por que un builder de URL de campana resulta util",
      overviewDescription:
        "En lanzamientos, trafico pago y distribucion con socios, las URLs de campana se vuelven largas y dificiles de manejar. Un link corto final ordena mejor toda la distribucion.",
      highlights: [
        {
          title: "Links mas limpios para lanzamientos y media paga",
          body: "Las URLs compartidas en anuncios, newsletters y colaboraciones de creadores pueden verse mucho mas claras con una ultima capa corta.",
        },
        {
          title: "Mas orden en distribucion con socios",
          body: "Ayuda a mantener un formato comun en enlaces enviados a afiliados, socios y documentos externos.",
        },
        {
          title: "Atribucion y presentacion al mismo tiempo",
          body: "Puedes conservar la logica de campana y tracking mientras mejoras la forma visible del link.",
        },
      ],
      scenariosTitle: "Casos de uso comunes",
      scenarios: [
        "Paginas de lanzamiento, anuncios pagados y links promocionales",
        "Colaboraciones con creadores, socios y newsletters",
        "Organizacion de links entre documentos de equipo y activos publicos",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que conviene ordenar una URL de campana antes de compartirla?",
          answer: "Porque cuando una campana sale a varios canales, la URL final suele hacerse larga y desordenada, y eso afecta distribucion y presentacion.",
        },
        {
          question: "Esta pagina es solo para equipos de marketing?",
          answer: "La usan sobre todo marketing y campanas, pero partnerships y equipos de distribucion tambien la necesitan cuando coordinan difusion externa.",
        },
      ],
    },
    ja: {
      overviewEyebrow: "CAMPAIGN URLS",
      overviewTitle: "キャンペーンURLビルダーが役立つ理由",
      overviewDescription:
        "ローンチ、広告配信、提携先配布ではキャンペーンURLがすぐ長く複雑になります。最後に短縮リンクを挟むと配布全体が整理しやすくなります。",
      highlights: [
        {
          title: "ローンチや広告で見やすいリンクになる",
          body: "広告、ニュースレター、クリエイター連携で共有するURLも、最後に短縮リンクを置くとずっと見やすくなります。",
        },
        {
          title: "提携先への配布を整えやすい",
          body: "アフィリエイト、提携先、外部配布資料に載せるリンク形式をそろえやすくなります。",
        },
        {
          title: "計測と見た目を両立できる",
          body: "キャンペーン設計やトラッキングを保ったまま、ユーザーに見えるリンクだけを簡潔にできます。",
        },
      ],
      scenariosTitle: "よくある利用シーン",
      scenarios: [
        "ローンチページ、広告配信、販促リンク",
        "クリエイター連携、提携配布、ニュースレター",
        "内部トラッキング資料と公開配布素材のリンク整理",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "共有前にキャンペーンURLを整える理由は何ですか？",
          answer: "複数チャネルに出すほど最終URLは長く複雑になりやすく、配布と見た目の両方に影響するからです。",
        },
        {
          question: "このページはマーケティングチーム専用ですか？",
          answer: "主にマーケティングや獲得チームが使いますが、提携や運用チームにも同じ課題があります。",
        },
      ],
    },
    fr: {
      overviewEyebrow: "URLS DE CAMPAGNE",
      overviewTitle: "Pourquoi un constructeur d'URL de campagne est utile",
      overviewDescription:
        "Dans les lancements, le trafic payant et la distribution partenaire, les URLs de campagne deviennent vite longues et difficiles a gerer. Un lien court final remet de l'ordre dans la diffusion.",
      highlights: [
        {
          title: "Des liens plus propres pour lancements et trafic payant",
          body: "Les URLs partagees dans les publicites, newsletters et collaborations createurs deviennent beaucoup plus claires avec une derniere couche courte.",
        },
        {
          title: "Plus d'ordre dans la distribution partenaire",
          body: "Cela aide a garder un format commun pour les liens envoyes a des affilies, partenaires et documents externes.",
        },
        {
          title: "Attribution et presentation en meme temps",
          body: "Vous pouvez conserver la logique de campagne et de suivi tout en ameliorant la forme visible du lien.",
        },
      ],
      scenariosTitle: "Cas d'usage frequents",
      scenarios: [
        "Pages de lancement, annonces payantes et liens promotionnels",
        "Collaborations createurs, partenaires et newsletters",
        "Organisation des liens entre documents d'equipe et supports publics",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Pourquoi faut-il nettoyer une URL de campagne avant de la partager ?",
          answer: "Parce qu'une campagne diffusee sur plusieurs canaux produit souvent une URL finale longue et brouillonne, ce qui nuit a la diffusion et a la presentation.",
        },
        {
          question: "Cette page sert-elle seulement aux equipes marketing ?",
          answer: "Elle est surtout utilisee par les equipes marketing et campagne, mais les equipes partenariat et diffusion en ont aussi besoin quand elles coordonnent une diffusion externe.",
        },
      ],
    },
    de: {
      overviewEyebrow: "KAMPAGNEN-URLS",
      overviewTitle: "Warum ein Kampagnen-URL-Builder hilfreich ist",
      overviewDescription:
        "Bei Launches, Paid Traffic und Partnerverteilung werden Kampagnen-URLs schnell lang und schwer zu handhaben. Ein finaler Kurzlink bringt mehr Ordnung in die Ausspielung.",
      highlights: [
        {
          title: "Sauberere Links fur Launches und Paid Media",
          body: "URLs in Anzeigen, Newslettern und Creator-Kooperationen wirken mit einer letzten kurzen Ebene deutlich klarer.",
        },
        {
          title: "Mehr Ordnung in der Partnerverteilung",
          body: "So bleibt ein einheitliches Format fur Links an Affiliates, Partner und externe Dokumente erhalten.",
        },
        {
          title: "Attribution und Darstellung zugleich",
          body: "Die Kampagnen- und Tracking-Logik bleibt erhalten, wahrend die sichtbare Linkform deutlich sauberer wird.",
        },
      ],
      scenariosTitle: "Typische Einsatzbereiche",
      scenarios: [
        "Launch-Seiten, bezahlte Anzeigen und Promo-Links",
        "Creator-Kooperationen, Partnerverteilung und Newsletter",
        "Ordnung von Links zwischen Tracking-Dokumenten und offentlichen Assets",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Warum sollte man eine Kampagnen-URL vor dem Teilen aufraumen?",
          answer: "Weil die finale URL bei Ausspielung uber mehrere Kanale oft lang und unruhig wird und das Verteilung wie Darstellung erschwert.",
        },
        {
          question: "Ist diese Seite nur fur Marketing-Teams gedacht?",
          answer: "Vor allem Marketing- und Kampagnen-Teams nutzen sie, aber auch Partner- und Distributionsteams stehen oft vor demselben Problem.",
        },
      ],
    },
    "pt-BR": {
      overviewEyebrow: "URLS DE CAMPANHA",
      overviewTitle: "Por que um construtor de URL de campanha e util",
      overviewDescription:
        "Em lancamentos, trafego pago e distribuicao com parceiros, as URLs de campanha ficam longas e dificeis de gerenciar. Um link curto final organiza melhor toda a distribuicao.",
      highlights: [
        {
          title: "Links mais limpos para lancamentos e midia paga",
          body: "As URLs compartilhadas em anuncios, newsletters e colaboracoes com criadores ficam muito mais claras com uma camada curta final.",
        },
        {
          title: "Mais ordem na distribuicao com parceiros",
          body: "Isso ajuda a manter um formato comum para links enviados a afiliados, parceiros e documentos externos.",
        },
        {
          title: "Atribuicao e apresentacao ao mesmo tempo",
          body: "Voce pode manter a logica de campanha e o rastreamento enquanto melhora a forma visivel do link.",
        },
      ],
      scenariosTitle: "Cenarios comuns",
      scenarios: [
        "Paginas de lancamento, anuncios pagos e links promocionais",
        "Colaboracoes com criadores, parceiros e newsletters",
        "Organizacao de links entre documentos de equipe e ativos publicos",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Por que vale organizar uma URL de campanha antes de compartilhar?",
          answer: "Porque, quando uma campanha vai para varios canais, a URL final costuma ficar longa e baguncada, o que prejudica distribuicao e apresentacao.",
        },
        {
          question: "Esta pagina serve so para times de marketing?",
          answer: "Ela e usada principalmente por marketing e campanhas, mas parcerias e distribuicao tambem precisam dela quando coordenam distribuicao externa.",
        },
      ],
    },
    hi: {
      overviewEyebrow: "CAMPAIGN LINKS",
      overviewTitle: "Campaign URLs ko short-link layer se फायदा क्यों होता है",
      overviewDescription:
        "Campaign links kai channels aur stakeholders ke beech ghoomte hain. Clean short URL launch coordination aur public sharing dono ko aasaan banata hai.",
      highlights: [
        {
          title: "Launch aur ads me cleaner presentation",
          body: "Short links campaign URLs ko ads, creator briefs aur public pages me zyada polished dikhati hain.",
        },
        {
          title: "Distribution teams ke liye easy coordination",
          body: "Jab ek hi clean URL multiple channels me jati hai to tracking aur sharing dono zyada manageable rehte hain.",
        },
        {
          title: "Docs aur partner flows me reuse",
          body: "Same short URL ko newsletters, partner sends aur planning docs me dobara use karna aasaan hota hai.",
        },
      ],
      scenariosTitle: "आम इस्तेमाल",
      scenarios: [
        "Launch pages aur paid campaigns",
        "Creator collaborations, affiliate pushes aur partner sharing",
        "Internal campaign tracking docs aur launch planning",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Campaign URLs me short links kyun use karni chahiye?",
          answer: "Kyuki yeh links bahut jagah reuse hoti hain aur ads, docs aur public channels me clean dikhni chahiye.",
        },
        {
          question: "Is page ki zarurat aam taur par kise hoti hai?",
          answer: "Marketing teams, campaign teams, partner teams aur agencies jo launches ya distribution coordinate karti hain.",
        },
      ],
    },
    id: {
      overviewEyebrow: "LINK KAMPANYE",
      overviewTitle: "Mengapa URL kampanye terbantu dengan lapisan short link yang rapi",
      overviewDescription:
        "Link kampanye sering berpindah di banyak kanal dan ke banyak pihak. Short URL yang bersih memudahkan koordinasi peluncuran dan distribusi publik.",
      highlights: [
        {
          title: "Tampilan lebih rapi di peluncuran dan iklan",
          body: "Short link membuat URL kampanye terlihat lebih siap pakai di iklan, brief kreator, dan halaman publik.",
        },
        {
          title: "Lebih mudah untuk koordinasi distribusi",
          body: "Saat satu URL yang rapi dipakai di banyak kanal, tracking dan distribusi jadi lebih mudah diatur.",
        },
        {
          title: "Bisa dipakai ulang di dokumen dan alur partner",
          body: "URL yang sama bisa dipakai lagi di newsletter, kiriman partner, dan dokumen perencanaan tanpa membuat format baru.",
        },
      ],
      scenariosTitle: "Skenario penggunaan umum",
      scenarios: [
        "Halaman peluncuran dan kampanye trafik berbayar",
        "Kolaborasi kreator, dorongan affiliate, dan distribusi partner",
        "Dokumen tracking kampanye dan perencanaan peluncuran",
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          question: "Mengapa URL kampanye sebaiknya memakai short link?",
          answer: "Karena link kampanye dipakai berulang di banyak tempat dan perlu tetap rapi di iklan, dokumen, dan kanal publik.",
        },
        {
          question: "Siapa yang biasanya membutuhkan halaman seperti ini?",
          answer: "Tim marketing, tim kampanye, tim partner, dan agensi yang mengatur peluncuran atau distribusi.",
        },
      ],
    },
  },
};

const fallbackLabels = {
  en: {
    overviewEyebrow: "OVERVIEW",
    overviewTitle: "What this page helps you do",
    overviewDescription: "Use this page to handle a real short-link task with a simple setup today and a clear upgrade path if usage grows later.",
    highlightTitles: ["Focused setup", "Public-friendly sharing", "Team-ready upgrade"],
    highlightBodies: [
      "The page keeps the action simple so users can complete the task without setup overhead.",
      "Short links fit better in public channels where the original destination would look too long or messy.",
      "When manual usage becomes recurring, the same setup can expand into monthly API usage and recurring team use.",
    ],
    scenariosTitle: "Common use cases",
    scenarios: [
      "Public sharing across campaigns, social content, and recurring team use",
      "Short-link use across QR, WhatsApp, product, or support entry points",
      "A lightweight starting point before moving into repeatable team usage",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "Who is this page for?",
        answer: "It is for users who need a cleaner link setup and may later need a repeatable team process.",
      },
      {
        question: "Why keep this page focused?",
        answer: "Because most visitors want to understand the setup quickly and complete the task without extra steps.",
      },
      {
        question: "Can this still support team usage later?",
        answer: "Yes. The page is positioned so manual creation can expand naturally into API and monthly-plan usage.",
      },
    ],
  },
  "zh-CN": {
    overviewEyebrow: "页面说明",
    overviewTitle: "这个页面能帮你完成什么",
    overviewDescription: "这个页面围绕真实短链需求来设计，先把当前任务做顺，再为后续批量使用和团队接入留出空间。",
    highlightTitles: ["流程聚焦", "更适合公开传播", "可升级为团队方案"],
    highlightBodies: [
      "页面把核心动作压缩到最少步骤，用户不需要额外配置就能完成主要任务。",
      "短链比原始链接更适合放在公开渠道里，展示更干净，传播也更顺手。",
      "当手工使用开始变成高频动作时，这套流程可以自然升级到 API 和按月套餐。",
    ],
    scenariosTitle: "常见使用场景",
    scenarios: [
      "活动投放、社媒分发和运营流程中的公开分享链接",
      "二维码、WhatsApp、产品功能或客服入口中的统一跳转能力",
      "从轻量网页工具逐步过渡到团队稳定使用的起点",
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        question: "这个页面更适合哪些用户？",
        answer: "适合需要更干净链接流程、并且未来可能要升级为团队使用方式的用户。",
      },
      {
        question: "为什么页面内容保持这么聚焦？",
        answer: "因为大多数用户更关心快速理解当前用途，然后马上完成生成、分享或接入动作。",
      },
      {
        question: "后续还能继续扩展成团队化方案吗？",
        answer: "可以，页面本身就是围绕网页工具到 API 的自然升级路径来设计的。",
      },
    ],
  },
  ja: {
    overviewEyebrow: "OVERVIEW",
    overviewTitle: "このページでできること",
    overviewDescription: "このページは短縮リンクの実用用途に合わせて、すぐ使える導線と将来の拡張しやすさをまとめています。",
    highlightTitles: ["シンプルな導線", "共有しやすい見た目", "チーム運用へ拡張可能"],
    highlightBodies: [
      "余計な設定なしで主要な操作をすぐ完了できます。",
      "短縮リンクは長いURLよりも公開チャネルで扱いやすくなります。",
      "手作業が増えたらAPIや月額運用へ自然に移行できます。",
    ],
    scenariosTitle: "よくある利用シーン",
    scenarios: [
      "キャンペーン、SNS、運用導線での共有リンク",
      "QR、WhatsApp、プロダクト導線、サポート導線での利用",
      "単発利用からチーム運用へ移る前段階の導入",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "このページは誰向けですか？",
        answer: "短縮リンクをすぐ使いたい人と、将来的にチーム運用へ広げたい人向けです。",
      },
      {
        question: "なぜこのページは内容を絞っているのですか？",
        answer: "多くのユーザーは短時間で用途を理解し、そのまま作業に進みたいからです。",
      },
      {
        question: "後からチーム用途にも広げられますか？",
        answer: "はい。手動利用からAPI利用へ広げやすい前提で設計しています。",
      },
    ],
  },
  ko: {
    overviewEyebrow: "OVERVIEW",
    overviewTitle: "이 페이지가 해결하려는 핵심 수요",
    overviewDescription: "이 페이지는 실제 short-link 검색 수요에 맞춰 간단한 사용 흐름과 팀 확장 가능성을 함께 보여줍니다.",
    highlightTitles: ["간단한 흐름", "공개 공유에 적합", "팀 사용으로 확장"],
    highlightBodies: [
      "복잡한 설정 없이 필요한 작업을 빠르게 마칠 수 있습니다.",
      "짧은 링크는 긴 원본 URL보다 공개 채널에서 더 깔끔하게 보입니다.",
      "반복 사용이 늘어나면 API와 월간 플랜으로 자연스럽게 확장할 수 있습니다.",
    ],
    scenariosTitle: "주요 사용 시나리오",
    scenarios: [
      "캠페인, 소셜, 운영 공유 링크",
      "QR, WhatsApp, 제품, 지원 진입 경로",
      "수동 사용에서 팀 워크플로로 넘어가기 전 단계",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "이 페이지는 누구를 위한 것인가요?",
        answer: "깔끔한 링크 흐름이 필요하고 나중에 팀 사용으로 확장할 수 있는 사용자를 위한 페이지입니다.",
      },
      {
        question: "왜 이렇게 간결하게 구성했나요?",
        answer: "대부분의 사용자는 필요한 흐름을 빠르게 이해하고 바로 작업을 진행하고 싶어하기 때문입니다.",
      },
      {
        question: "나중에 팀용으로 확장할 수 있나요?",
        answer: "네. 웹 도구에서 API 기반 사용으로 자연스럽게 이어질 수 있습니다.",
      },
    ],
  },
  es: {
    overviewEyebrow: "RESUMEN",
    overviewTitle: "Lo que esta pagina intenta resolver",
    overviewDescription: "Esta pagina responde a una necesidad real de short links con un flujo simple y una ruta clara hacia uso en equipo.",
    highlightTitles: ["Flujo directo", "Mejor para compartir", "Escalable para equipos"],
    highlightBodies: [
      "El usuario puede completar la accion principal sin configuraciones complejas.",
      "Un short link se ve mejor que una URL larga en canales publicos.",
      "Cuando el uso deja de ser manual, puede ampliarse hacia API y planes mensuales.",
    ],
    scenariosTitle: "Casos de uso comunes",
    scenarios: [
      "Campanas, social media y tareas de distribucion",
      "Entradas por QR, WhatsApp, producto o soporte",
      "Paso inicial antes de un uso recurrente en equipo",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "Para quien es esta pagina?",
        answer: "Para usuarios que necesitan enlaces mas limpios y que despues pueden pasar a un flujo repetible en equipo.",
      },
      {
        question: "Por que esta pagina es tan directa?",
        answer: "Porque la mayoria de los usuarios quiere entender el flujo rapido y pasar a la accion sin pasos extra.",
      },
      {
        question: "Se puede ampliar a uso en equipo despues?",
        answer: "Si. La pagina esta pensada para pasar del uso manual al uso con API.",
      },
    ],
  },
  fr: {
    overviewEyebrow: "APERCU",
    overviewTitle: "Ce que cette page cherche a resoudre",
    overviewDescription: "Cette page repond a une demande concrete autour des liens courts avec un parcours simple et une extension possible vers un usage equipe.",
    highlightTitles: ["Parcours simple", "Meilleur pour le partage", "Extension equipe possible"],
    highlightBodies: [
      "L'utilisateur peut finir l'action principale sans configuration complexe.",
      "Un lien court se presente mieux qu'une URL longue dans les canaux publics.",
      "Quand l'usage devient recurrent, le meme flux peut passer vers une API et des forfaits mensuels.",
    ],
    scenariosTitle: "Cas d'usage frequents",
    scenarios: [
      "Campagnes, social media et taches de diffusion",
      "Entrees QR, WhatsApp, produit ou support",
      "Point de depart avant un usage equipe regulier",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "A qui s'adresse cette page ?",
        answer: "A des utilisateurs qui veulent un flux de liens plus propre et une extension possible vers un usage equipe.",
      },
      {
        question: "Pourquoi cette page reste-t-elle si directe ?",
        answer: "Parce que la plupart des visiteurs veulent comprendre l'usage vite et passer a l'action sans etapes inutiles.",
      },
      {
        question: "Peut-on l'etendre ensuite a un usage equipe ?",
        answer: "Oui. La page prepare une transition naturelle du manuel vers l'API.",
      },
    ],
  },
  de: {
    overviewEyebrow: "UBERBLICK",
    overviewTitle: "Welches Problem diese Seite losen soll",
    overviewDescription: "Diese Seite bedient eine praktische Short-Link-Nachfrage mit einfacher Nutzung und einem klaren Pfad fur Teamnutzung.",
    highlightTitles: ["Klarer Ablauf", "Besser fur offentliches Teilen", "Fur Teams erweiterbar"],
    highlightBodies: [
      "Die wichtigste Aktion kann ohne komplexe Einrichtung direkt erledigt werden.",
      "Kurzlinks wirken in offentlichen Kanalen sauberer als lange Ziel-URLs.",
      "Wenn aus manueller Nutzung ein Prozess wird, kann der Ablauf zu API und Monatsplanen erweitert werden.",
    ],
    scenariosTitle: "Haufige Einsatzszenarien",
    scenarios: [
      "Kampagnen, Teilen in sozialen Kanalen und laufende Verteilung",
      "QR-, WhatsApp-, Produkt- oder Support-Einstiege",
      "Leichter Start vor wiederkehrender Team-Nutzung",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "Fur wen ist diese Seite gedacht?",
        answer: "Fur Nutzer, die einen saubereren Link-Ablauf brauchen und spater auf Team-Nutzung erweitern wollen.",
      },
      {
        question: "Warum ist diese Seite so fokussiert aufgebaut?",
        answer: "Weil Nutzer den Anwendungsfall schnell verstehen und ohne Umwege loslegen wollen.",
      },
      {
        question: "Lasst sich das spater fur Teams ausbauen?",
        answer: "Ja. Die Seite ist so aufgebaut, dass manueller Einsatz in API-Nutzung ubergehen kann.",
      },
    ],
  },
  "pt-BR": {
    overviewEyebrow: "VISAO GERAL",
    overviewTitle: "O que esta pagina busca resolver",
    overviewDescription: "Esta pagina atende uma demanda pratica de short links com fluxo simples e caminho claro para uso em equipe.",
    highlightTitles: ["Fluxo simples", "Melhor para compartilhamento", "Expansao para equipes"],
    highlightBodies: [
      "A acao principal pode ser concluida sem configuracao complexa.",
      "Links curtos ficam mais limpos do que URLs longas em canais publicos.",
      "Quando o uso manual cresce, o fluxo pode evoluir para API e planos mensais.",
    ],
    scenariosTitle: "Casos de uso comuns",
    scenarios: [
      "Campanhas, redes sociais e uso em equipe",
      "Entradas por QR, WhatsApp, produto ou suporte",
      "Primeiro passo antes de um uso recorrente em equipe",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "Para quem esta pagina serve?",
        answer: "Para usuarios que precisam de links mais limpos e depois podem expandir para um processo em equipe.",
      },
      {
        question: "Por que esta pagina e tao objetiva?",
        answer: "Porque a maioria dos usuarios quer entender o fluxo rapidamente e seguir para a acao.",
      },
      {
        question: "Isso pode crescer para uso em equipe depois?",
        answer: "Sim. A estrutura facilita a transicao do uso manual para API.",
      },
    ],
  },
  hi: {
    overviewEyebrow: "OVERVIEW",
    overviewTitle: "यह पेज आपके किस काम में मदद करता है",
    overviewDescription: "Yeh page real short-link use case ko simple setup ke saath handle karti hai, aur zarurat badhne par team use tak badh sakti hai.",
    highlightTitles: ["Seedha setup", "Public sharing ke liye better", "Team use ke liye expandable"],
    highlightBodies: [
      "User bina complex setup ke main action complete kar sakta hai.",
      "Short link public channels me lambi URL se zyada saaf dikhta hai.",
      "Jab manual use repeat hone lage to API aur monthly plan tak expand kiya ja sakta hai.",
    ],
    scenariosTitle: "आम इस्तेमाल",
    scenarios: [
      "Campaigns, social sharing aur team use cases",
      "QR, WhatsApp, product ya support entry points",
      "Team usage se pehle ek halka starting point",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "Yeh page kin users ke liye hai?",
        answer: "Un users ke liye jo clean link setup chahte hain aur baad me team process tak expand kar sakte hain.",
      },
      {
        question: "Yeh page itni focused kyun rakhi gayi hai?",
        answer: "Kyuki zyadaatar users pehle jaldi samajhna chahte hain ki yeh setup unke kaam ka hai ya nahi, phir turant action lena chahte hain.",
      },
      {
        question: "Kya baad me isse team setup me badla ja sakta hai?",
        answer: "Haan. Yeh page manual se API usage tak natural path support karti hai.",
      },
    ],
  },
  id: {
    overviewEyebrow: "RINGKASAN",
    overviewTitle: "Apa yang bisa Anda selesaikan dari halaman ini",
    overviewDescription: "Halaman ini dibuat untuk kebutuhan short link yang nyata, dengan alur sederhana hari ini dan jalur yang jelas jika nanti dipakai oleh tim.",
    highlightTitles: ["Alur ringkas", "Lebih cocok untuk publik", "Bisa berkembang ke tim"],
    highlightBodies: [
      "Pengguna bisa menyelesaikan aksi utama tanpa konfigurasi yang rumit.",
      "Short link terlihat lebih rapi dibanding URL panjang di kanal publik.",
      "Saat penggunaan manual menjadi rutin, alur ini bisa berkembang ke API dan paket bulanan.",
    ],
    scenariosTitle: "Skenario penggunaan umum",
    scenarios: [
      "Kampanye, social sharing, dan alur operasional",
      "Titik masuk QR, WhatsApp, produk, atau support",
      "Awal yang ringan sebelum masuk ke penggunaan tim berulang",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        question: "Halaman ini untuk siapa?",
        answer: "Untuk pengguna yang membutuhkan alur link yang lebih rapi dan mungkin nanti berkembang ke proses tim.",
      },
      {
        question: "Mengapa halaman ini dibuat sangat fokus?",
        answer: "Karena kebanyakan pengguna ingin cepat memahami kegunaannya lalu langsung membuat link, membagikan, atau lanjut ke integrasi.",
      },
      {
        question: "Apakah nanti bisa berkembang jadi penggunaan tim?",
        answer: "Ya. Struktur halaman ini memang mendukung transisi dari penggunaan manual ke API.",
      },
    ],
  },
};

const buildFallbackBody = (language, content) => {
  const labels = fallbackLabels[resolveLanguage(language)] || fallbackLabels[DEFAULT_LANGUAGE];

  return {
    overviewEyebrow: labels.overviewEyebrow,
    overviewTitle: labels.overviewTitle,
    overviewDescription: content.description || labels.overviewDescription,
    highlights: labels.highlightTitles.map((title, index) => ({
      title: index === 0 ? content.title : title,
      body: index === 0 ? content.description : labels.highlightBodies[index],
    })),
    scenariosTitle: labels.scenariosTitle,
    scenarios: labels.scenarios,
    faqTitle: labels.faqTitle,
    faqs: labels.faqs,
  };
};

export const getSeoPageBody = (language, slug, content) => {
  const resolved = resolveLanguage(language);
  const custom = customBodies[slug]?.[resolved];
  if (custom) {
    return custom;
  }

  return buildFallbackBody(resolved, content);
};
