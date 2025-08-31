<template>
  <div class="loop__wrap">
      <div class="loop__wrap--first">
        Web Designer &nbsp;Programmer &nbsp;Dessert Creator &nbsp;
      </div>
      <div class="loop__wrap--second">
        Web Designer &nbsp;Programmer &nbsp;Dessert Creator &nbsp;
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
.loop__wrap {
  display: flex;
  /* width:  100%; */
  height: 300px;
  overflow: hidden;
  margin: 50px 0;
}

.loop__wrap div {
  flex: 0 0 auto;
  white-space: nowrap;
  font-size: 250px;
  font-weight: 900;
  overflow: hidden;
  margin: 0 auto;
}
.loop__wrap--first {
  color: #e6d3bb;
}
.loop__wrap--second {
  color: #e9cfad;
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