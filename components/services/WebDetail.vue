<template>
  <main>
    <section class="fv">
      <div class="fv__bg" :style="bgStyle" />
      <div class="fv__content">
        <h1 id="page-title" class="page-title">{{ service.title }}</h1>
        <p class="page-subtitle fade-in-up-delay">{{ service.subTitle }}</p>
      </div>
    </section>
    <Breadcrumb :crumbs="crumbs" />

    <section class="inner">
      <ul class="service-lists">
        <li
          v-for="(b, i) in service.blocks"
          :key="b.id"
          ref="blockRefs"
          class="service-block fade"
          :class="{ 'fade--in': visible[i] }"
        >
          <header class="block-head">
            <h2 class="block-title">{{ b.title }}</h2>
          </header>
          <p class="block-text" v-html="b.body" />
          <!-- <div class="table-scroll"> -->
          <ServicesPriceCompareTable
            v-if="b.id === 'price-guide' && service.priceTable"
            :table="service.priceTable"
          />
          <!-- </div> -->
        </li>

        <li class="service-block">
          <p class="consult" v-html="service.consultText" />
        </li>
      </ul>
    </section>

    <div class="web-detail__footer">
      <div class="btn-back">
        <Button buttonText="← メインページへ" lang="ja" to="/#service" />
      </div>

      <div class="cta">
        <Button
          buttonText="お問い合わせ"
          lang="ja"
          :onClick="() => (showContact = true)"
        />
      </div>
      <ContactModal v-if="showContact" @close="showContact = false" />
    </div>

    <!-- <h1>{{ service.title }}</h1>
    <img :src="service.img" :alt="service.title">
    <div v-html="service.description" class="lead"/>
    <section v-if="service.features?.length"></section>
    <section v-if="service.process?.length"></section> -->
  </main>
</template>

<script setup lang="ts">
import type { Service } from "~/data/services";
import { ref, computed, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import Button from "../common/Button.vue";
import { useBreadcrumb } from "@/composables/useBreadcrumb";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const props = defineProps<{ service: Service }>();
// 1️⃣ ref配列を用意（v-forで監視対象をまとめる）
const blockRefs = ref<HTMLElement[]>([]);
// 2️⃣ 表示状態を保持する配列
const visible = ref<boolean[]>([]);

onMounted(() => {
  blockRefs.value.forEach((el, i) => {
    if (!el) return;
    const { stop } = useIntersectionObserver(
      el,
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value[i] = true;
          stop();
        }
      },
      { threshold: 0.2 }
    );
  });
});

const showContact = ref(false);

const bgStyle = computed(() => ({
  backgroundImage: props.service.heroImage
    ? `url('${props.service.heroImage}')`
    : "none",
}));

const { crumbs } = useBreadcrumb("service", {
  label: props.service.title ?? "",
});
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
  font-family: "Playfair Display", serif !important;
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
  border-left: 4px solid #cba96d;
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
  font-family: "Noto Sans JP", sans-serif;
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
    width: 100%;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(90deg, #d4af37, #bf901a, #e5c87b);
  }
}

.block-text {
  text-align: justify;
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

:deep(.table-scroll .price-scroll) {
  overflow-x: auto;
}
.consult {
  padding: 10px;
}
// .cta {
//   display: grid;
//   place-items: center;
//   padding: 24px 0 56px;
// }

.web-detail__footer {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }
}
// .cta-btn {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   min-width: 280px;
//   height: 40px;
//   padding: 0 20px;
//   background: #111;
//   color: #fff;
//   border-radius: 999px;
//   font-weight: 800;
//   letter-spacing: 0.03em;
//   transition: transform 0.2s ease, opacity 0.2s ease;
// }

// .cta-btn:hover {
//   transform: translateY(-1px);
//   opacity: 0.95;
// }

@media (max-width: 768px) {
  .fv {
    height: 240px;
  }
  .page_title {
    font-size: 42px;
    padding: 4px 10px;
  }
  .block-text {
    padding: 8px 12px 12px;
    line-height: 1.7;
  }
  .fv__bg {
    background-position: center top;
  }
  .cta-btn {
    min-width: 220px;
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
  .cta-btn {
    min-width: 200px;
    font-size: 10px;
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
  .cta-btn {
    min-width: 160px;
    height: 36px;
    font-size: 13px;
  }
  .inner {
    padding: 24px 10px;
  }
}
</style>
