export type Cat = "patissier" | "website" | "app" | "design" | "hobby";
export type DevType = "site" | "app";
export interface Work {
  id: number | string;
  title: string;
  img?: string;
  slug?: string;
  category: Cat;
  subTitle?: string;
  date?: string | Date;
  tags?: string[];
  externalUrl?: string;
  images?: string[];
  description?: string;
  // patissier/hobby
  recipe?: { ingredients: string[]; steps: string[] };
  platingNotes?: string[];
  tools?: string[];
  // programming
  type?: DevType;
  problem?: string;
  solution?: string[];
  stack?: string[];
  cover?: string;
  features?: string[];
  links?: { demo?: string; repo?: string; article?: string };
  lessons?: string[];
}
