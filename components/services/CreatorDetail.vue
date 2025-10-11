<template>
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
defineProps<{ service: Service }>()
/**===================================================================================================================
 * 
 ===================================================================================================================**/

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.creator-detail {
  margin-top: 80px;
}
.creator-img {
  width: 60%;
}
</style>