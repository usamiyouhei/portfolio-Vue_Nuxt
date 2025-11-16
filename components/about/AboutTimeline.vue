<template>
  <ol class="timeline">
    <li
      v-for="(item, i) in items"
      :key="i"
      class="timeline__item"
      :ref="(el) => (timelineItems[i] = el as HTMLElement)"
    >
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
import { ref, onMounted } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
export type TimelineItem = {
  period: string;
  title: string;
  detail: string;
};

const props = defineProps<{ items: TimelineItem[] }>();

const timelineItems = ref<(HTMLElement | null)[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.value.forEach((el) => {
    // ★ HTMLElement のときだけ observer に渡す（安全）
    if (el instanceof HTMLElement) {
      observer.observe(el);
    }
  });
});
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  padding-left: 28px;
  margin-top: 30px;
  &::before {
    content: "";
    position: absolute;
    left: 28px;
    top: 0;
    width: 2px;
    height: 100%;
    background: rgba(0, 0, 0, 0.15); // 軸を軽くして上品に
    z-index: 0;
  }
}

.timeline__item {
  position: relative;
  margin: 28px 0;
  padding-left: 12px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.timeline__item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline__dot {
  position: absolute;
  left: -4px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #c7a049;
  z-index: 2;

  box-shadow: 0 0 0 0 rgba(199, 160, 73, 0.5);
  transition: box-shadow 0.5s ease-out;
}

.timeline__item.is-visible .timeline__dot {
  animation: shine 0.6s ease-out forwards;
}

@keyframes shine {
  0% {
    box-shadow: 0 0 0 0 rgba(199, 160, 73, 0.5);
  }
  60% {
    box-shadow: 0 0 12px 6px rgba(199, 160, 73, 0.32);
  }
  100% {
    box-shadow: 0 0 6px 2px rgba(199, 160, 73, 0.25);
  }
}

.timeline__period {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  padding: 2px 0;
  letter-spacing: 0.5px;
}
.timeline__title {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 19px;
  margin-top: 4px;
  font-weight: 700;
  line-height: 1.4;
}
.timeline__detail {
  font-family: "Noto Sans JP", sans-serif;
  margin-top: 6px;
  opacity: 0.85;
  line-height: 1.85;
  font-size: 15.5px;
}

@media (max-width: 640px) {
  .timeline {
    padding-left: 24px;

    &::before {
      left: 8px;
    }
  }

  .timeline__dot {
    left: -6px;
  }

  .timeline__title {
    font-size: 17px;
  }

  .timeline__detail {
    font-size: 15px;
  }
}
</style>
