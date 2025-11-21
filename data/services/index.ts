export type ServiceCategory = "web" | "creator";

export type ServiceBlock = {
  id: string;
  title: string;
  body: string;
};

export type PriceTable = {
  plans: string[];
  rows: {
    feature: string;
    values: string[];
  }[];
};

export type Service = {
  title: string;
  subTitle?: string;
  img: string;
  description: string;
  category: "web" | "creator";
  slug?: string;
  features?: string[];
  process?: { step: string; dec: string }[];
  heroImage?: string;
  blocks?: ServiceBlock[];
  priceTable?: PriceTable;
  consultText?: string;
};

export const services: Service[] = [
  {
    title: "Website service",
    subTitle: "ウェブサイト制作",
    img: "website-development.svg",
    description:
      "新規サイトの立ち上げから運用まで幅広く対応。レスポンシブデザインで、スマホやタブレットでも快適に。動きを取り入れたアニメーションで魅力的な体験を演出します。  ",
    category: "web",
    slug: "website-development",
    heroImage: "/img/web-site-service-img.jpg",
    blocks: [
      {
        id: "summary",
        title: "サービス概要",
        body: `新規サイトの立ち上げはもちろん、スマートフォンやタブレットなど各デバイスに対応したレスポンシブコーディング、視覚的に印象を高めるアニメーション実装など、ユーザー体験を意識した動きのあるWebサイト制作が可能です。目的やコンセプトに合わせて、デザインから構築まで一貫してサポートいたします。`,
      },
      {
        id: "track-record",
        title: "サービス実績",
        body: `現在、サンプルサイトを製作中です。`,
      },
      {
        id: "price-guide",
        title: "制作料金目安",
        body: "目安ですので、予算なども踏まえてお気軽にご相談ください。",
      },
    ],
    priceTable: {
      plans: ["ライト", "スタンダード", "プレミアム"],
      rows: [
        {
          feature: "目的 / 料金目安",
          values: [
            "名刺代わりの簡単サイト<br><strong>初期費用 約23万円</strong>",
            "しっかりとした企業サイト<br><strong>初期費用 約45万円</strong>",
            "集客に強い作り込み<br><strong>初期費用 約60万円</strong>",
          ],
        },
        {
          feature: "全体ページ数",
          values: ["約6ページ", "約12ページ", "約20ページ"],
        },
        {
          feature: "更新機能",
          values: [
            "△（1件）<br><small>例：お知らせ</small>",
            "◎（3件）<br><small>例：お知らせ/ブログ/商品</small>",
            "◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>",
          ],
        },
        {
          feature: "原稿",
          values: ["お客様ご用意", "取材・作成代行", "取材・作成代行"],
        },
        {
          feature: "デザイン案",
          values: ["1案まで", "2案", "2案"],
        },
        {
          feature: "修正",
          values: ["2回まで", "3回", "4回"],
        },
        {
          feature: "スマホ/タブレット対応",
          values: ["△（スマホ）", "◎（両対応）", "◎（両対応）"],
        },
      ],
    },
    consultText: `専門的なご相談も <strong>Zoom（1時間 2,000円〜）</strong> にて承ります。<br />
      制作の方向性や課題の整理など、プロの視点からサポートいたします。`,
  },
  {
    title: "Web Design",
    subTitle: "デザイン制作",
    img: "/img/UI-UX design-amico.svg",
    description:
      "ヒアリングを通じてご要望やイメージを丁寧に汲み取り、ユーザーに伝わるデザインをご提案。世界観を大切にした、より良いビジュアルを形にします。  ",
    category: "web",
    slug: "web-design",
    heroImage: "/img/web_design-img.jpg",
    blocks: [
      {
        id: "summary",
        title: "サービス概要",
        body: `新規Webサイトのデザインカンプ制作から、ブランドの印象を左右するロゴデザインまで幅広く対応いたします。クライアント様のイメージや想いを丁寧にヒアリングし、売上やブランド価値の向上につながるデザインをご提案いたします。細部までこだわり、長く愛されるビジュアルを目指します。`,
      },
      {
        id: "track-record",
        title: "サービス実績",
        body: ``,
      },
      {
        id: "price-guide",
        title: "制作料金目安",
        body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`,
      },
    ],
    priceTable: {
      plans: ["ライト", "スタンダード", "プレミアム"],
      rows: [
        {
          feature: "目的 / 料金目安",
          values: [
            "名刺代わりの簡単サイト<br><strong>初期費用 約23万円</strong>",
            "しっかりとした企業サイト<br><strong>初期費用 約45万円</strong>",
            "集客に強い作り込み<br><strong>初期費用 約60万円</strong>",
          ],
        },
        {
          feature: "全体ページ数",
          values: ["約6ページ", "約12ページ", "約20ページ"],
        },
        {
          feature: "更新機能",
          values: [
            "△（1件）<br><small>例：お知らせ</small>",
            "◎（3件）<br><small>例：お知らせ/ブログ/商品</small>",
            "◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>",
          ],
        },
        {
          feature: "原稿",
          values: ["お客様ご用意", "取材・作成代行", "取材・作成代行"],
        },
        {
          feature: "デザイン案",
          values: ["1案まで", "2案", "2案"],
        },
        {
          feature: "修正",
          values: ["2回まで", "3回", "4回"],
        },
        {
          feature: "スマホ/タブレット対応",
          values: ["△（スマホ）", "◎（両対応）", "◎（両対応）"],
        },
      ],
    },
    consultText: `
    デザインの方向性やコンセプト設計など、<br />
    初期段階のご相談も <strong>Zoom（1時間 2,000円〜）</strong> にて承ります。<br />
    ヒアリングを通して、目的や理想の世界観を一緒に形にしていきます。
    `,
  },
  {
    title: "Web site Renewal",
    subTitle: "ウェブサイト リニューアル",
    img: "/img/Setup-amico.svg",
    description:
      "既存サイトの改善や調整もお任せください。デザインの刷新から細かな修正まで柔軟に対応。課題を解決し、より効果的なサイトへと導きます。  ",
    category: "web",
    slug: "website-renovation",
    heroImage: "/img/web_design-img.jpg",
    blocks: [
      {
        id: "summary",
        title: "サービス概要",
        body: `現状のホームページのデザイン改善やUI/UXの見直し、機能面のアップデート、フルリニューアルまで柔軟に対応いたします。アクセス解析やユーザー行動のデータを踏まえ、課題を一緒に発見しながら最適な改善策をご提案します。お困りごとの解決を共に探していく“伴走型”サポートを心がけています。`,
      },
      {
        id: "track-record",
        title: "サービス実績",
        body: ``,
      },
      {
        id: "price-guide",
        title: "制作料金目安",
        body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`,
      },
    ],
    priceTable: {
      plans: ["ライト", "スタンダード", "プレミアム"],
      rows: [
        {
          feature: "目的 / 料金目安",
          values: [
            "名刺代わりの簡単サイト<br><strong>初期費用 約23万円</strong>",
            "しっかりとした企業サイト<br><strong>初期費用 約45万円</strong>",
            "集客に強い作り込み<br><strong>初期費用 約60万円</strong>",
          ],
        },
        {
          feature: "全体ページ数",
          values: ["約6ページ", "約12ページ", "約20ページ"],
        },
        {
          feature: "更新機能",
          values: [
            "△（1件）<br><small>例：お知らせ</small>",
            "◎（3件）<br><small>例：お知らせ/ブログ/商品</small>",
            "◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>",
          ],
        },
        {
          feature: "原稿",
          values: ["お客様ご用意", "取材・作成代行", "取材・作成代行"],
        },
        {
          feature: "デザイン案",
          values: ["1案まで", "2案", "2案"],
        },
        {
          feature: "修正",
          values: ["2回まで", "3回", "4回"],
        },
        {
          feature: "スマホ/タブレット対応",
          values: ["△（スマホ）", "◎（両対応）", "◎（両対応）"],
        },
      ],
    },
    consultText: `
    現在のサイトの課題や改善点を整理し、<br />
    より効果的なリニューアルの方向性を <strong>Zoom（1時間 2,000円〜）</strong> にてご提案します。<br />
    デザイン・構成・導線など、現状分析から丁寧にサポートいたします。
`,
  },
  {
    title: "Recipe Development",
    subTitle: "レシピ開発",
    img: "/img/Recipe book-amico.svg",
    description:
      "20年以上の経験と新作開発のノウハウを活かし、1品からオリジナルレシピを制作いたします。栄養学の観点から、体に優しいメニュー提案も可能です。  ",
    category: "creator",
    slug: "recipe-development",
    heroImage: "/img/sweets/mileCrape.jpg",
    blocks: [
      {
        id: "summary",
        title: "サービス概要",
        body: `新規レシピの開発はもちろん、既存レシピの改善・アレンジ、スイーツや和菓子などの専門的なレシピ制作まで幅広く対応いたします。味や見た目のバランス、素材の魅せ方を大切にしながら、“記憶に残る一皿”を生み出すお手伝いをいたします。個人様から企業様まで、目的に合わせたレシピ提案が可能です。`,
      },
      {
        id: "track-record",
        title: "サービス実績",
        body: ``,
      },
      {
        id: "price-guide",
        title: "制作料金目安",
        body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`,
      },
    ],
    priceTable: {
      plans: ["ライト", "スタンダード", "プレミアム"],
      rows: [
        {
          feature: "目的 / 料金目安",
          values: [
            "レシピ１品<br><strong> 約２万円</strong>",
            "レシピ６品<br><strong> 約１０万円</strong>",
            "レシピ１０品<br><strong> 約１５万円</strong>",
          ],
        },
        {
          feature: "全体ページ数",
          values: ["約6ページ", "約12ページ", "約20ページ"],
        },
        {
          feature: "更新機能",
          values: [
            "△（1件）<br><small>例：お知らせ</small>",
            "◎（3件）<br><small>例：お知らせ/ブログ/商品</small>",
            "◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>",
          ],
        },
        {
          feature: "原稿",
          values: ["お客様ご用意", "取材・作成代行", "取材・作成代行"],
        },
        {
          feature: "デザイン案",
          values: ["1案まで", "2案", "2案"],
        },
        {
          feature: "修正",
          values: ["2回まで", "3回", "4回"],
        },
        {
          feature: "スマホ/タブレット対応",
          values: ["△（スマホ）", "◎（両対応）", "◎（両対応）"],
        },
      ],
    },
    consultText: `試作やレシピ改善など、オンラインにてご相談を承っております。<br />
      <strong>Zoom（約1時間 2,000円〜）</strong> でお気軽にご相談ください。`,
  },
  {
    title: "Consultant",
    subTitle: "飲食店コンサルタント",
    img: "/img/Marketing consulting-rafiki.svg",
    description:
      "飲食店やパティシエとしての現場経験をもとに、ケーキ屋・カフェ・デザート専門店などをサポート。店舗運営やメニュー開発まで幅広くご相談いただけます。  ",
    category: "creator",
    slug: "restaurant-consulting",
    heroImage: "/img/service/consultant1.jpg",
    blocks: [
      {
        id: "summary",
        title: "サービス概要",
        body: `飲食業界で20年以上の経験を活かし、店舗の新規開業からメニュー開発、提供オペレーションまで、飲食店運営に関わるあらゆる分野をサポートいたします。コンセプト設計やブランドづくりの段階からご相談可能で、現場目線でのアドバイスも含めた実践的な支援を行います。詳細なサービス内容は下記の表にてご確認ください。`,
      },
      {
        id: "track-record",
        title: "サービス実績",
        body: ``,
      },
      {
        id: "price-guide",
        title: "制作料金目安",
        body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`,
      },
    ],
    priceTable: {
      plans: ["ライト", "スタンダード", "プレミアム"],
      rows: [
        {
          feature: "目的 / 料金目安",
          values: ["", "", ""],
        },
        {
          feature: "全体ページ数",
          values: ["約6ページ", "約12ページ", "約20ページ"],
        },
        {
          feature: "更新機能",
          values: [
            "△（1件）<br><small>例：お知らせ</small>",
            "◎（3件）<br><small>例：お知らせ/ブログ/商品</small>",
            "◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>",
          ],
        },
        {
          feature: "原稿",
          values: ["お客様ご用意", "取材・作成代行", "取材・作成代行"],
        },
        {
          feature: "デザイン案",
          values: ["1案まで", "2案", "2案"],
        },
        {
          feature: "修正",
          values: ["2回まで", "3回", "4回"],
        },
        {
          feature: "スマホ/タブレット対応",
          values: ["△（スマホ）", "◎（両対応）", "◎（両対応）"],
        },
      ],
    },
    consultText: `
    メニュー開発や開業準備、店舗運営など、<br />
    飲食店に関するご相談を <strong>Zoom（1時間 2,000円〜）</strong> にて承ります。<br />
    22年の現場経験をもとに、課題の整理から実践的な改善提案まで丁寧にサポートいたします。
    `,
  },
  {
    title: "Photo & Video Shooting",
    subTitle: "写真・動画撮影",
    img: "/img/Photo-amico.svg",
    description:
      "料理やスイーツの写真・動画撮影も対応。 ポートフォリオ掲載の写真はすべて自ら撮影しました。魅力が伝わるビジュアルを丁寧に切り取ります。  ",
    category: "creator",
    slug: "photo-video-shooting",
    heroImage: "/img/web_design-img.jpg",
    blocks: [
      {
        id: "summary",
        title: "サービス概要",
        body: `商品・料理・空間など、さまざまなジャンルの写真撮影・動画撮影に対応しています。光の演出や構図にもこだわり、被写体の魅力を最大限に引き出すビジュアルを制作します。編集・カラー調整・音楽挿入などの映像編集も一括で対応でき、SNSやWeb掲載に最適な素材をご提供いたします。`,
      },
      {
        id: "track-record",
        title: "サービス実績",
        body: ``,
      },
      {
        id: "price-guide",
        title: "制作料金目安",
        body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`,
      },
    ],
    priceTable: {
      plans: ["ライト", "スタンダード", "プレミアム"],
      rows: [
        {
          feature: "目的 / 料金目安",
          values: ["", "", ""],
        },
        {
          feature: "全体ページ数",
          values: ["約6ページ", "約12ページ", "約20ページ"],
        },
        {
          feature: "更新機能",
          values: [
            "△（1件）<br><small>例：お知らせ</small>",
            "◎（3件）<br><small>例：お知らせ/ブログ/商品</small>",
            "◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>",
          ],
        },
        {
          feature: "原稿",
          values: ["お客様ご用意", "取材・作成代行", "取材・作成代行"],
        },
        {
          feature: "デザイン案",
          values: ["1案まで", "2案", "2案"],
        },
        {
          feature: "修正",
          values: ["2回まで", "3回", "4回"],
        },
        {
          feature: "スマホ/タブレット対応",
          values: ["△（スマホ）", "◎（両対応）", "◎（両対応）"],
        },
      ],
    },
    consultText: ` 撮影構成・カット内容のご相談もオンラインで可能です。<br />
      <strong>Zoom（1時間 2,000円〜）</strong> にて丁寧にサポートいたします。`,
  },
];
