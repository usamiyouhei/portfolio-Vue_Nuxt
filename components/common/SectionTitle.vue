<template>
      <div class="section-title">
        <h2 class="section-title__main">{{ sectionTitle}}</h2>
        <span class="section-title__sub">{{ sectionSubTitle }}</span>
      </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
defineProps<{
  sectionTitle: string;
  sectionSubTitle: string;
}>()

// const sectionTitle = ref()

// const sectionSubTitle = ref()



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
/* section-title */
.section-title {
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 130px;
  /* display: inline-block; */
  position: relative;
  margin-left: 15%;
}
.section-title h2 {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 4rem;
  font-family: 'Italianno';
  letter-spacing: 0.15rem;
  font-weight: 300;
  /* border-bottom: 1px solid #333; */
}

.section-title span {
  position: absolute;
  top: 100px;
  right: 48px;
  font-size: 12px;
  font-family: 'Yu Gothic', sans-serif;
  /* font-weight: ; */
}
.section-title h2::after {
  position: absolute;
  bottom: 5px;
  right: 0px;
  content: '';
  border: solid 2px #bf901a;
  width: 50px;
  /* height: 4px; */
  border-radius: 5px;
  /* width: 10px; */
}
</style>