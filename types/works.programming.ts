import type { Work } from "./works.base";

export type ProgrammingTag = "site" | "app";

export interface ProgrammingWork extends Work {
  type?: ProgrammingTag;
  problem?: string;
  solution?: string[];
  stack?: string[];
  cover?: string;
  features?: string[];
  links?: { demo?: string; repo?: string; article?: string };
  lessons?: string[];
}
