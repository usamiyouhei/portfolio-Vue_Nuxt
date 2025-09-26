<template>
  <div class="ticker">
    <div class="ticker__track">
      <span class="ticker__chunk">
        Web Designer &nbsp;Programmer &nbsp;Dessert Creator &nbsp;
      </span>
      <span class="ticker__chunk">
        Web Designer &nbsp;Programmer &nbsp;Dessert Creator &nbsp;
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
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
/* scroll */
.ticker {
  text-align: center;
  overflow: hidden;
  padding-bottom: 20px;
}
.ticker__track {
  display: inline-flex;           /* 横一列 */
  white-space: nowrap;            /* 改行させない */
  line-height: 1;                 /* 余白を詰めて一段表示 */
  animation: marquee 40s linear infinite;
  will-change: transform;
}

.ticker__chunk {
  font-size: 180px;
  font-weight: 600;
  color: #dd9b45;
  /* 文字同士の間隔を少し空けたい時は margin-right を追加 */
  /* margin-right: 2rem; */
}

/* 片方の塊の幅ぶん左へ流し、終端で0に戻す = 無限ループ */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); } /* 2つ並べているので -50% でシームレス */
}

/* OSの簡易アニメ設定に配慮したい場合 */
@media (prefers-reduced-motion: reduce) {
  .ticker__track { animation: none; }
}

// .loop__wrap div {
//   flex: 0 0 auto;
//   white-space: nowrap;
//   font-size: 180px;
//   font-weight: 600;
//   overflow: hidden;
//   margin: 0 auto;
// }
// .loop__wrap--first {
//   color: #dd9b45;
// }
// .loop__wrap--second {
//   color: #dd9b45;
// }
// .loop__wrap div:nth-child(odd) {
//   animation: loop 200s -100s linear infinite;
// }

// .loop__wrap div:nth-child(even) {
//   animation: loop2 200s linear infinite;
// }

// @keyframes loop {
//   0% {
//     transform: translateX(100%);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// }

// @keyframes loop2 {
//   0% {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(-200%);
//   }
// }


</style>