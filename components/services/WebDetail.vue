<template>
  <main>
    <section class="fv">
        <div class="fv__bg" :style="bgStyle"/>
        <h1 id="page-title" class="page_title">{{ service.title }}</h1>
    </section>

    <section class="inner">
      <ul class="service-lists">
        <li v-for="( b, i ) in service.blocks" 
            :key="b.id"
            ref="blockRefs"
            class="service-block fade"
            :class="{'fade--in': visible[i]}"
            >
          <header class="block-head">
            <h2 class="block-title">{{ b.title }}</h2>
          </header>
          <p class="block-text" v-html="b.body" />
          <ServicesPriceCompareTable v-if="b.id === 'price-guide' && service.priceTable" :table="service.priceTable"/>
        </li>

        <li class="service-block">
          <p class="consult">プロの Zoom 相談（1h〜）：2,000円（税込）も承ります。</p>
        </li>
      </ul>
    </section>

    <div class="cta">
      <Button  buttonText="お問い合わせ" :onClick="() => (showContact = true)"/>
    </div>

   <ContactModal v-if="showContact"  @close="showContact = false"/>
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
import { useIntersectionObserver } from '@vueuse/core';
import Button from '../common/Button.vue';
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const props = defineProps<{ service: Service }>()
// 1️⃣ ref配列を用意（v-forで監視対象をまとめる）
const blockRefs = ref<HTMLElement[]>([])
// 2️⃣ 表示状態を保持する配列
const visible = ref<boolean[]>([])

onMounted(() => {
  blockRefs.value.forEach((el, i) => {
    if(!el) return
    const { stop } = useIntersectionObserver(el,([entry]) => {
        if(entry.isIntersecting) {
          visible.value[i] = true;
          stop()
        }
      },
      { threshold: 0.2 }
    )
  }) 
})

const showContact = ref(false)

const bgStyle = computed(() => ({
  backgroundImage: props.service.heroImage ? `url('${ props.service.heroImage}')`: 'none'
}))
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.fv {
  position: relative;
  margin-top: 80px;
  height: clamp(160px, 32vw, 320px);
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fv__bg {
  position: absolute;
  inset:0; 
  background:center/cover no-repeat; 
  filter:brightness(.6);
}
.page_title {
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  font-family: "Italianno";
  color: #333;
  padding: 6px 12px;
  font-size: clamp(48px, 5vw, 82px);
  // font-weight: 600;
  letter-spacing: 0.04em;
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
  display: grid;
  gap: 24px;
}
.block-head {
  padding: 8px 16px;
}
.service-block {
  background: #fff;
  border-radius: 12px;
  padding: 8px 0 0;
}

.block-title {
  font-size: clamp(20px, 2.6vw, 28px);
}
.block-text {
  padding: 8px 16px 16px;
  line-height: 1.9;
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
  font-weight:800;
  letter-spacing:.03em;
  transition: transform .2s ease, opacity .2s ease;
}

.cta-btn:hover{ 
  transform: translateY(-1px);
  opacity:.95; 
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