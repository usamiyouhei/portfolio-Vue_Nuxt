<template>
 <section class="inner">
    <h1 class="visually-hidden">News</h1>
    <ul class="grid">
      <li v-for="n in paginatedItems" :key="n.slug">
        <NuxtLink :to="`/news/${n.slug}`" class="card">
          <div class="thumb"><img :src="n.image" :alt="n.title" loading="lazy" /></div>
          <time class="date">{{ n.date }}</time>
          <h2 class="title">{{ n.title }}</h2>
        </NuxtLink>
      </li>
    </ul>
          <Pagination v-model="page" :total-pages="totalPages" :edge="1" :radius="1" />

    
      <Head>
      <Link
        v-if="currentPage > 1"
        rel="prev"
        :href="`/news?page=${currentPage - 1}`"
      />
      <Link
        v-if="currentPage < totalPages"
        rel="next"
        :href="`/news?page=${currentPage + 1}`"
      />
    </Head>
  </section>
</template>

<script setup lang="ts">
import type { News } from "@/types/news";
import { useRoute, useRouter } from "vue-router";
// const items = await useFetch<News[]>('/api/news').then(r => r.data.value || [])
import { useNews } from '@/composables/useNews' // さっき作ったやつ
import Pagination from '@/components/ui/Pagination.vue'


const route = useRoute();
const router = useRouter();
const { all } = useNews()
const items = computed(() => all.value.slice(0, 10))
const perPage = 10

const page = computed<number>({
  get() {
    const p = Number(route.query.page ?? 1)
    return Number.isFinite(p) && p >= 1 ? p : 1
  },
  set(p: number) {
    router.push({ query: { ...route.query, page: String(p) } })
  }
})

// クエリから現在ページを取得（なければ1）
const currentPage = computed(() => {
  const p = Number(route.query.page || 1)
  return isNaN(p) || p < 1 ? 1 : p
})

// 総ページ数
const totalPages = computed<number>(() => 
  Math.ceil(all.value.length / perPage)
)

// 現在のページに応じた記事
const paginatedItems = computed(() => {
  const start = (page.value - 1) * perPage
  return all.value.slice(start, start + perPage)
})

const goToPage = (p: number) => {
  if(p >= 1 && p <= totalPages.value){
    router.push({query: {page: String(p)}})
  }
} 

/**===================================================================================================================
 * 
 ===================================================================================================================**/

//------------------------------------------------------------------------------------------------------------
//computed
//------------------------------------------------------------------------------------------------------------
/*
const counter: Ref<number> = useState('counter', () => 500)

// computedによりcounter変数の監視が行われる
const doubleCount = computed(() => {
  return counter.value * 2
})
*/
//------------------------------------------------------------------------------------------------------------
// エミット
//------------------------------------------------------------------------------------------------------------
/*
const emits = defineEmits<{ (e: 'update:value', item: any): void }>()
const input = ref(props.value)

function onChange(value: any) {
  input.value = value
  emits('update:value', value)
}
*/

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.grid {
  display:grid;
  gap:16px;
  grid-template-columns: 1fr;
}
@media (min-width:640px){
    .grid{
      grid-template-columns: 1fr 1fr;
    }
  }
.card {
    display:block;
    background:#fff;
    border-radius:14px;
    padding:10px;
    box-shadow:0 1px 0 rgba(0,0,0,.05);
  }
.thumb {
    width:100%;
    aspect-ratio:4/3;
    overflow:hidden; border-radius:10px; margin-bottom:8px;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
  }
}
.date{
  font-size:12px;
  color:#888;
  display:block;
  margin-bottom:4px;
}
.title{
  font-size:16px;
  font-weight:700;
  line-height:1.35;
}

</style>