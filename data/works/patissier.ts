import type { Work } from "~/types";

export const patissierWorks = [
  {
    id: "1",
    title: "pari brest",
    img: "/img/mv2.jpg",
    category: "patissier",
    slug: "pari brest",
    date: "2025-10-10",
    tags: ["cake", "dessert"],
  },
  {
    id: "2",
    title: "苺",
    img: "/img/p-img2.jpg",
    category: "patissier",
    slug: "strawberry",
    date: "2025-09-04",
    tags: ["App"],
  },
] satisfies Work[];
