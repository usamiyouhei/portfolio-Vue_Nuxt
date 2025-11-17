<template>
  <article class="container">
    <Breadcrumb :crumbs="crumbs" />

    <!-- <header class="head">
      <nav class="bc">
        <NuxtLink to="/">Home</NuxtLink> /
        <NuxtLink to="/#works">Works</NuxtLink> /
        <span>{{ work.title }}</span>
      </nav>
    </header> -->

    <h1>{{ work.title }}</h1>
    <img
      v-if="work.img || work.cover"
      :src="work.img || work.cover"
      :alt="work.title"
    />
    <p>{{ work.description }}</p>
    <p>{{ work.problem }}</p>
  </article>
</template>

<script setup lang="ts">
import { programmingWorks, designWorks } from "~/data/view";
import { useRoute } from "vue-router";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
import { useBreadcrumb } from "#imports";
/**===================================================================================================================
 * 
 ===================================================================================================================**/

const route = useRoute();
const slug = route.params.slug as string;

const ALL_WORKS = [...programmingWorks, ...designWorks];
const work = ALL_WORKS.find((w) => w.slug === slug || String(w.id) === slug);
if (!work) {
  throw createError({ statusCode: 404, statusMessage: "Work not found" });
}

const { crumbs } = useBreadcrumb("works", work.title);

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
