import type { Work } from "../works";

type HobbyTag = "ingredients" | "food" | "economy";

export interface HobbyDetail extends Work {
  hobbyTag: HobbyTag;
}
