<template>
  <section class="newsMorePage">
    <Breadcrumb :crumbs="crumbs" />

    <h1 class="visually-hidden">News</h1>

    <!-- <NewsSection :items="paginatedItems" /> -->

    <ul class="grid">
      <li v-for="n in paginatedItems" :key="n.slug">
        <NuxtLink :to="`/news/${n.slug}`" class="card">
          <div class="thumb">
            <img :src="n.image" :alt="n.title" loading="lazy" />
          </div>
          <time class="date">{{ n.date }}</time>
          <h2 class="title">{{ n.title }}</h2>
        </NuxtLink>
      </li>
    </ul>
    <Pagination
      v-model="page"
      :total-pages="totalPages"
      :edge="1"
      :radius="1"
    />

    <Head>
      <Link v-if="page > 1" rel="prev" :href="`/news?page=${page - 1}`" />
      <Link
        v-if="page < totalPages"
        rel="next"
        :href="`/news?page=${page + 1}`"
      />
    </Head>

    <div class="btn-back">
      <Button
        buttonText="← メインページへ"
        lang="ja"
        to="/#news"
        direction="none"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { useNews } from "@/composables/useNews";
import Pagination from "@/components/ui/Pagination.vue";
import NewsSection from "@/components/Home/NewsSection.vue";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
import Button from "~/components/common/Button.vue";

const route = useRoute();
const router = useRouter();
const { sorted } = useNews();
// const allNews = all;
const perPage = 10;

const validItems = computed(() =>
  sorted.filter(
    (n) =>
      typeof n.slug === "string" &&
      n.slug.trim() &&
      typeof n.title === "string" &&
      n.title.trim() &&
      typeof n.date === "string" &&
      n.date.trim()
  )
);

const page = computed<number>({
  get() {
    const raw = route.query.page;
    const str = Array.isArray(raw) ? raw[0] : raw;
    const p = Number(str ?? 1);
    return Number.isFinite(p) && p >= 1 ? p : 1;
  },
  set(p: number) {
    router.push({ query: { ...route.query, page: String(p) } });
  },
});

// クエリから現在ページを取得（なければ1）
// const currentPage = computed(() => {
//   const p = Number(route.query.page || 1)
//   return isNaN(p) || p < 1 ? 1 : p
// })

// 総ページ数
const totalPages = computed<number>(() =>
  Math.ceil(validItems.value.length / perPage)
);

// 現在のページに応じた記事
const paginatedItems = computed(() => {
  const start = (page.value - 1) * perPage;
  return validItems.value.slice(start, start + perPage);
});

const goToPage = (p: number) => {
  if (p >= 1 && p <= totalPages.value) {
    router.push({ query: { page: String(p) } });
  }
};

const { crumbs } = useBreadcrumb("news", { label: "News 一覧" });

/**===================================================================================================================
 * 
 ===================================================================================================================**/

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.newsMorePage {
  margin-top: 80px;
  padding: 0 16px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding: 0 24px; // ← タブレット以上は余白増やす
  }
}
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 24px;
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.card {
  display: block;
  background: #fff;
  border-radius: 14px;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    background: #f9fafb;
  }
}
.thumb {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .card:hover & img {
    transform: scale(1.03);
  }
}
.date {
  font-size: 12px;
  color: #888;
  display: block;
  margin-bottom: 4px;
}
.title {
  font-family: "Noto Sans JP", "Yu Gothic Medium", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
  @media (min-width: 640px) {
    font-size: 16px;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
}
</style>
