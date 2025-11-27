import type { Work } from "../works";

export type VisualTag = "photo" | "movie";
export type PhotoTag = "flowers" | "houseplants" | "landscape" | "youtube";

export interface VisualDetail extends Work {
  slug: string;
  visualTag: VisualTag;
  photoTag?: PhotoTag;
  images: string[];
  description: string;
}
