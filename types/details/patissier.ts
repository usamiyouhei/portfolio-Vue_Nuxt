import type { Work } from "../works";

export type PatissierTag = "dessert" | "sweets" | "cake";

export interface PatissierDetail extends Work {
  patissierTag: PatissierTag;
  images: string[];
  recipe?: {
    ingredients: string[];
    steps: string[];
  };
  platingNotes?: string[];
  tools?: string[];
}
