<template>
    <li class="news-items">
      <NuxtLink :to="`/news/${props.item.slug}`" class="news-item--link">
        <div class="thumb">
          <img :src="props.item.image" :alt="props.item.title" loading="lazy">
        </div>
        <div class="meta">
          <time class="date">{{ props.item.date }}</time>
          <h3 class="title">{{ props.item.title }}</h3>
        </div>
      </NuxtLink>
    </li>
</template>

<script setup lang="ts">
import type { News } from "@/types/news";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const props = defineProps<{
  item: News
}>()

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.news-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 60%;
}

.news-item__thumb {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 8px;
}

.news-item__date {
  font-size: 0.85rem;
  color: #333;
}

.news-item__title {
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.4;
}
</style>