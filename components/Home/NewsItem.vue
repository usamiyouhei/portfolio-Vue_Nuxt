<template>
    <div class="news__items">
      <img :src="thumbnail" :alt="title" class="news-item__thumb">
      <div class="news-item__info">
        <time class="news-item__date" datetime="">{{ date }}</time>
        <h3 class="news-item__title">{{ title }}</h3>
      </div>
    </div>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
defineProps<{
  title: string;
  date: string;
  thumbnail: string;
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