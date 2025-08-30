
import { ref } from 'vue'
import { allNews as seed } from '~/data/news'
import type { News } from '~/types/news'

const byDateDesc = (a: News, b: News) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()


export function useNews() {
  // ここを ref にしておくと後で追加/並び替えが楽
  const all = ref<News[]>([...seed])
  return { all }
}

// export function useNews() {
//   const all = computed(() => [...allNews].sort(byDateDesc))
//   const latest = (n = 3) => all.value.slice(0, n)
//   const findBySlug = (slug: string) => all.value.find(n => n.slug === slug)
//   return { all, latest, findBySlug }
// }