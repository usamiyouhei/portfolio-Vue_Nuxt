
export const patissierWorks = [
  { id:'w1', slug:'yuzu-panna', title:'柚子パンナコッタ', cover:'/img/panna.jpg', category:'dessert',
    images:['/img/panna-1.jpg','/img/panna-2.jpg'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
  { id:'w2', slug:'yuzu-panna', title:'柚子パンナコッタ', cover:'/img/panna.jpg', category:'sweets',
    images:['/img/panna-1.jpg','/img/panna-2.jpg'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
  { id:'w3', slug:'yuzu-panna', title:'柚子パンナコッタ', cover:'/img/panna.jpg', category:'cake',
    images:['/img/'],
    description:'和柑橘の香りを主役にした口溶けの良いパンナコッタ。',
    recipe:{ ingredients:['生クリーム 300','牛乳 200','砂糖 60','ゼラチン 8','柚子皮','柚子果汁'], steps:['加熱','氷水で冷やす','型に流す'] },
    platingNotes:['器はマットな白','トップに柚子皮の微粉','苦味バランス重視'],
    tools:['銀彩小鉢','耐熱ゴムベラ']
  },
]

export const programmingWorks = [
  { id:'p1', slug:'todo-next', title:'Todo App (Next.js)', cover:'/img/todo.jpg', category:'programming', type:'app',
    description:'学習用のタスク管理アプリ。',
    problem:'学習記録と進捗の可視化がしたい',
    solution:['タグ/フィルタ','ローカル→Supabase移行','PWA対応'],
    features:['ドラッグ並べ替え','オフライン','タグ検索'],
    stack:['Next.js','TypeScript','Supabase','Tailwind'],
    links:{ demo:'https://example.com', repo:'https://github.com/youheiusami/todo' },
    lessons:['型で負債を減らす','DBスキーマを先に固める']
  },
]