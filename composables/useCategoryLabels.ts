import type { Work } from "~/types/works";

type Category = Work["category"];

const defaultMap: Record<Category, string> = {
  patissier: "Patissier",
  programming: "Programming",
  visualProduction: "VisualProduction",
  design: "Design",
  hobby: "Hobby",
};

export function useCategoryLabel(
  customMap: Partial<Record<Category, string>> = {}
) {
  const map = { ...defaultMap, ...customMap };
  const getCategoryLabel = (cat?: Category) => {
    if (!cat) return "";
    return map[cat];
  };
  return { getCategoryLabel, map };
}
