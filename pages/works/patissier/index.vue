<template>
  <section class="patissier">
    <Breadcrumb :crumbs="crumbs" />
    <header class="head">
      <h1 class="title">Patissier Gallery</h1>

      <div class="video-section">
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

        <div class="video-caption fade-in fade-in-up">
          <h3 class="video-title">
            動画クリエイター・<span class="highlight">シライフウタ</span
            >様との<br class="md-show" />コラボレーション動画
          </h3>
          <time class="video-time" datetime="2022-2-18">2022.2.18</time>

          <p class="video-text">
            InstagramやTikTokで人気の動画クリエイター
            <span class="highlight">シライフウタ</span
            >様に撮影していただいた特別映像です。<br />
            菓子作りの繊細な手仕事や、素材の香り・質感までも感じられるような、
            流れるようなカメラワークで“デセール・アン・アシェット”の世界観を表現しています。<br />
            一皿に込めた想いと、瞬間の美しさを映像でお楽しみください。
          </p>
        </div>
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
      @change="onChange"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { patissierDetail } from "~/data/views/patissier";
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
  patissierDetail.filter((w) => w.patissierTag === tab.value)
);
const { crumbs } = useBreadcrumb("works", { label: "Patissier" });

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

function onChange(work: { id: string }) {
  router.replace({
    query: {
      ...route.query,
      id: work.id,
    },
  });
}

watch(list, () => {
  if (modalId.value && !active.value) {
    closeModal();
  }
});
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

.video-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 32px 0 48px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
    text-align: left;
  }
}

.video-wrap {
  flex: 1;
  max-width: 480px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  .video {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
}

.video-caption {
  flex: 1;
  max-width: 600px;
  // text-align: center;
  // background-color: #fff;
  // border-radius: 8px;
  // padding: 20px 0;
  // margin: 20px 0 40px;

  .video-title {
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 700;
    line-height: 1.6;
    margin-bottom: 8px;
  }

  .video-time {
    display: block;
    font-size: 14px;
    opacity: 0.6;
    margin-bottom: 16px;
  }

  .video-text {
    line-height: 1.9;
    font-size: 15px;
    color: #333;
  }
  .highlight {
    color: #f48fb1;
    font-weight: 600;
  }
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
