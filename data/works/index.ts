export * from "./patissier";
export * from "./programming";
export * from "./design";
export * from "./visual";
export * from "./hobby";

import { patissierWorks } from "./patissier";
import { visualWorks } from "./visual";
import { programmingWorks } from "./programming";
import { designWorks } from "./design";
import { hobbyWorks } from "./hobby";

export const works = [
  ...patissierWorks,
  ...visualWorks,
  ...programmingWorks,
  ...designWorks,
  ...hobbyWorks,
] as const;
