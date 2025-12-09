<template>
  <div class="overlay" @click="onOverClick">
    <article class="modal">
      <header class="head">
        <h2 class="title">{{ work.title }}</h2>
        <button class="x" @click="emit('close')">×</button>
      </header>

      <div class="body">
        <div class="media">
          <img
            v-for="(src, i) in imgs"
            :src="src"
            :key="i"
            :alt="`${work.title} ${i + 1}`"
            loading="lazy"
          />
        </div>

        <section v-if="work.description" class="story">
          {{ work.description }}
        </section>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { onKeyDown } from "@vueuse/core";
import { onMounted, onBeforeUnmount, computed, ref } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type Work = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  images?: string[];
  cover?: string;
  recipe?: { ingredients: string[]; steps: string[] };
  platingNotes?: string[];
  tools?: string[];
};

const props = defineProps<{ work: Work; siblings: Work[] }>();
const emit = defineEmits<{ close: [] }>();

const imgs = computed(() =>
  props.work.images?.length
    ? props.work.images
    : ([props.work.cover].filter(Boolean) as string[])
);

const originalBodyOverflow = ref<string | null>(null);
const originalHtmlOverflow = ref<string | null>(null);

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") emit("close");
  if (e.key === "ArrowLeft") nav(-1);
  if (e.key === "ArrowRight") nav(1);
}

onMounted(() => {
  if (typeof window === "undefined") return;

  const body = document.body;
  const html = document.documentElement;

  originalBodyOverflow.value = body.style.overflow;
  originalHtmlOverflow.value = html.style.overflow;

  body.style.overflow = "hidden";
  html.style.overflow = "hidden";

  window.addEventListener("keydown", onKey);
});
onBeforeUnmount(() => {
  if (typeof window === "undefined") return;

  const body = document.body;
  const html = document.documentElement;

  body.style.overflow = originalBodyOverflow.value || "";
  html.style.overflow = originalHtmlOverflow.value || "";

  window.removeEventListener("keydown", onKey);
});

function nav(delta: number) {
  const list = props.siblings;
  const idx = list.findIndex((w) => w.id === props.work.id);
  if (idx < 0) return;
  const next = list[(idx + delta + list.length) % list.length];
  const url = new URL(location.href);
  url.searchParams.set("id", next.id);
  history.replaceState({}, "", url);
}

function onOverClick(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    emit("close");
  }
}

import { useScrollLock } from "@vueuse/core";

const isLocked = process.client ? useScrollLock(document.body) : null;

onMounted(() => {
  if (isLocked) isLocked.value = true;
});

onBeforeUnmount(() => {
  if (isLocked) isLocked.value = false;
});

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 60;
}
.modal {
  max-width: min(92vw, 780px);
  width: 90%;
  height: 78vh;
  overflow: hidden;
  background: #fff;
  border-radius: 14px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  animation: fadeIn 220ms ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}
.title {
  font-weight: 800;
  line-height: 1.2;
  font-size: clamp(36px, 2vw, 48px);
  letter-spacing: 0.2;
}
.x {
  font-size: 22px;
  line-height: 1;
  padding: 10px;
  border-radius: 14px;
}
.body {
  overflow: auto;
  padding: 16px;
}
.media {
  display: grid;
  gap: 10px;
  place-items: center;
}
.media img {
  width: min(80%, 680px);
  height: auto;
  display: block;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(1fr, 1fr);
  }
}
.story {
  margin-top: 12px;
  font-size: 14.5;
  line-height: 1.7;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 3行で省略 */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.section h3 {
  font-weight: 700;
  margin-bottom: 6px;
}
.chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.chips li {
  border: 1px solid #ddd;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 13px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid #eee;
}

.button {
  border-radius: 999px;
  padding: 10px 14px;
  border: 1px solid #111;
  background: #111;
  color: #fff;
  font-size: 14px;
}
</style>
