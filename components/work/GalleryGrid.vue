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
</style>