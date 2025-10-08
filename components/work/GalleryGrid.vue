<template>
  <div class="grid">
    <button v-for="w in items" :key="w.id"  class="card" @click="emit('open', w.id)">
      <div class="thumb">
        <img :src="w.cover || '/img/noImg.png'" :alt="w.title" loading="lazy">
      </div>
      <h3 class="title">{{ w.title }}</h3>
    </button>
  </div>
</template>

<script setup lang="ts">

/**===================================================================================================================
 * 
 ===================================================================================================================**/
type Item = {
  id: string, slug: string, title: string, cover?: string
}

const props = defineProps<{ items: Item[] }>()
const emit = defineEmits<{ open:[id:string] }>()
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

</style>