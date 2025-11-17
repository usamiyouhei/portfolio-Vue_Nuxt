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
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  overflow: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    display: block;
    margin-bottom: 10px;
  }
}

.story__cap {
  font-size: 13px;
  opacity: 0.75;
  text-align: center;
}

.story__body {
  padding-top: 4px;

  .story__p {
    font-size: 15.5px;
    line-height: 1.9;
    opacity: 0.92;
    margin-bottom: 14px;

    @media (min-width: 900px) {
      font-size: 16px;
      margin-bottom: 18px;
    }
  }
}
</style>
