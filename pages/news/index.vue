<template>
 <section class="inner">
    <h1 class="visually-hidden">News</h1>
    <ul class="grid">
      <li v-for="n in items.slice(0,10)" :key="n.slug">
        <NuxtLink :to="`/news/${n.slug}`" class="card">
          <div class="thumb"><img :src="n.image" :alt="n.title" loading="lazy" /></div>
          <time class="date">{{ n.date }}</time>
          <h2 class="title">{{ n.title }}</h2>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { News } from "@/types/news";
const items = await useFetch<News[]>('/api/news').then(r => r.data.value || [])
import { useNews } from '@/composables/useNews' // さっき作ったやつ
const { all } = useNews()
/**===================================================================================================================
 * 
 ===================================================================================================================**/
//------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// ライフサイクル
//------------------------------------------------------------------------------------------------------------
/*
onBeforeMount(() => {
  //記憶した位置、サイズでの復帰を可能にする
})

onMounted(() => {
  //window.addEventListener('resize', onGetPosition)
})

onBeforeUnmount(() => {
  //window.removeEventListener('resize', onGetPosition)
})
*/
//------------------------------------------------------------------------------------------------------------
//watch
//------------------------------------------------------------------------------------------------------------
/*
watch(
  () => props.value,
  (value) => {
    input.value = value
  }
)
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