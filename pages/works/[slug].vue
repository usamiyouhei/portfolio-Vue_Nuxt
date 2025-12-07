<template>
  <article class="work-detail">
    <Breadcrumb :crumbs="crumbs" />

    <header class="work-detail__head">
      <h1 class="work-detail__title">{{ work.title }}</h1>
    </header>

    <figure v-if="work.img || work.cover" class="work-detail__hero">
      <img :src="work.img || work.cover" :alt="work.title" loading="lazy" />
    </figure>
    <div class="work-detail__content">
      <section class="work-detail__sectioin">
        <SectionTitle sectionTitle="OverView" sectionSubTitle="お知らせ" />
        <p class="work-detail__text">{{ work.description }}</p>
      </section>
      <p>{{ work.problem }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { programmingDetail } from "~/data/views/programming";
import { designDetail } from "~/data/views/design";
import { useRoute } from "vue-router";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
import { useBreadcrumb } from "#imports";
import SectionTitle from "~/components/common/SectionTitle.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/

const route = useRoute();
const slug = route.params.slug as string;

const ALL_WORKS = [...programmingDetail, ...designDetail];
const work = ALL_WORKS.find((w) => w.slug === slug || String(w.id) === slug);
if (!work) {
  throw createError({ statusCode: 404, statusMessage: "Work not found" });
}

const { crumbs } = useBreadcrumb("works", { label: work.title });

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
