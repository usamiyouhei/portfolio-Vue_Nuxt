<template>
  <article class="container">
    <header class="head">
      <nav class="bc">
        <NuxtLink to="/">Home</NuxtLink> /
        <NuxtLink to="/#works">Works</NuxtLink> /
        <span>{{ work.title }}</span>
      </nav>
    </header>

    <h1>{{ work.title }}</h1>
    <img v-if="work.img || work.cover" 
      :src="work.img || work.cover" 
      :alt="work.title"
    />
    <p>{{ work.description }}</p>
  </article>
</template>

<script setup lang="ts">
import { programmingWorks } from '~/data/view';
import { useRoute } from 'vue-router';

/**===================================================================================================================
 * 
 ===================================================================================================================**/

const route = useRoute()
const slug = route.params.slug as string

const work = programmingWorks.find( w => w.slug === slug || String(w.id) === slug)
if(!work) {
  throw createError({ statusCode: 404 , statusMessage: 'Work not found'})
}
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  padding: 24px;
  margin: 80px auto 0;
}
</style>