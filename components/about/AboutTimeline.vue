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
};

const props = defineProps<{ items: TimelineItem[] }>();
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  padding-left: 20px;
  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 10px;
    width: 2px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
}

.timeline__item {
  position: relative;
  margin: 22px 0;
}

.timeline__dot {
  position: absolute;
  left: -14px;
  top: 30px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #c7a049;
  box-shadow: 0 0 0 4px rgba(199, 160, 73, 0.18);
}

.timeline__period {
  font-size: 13px;
  opacity: 0.7;
}
.timeline__title {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 18px;
  margin-top: 2px;
}
.timeline__detail {
  font-family: "Noto Sans JP", sans-serif;
  margin-top: 6px;
  opacity: 0.75;
  line-height: 1.8;
}
</style>
