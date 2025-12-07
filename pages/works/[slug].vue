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
        <SectionTitle sectionTitle="OverView" sectionSubTitle="" />
        <p class="work-detail__text">{{ work.description }}</p>
      </section>

      <section v-if="work.problem" class="work-detail__section">
        <h2 class="work-detail__section-title">Problem / Goal</h2>

        <p class="work-detail__text">{{ work.problem }}</p>
      </section>
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
.work-detail {
  max-width: 960px;
  margin: 96px auto 80px;
  padding: 24px 20px 32px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.3);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 60px rgba(15, 23, 42, 0.55);

  @media (min-width: 768px) {
    padding: 32px 36px 40px;
  }

  @media (min-width: 1024px) {
    margin-top: 112px;
    padding: 40px 48px 48px;
  }
}

.work-detail__head {
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
}

.work-detail__title {
  font-family: "Noto Sans JP", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.03em;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
}

.work-detail__hero {
  margin: 0 0 24px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: radial-gradient(
    circle at top,
    rgba(148, 163, 184, 0.3),
    transparent
  );

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
}

.work-detail__content {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 28px;
  }
}

.work-detail__section {
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.35);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.work-detail__section-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
  opacity: 0.9;
}

.work-detail__text {
  font-family: "Noto Sans JP", "Yu Gothic Medium", system-ui, sans-serif;
  font-size: 14px;
  line-height: 1.8;

  @media (min-width: 768px) {
    font-size: 15px;
  }
}
</style>
