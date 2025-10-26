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
  align-items: flex-start;
  gap: 14px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 215, 0, 0.3);
  transition: transform .18s ease, box-shadow .18s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    color: #b8860b; 
  }
}

.news-item__thumb {
  flex: 0 0 100px;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display:block;
  }
}

.news-item__body {
  min-width: 0;
  flex: 1;
}

.news-item__date {
  font-size: 12px;
  color: #888;
  display:block;
  margin-bottom: 4px;
}

.news_item__title {
  font-size: 15px;
  line-height: 1.35;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.news-item__excerpt {
  font-size: 13px;
  color: #444;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;      /* ← 2行で省略 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width:479px){
  .news-item{
    flex-direction: column;
    align-items:center;
    text-align: center;
  }
  .news-item__thumb{
    flex: none;
    width: 100%;
    max-width: 280px;
    border-radius: 12px;
  }
  .news-item__body {
    margin: auto;
  }
}

/* タブレット以上: サムネを少し大きく */
@media (min-width: 480px) and (max-width: 767px) {
  .news-item {
  gap: 12px;
  padding: 12px 14px;
  }
  .news-item__thumb {
    flex: 0 0 120px;
    aspect-ratio: 4 / 3;
  }
  .news-item__body {
    flex: none;
  }
  .news-item__title {
    font-size: 15px;
  }
  .news-item__excerpt {
    font-size: 13px;
    -webkit-line-clamp: 2;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .news-item {
    gap: 16px;
    padding: 16px;
  }
  .news-item__thumb {
    flex: 0 0 160px;
    aspect-ratio: 4 / 3;
  }
  .news-item__title {
    font-size: 16px;
  }
  .news-item__excerpt {
    font-size: 16px;
  }
}
</style>