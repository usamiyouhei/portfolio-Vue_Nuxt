import type { Work } from "../works";

export type DesignTag = "figma" | "procreate" | "canva";

export interface DesignDetail extends Work {
  designTag: DesignTag;
}
