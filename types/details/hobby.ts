import type { Work } from "../works";

type HobbyTag = "dish" | "wine" | "sake" | "ingredients" | "food" | "economy";

export interface HobbyDetail extends Work {
  slug: string;
  hobbyTag: HobbyTag;
}
