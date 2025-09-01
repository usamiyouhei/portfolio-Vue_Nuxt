<template>
      <NuxtLink :to="`/news/${props.item.slug}`" class="news-item">
        <div class="news-item__thumb">
          <img :src="props.item.image" :alt="props.item.title" loading="lazy">
        </div>
        <div class="news-item__body">
          <time class="news-item__date">{{ props.item.date }}</time>
          <h3 class="news_item__title">{{ props.item.title }}</h3>
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
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #fff;
  box-shadow:0 1px 0 rgba(0,0,0,.05);
}

.news-item__thumb {
  width: 120px;
  height: 74px;
  flex:0 0 auto;
  overflow: hidden;
  border-radius: 10px;
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
@media (min-width: 768px) {
  .news-item {
    display: block;
  }

  .news-item__thumb {
    width: 100%;
    height: 180px;
  }
  .news-item__body {
    flex: none;
  }
}
</style>