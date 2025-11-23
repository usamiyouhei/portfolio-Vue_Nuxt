import type { DesignDetail } from "~/types/details/design";

export const designDetail: DesignDetail[] = [
  {
    id: "p1",
    slug: "figma-design1",
    title: "Figma design1",
    cover: "/img/design/figma-fv.jpg",
    category: "design",
    designTag: "figma",
    description: "Figmaを使用してデザインカンプを作成",
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
    slug: "figma-design",
    title: "Figma design2",
    cover: "/img/design/figma-img2.jpg",
    category: "design",
    designTag: "figma",
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
