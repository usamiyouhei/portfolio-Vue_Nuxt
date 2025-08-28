<template>
  <nav v-if="totalPages > 1" class="pagination" aria-label="Pagination">
    <button class="nav"
            :disabled="modelValue === 1"
            @click="go(modelValue - 1)"
            :aria-label="prevLabel">
      {{ prevLabel }}
    </button>

    <button v-for="(pi, i) in pageItems"
            :key="i + '-' + pi"
            class="num"
            :class="{ active: pi === modelValue }"
            :disabled="pi === '…'"
            @click="pi !== '…' && go(pi as number)"
            :aria-current="pi === modelValue ? 'page' : undefined">
      {{ pi }}
    </button>

    <button class="nav"
            :disabled="modelValue === totalPages"
            @click="go(modelValue + 1)"
            :aria-label="nextLabel">
      {{ nextLabel }}
    </button>
  </nav>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type PageItem = number | '…'

 const props = withDefaults(defineProps<{
  modelValue: number            // 現在ページ（v-model）
  totalPages: number            // 総ページ数（1以上）
  edge?: number                 // 先頭/末尾に常に出す数（例: 1 => 1 と 最終）
  radius?: number               // 現在ページの前後に出す数
  prevLabel?: string
  nextLabel?: string
}>(), {
  edge: 1,
  radius: 1,
  prevLabel: '前へ',
  nextLabel: '次へ'
})
 //------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const go = (p: number) => {
  if (p < 1 || p > props.totalPages || p === props.modelValue) return
  emit('update:modelValue', p)
  emit('change', p)
}

const build = (current: number, total: number, edge: number, radius: number): PageItem[] => {
  const pages = new Set<number>()
  for (let i = 1; i <= Math.min(edge, total); i++) pages.add(i)
  for (let i = Math.max(1, total - edge + 1); i <= total; i++) pages.add(i)
  for (let p = Math.max(1, current - radius); p <= Math.min(total, current + radius); p++) pages.add(p)

  if (total <= edge * 2 + radius * 2 + 2) { // 少ない時は全部出す
    pages.clear()
    for (let p = 1; p <= total; p++) pages.add(p)
  }

  const sorted = Array.from(pages).sort((a,b)=>a-b)
  const result: PageItem[] = []
  for (let i = 0; i < sorted.length; i++) {
    const p = sorted[i]
    result.push(p)
    const next = sorted[i+1]
    if (next && next - p > 1) result.push('…')
  }
  return result
}

const pageItems = computed<PageItem[]>(() =>
  build(props.modelValue, props.totalPages, props.edge, props.radius)
)
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
.pagination {
  display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-top:24px;
  .nav, .num { min-width:36px; height:36px; padding:0 10px; border:1px solid #ddd; border-radius:8px; background:#fff; cursor:pointer; }
  .num.active { background:#111; color:#fff; border-color:#111; }
  button:disabled { opacity:.45; cursor:not-allowed; }
}
</style>