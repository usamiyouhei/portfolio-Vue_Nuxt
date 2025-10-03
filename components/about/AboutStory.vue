<template>
  <article class="story">
    <figure class="story__media">
      <img :src="story.photo" :alt="story.caption" loading="lazy">
      <figcaption class="story__cap">{{ story.caption }}</figcaption>
    </figure>
    <div class="story__body">
      <p v-for="(p, i) in story.paragraphs" class="story__p">{{ p }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
export type Story = {
  photo: string;
  caption?: string;
  paragraphs: string[];
}

const props = defineProps<{ story: Story}>()
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
</style>