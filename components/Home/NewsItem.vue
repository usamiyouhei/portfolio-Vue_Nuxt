<template>
      <NuxtLink :to="`/news/${props.item.slug}`" class="news-item">
        <div class="news-item__thumb">
          <img :src="props.item.image" :alt="props.item.title" loading="lazy">
        </div>
        <div class="news-item__body">
          <time class="news-item__date">{{ props.item.date }}</time>
          <h3 class="news_item__title">{{ props.item.title }}</h3>
          <p v-if="props.item.excerpt" class="news_item__excerpt">
            {{ props.item.excerpt }}
          </p>
        </div>
      </NuxtLink>
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
  align-items: center;
  gap: 20px;
  padding: 16px 18px;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 6px 24px rgba(0,0,0,.06);
  transition: transform .18s ease, box-shadow .18s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0,0,0,.10);
  }
}

.news-item__thumb {
  flex: 0 0 220px;
  aspect-ratio: 3/2;
  // width: 120px;
  // height: 74px;
  overflow: hidden;
  border-radius: 14px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display:block;
  }
}

.news-item__body {
  min-width: 0;
  flex: 1 1 auto;
}

.news-item__date {
  font-size: 12px;
  color: #888;
  display:block;
  margin-bottom: 4px;
}

.news_item__title {
  font-size: 16px;
  line-height: 1.35;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.news-item__excerpt {
  font-size: 14px;
  color: #444;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;      /* ← 2行で省略 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width:480px){
  .news-item{
    align-items:flex-start;
  }
  .news-item__thumb{
    width:96px; height:64px;
  }
  .news-item__body {
    margin: auto;
  }
}

/* タブレット以上: サムネを少し大きく */
@media (max-width: 768px) {
  .news-item {
  gap: 10px; 
  padding: 10px 12px; 
  border-radius: 14px;
  }

  .news-item__thumb {
    flex-basis: 110px; 
    aspect-ratio: 16 / 10; 
    border-radius: 10px; 
  }
  .news-item__body {
    flex: none;
  }
  .news-item__title { font-size: 16px; }
  .news-item__excerpt { font-size: 13px; -webkit-line-clamp: 2; }
}
</style>