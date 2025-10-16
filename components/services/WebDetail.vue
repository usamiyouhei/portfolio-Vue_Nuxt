<template>
  <main>
    <section class="fv">
        <div class="fv__bg" :style="bgStyle"/>
        <h1 id="page-title" class="page_title">{{ service.title }}</h1>
    </section>

    <section class="inner">
      <ul class="service-lists">
        <li v-for="b in service.blocks" :key="b.id" class="service-block">
          <header class="block-head">
            <h2 class="block-title">{{ b.title }}</h2>
          </header>
          <p class="block-text" v-html="b.body" />
          <ServicesPriceCompareTable v-if="b.id === 'price-guide' && service.priceTable" :table="service.priceTable"/>
        </li>
      </ul>
    </section>




    <h1>{{ service.title }}</h1>
    <img :src="service.img" :alt="service.title">
    <div v-html="service.description" class="lead"/>
    <section v-if="service.features?.length"></section>
    <section v-if="service.process?.length"></section>
    <NuxtLink to="/#contact" class="cta">お問い合わせ</NuxtLink>
  </main>
</template>

<script setup lang="ts">
import type { Service } from "~/data/services";
import { computed } from "vue";

/**===================================================================================================================
 * 
 ===================================================================================================================**/
const props = defineProps<{ service: Service }>()



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
}
.fv__bg {
  position: absolute;
  inset:0; background:center/cover no-repeat; 
  filter:brightness(.6);
}
.page_title {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: clamp(28px, 4.5vw, 56px);
  font-weight: 800;
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
.service-block {
  background: #fff;
  border-radius: 12px;
  padding: 8px 0 0;
}
</style>