import type { Work } from "./works.base";

export type PatissierTag = "dessert" | "sweets" | "cake";

export interface PatissierWork extends Work {
  recipe?: { ingredients: string[]; steps: string[] };
  platingNotes?: string[];
  tools?: string[];
  tags?: PatissierTag[];
}
