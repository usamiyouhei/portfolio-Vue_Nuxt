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
.news-item__link {
  display: grid;
  grid-template-columns: 104px 1fr; // サムネ幅を揃える
  gap: 12px;
  align-items: center;
  padding: 10px 8px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 1px 0 rgba(0,0,0,.04);
}
.thumb {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden; border-radius: 10px;
  img { width: 100%; height: 100%; object-fit: cover; display:block; }
}
.meta { min-width: 0; } /* 省略時の折返し制御 */
.date { font-size: 12px; color: #888; display:block; margin-bottom: 4px; }
.title {
  font-size: 15px; line-height: 1.35; font-weight: 600;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  overflow: hidden;
}
@media (min-width: 640px) {
  .news-item__link { padding: 12px; grid-template-columns: 120px 1fr; }
  .title { font-size: 16px; }
}
</style>