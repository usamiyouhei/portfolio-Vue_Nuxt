<template>
  <article class="inner">
    <header>
      <time class="date">{{ item.date }}</time>
      <h1 class="title">{{ item.title }}</h1>
      <img :src="item.image" :alt="item.title" />
    </header>
    <div class="content" v-if="item.body" v-html="item.body" />
    <p class="back"><NuxtLink to="/news">← News一覧へ</NuxtLink></p>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { news } from "~/data/news";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const route = useRoute()
const item = news.find(n => n.slug === route.params.slug)

if (!item) {
  throw createError({ statusCode: 404, statusMessage: 'News not found' })
}

useHead({
  title: `${item.title} | News`,
  meta: [
    { name: 'description', content: item.excerpt || item.title },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: item.title },
    { property: 'og:image', content: item.image }
  ],
})
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
.inner {
  margin-top: 80px;
}
</style>