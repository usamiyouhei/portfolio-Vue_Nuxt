<template>
  <section class="fv">
    <div class="fv__bg" :style="bgStyle"/>
    <h1 id="page-title" class="page-title">{{ service.title }}</h1>
  </section>

  <section class="inner">
    <ul class="service-lists">
      <CommonAutoGallery/>
      <CommonAutoGallery2/>
      <li v-for="(b, i) in service.blocks"
        :key="i"
        class="service-block"
      >
        <header class="block-head">
          <h2 class="block-title">{{ b.title }}</h2>
        </header>
        <p class="block-text" v-html="b.body"/>
        <ServicesPriceCompareTable v-if="b.id === 'price-guide' && service.priceTable " :table="service.priceTable"/>
      </li>
    </ul>
  </section>
  <main class="creator-detail">
    <h1>{{ service.title }}</h1>
    <img class="creator-img" :src="service.img" :alt="service.title">
    <div v-html="service.description" class="lead"/>
    <section v-if="service.features?.length"></section>
    <section v-if="service.process?.length"></section>
    <NuxtLink to="/#contact" class="cta">お問い合わせ</NuxtLink>
  </main>
</template>

<script setup lang="ts">
import type { Service } from '~/data/services'
import { ref, computed } from "vue";
const props = defineProps<{ service: Service }>()
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const bgStyle = computed(() => ({
  backgroundImage: props.service.heroImage ? `url{${props.service.heroImage}}` : 'none'
}))

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.fv {
  margin-top: 80px;
}
.creator-img {
  width: 60%;
}
</style>