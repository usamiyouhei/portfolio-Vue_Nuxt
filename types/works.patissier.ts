import type { Work } from "./works.base";

export type PatissierTag = "dessert" | "sweets" | "cake";

export interface PatissierWork extends Work {
  // patissier/hobby
  recipe?: { ingredients: string[]; steps: string[] };
  platingNotes?: string[];
  tools?: string[];
}
