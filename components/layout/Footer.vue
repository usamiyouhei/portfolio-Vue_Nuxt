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
#footer {
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(126, 64, 91, 0.857),
    rgba(128, 100, 67, 0.859),
    rgb(212, 169, 118)
  );
  margin: 0;
}

.footer ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 70px 0;
  margin: 0;
}

.footer a {
  color: #fff;
}

.footer__icon i {
  font-size: 20px;
  padding: 10px;
  margin: 0 30px;
  color: #333;
  cursor: pointer;
}
.footer__icon {
  text-align: center;
}
.footer__info {
  letter-spacing: 2px;
  line-height: 1.5;
  display: block;
  max-width: 500px;
}

.footer__copy-right p {
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 0;
  font-size: 0.85rem;
}
</style>