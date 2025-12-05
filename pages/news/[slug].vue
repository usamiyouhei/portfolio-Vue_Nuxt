<template>
  <article v-if="itemSafe" class="inner">
    <Breadcrumb :crumbs="crumbs" />

    <header>
      <time class="date">{{ itemSafe.date }}</time>
      <h1 class="title">{{ itemSafe.title }}</h1>
      <img :src="itemSafe.image" :alt="itemSafe.title" />
    </header>
    <div class="content" v-if="itemSafe.body" v-html="itemSafe.body" />
    <Button buttonText="← News一覧へ" class="back" lang="ja" to="/news" />
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useNews } from "@/composables/useNews";
import type { News } from "@/types/news";
import { useBreadcrumb } from "@/composables/useBreadcrumb";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
import Button from "~/components/common/Button.vue";

/**===================================================================================================================
 *
 ===================================================================================================================**/
const route = useRoute();
const slug = route.params.slug as string;
// const { all } = useNews();

const { sorted } = useNews();

const found = sorted.find((n) => n.slug === slug);

// const item = computed(() => all.value.find(n => n.slug === route.params.slug))
// const itemSafe = computed<News>(() => {
//   const found = all.value.find((n) => n.slug === route.params.slug);
//   if (!found) {
//     throw createError({ statusCode: 404, statusMessage: "News not found" });
//   }
//   return found;
// });
if (!found) {
  throw createError({ statusCode: 404, statusMessage: "News not found" });
}

const itemSafe = found;

const { crumbs } = useBreadcrumb(
  "news",
  { label: "News 一覧", to: "/news" },
  { label: itemSafe.title }
);

useHead({
  title: computed(() => `${itemSafe.title} | News`),
  meta: [
    {
      name: "description",
      content: computed(() => itemSafe.excerpt || itemSafe.title),
    },
    { property: "og:type", content: "article" },
    { property: "og:title", content: computed(() => itemSafe.title) },
    { property: "og:image", content: computed(() => itemSafe.image) },
  ],
});

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.inner {
  max-width: 800px;
  padding: 0 20px;
  margin: 120px auto 100px;
  line-height: 1.8;
  header {
    text-align: center;
    margin-bottom: 40px;
  }
  .date {
    display: block;
    font-size: 0.9rem;
    color: #888;
    margin-bottom: 9px;
  }
  .title {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    max-width: 500px;
    max-height: 500px;
    background-size: contain;
    height: auto;
    margin-inline: auto;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
}

.content {
  background: rgba(255, 255, 255, 0.65); /* 透明白 */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-size: 1rem;
  border-radius: 16px;
  padding: 24px 48px;
  margin: 40px 0 40px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #333;
  margin-bottom: 10px;
  h2,
  h3 {
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1.5rem;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 20px auto;
    border-radius: 6px;
  }
}

.back {
  margin-top: 40px;
  text-align: center;
}
/* 〜320px（ごく小さいスマホ） */
@media (max-width: 320px) {
  .inner {
    margin: 80px auto 60px;
    padding: 0 12px;

    .title {
      font-size: 1.4rem;
      margin-bottom: 16px;
    }

    img {
      max-width: 260px;
      border-radius: 6px;
    }
  }

  .content {
    font-size: 0.9rem;
  }
}

/* 321〜480px（一般的なスマホ） */
@media (min-width: 321px) and (max-width: 480px) {
  .inner {
    margin: 90px auto 70px;
    padding: 0 16px;

    .title {
      font-size: 1.6rem;
    }

    img {
      max-width: 320px;
    }
  }

  .content {
    font-size: 0.95rem;
  }
}

/* 481〜786px（小さめタブレット） */
@media (min-width: 481px) and (max-width: 786px) {
  .inner {
    margin: 100px auto 80px;
    padding: 0 24px;
    max-width: 720px;

    .title {
      font-size: 1.8rem;
    }

    img {
      max-width: 420px;
    }
  }

  .content {
    font-size: 1rem;
  }
}

/* 787〜1024px（タブレット横〜小さいPC） */
@media (min-width: 787px) and (max-width: 1024px) {
  .inner {
    max-width: 860px;
    padding: 0 32px;

    .title {
      font-size: 2.1rem;
    }

    img {
      max-width: 480px;
    }
  }

  .content {
    font-size: 1.05rem;
  }
}

/* 1025px〜（PC） */
@media (min-width: 1025px) {
  .inner {
    max-width: 900px;

    .title {
      font-size: 2.3rem;
    }

    img {
      max-width: 520px;
    }
  }

  .content {
    font-size: 1.05rem;
  }
}
</style>
