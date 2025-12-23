import type { Work } from "../works";

export type VisualTag = "photo" | "movie";
export type PhotoCategory = "flowers" | "houseplants" | "landscape" | "youtube";
// export type MediaType = "image" | "video";

// export interface MediaItem {
//   type: MediaType;
//   src?: string;
//   poster?: string;
// }
export interface VisualDetail extends Work {
  slug: string;
  visualTag: VisualTag;
  photoCategory?: PhotoCategory;
  images?: string[];
  // media?: MediaItem[];
  description: string;
}
