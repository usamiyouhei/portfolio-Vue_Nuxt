import type { Work } from "./works.base";

export type HobbyTag = "indredients" | "food" | "economy";

export interface HobbyWork extends Work {
  hobbyTag: HobbyTag[];
}
