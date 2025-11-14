<template>
  <NuxtLink :to="`/news/${props.item.slug}`" class="news-item">
    <div class="news-item__thumb">
      <img :src="props.item.image" :alt="props.item.title" loading="lazy" />
    </div>
    <div class="news-item__body">
      <time class="news-item__date">{{ props.item.date }}</time>
      <h3 class="news-item__title">
        {{ props.item.title }}
      </h3>
      <p v-if="props.item.excerpt" class="news-item__excerpt">
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
  item: News;
}>();

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.news-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-3px);
  }
}

.news-item__thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  &:hover img {
    transform: scale(1.08);
  }
}

.news-item__body {
  width: 100%;
  text-align: center;
}

.news-item__date {
  font-size: 12px;
  color: #888;
}

.news-item__title {
  font-family: "Noto Sans JP", "Yu Gothic Medium", sans-serif;
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
  -webkit-line-clamp: 2; /* ← 2行で省略 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 426px) and (max-width: 767px) {
  .news-item {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px;
  }
  .news-item__thumb {
    flex: 0 0 40%;
    aspect-ratio: 4 / 3;
    max-width: 280px;
    border-radius: 12px;
  }
  .news-item__body {
    flex: 1;
    width: 100%;
    text-align: left;
  }
}

/* タブレット以上: サムネを少し大きく */
// @media (min-width: 375px) and (max-width: 768px) {
//   .news-item {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     width: 100%;
//     gap: 12px;
//     padding: 12px 14px;
//   }
//   .news-item__thumb {
//     width: 100%;
//     max-width:500px;
//     border-radius: 12px;
//     overflow: hidden;
//   }
//   .news-item__body {
//     width: 100%;
//     max-width: 340px;
//   }

//   .news-item__date {
//     font-size: 13px;
//   }

//   .news-item__title {
//     font-size: 15px;
//     line-height: 1.5;
//     margin-bottom: 4px;
//   }
//   .news_item__excerpt {
//     font-size: 14px;
//     line-height: 1.6;
//     color: #555;
//     display: -webkit-box;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// }

@media (min-width: 768px) and (max-width: 1023px) {
  .news-item {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 10px;
    padding: 16px;
  }
  .news-item__thumb {
    width: clamp(180px, 40%, 260px);
    aspect-ratio: 4 / 3;
    border-radius: 12px;
  }
  .news-item__body {
    width: 100%;
    text-align: center;
    padding: 10px 2px 0;
  }
  .news-item__title {
    font-size: 16px;
  }
  .news_item__excerpt {
    font-size: 16px;
    -webkit-line-clamp: 3;
  }
}

@media (min-width: 1024px) {
  .news-item {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .news {
    margin: 60px 0 80px;
  }
  .news-item__thumb {
    // flex: 0 0 160px;
    aspect-ratio: 4 / 3;
    border-radius: 12px;
  }
}
</style>
