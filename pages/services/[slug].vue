<template>

    <component :is="componentMap[service.category]" :service="service" />

</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { services, type Service } from '~/data/services'   // ← パス＆型import

// import { services } from "@/data/services";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
 const route =useRoute();
 const slug = route.params.slug as string;
const found = services.find(s => s.slug === slug)
if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}
const service:Service = found


// 遅延ロード（バンドル分割）
const WebDetail = defineAsyncComponent(() => import('~/components/services/WebDetail.vue'))
const CreatorDetail = defineAsyncComponent(() => import('~/components/services/CreatorDetail.vue'))

const componentMap = {
  web: WebDetail,
  creator: CreatorDetail
} as const

useHead({
  title: `${service.title} | Services`,
  meta: [{ name: 'description', content: service.description.replace(/<[^>]+>/g, '') }]
})

 //------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// ライフサイクル
//------------------------------------------------------------------------------------------------------------
/*
onBeforeMount(() => {
  //記憶した位置、サイズでの復帰を可能にする
})

onMounted(() => {
  //window.addEventListener('resize', onGetPosition)
})

onBeforeUnmount(() => {
  //window.removeEventListener('resize', onGetPosition)
})
*/
//------------------------------------------------------------------------------------------------------------
//watch
//------------------------------------------------------------------------------------------------------------
/*
watch(
  () => props.value,
  (value) => {
    input.value = value
  }
)
//------------------------------------------------------------------------------------------------------------
//computed
//------------------------------------------------------------------------------------------------------------
/*
const counter: Ref<number> = useState('counter', () => 500)

// computedによりcounter変数の監視が行われる
const doubleCount = computed(() => {
  return counter.value * 2
})
*/
//------------------------------------------------------------------------------------------------------------
// エミット
//------------------------------------------------------------------------------------------------------------
/*
const emits = defineEmits<{ (e: 'update:value', item: any): void }>()
const input = ref(props.value)

function onChange(value: any) {
  input.value = value
  emits('update:value', value)
}
*/

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.service-detail { 
  padding: 40px 0 80px;
  margin-top: 40px;
  width: 80%;
}
.hero { 
  max-width: 880px;
  width: 100%; 
  object-fit: contain; 
  margin: 16px 0 24px; 
}
.lead { line-height: 1.9; margin-bottom: 24px; }
.block { margin: 32px 0; }
.feature-list { display: grid; gap: .5rem; padding-left: 1rem; list-style: disc; }
.process { display: grid; gap: .75rem; }
.gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.price { font-weight: 700; font-size: 1.1rem; }
.cta { display:inline-block; margin-top: 24px; padding: 12px 18px; border-radius: 12px; background:#111; color:#fff; text-decoration:none; }
.breadcrumb { font-size: .9rem; color: #666; margin-bottom: 8px; }

</style>