<template>
  <section class="works inner" id="works">
      <div class="works__title section-title">
      <SectionTitle sectionTitle="Works" sectionSubTitle="制作実績" />
      </div>
      <div class="works__inner">
        <ul class="works__list js-fadeIn">
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works1.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works2.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works3.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works4.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works5.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works6.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works7.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works8.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
          <li class="fade-in fade-in-up works-item">
            <a href="./コーディング練習/index.html"
              ><div><img src="./img2/works9.jpg" alt="" /></div>
              <h3>Web制作</h3></a
            >
          </li>
        </ul>
      </div>
      <a class="read-more__button" href="./works.html">
        <span>Gallery page</span>
      </a>
    </section>
</template>

<script setup lang="ts">
import  SectionTitle  from "../common/SectionTitle.vue";
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
</style>