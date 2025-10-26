<template>
  <article v-if="itemSafe" class="inner">
    <Breadcrumb :crumbs="crumbs"/>

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
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import Breadcrumb from '~/components/common/Breadcrumb.vue';
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

const { crumbs } = useBreadcrumb('news', itemSafe.value.title)
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
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.inner {
  max-width: 800px;
  padding: 0 20px;
  margin: 120px auto 100px;
  line-height: 1.8;
  header {
    text-align: center;
    margin-bottom: 40px;
  }
  .date {
    display: block;
    font-size: 0.9rem;
    color: #888;
    margin-bottom: 9px;
  }
  .title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
}

.content {
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
  h2, h3 {
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1.5rem;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 20px auto;
    border-radius: 6px;
  }
}

.back {
  text-align: center;
}

</style>