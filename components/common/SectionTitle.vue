<template>
  <div
    ref="root"
    class="section-title"
    :class="{ 'fade-in-left-visible': visible }"
  >
    <h2 class="section-title__main">{{ sectionTitle }}</h2>
    <span class="section-title__sub">{{ sectionSubTitle }}</span>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { defineProps } from "vue";
import { ref } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
defineProps<{
  sectionTitle: string;
  sectionSubTitle: string;
}>();

const root = ref<HTMLElement | null>(null);

const visible = ref(false);

useIntersectionObserver(root, ([{ isIntersecting }]) => {
  if (isIntersecting) visible.value = true;
});

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
/* section-title */
.section-title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
  position: relative;
  margin-left: 15%;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.8s ease-in, transform 0.8s ease-in;
}

.fade-in-left-visible {
  opacity: 1;
  transform: translateX(0);
}
.section-title__main {
  position: relative;
  font-size: 4rem;
  font-family: "Italianno";
  letter-spacing: 0.15rem;
  font-weight: 300;
}

.section-title__main::after {
  content: "";
  position: absolute;
  bottom: 4px;
  right: 0;
  border: solid 2px #bf901a;
  width: 50px;
  height: 4px;
  border-radius: 5px;
  /* width: 10px; */
}

.section-title__sub {
  top: 100px;
  right: 48px;
  font-size: 12px;
  font-family: "Yu Gothic", sans-serif;
  /* font-weight: ; */
}
</style>
