<template>
  <div class="overlay">
    <article class="modal">
      <header class="head">
        <h2 class="title">{{  }}</h2>
        <button class="x">x</button>
      </header>

      <div class="body">
        <div class="media">
          <img v-for="(src, i) in imgs" :src="src" :key="i" :alt="`${work.title} ${i + 1}`">
        </div>
      </div>
    </article>


  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, computed } from 'vue';
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
  recipe?: {ingradients: string[], steps: string[]};
  platingNotes?: string[];
  tools?: string[]
}

const props = defineProps<{ work: Work, siblings: Work[]}>()
const emit = defineEmits<{ close:[]}>()
const imgs = computed(
  () => props.work.images?.length 
  ? props.work.images 
  : [props.work.cover].filter(Boolean) as string[]
)
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
</style>