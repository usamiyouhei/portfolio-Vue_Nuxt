// export type VisualTag =
//   | "flowers"
//   | "houseplants"
//   | "landscape"
//   | "youtube";

export interface VisualDetail {
  id: string;
  slug: string;
  title: string;
  cover: string;
  category: VisualTag;
  images: string[];
  description: string;

  platingNotes?: string[];
  tools?: string[];

  problem?: string;
  solution?: string[];
  features?: string[];
  stack?: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
  lessons?: string[];
}
