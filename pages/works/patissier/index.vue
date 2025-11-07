<template>
  <section class="patissier">
    <Breadcrumb :crumbs="crumbs" />
    <header class="head">
      <h1 class="title">Patissier Gallery</h1>

      <div class="video-wrap">
        <video
          src="@/public/videos/dessert_une_assiette.mp4"
          class="video"
          controls
          playsinline
          muted
          loop
          preload="metadata"
        ></video>
      </div>
      <nav class="tabs" role="tablist" aria-label="Patissier Tabs">
        <button
          v-for="t in tabs"
          :key="t.key"
          :class="['tab', { active: tab === t.key }]"
          role="tab.key"
          :aria-selected="tab === t.key"
          @click="setTab(t.key)"
        >
          {{ t.label }}
        </button>
      </nav>
      <p class="hint">クリックで詳細がモーダル表示。</p>
    </header>

    <WorkGalleryGrid :items="list" @open="openModal" />
    <WorkLightboxModal
      v-if="active"
      :work="active"
      :siblings="list"
      @close="closeModal"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { patissierWorks } from "~/data/view";
import { useBreadcrumb } from "@/composables/useBreadcrumb";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type PatissierTab = "dessert" | "sweets" | "cake";

const route = useRoute();
const router = useRouter();

const tab = computed<PatissierTab>(() =>
  ["dessert", "sweets", "cake"].includes(String(route.query.tab))
    ? (route.query.tab as PatissierTab)
    : "dessert"
);

const tabs: { key: PatissierTab; label: string }[] = [
  { key: "dessert", label: "デザート" },
  { key: "sweets", label: "お菓子" },
  { key: "cake", label: "ケーキ" },
];
const list = computed(() =>
  patissierWorks.filter((w) => w.category === tab.value)
);
const { crumbs } = useBreadcrumb("works", "Patissier");

// モーダル深リンク：?id=xxx
const modalId = computed(() => route.query.id as string | undefined);
const active = computed(() =>
  modalId.value
    ? list.value.find((w) => w.id === modalId.value || w.slug === modalId.value)
    : null
);

function setTab(t: PatissierTab) {
  router.replace({ query: { ...route.query, tab: t, id: undefined } });
}

function openModal(id: string) {
  router.replace({ query: { ...route.query, id } });
}

function closeModal() {
  const q = { ...route.query };
  delete (q as any).id;
  router.replace({ query: q });
}

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.patissier {
  margin-top: 60px;
  max-width: 1200px;
  margin-inline: auto;
  padding: 24px;
}

.title {
  font-weight: 800;
  font-size: clamp(22px, 2.6vw, 34px);
}

.tabs {
  display: flex;
  gap: 10px;
  margin: 12px 0 6px;
  flex-wrap: wrap;
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
.hint {
  opacity: 0.75;
  font-size: 13px;
}
</style>
