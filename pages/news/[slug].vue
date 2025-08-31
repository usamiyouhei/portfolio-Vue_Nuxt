<template>
  <article v-if="itemSafe" class="inner">
    <header>
      <time class="date">{{ itemSafe.date }}</time>
      <h1 class="title">{{ itemSafe.title }}</h1>
      <img :src="itemSafe.image" :alt="itemSafe.title" />
    </header>
    <div class="content" v-if="itemSafe.body" v-html="itemSafe.body" />
    <p class="back"><NuxtLink to="/news">← News一覧へ</NuxtLink></p>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useNews } from '@/composables/useNews'
import type { News } from '@/types/news'

/**===================================================================================================================
 * 
 ===================================================================================================================**/
const route = useRoute()
const { all } = useNews()

// const item = computed(() => all.value.find(n => n.slug === route.params.slug))
const itemSafe = computed<News>(() => {
  const found = all.value.find(n => n.slug === route.params.slug)
  if (!found) {
    throw createError({ statusCode: 404, statusMessage: 'News not found' })
  }
  return found
})

// if (!item) {
//   throw createError({ statusCode: 404, statusMessage: 'News not found' })
// }


useHead({
  title: computed(() => `${itemSafe.value.title} | News`),
  meta: [
    { name: 'description', content: computed(() => itemSafe.value.excerpt || itemSafe.value.title) },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: computed(() => itemSafe.value.title) },
    { property: 'og:image', content: computed(() => itemSafe.value.image) },
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