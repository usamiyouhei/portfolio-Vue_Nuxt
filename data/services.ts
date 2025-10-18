export type ServiceCategory = 'web' | 'creator'

export type ServiceBlock = {
  id: string;
  title: string;
  body: string;
}

export type PriceTable = {
  plans: string[];
  rows:{
    feature: string;
    values: string[];
  }[];
}

export type Service = {
    title: string;
    img: string;
    description: string;
    category: 'web' | 'creator';
    slug?: string;
    features?: string[];
    process?: {step: string, dec: string}[];
    heroImage?: string;
    blocks?: ServiceBlock[];
    priceTable?: PriceTable;
  }




export const services: Service[] = [
    { 
      title: "Website service", 
      img: 'website-development.svg',
      description: '新規サイトの立ち上げから運用まで幅広く対応。レスポンシブデザインで、スマホやタブレットでも快適に。動きを取り入れたアニメーションで魅力的な体験を演出します。  ',
      category: 'web',
      slug:'website-development',
      heroImage: '/img/web-site-service-img.jpg',
      blocks:[
        {
          id:'summary',
          title:'サービス概要',
          body: `新規サイトの制作はもちろん、<br class="md-show" />
          レスポンシブコーディングやアニメーションなど
          動きのあるサイト制作も可能です。`
        },
        {
          id:'track-record',
          title:'サービス実績',
          body:`現在、サンプルサイトを製作中です。`
        },
        {
          id:'price-guide',
          title:'制作料金目安',
          body:'目安ですので、予算なども踏まえてお気軽にご相談ください。'
        },
      ],
      priceTable: {
        plans:['ライト', 'スタンダード', 'プレミアム'],
        rows: [
          { 
            feature: '目的 / 料金目安',
            values: [
            '名刺代わりの簡単サイト<br><strong>初期費用 約23万円</strong>',
            'しっかりとした企業サイト<br><strong>初期費用 約45万円</strong>',
            '集客に強い作り込み<br><strong>初期費用 約60万円</strong>',
            ],
          },
          {
            feature: '全体ページ数',
            values: ['約6ページ', '約12ページ', '約20ページ']
          },
          {
            feature: '更新機能',
            values: ['△（1件）<br><small>例：お知らせ</small>', '◎（3件）<br><small>例：お知らせ/ブログ/商品</small>', '◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>']
          },
          {
            feature: '原稿',
            values: ['お客様ご用意', '取材・作成代行', '取材・作成代行']
          },
          {
            feature: 'デザイン案',
            values: ['1案まで', '2案', '2案']
          },
          {
            feature: '修正',
            values: ['2回まで', '3回', '4回']
          },
          {
            feature: 'スマホ/タブレット対応',
            values: ['△（スマホ）', '◎（両対応）', '◎（両対応）']
          }
        ],
        },
    },
    { 
      title: "Webデザイン", 
      img: '/img/UI-UX design-amico.svg',
      description: 'ヒアリングを通じてご要望やイメージを丁寧に汲み取り、ユーザーに伝わるデザインをご提案。世界観を大切にした、より良いビジュアルを形にします。  ',
      category: 'web',
      slug:'web-design',
      heroImage: '/img/web_design-img.jpg',
      blocks:[
        {
          id:'summary',
          title:'サービス概要',
          body: ``
        },
        {
          id:'track-record',
          title:'サービス実績',
          body: ``
        },
        {
          id:'price-guide',
          title:'制作料金目安',
          body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`
        },
      ],
      priceTable: {
        plans:['ライト', 'スタンダード', 'プレミアム'],
        rows: [
          { 
            feature: '目的 / 料金目安',
            values: [
            '',
            '',
            '',
            ],
          },
          {
            feature: '全体ページ数',
            values: ['約6ページ', '約12ページ', '約20ページ']
          },
          {
            feature: '更新機能',
            values: ['△（1件）<br><small>例：お知らせ</small>', '◎（3件）<br><small>例：お知らせ/ブログ/商品</small>', '◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>']
          },
          {
            feature: '原稿',
            values: ['お客様ご用意', '取材・作成代行', '取材・作成代行']
          },
          {
            feature: 'デザイン案',
            values: ['1案まで', '2案', '2案']
          },
          {
            feature: '修正',
            values: ['2回まで', '3回', '4回']
          },
          {
            feature: 'スマホ/タブレット対応',
            values: ['△（スマホ）', '◎（両対応）', '◎（両対応）']
          }
        ],
        },
    },
    { 
      title: "Webサイトリニューアル", 
      img: '/img/Setup-amico.svg',
      description: '既存サイトの改善や調整もお任せください。デザインの刷新から細かな修正まで柔軟に対応。課題を解決し、より効果的なサイトへと導きます。  ',
      category: 'web',
      slug:'website-renovation',
      heroImage: '/img/web_design-img.jpg',
      blocks:[
        {
          id:'summary',
          title:'サービス概要',
          body: ``
        },
        {
          id:'track-record',
          title:'サービス実績',
          body: ``
        },
        {
          id:'price-guide',
          title:'制作料金目安',
          body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`
        },
      ],
      priceTable: {
        plans:['ライト', 'スタンダード', 'プレミアム'],
        rows: [
          { 
            feature: '目的 / 料金目安',
            values: [
            '',
            '',
            '',
            ],
          },
          {
            feature: '全体ページ数',
            values: ['約6ページ', '約12ページ', '約20ページ']
          },
          {
            feature: '更新機能',
            values: ['△（1件）<br><small>例：お知らせ</small>', '◎（3件）<br><small>例：お知らせ/ブログ/商品</small>', '◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>']
          },
          {
            feature: '原稿',
            values: ['お客様ご用意', '取材・作成代行', '取材・作成代行']
          },
          {
            feature: 'デザイン案',
            values: ['1案まで', '2案', '2案']
          },
          {
            feature: '修正',
            values: ['2回まで', '3回', '4回']
          },
          {
            feature: 'スマホ/タブレット対応',
            values: ['△（スマホ）', '◎（両対応）', '◎（両対応）']
          }
        ],
        },
    },
     { 
      title: "レシピ開発", 
      img: '/img/Recipe book-amico.svg',
      description: '20年以上の経験と新作開発のノウハウを活かし、1品からオリジナルレシピを制作いたします。栄養学の観点から、体に優しいメニュー提案も可能です。  ',
      category: 'creator',
      slug:'recipe-development',
      heroImage: '/img/web_design-img.jpg',
      blocks:[
        {
          id:'summary',
          title:'サービス概要',
          body: ``
        },
        {
          id:'track-record',
          title:'サービス実績',
          body: ``
        },
        {
          id:'price-guide',
          title:'制作料金目安',
          body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`
        },
      ],
      priceTable: {
        plans:['ライト', 'スタンダード', 'プレミアム'],
        rows: [
          { 
            feature: '目的 / 料金目安',
            values: [
            '',
            '',
            '',
            ],
          },
          {
            feature: '全体ページ数',
            values: ['約6ページ', '約12ページ', '約20ページ']
          },
          {
            feature: '更新機能',
            values: ['△（1件）<br><small>例：お知らせ</small>', '◎（3件）<br><small>例：お知らせ/ブログ/商品</small>', '◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>']
          },
          {
            feature: '原稿',
            values: ['お客様ご用意', '取材・作成代行', '取材・作成代行']
          },
          {
            feature: 'デザイン案',
            values: ['1案まで', '2案', '2案']
          },
          {
            feature: '修正',
            values: ['2回まで', '3回', '4回']
          },
          {
            feature: 'スマホ/タブレット対応',
            values: ['△（スマホ）', '◎（両対応）', '◎（両対応）']
          }
        ],
        },
    },
    { 
      title: "飲食店コンサルタント", 
      img: '/img/Marketing consulting-rafiki.svg',
      description: '飲食店やパティシエとしての現場経験をもとに、ケーキ屋・カフェ・デザート専門店などをサポート。店舗運営やメニュー開発まで幅広くご相談いただけます。  ',
      category: 'creator',
      slug:'restaurant-consulting',
      heroImage: '/img/web_design-img.jpg',
      blocks:[
        {
          id:'summary',
          title:'サービス概要',
          body: ``
        },
        {
          id:'track-record',
          title:'サービス実績',
          body: ``
        },
        {
          id:'price-guide',
          title:'制作料金目安',
          body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`
        },
      ],
      priceTable: {
        plans:['ライト', 'スタンダード', 'プレミアム'],
        rows: [
          { 
            feature: '目的 / 料金目安',
            values: [
            '',
            '',
            '',
            ],
          },
          {
            feature: '全体ページ数',
            values: ['約6ページ', '約12ページ', '約20ページ']
          },
          {
            feature: '更新機能',
            values: ['△（1件）<br><small>例：お知らせ</small>', '◎（3件）<br><small>例：お知らせ/ブログ/商品</small>', '◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>']
          },
          {
            feature: '原稿',
            values: ['お客様ご用意', '取材・作成代行', '取材・作成代行']
          },
          {
            feature: 'デザイン案',
            values: ['1案まで', '2案', '2案']
          },
          {
            feature: '修正',
            values: ['2回まで', '3回', '4回']
          },
          {
            feature: 'スマホ/タブレット対応',
            values: ['△（スマホ）', '◎（両対応）', '◎（両対応）']
          }
        ],
        },
    },
    { 
      title: "写真・動画撮影", 
      img: '/img/Photo-amico.svg',
      description: '料理やスイーツの写真・動画撮影も対応。 ポートフォリオ掲載の写真はすべて自ら撮影しました。魅力が伝わるビジュアルを丁寧に切り取ります。  ',
      category: 'creator',
      slug:'photo-video-shooting',
      heroImage: '/img/web_design-img.jpg',
      blocks:[
        {
          id:'summary',
          title:'サービス概要',
          body: ``
        },
        {
          id:'track-record',
          title:'サービス実績',
          body: ``
        },
        {
          id:'price-guide',
          title:'制作料金目安',
          body: `目安ですので、予算なども踏まえてお気軽にご相談ください。`
        },
      ],
      priceTable: {
        plans:['ライト', 'スタンダード', 'プレミアム'],
        rows: [
          { 
            feature: '目的 / 料金目安',
            values: [
            '',
            '',
            '',
            ],
          },
          {
            feature: '全体ページ数',
            values: ['約6ページ', '約12ページ', '約20ページ']
          },
          {
            feature: '更新機能',
            values: ['△（1件）<br><small>例：お知らせ</small>', '◎（3件）<br><small>例：お知らせ/ブログ/商品</small>', '◎（4件）<br><small>例：お知らせ/ブログ/商品…</small>']
          },
          {
            feature: '原稿',
            values: ['お客様ご用意', '取材・作成代行', '取材・作成代行']
          },
          {
            feature: 'デザイン案',
            values: ['1案まで', '2案', '2案']
          },
          {
            feature: '修正',
            values: ['2回まで', '3回', '4回']
          },
          {
            feature: 'スマホ/タブレット対応',
            values: ['△（スマホ）', '◎（両対応）', '◎（両対応）']
          }
        ],
        },
    },
    
  ]
