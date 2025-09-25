<template>
  <div class="scroll-fixed">
    <div class="loop__wrap">
      <div class="loop__wrap--first">
        Web Designer &nbsp;Programmer &nbsp;Dessert Creator &nbsp;
      </div>
      <div class="loop__wrap--second">
        Web Designer &nbsp;Programmer &nbsp;Dessert Creator &nbsp;
      </div>
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
.scroll-fixed {
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  padding-bottom: 20px;
}
.loop__wrap {
  display: flex;
  position: relative;
  z-index: -100;
}

.loop__wrap div {
  flex: 0 0 auto;
  white-space: nowrap;
  font-size: 180px;
  font-weight: 600;
  overflow: hidden;
  margin: 0 auto;
}
.loop__wrap--first {
  color: #dd9b45;
}
.loop__wrap--second {
  color: #dd9b45;
}
.loop__wrap div:nth-child(odd) {
  animation: loop 200s -100s linear infinite;
}

.loop__wrap div:nth-child(even) {
  animation: loop2 200s linear infinite;
}

@keyframes loop {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes loop2 {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
}

</style>