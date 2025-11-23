<template>
  <section class="programming">
    <header class="head">
      <h1 class="title">Web Site</h1>
      <nav class="tabs">
        <button
          v-for="t in tabs"
          :key="t.key"
          :class="['tab', { active: tab === t.key }]"
          @click="setTab(t.key)"
        >
          {{ t.label }}
        </button>
      </nav>
      <p class="hint">
        クリックで詳細ページ（課題→解決・機能・スタック・学び）へ。
      </p>
    </header>

    <div class="grid">
      <WorkCard v-for="w in list" :key="w.id" :work="w" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import WorkCard from "@/components/Home/WorkCard.vue";
import { programmingDetail } from "~/data/views/programming";

/**===================================================================================================================
 * 
 ===================================================================================================================**/
type DevTab = "site" | "app";

const route = useRoute();
const router = useRouter();

const TABS = [
  { key: "site", label: "Webサイト" },
  { key: "app", label: "Web App" },
] as const satisfies ReadonlyArray<{ key: DevTab; label: string }>;

const tab = computed<DevTab>(() =>
  //   ['site', 'app'].includes(String(route.query.tab))
  // ? route.query.tab as DevTab
  // : 'site'
  route.query.tab === "app" ? "app" : "site"
);
const tabs = TABS;

const list = computed(() =>
  programmingDetail.filter((w) => w.devType === tab.value)
);
function setTab(t: DevTab) {
  router.replace({ query: { ...route.query, tab: t } });
}
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.programming {
  max-width: 1200px;
  margin-inline: auto;
  padding: 24px;
  margin-top: 80px;
}
.title {
  font-weight: 800;
  font-size: clamp(22px, 2.6vw, 36px);
}
.tabs {
  display: flex;
  gap: 10px;
  margin: 12px 0 6px;
}
.tab {
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #ddd;
  background: #fff;
}
.tab.active {
  border-color: #f7b;
  box-shadow: 0 0 0 2px rgba(255, 128, 170, 0.15) inset;
}
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 680px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.hint {
  opacity: 0.75;
  font-size: 13px;
}
</style>
