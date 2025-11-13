<template>
  <section class="fv">
    <div class="fv__bg" :style="bgStyle" />
    <Breadcrumb :crumbs="crumbs" />

    <div class="fv__content">
      <h1 id="page-title" class="page-title">{{ service.title }}</h1>
      <p class="page-subtitle fade-in-up-delay">{{ service.subTitle }}</p>
    </div>
  </section>

  <section class="inner">
    <ul class="service-lists">
      <!-- <CommonAutoGallery/> -->
      <CommonAutoGallery2
        :images="imageList"
        :speed="20"
        :reverse="true"
        :height="200"
      />
      <li v-for="(b, i) in service.blocks" :key="i" class="service-block">
        <header class="block-head">
          <h2 class="block-title">{{ b.title }}</h2>
        </header>
        <p class="block-text" v-html="b.body" />
        <ServicesPriceCompareTable
          v-if="b.id === 'price-guide' && service.priceTable"
          :table="service.priceTable"
        />
      </li>
    </ul>
  </section>
  <NuxtLink to="/#contact" class="cta">お問い合わせ</NuxtLink>
  <!-- <main class="creator-detail">
    <h1>{{ service.title }}</h1>
    <img class="creator-img" :src="service.img" :alt="service.title" />
    <div v-html="service.description" class="lead" />
    <section v-if="service.features?.length"></section>
    <section v-if="service.process?.length"></section>
  </main> -->
</template>

<script setup lang="ts">
import type { Service } from "~/data/services";
import { ref, computed } from "vue";
import { useBreadcrumb } from "@/composables/useBreadcrumb";
import Breadcrumb from "~/components/common/Breadcrumb.vue";

const props = defineProps<{ service: Service }>();
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const bgStyle = computed(() => ({
  backgroundImage: props.service.heroImage
    ? `url(${props.service.heroImage})`
    : "none",
}));

const imageList = [
  "/img/sweets/buffe.jpg",
  "/img/sweets/chocolate_terine.jpg",
  "/img/sweets/chocolate6.jpg",
  "/img/sweets/many-cake.jpg",
  "/img/sweets/mileCrape.jpg",
  "/img/sweets/sweets.jpg",
  "/img/sweets/tart.jpg",
  "/img/sweets/fig_dessert.jpg",
  "/img/sweets/muscut_dessert.jpg",
];

const { crumbs } = useBreadcrumb("service", props.service.slug);
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.fv {
  position: relative;
  margin-top: 72px;
  height: clamp(220px, 40vw, 420px);
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .fv__bg {
    position: absolute;
    inset: 0;
    background: center/cover no-repeat;
    filter: brightness(0.6);
    transform: scale(1.05);
  }

  .fv__content {
    position: relative;
    text-align: center;
    color: #fff;
    z-index: 2;
  }
}

.page-title {
  font-family: "Playfair Display", "Italianno", cursive;
  font-size: clamp(52px, 6vw, 92px);
  letter-spacing: 0.04em;
  font-weight: 400;
  margin: 0;
  line-height: 1.1;
  color: #fff;
}

.page-subtitle {
  font-size: clamp(14px, 1.6vw, 18px);
  letter-spacing: 0.05em;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Noto Sans JP", sans-serif;
}

.inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 16px 24px;
}

.service-lists {
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  gap: 24px;
  overflow: visible;
}

.block-head {
  margin-bottom: 12px;
}

.service-block {
  border-left: 4px solid #cba96d; /* ← WebDetail と同じ */
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 28px;
  background: rgba(255, 255, 255, 0.75);
  text-align: center;
  backdrop-filter: blur(6px);
  overflow: visible;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

.block-title {
  position: relative;
  font-size: clamp(20px, 2.6vw, 28px);
  font-weight: 600;
  display: inline-block;
  text-align: center;
  color: #222;
  padding: 8px;
  margin: 16px;

  &::after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
    width: 100%; /* ← WebDetail と同じ（レスポンシブ対応） */
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(90deg, #d4af37, #bf901a, #e5c87b);
  }
}

.block-text {
  text-align: justify; /* ← WebDetail と同じ */
  line-height: 1.9;
  color: #333;
}

.table-scroll {
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
}

:deep(.table-scroll table) {
  min-width: 600px;
  border-collapse: collapse;
}

.consult {
  padding: 10px; /* ← WebDetail と合わせる */
}

.cta {
  display: grid;
  place-items: center;
  padding: 24px 0 56px;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(16px);
  animation: fadeUp 1s ease forwards;
}

.fade-in-up-delay {
  opacity: 0;
  transform: translateY(16px);
  animation: fadeUp 1.3s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .fv {
    height: 240px;
  }
  .page_title {
    font-size: 42px;
    padding: 4px 10px;
  }
  .block-text {
    line-height: 1.7;
  }
  .fv__bg {
    background-position: center top;
  }
}

@media (max-width: 480px) {
  .fv {
    height: 200px;
  }

  .page_title {
    font-size: 34px;
  }
  .block-title {
    font-size: 20px;
  }
  .cta {
    padding: 16px 0 40px;
  }
}

@media (max-width: 360px) {
  .page_title {
    font-size: 28px;
    padding: 3px 8px;
  }
  .block-text {
    font-size: 14px;
    line-height: 1.7;
  }
  .inner {
    padding: 24px 10px;
  }
}
</style>
