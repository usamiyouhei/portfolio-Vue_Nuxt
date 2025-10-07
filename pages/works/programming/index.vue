<template>
  <section class="programming">
    <header class="head">
      <h1 class="title">Programming</h1>
      <nav class="tabs">
        <button v-for="t in tabs" :key="t.key" :class="['tab', {active:tab === t.key}]">
          {{ t.label }}
        </button>
      </nav>
      <p class="hint">クリックで詳細ページ（課題→解決・機能・スタック・学び）へ。</p>
    </header>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import WorkCard  from '@/components/Home/WorkCard.vue';


/**===================================================================================================================
 * 
 ===================================================================================================================**/
type DevTab = 'site' | 'app'

const route = useRoute()
const router = useRouter()

const tab = computed<DevTab>(() => (['site', 'app'].includes(String(route.query.tab)) 
? route.query.tab as DevTab
: 'site'
))
const tabs = [{key: 'site' , label: 'Webサイト'},{key: 'app', label: 'Web App'}]
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.programming {
  margin-top: 80px;
}
</style>