import { ref } from "vue";
import { allNews } from "~/data/newsList";
import { allNews as seed } from "~/data/newsList";
import type { News } from "~/types/news";

// const byDateDesc = (a: News, b: News) =>
//   new Date(b.date).getTime() - new Date(a.date).getTime();

export const useNews = () => {
  const all = computed(() => allNews);
  const sorted = [...allNews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latest = (n = 3) => sorted.slice(0, n);
  return { all, sorted, latest };
  // // ここが undefined にならないよう、必ず配列で初期化
  // const all = ref<News[]>(Array.isArray(seed) ? [...seed] : []);
  // return { all };
};

// export function useNews() {
//   const all = computed(() => [...allNews].sort(byDateDesc))
//   const latest = (n = 3) => all.value.slice(0, n)
//   const findBySlug = (slug: string) => all.value.find(n => n.slug === slug)
//   return { all, latest, findBySlug }
// }
