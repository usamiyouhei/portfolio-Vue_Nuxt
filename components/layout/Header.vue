<template>
  <header class="header" id="header">
    <div class="header_inner">
      <h1 class="header_logo">
        <a href="/usami/top"><img src="/img/youhei-usami-logo.svg" alt="宇佐美洋平 名前のロゴ" /></a>
      </h1>

      <nav class="header_nav">
        <NavButton/>
      </nav>
      <HamburgerButton/>
    </div>
  </header>
</template>

<script setup lang="ts">
import  NavButton  from "../common/NavButton.vue";
import HamburgerButton from "../common/HamburgerButton.vue";
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
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 75px;
  background-color: #fff;
  opacity: 0.8;
}

.header_inner {
  display: flex;
  align-items: center;
  height: inherit;
  padding-left: 22px;
}

.header_name {
  margin-right: auto;
}
.header_logo {
  width: 30%;
}
.header_nav {
  display: none;
  height: inherit;
}

.header_items {
  display: flex;
  align-items: center;
  height: inherit;
}

.header__item {
  height: inherit;
}


/* タブレット以上 */
@media (min-width: 768px) {
  .header_nav {
    display: flex;
    display: block;
  }
}

/* PCサイズ以上 */
@media (min-width: 1024px) {
  .header_nav {
    justify-content: space-between;
  }
}
@media (min-width: 768px) {
  .header_nav {
    display: flex;
    justify-content: space-between;
  }

  .menu-toggle {
    display: none;
  }
}
</style>