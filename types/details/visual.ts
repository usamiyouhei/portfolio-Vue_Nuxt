import type { Work } from "../works";

export type VisualTag = "flowers" | "houseplants" | "landscape" | "youtube";

export interface VisualDetail extends Work {
  visualTag: VisualTag;
  images: string[];
  description: string;
}
