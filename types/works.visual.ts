import type { Work } from "./works.base";

export type VisualTag = "flowers" | "houseplants" | "landscape" | "youtube";

export interface VisualWorks extends Work {
  visualTag: VisualTag;
}
