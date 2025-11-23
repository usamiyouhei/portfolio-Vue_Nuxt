import type { ProgrammingDetail } from "~/types/details/programming";

export const programmingDetail: ProgrammingDetail[] = [
  {
    id: "p1",
    slug: "todo-next",
    title: "Todo App (Next.js)",
    cover: "/img/web-site/camp-fv-img.jpg",
    category: "programming",
    devType: "app",
    description: "学習用のタスク管理アプリ。",
    problem: "学習記録と進捗の可視化がしたい",
    solution: ["タグ/フィルタ", "ローカル→Supabase移行", "PWA対応"],
    features: ["ドラッグ並べ替え", "オフライン", "タグ検索"],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    links: {
      demo: "https://example.com",
      repo: "https://github.com/youheiusami/todo",
    },
    lessons: ["型で負債を減らす", "DBスキーマを先に固める"],
  },
  {
    id: "p2",
    slug: "portfolio",
    title: "portfolio",
    cover: "/img/news/news-img2_new_portfolio.jpg",
    category: "programming",
    devType: "site",
    description: "新ポートフォリオをUI/UXデザインも考えて作成しました。",
    problem: "学習記録と進捗の可視化がしたい",
    solution: ["タグ/フィルタ", "ローカル→Supabase移行", "PWA対応"],
    features: ["ドラッグ並べ替え", "オフライン", "タグ検索"],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    links: {
      demo: "https://example.com",
      repo: "https://github.com/youheiusami/todo",
    },
    lessons: ["型で負債を減らす", "DBスキーマを先に固める"],
  },
];
