<template>
  <section class="movie-editing">
    <Breadcrumb :crumbs="crumbs" />
    <header class="head">
      <h1 class="title">Visual Production Gallery</h1>

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

      <div class="kv__video-wrap fade-in fade-in-up">
        <h3 class="kv__video-title">
          動画クリエイター&emsp;シライフウタ様&emsp;<br
            class="md-show pc-show"
          />コラボ動画
        </h3>
        <time class="kv__video-time" datetime="2022-2-18">2022.2.18</time>

        <p class="kv__video-text">
          Instagram、Tik Tokで人気の<br class="md-show" />動画クリエイター<br
            class="md-none"
          />
          シライフウタさんに<br class="md-show" />撮影して頂きました&#33;<br
            class="sp-show"
          />
          流れるような動きでストーリー性のある<br
            class="md-show"
          />動画に仕上がりました。
        </p>
      </div>

      <nav class="tabs" role="tablist" aria-label="VisualProduction Tabs">
        <button
          v-for="t in modeTabs"
          :key="t.key"
          :class="['tab', { active: mode === t.key }]"
          role="tab.key"
          :aria-selected="mode === t.key"
          @click="setMode(t.key)"
        >
          {{ t.label }}
        </button>
      </nav>
      <nav v-if="mode === 'photo'" class="tabs mt-2" role="tablist">
        <button
          v-for="t in photoTabs"
          :key="t.key"
          :class="['tab', { active: photoTab === t.key }]"
          @click="setPhotoTab(t.key)"
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
import { visualDetail } from "~/data/views/visual";
import { useBreadcrumb } from "@/composables/useBreadcrumb";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type Mode = "photo" | "movie";
type PhotoTab = "flowers" | "houseplants" | "landscape" | "youtube";

const route = useRoute();
const router = useRouter();

const mode = computed<Mode>(() =>
  ["photo", "movie"].includes(String(route.query.mode))
    ? (route.query.mode as Mode)
    : "photo"
);

const photoTab = computed<PhotoTab>(() =>
  ["flowers", "houseplants", "landscape"].includes(String(route.query.tab))
    ? (route.query.tab as PhotoTab)
    : "flowers"
);

const modeTabs: { key: Mode; label: string }[] = [
  { key: "photo", label: "写真" },
  { key: "movie", label: "動画" },
] as const;

const photoTabs: { key: PhotoTab; label: string }[] = [
  { key: "flowers", label: "生花" },
  { key: "houseplants", label: "観葉植物" },
  { key: "landscape", label: "風景" },
  // { key: "youtube", label: "YouTube動画" },
];

const list = computed(() => {
  if (mode.value === "movie") {
    visualDetail.filter((w) => w.visualTag === "movie");
  }
  return visualDetail.filter((w) => w.photoTag === photoTab.value);
});
const { crumbs } = useBreadcrumb("works", { label: "Visual Production" });

// モーダル深リンク：?id=xxx
const modalId = computed(() => route.query.id as string | undefined);
const active = computed(() =>
  modalId.value
    ? list.value.find((w) => w.id === modalId.value || w.slug === modalId.value)
    : null
);

function setMode(m: Mode) {
  router.replace({ query: { mode: m, tab: undefined, id: undefined } });
}

function setPhotoTab(t: PhotoTab) {
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
.movie-editing {
  margin-top: 60px;
  max-width: 1200px;
  margin-inline: auto;
  padding: 24px;
}

.title {
  font-weight: 800;
  font-size: clamp(22px, 2.6vw, 34px);
}
.video-wrap {
  position: relative;
  margin: 16px 0 24px;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  .video {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
}

.kv__video-wrap {
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 0;
  margin: 20px 0 40px;
}
.kv__video-title {
  line-height: 1.88;
  text-align: center;
  width: 100%;
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
