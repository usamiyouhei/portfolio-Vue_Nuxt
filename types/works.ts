export const categories = [
  "patissier",
  "visualProduction",
  "programming",
  "design",
  "hobby",
] as const;

export type Category = (typeof categories)[number];

export interface Work {
  id: string;
  title: string;
  img?: string;
  slug?: string;
  cover?: string;
  category: Category;
  subTitle?: string;
  date?: string | Date;
  tags?: string[];
  externalUrl?: string;
  images?: string[];
  description?: string;
}
