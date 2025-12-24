<template>
  <article class="work-detail">
    <Breadcrumb :crumbs="crumbs" />

    <div class="work-detail__inner">
      <header class="work-detail__head">
        <h1 class="work-detail__title">{{ work.title }}</h1>
      </header>

      <figure v-if="work.img || work.cover" class="work-detail__hero">
        <img :src="work.img || work.cover" :alt="work.title" loading="lazy" />
      </figure>
      <div class="work-detail__content">
        <section class="work-detail__sectioin">
          <h2 class="work-detail__section-title">Overview</h2>
          <p class="work-detail__text">{{ work.description }}</p>
        </section>

        <section v-if="work.problem" class="work-detail__section">
          <h2 class="work-detail__section-title">Problem / Goal</h2>

          <p class="work-detail__text">{{ work.problem }}</p>
        </section>

        <section v-if="work.links" class="work-detail__links">
          <Button
            v-if="work.links.demo"
            buttonText="Demoを見る"
            :href="work.links.demo"
            direction="none"
          />
          <Button
            v-if="work.links.repo"
            buttonText="GitHub"
            :href="work.links.repo"
            direction="none"
          />
        </section>
      </div>
    </div>
  </article>

  <footer class="work-detail__footer">
    <div class="btn-back">
      <Button buttonText="← Works一覧へ" lang="ja" :to="backToListPath" />
    </div>
    <div class="cta">
      <Button
        buttonText="お問い合わせ"
        lang="ja"
        :onClick="() => (showContact = true)"
      />
    </div>

    <ContactModal v-if="showContact" @close="showContact = false" />
  </footer>
</template>

<script setup lang="ts">
import { programmingDetail } from "~/data/views/programming";
import { designDetail } from "~/data/views/design";
import { useRoute } from "vue-router";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
import { useBreadcrumb } from "#imports";
import Button from "~/components/common/Button.vue";
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

const showContact = ref(false);

const { crumbs } = useBreadcrumb("works", { label: work.title });

const backToListPath = `/works/${work.category}`;
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.work-detail {
  max-width: 1080px;
  margin: 72px auto 64px;
  padding: 0 16px; // 画面端にくっつかないように

  @media (min-width: 640px) {
    margin-top: 80px;
    padding: 0 24px;
  }

  @media (min-width: 1024px) {
    margin-top: 96px;
    padding: 0 32px;
  }
}
.work-detail__inner {
  border-radius: 20px;
  padding: 20px 16px 28px;
  // background: rgba(15, 23, 42, 0.65); // ダーク系ならこのまま
  background: rgba(255, 255, 255, 0.9); // ライトにするならこっち
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.18); // 影かなり控えめ
  backdrop-filter: blur(14px);

  @media (min-width: 640px) {
    padding: 24px 24px 32px;
  }

  @media (min-width: 1024px) {
    padding: 32px 36px 40px;
    border-radius: 24px;
  }
}
.work-detail__head {
  margin-bottom: 16px;

  @media (min-width: 640px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 24px;
  }
}

.work-detail__title {
  font-family: "Noto Sans JP", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.04em;

  @media (min-width: 640px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
}

.work-detail__hero {
  margin: 0 0 20px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.4);

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 640px) {
    margin-bottom: 24px;
  }
}

.work-detail__content {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 640px) {
    gap: 24px;
  }

  @media (min-width: 1024px) {
    gap: 28px;
  }
}

.work-detail__section {
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.3);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.work-detail__section-title {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 6px;
  opacity: 0.9;
}

.work-detail__text {
  font-family: "Noto Sans JP", "Yu Gothic Medium", system-ui, sans-serif;
  font-size: 14px;
  line-height: 1.8;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 2;
  }
}

.work-detail__links {
  display: flex;
  margin-top: 12px;
  gap: 12px;
  flex-wrap: wrap;
}
.work-detail__footer {
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
</style>
