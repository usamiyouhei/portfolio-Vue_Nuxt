<template>
    <section class="mv">
      <div class="mv__inner">
        <div class="kv">
          <div class="main-img"></div>
          <div class="main-img"></div>
          <div class="main-img"></div>
          <div class="main-img"></div>
          <div class="main-img"></div>
          <img class="mv__title-img" src="/img/Creating_the_Only_One.svg" alt="" />
        </div>
        <span class="kv__scroll">scroll</span>
      </div>
    </section>
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
.mv {
  margin: 0 auto;
  // height: 1000px;
  text-align: center;
  background-color: #fdfbfb;
}
.mv__inner {
  width: 100%;
  margin-top: 75px;
  position: relative;
}
.kv {
  position: relative;
  max-width: 1500px;
  /* width: 100%; */
  // height: 700px;
  height: clamp(360px, 60vh, 700px);  /* 端末に応じて伸縮 */
  overflow: hidden;
  border-radius: 30px;
  margin: 0 auto;
}

.main-img {
  width: 100%;
  /* width: 800px; */
  height: 100%;
  background-position: center right;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  opacity: 0;
  /* name fade １５ */
  animation: fade 30s infinite;
  overflow: hidden;
}
.kv div:first-of-type {
  background-image: url(/img/mv2.jpg);
  background-size: cover;
  object-fit: cover;
  width: 100%;
  animation-delay: 0s;
}
.kv div:nth-of-type(2) {
  background-image: url(/img/mv1.png);
  background-size: cover;
  object-fit: cover;
  width: 100%;
  animation-delay: 6s;
}
.kv div:nth-of-type(3) {
  background-image: url(/img/code.jpg);
  background-size: cover;
  object-fit: cover;
  width: 100%;
  animation-delay: 12s;
}
.kv div:nth-of-type(4) {
  background-image: url(/img/make.jpg);
  background-size: cover;
  object-fit: cover;
  width: 100%;
  animation-delay: 18s;
}
.kv div:last-of-type {
  background-image: url(/img/mv-dessert.jpg);
  background-size: cover;
  object-fit: cover;
  width: 100%;
  animation-delay: 24s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  7% {
    opacity: 1;
    transform: scale(1);
  }
  18% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: scale(1.3);
  }
}
.mv__title-img {
  position: absolute;
  right: 5%;
  bottom: 5%;
  width: 500px;
}

.kv__scroll {
  position: absolute;
  bottom: 250px;
  left: 10%;
  color: #333;
  letter-spacing: 0.2rem;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  font-size: 0.75rem;
  z-index: 9;
}
.kv__scroll::after {
  position: absolute;
  bottom: -85px;
  left: 50%;
  width: 1px;
  background-color: rgb(12, 11, 11);
  height: 80px;
  content: "";
  animation: scrollDownLine 1.5s infinite;
}
@keyframes scrollDownLine {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}
</style>