<template>
  <div class="grid">
    <NuxtLink
      v-for="w in items"
      :key="w.id"
      class="card"
      @click="emit('open', w.id)"
    >
      <div class="thumb">
        <img :src="w.cover || '/img/noImg.png'" :alt="w.title" loading="lazy" />
      </div>
      <h3 class="title" :class="isJapanese(w.title) ? 'jp-font' : 'en-font'">
        {{ w.title }}
      </h3>
      <span class="badge">{{ categoryLabel(w.category) }}</span>
    </NuxtLink>
  </div>

  <Button
    buttonText="お問い合わせ"
    lang="ja"
    :onClick="() => (showContact = true)"
  />
  <ContactModal v-if="showContact" @close="showContact = false" />
</template>

<script setup lang="ts">
import type { Cat } from "~/types/works";
import Button from "../common/Button.vue";
import { useCategoryLabel } from "@/composables/useCategoryLabels";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type Item = {
  id: string;
  slug?: string;
  title: string;
  cover?: string;
  category?: Cat;
};

const { getCategoryLabel } = useCategoryLabel();

const categoryLabel = (cat?: Item["category"]) => getCategoryLabel(cat);

const props = defineProps<{ items: Item[] }>();
const emit = defineEmits<{ open: [id: string] }>();

const showContact = ref(false);
const isJapanese = (str: string): boolean => {
  return /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(str);
};
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
.card {
  display: block;
  text-align: left;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    // transform: translateY(-6px) scale(1.02);
    // box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
    // filter: brightness(1.05);
    transform: scale(1.03);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }
}
.thumb {
  aspect-ratio: 4/3;
  background: #f4f4f4;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  object-position: center;
}
.title {
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.jp-font {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
}

.en-font {
  font-family: "Playfair Display", serif;
  letter-spacing: 0.5px;
}
</style>
