<template>
  <footer class="footer" id="footer">
      <div class="footer__container">
        <nav class="footer__nav inner">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="footer__icon">
          <a href="https://twitter.com/" target="_blank"
            ><i class="fa-brands fa-x-twitter"></i
          ></a>
          <a href="https://www.instagram.com/" target="_blank"
            ><i class="fa-brands fa-square-instagram"></i
          ></a>
          <a href="https://www.facebook.com/"
            ><i class="fa-brands fa-facebook"></i
          ></a>
          <a href="https://github.com/usamiyouhei"
            ><i class="fa-brands fa-github"></i
          ></a>
          <a href="https://www.youtube.com/"
            ><i class="fa-brands fa-youtube"></i
          ></a>
        </div>
        <div class="footer__info inner">
          <h4>Infomation</h4>
        </div>
      </div>
      <div class="footer__copy-right">
        <p>&copy;y.usami</p>
      </div>
    </footer>
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
</style>