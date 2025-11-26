import type { Work } from "~/types";

export const patissierWorks = [
  {
    id: "1",
    title: "桜 メインデザート",
    img: "/img/dessert/sakura_main.jpeg",
    category: "patissier",
    slug: "pari brest",
    date: "2025-10-10",
    tags: ["dessert"],
  },
  {
    id: "2",
    title: "苺のデザート",
    img: "/img/dessert/main_strawberry_dessert.jpeg",
    category: "patissier",
    slug: "strawberry",
    date: "2025-09-04",
    tags: ["dessert"],
  },
] satisfies Work[];
