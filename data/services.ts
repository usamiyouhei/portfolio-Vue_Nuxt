
export type Service = {
    title: string;
    img: string;
    description: string;
    category: 'web' | 'creator';
    slug?: string;
    features?: string[];
    process?: {step: string, dec: string}[]
  }


export const services: Service[] = [
    { 
      title: "Webサイト制作", 
      img: '/img/Static website-development.svg',
      description: '新規サイトの立ち上げから運用まで幅広く対応。レスポンシブデザインで、スマホやタブレットでも快適に。動きを取り入れたアニメーションで魅力的な体験を演出します。  ',
      category: 'web',
      slug:'website-development'
    },
    { 
      title: "Webデザイン", 
      img: '/img/UI-UX design-amico.svg',
      description: 'ヒアリングを通じてご要望やイメージを丁寧に汲み取り、ユーザーに伝わるデザインをご提案。世界観を大切にした、より良いビジュアルを形にします。  ',
      category: 'web',
      slug:'web-design'
    },
    { 
      title: "Webサイトリニューアル", 
      img: '/img/Setup-amico.svg',
      description: '既存サイトの改善や調整もお任せください。デザインの刷新から細かな修正まで柔軟に対応。課題を解決し、より効果的なサイトへと導きます。  ',
      category: 'web',
      slug:'website-renovation'
    },
     { 
      title: "レシピ開発", 
      img: '/img/Recipe book-amico.svg',
      description: '20年以上の経験と新作開発のノウハウを活かし、1品からオリジナルレシピを制作いたします。栄養学の観点から、体に優しいメニュー提案も可能です。  ',
      category: 'creator',
      slug:'recipe-development'
    },
    { 
      title: "飲食店コンサルタント", 
      img: '/img/Marketing consulting-rafiki.svg',
      description: '飲食店やパティシエとしての現場経験をもとに、ケーキ屋・カフェ・デザート専門店などをサポート。店舗運営やメニュー開発まで幅広くご相談いただけます。  ',
      category: 'creator',
      slug:'restaurant-consulting'
    },
    { 
      title: "写真・動画撮影", 
      img: '/img/Photo-amico.svg',
      description: '料理やスイーツの写真・動画撮影も対応。 ポートフォリオ掲載の写真はすべて自ら撮影しました。魅力が伝わるビジュアルを丁寧に切り取ります。  ',
      category: 'creator',
      slug:'photo-video-shooting'
    },
    
  ]
