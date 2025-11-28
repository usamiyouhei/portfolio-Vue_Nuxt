import type { Work } from "../works";

export type VisualTag = "photo" | "movie";
export type PhotoCategory = "flowers" | "houseplants" | "landscape" | "youtube";

export interface VisualDetail extends Work {
  slug: string;
  visualTag: VisualTag;
  photoCategory?: PhotoCategory;
  images: string[];
  description: string;
}
