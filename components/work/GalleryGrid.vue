<template>
  <div class="grid">
    <button v-for="w in items" :key="w.id"  class="card" @click="emit('open', w.id)">
      <div class="thumb">
        <img :src="w.cover || '/img/noImg.png'" :alt="w.title" loading="lazy">
      </div>
      <h3 class="title">{{ w.title }}</h3>
    </button>
  </div>

  <Button buttonText="お問い合わせ" :onClick="() => (showContact = true)"/>
  <ContactModal v-if="showContact" @close="showContact = false"/>

</template>

<script setup lang="ts">
import Button from '../common/Button.vue';
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type Item = {
  id: string, slug: string, title: string, cover?: string
}

const props = defineProps<{ items: Item[] }>()
const emit = defineEmits<{ open:[id:string] }>()

const showContact = ref(false)

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2,minmax(0, 1fr));
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(3,1fr);
  }
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(5,1fr);
  }
}
.card {
  display: block;
  text-align: left;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
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
}
.title {
  font-size: 14px;
  padding: 10px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>