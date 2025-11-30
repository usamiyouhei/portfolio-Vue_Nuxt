import type { Work } from "~/types";

export const hobbyWorks = [
  {
    id: "ws1",
    title: "瀬川辰馬の器",
    img: "/img/hobby/dish/segawa1.jpeg",
    category: "hobby",
    slug: "hobby",
    date: "2025-07-10",
    tags: ["Asisai"],
  },
  {
    id: "ws2",
    title: "wine",
    img: "/img/hobby/alcohol/wine_1.jpg",
    category: "hobby",
    slug: "hobby",
    date: "2025-07-10",
    tags: ["wine"],
  },
  {
    id: "ws3",
    title: "秋の食材",
    img: "/img/hobby/fruits/autum.jpeg",
    category: "hobby",
    slug: "hobby",
    date: "2025-07-10",
    tags: ["ingradients"],
  },
] satisfies Work[];
