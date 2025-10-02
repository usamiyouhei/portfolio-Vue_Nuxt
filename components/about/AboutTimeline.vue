<template>
  <ol class="timeline">
    <li v-for="(item, i) in items" :key="i" class="timeline__item">
      <div class="timeline__dot"></div>
      <div class="timeline__content">
        <time datetime="" class="timeline__period">{{ item.period }}</time>
        <h3 class="timeline__title">{{ item.title }}</h3>
        <p class="timeline__detail">{{ item.detail }}</p>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
export type TimelineItem = {
  period: string;
  title: string;
  detail: string;
}

const props = defineProps<{ items: TimelineItem[]}>()
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
</style>