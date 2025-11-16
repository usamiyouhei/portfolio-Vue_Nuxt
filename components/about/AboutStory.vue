<template>
  <article class="story">
    <figure class="story__media">
      <img
        :src="story.photo"
        :alt="story.caption"
        class="story__photo"
        loading="lazy"
      />
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
};

const props = defineProps<{ story: Story }>();
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.story {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 16px 0;
  align-items: start;
  @media (min-width: 768px) {
    grid-template-columns: 46% 1fr;
    gap: 36px;
  }
}
.story__media {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
}

.story__media img {
  width: 60%;
  height: auto;
  display: block;
}

.story__cap {
  font-size: 12px;
  opacity: 0.7;
  padding: 8px 10px;
}

.story__body .story__p {
  line-height: 1.9;
  opacity: 0.9;
  margin-bottom: 10px;
}
</style>
