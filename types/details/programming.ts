import type { Work } from "../works";

export type ProgrammingTag = "site" | "app";

export interface ProgrammingDetail extends Work {
  devType: ProgrammingTag;
  stack: string[];
  problem: string;
  solution: string[];
  features: string[];
  links: { demo: string; repo: string };
  lessons: string[];
}
