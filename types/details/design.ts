import type { Work } from "../works";

export type DesignTag = "figma" | "procreate" | "canva";

export interface DesignDetail extends Work {
  designTag: DesignTag;
  problem: string;
  solution: string[];
  features: string[];
  stack: string[];
  links: {
    demo: string;
    repo: string;
  };
  lessons: string[];
}
