<template>
  <section class="patissier">
    <header class="head">
      <h1 class="title">Patissier Gallery</h1>
      <nav class="tabs" role="tablist" aria-label="Patissier Tabs">
        <button></button>
      </nav>
        <p class="hint">写真とタイトルだけの静かなギャラリー。クリックで詳細がモーダル表示。</p>
    </header>

    <WorkGalleryGrid :items="list"/>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { works } from '~/data/works';;
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type PatissierTab = 'dessert' | 'sweets' | 'cake'

const route = useRoute()
const router = useRouter()

const tab = computed<PatissierTab>(() => (['dessert', 'sweets', 'cake'].includes(String(route.query.tab))
? route.query.tab as PatissierTab
: 'dessert'
))

const list = computed(() =>  works.filter(w => w.category === ))
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.patissier {
  margin-top: 80px;
}
</style>