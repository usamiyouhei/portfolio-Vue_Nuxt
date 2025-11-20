import type { Work } from "./works.base";

export type DesignTag = "figma" | "procreate" | "canva";

export interface DesignWorks extends Work {
  designTag: DesignTag;
}
