import type { Work } from "~/types/works";


export const patissierWorks = [
  { id:'w1', slug:'sakura', title:'sakura dessert', cover:'/img/sakura-dessert.jpg', category:'dessert',
    images:['/img/sakura-dessert.jpg'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
  { id:'w2', slug:'yuzu-panna', title:'chocolate dessert', cover:'/img/chocolate-dessert.jpg', category:'dessert',
    images:['/img/chocolate-dessert.jpg'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
  { id:'w3', slug:'yuzu-panna', title:'orange dessert', cover:'/img/orange-dessert.jpg', category:'dessert',
    images:['/img/orange-dessert.jpg'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
  { id:'w4', slug:'yuzu-panna', title:'muscut dessert', cover:'/img/muscut-dessert.jpg', category:'dessert',
    images:['/img/muscut-dessert.jpg'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
  { id:'w20', slug:'yuzu-panna', title:'柚子パンナコッタ', cover:'/img/Dg-img2.jpg', category:'sweets',
    images:['/img/Dg-img1.jpg'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
  { id:'w30', slug:'yuzu-panna', title:'柚子パンナコッタ', cover:'/img/Dg-img3.jpg', category:'cake',
    images:['/img/Dg-img1.jpg'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
]

export const programmingWorks:Work[] = [
  { id:'p1', slug:'todo-next', title:'Todo App (Next.js)', cover:'/img/camp-fv-img.jpg', category:'programming', type:'app',
    description:'学習用のタスク管理アプリ。',
    problem:'学習記録と進捗の可視化がしたい',
    solution:['タグ/フィルタ','ローカル→Supabase移行','PWA対応'],
    features:['ドラッグ並べ替え','オフライン','タグ検索'],
    stack:['Next.js','TypeScript','Supabase','Tailwind'],
    links:{ demo:'https://example.com', repo:'https://github.com/youheiusami/todo' },
    lessons:['型で負債を減らす','DBスキーマを先に固める']
  },
  { id:'p2', slug:'portfolio', title:'portfolio', cover:'/img/news-img2.jpg', category:'programming', type:'site',
    description:'学習用のタスク管理アプリ。',
    problem:'学習記録と進捗の可視化がしたい',
    solution:['タグ/フィルタ','ローカル→Supabase移行','PWA対応'],
    features:['ドラッグ並べ替え','オフライン','タグ検索'],
    stack:['Next.js','TypeScript','Supabase','Tailwind'],
    links:{ demo:'https://example.com', repo:'https://github.com/youheiusami/todo' },
    lessons:['型で負債を減らす','DBスキーマを先に固める']
  },
]