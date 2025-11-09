<template>
  <main>
    <section class="fv">
      <div class="fv__bg" :style="bgStyle" />

      <div class="fv__content">
        <h1 id="page-title" class="page_title">{{ service.title }}</h1>
        <p class="page-subtitle fade-in-up-delay">{{ service.subTitle }}</p>
      </div>
    </section>

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
          <p class="consult">
            プロの Zoom 相談（1h〜）：2,000円（税込）も承ります。
          </p>
        </li>
      </ul>
    </section>

    <div class="cta">
      <Button buttonText="お問い合わせ" :onClick="() => (showContact = true)" />
    </div>

    <ContactModal v-if="showContact" @close="showContact = false" />
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
  background: rgba(255, 255, 255, 0.75);
  text-align: center;
  backdrop-filter: blur(6px);
  border-radius: 16px;
  padding: 24px 20px;
  overflow: visible;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

.block-title {
  font-size: clamp(20px, 2.6vw, 28px);

  & ::after {
    content: "";
    width: 100%;
    height: 3px;
    border-radius: 999px;
    border: solid 2px #bf901a;
  }
}

.block-text {
  padding: 8px 16px 16px;
  line-height: 1.9;
}

.table-scroll {
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; // スマホでスムーズにスクロール
  width: 100%;

  ::v-deep(table) {
    min-width: 600px;
    border-collapse: collapse;
  }
  ::v-deep(.price-scroll) {
    overflow-x: auto;
  }
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
}
.consult {
  padding: 0 16px 16px;
}
.cta {
  display: grid;
  place-items: center;
  padding: 24px 0 56px;
}
.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 40px;
  padding: 0 20px;
  background: #111;
  color: #fff;
  border-radius: 999px;
  font-weight: 800;
  letter-spacing: 0.03em;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.cta-btn:hover {
  transform: translateY(-1px);
  opacity: 0.95;
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
// .fade {
//   opacity: 0;
//   transform: translateY(20px);
//   transition: opacity 0.8 ease, transform 0.8s ease;
// }

// .fade--in {
//   opacity: 1;
//   transform: translateY(0);
// }
</style>
