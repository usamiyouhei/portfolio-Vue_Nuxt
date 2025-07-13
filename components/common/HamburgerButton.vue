<template>
  <div class="hamburger-button">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="slide-menu">
        <ul class="slide-menu__items">
          <li class="slide-menu__item">
            <a href="#about" class="slide-menu__link">About</a>
          </li>
          <li class="slide-menu__item">
            <a href="#service" class="slide-menu__link">Service</a>
          </li>
          <li class="slide-menu__item">
            <a href="#news" class="slide-menu__link">News</a>
          </li>
          <li class="slide-menu__item">
            <a href="#works" class="slide-menu__link">Works</a>
          </li>
          <li class="slide-menu__item">
            <a href="#contact" class="slide-menu__link slide-menu__link--contact"
              >Contact</a
            >
          </li>
        </ul>
        <div class="icon-button" id="elementToToggle">
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
.slide-menu {
  display: none;
}
.hamburger-button {
  position: fixed;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 0.7rem;
  cursor: pointer;
  z-index: 999;
}
.hamburger-button span {
  position: absolute;
  background-color: #333;
  height: 2px;
  width: 100%;
  position: absolute;
  transition: all 0.3s;
}
.hamburger-button span:first-of-type {
  top: 0;
}
.hamburger-button span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
}
.hamburger-button span:last-of-type {
  bottom: 0;
}
.hamburger-button.active > span:first-of-type {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  z-index: 9999;
  background-color: #03440c;
}
.hamburger-button.active > span:nth-of-type(2) {
  display: none;
}
.hamburger-button.active > span:last-of-type {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
  z-index: 9999;
  background-color: #03440c;
}
</style>