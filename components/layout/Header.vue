<template>
  <header class="header" id="header">
    <div class="header_inner">
      <h1 class="header_logo">
        <NuxtLink to="/">
          <img src="/img/youhei-usami-logo.svg" alt="宇佐美洋平 名前のロゴ" />
        </NuxtLink>
      </h1>

      <nav class="header_nav">
        <NavButton/>
      </nav>
      <HamburgerButton />
      <!-- <HamburgerButton v-if="isMobile"/> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref,onMounted, onBeforeUnmount } from "vue";
import  NavButton  from "../common/NavButton.vue";
import HamburgerButton from "../common/HamburgerButton.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/

//  const isMobile = ref(window.innerWidth < 768)

//  function updateSize() {
//   isMobile.value = window.innerWidth < 768
//  }

//  onMounted(() => {
//   window.addEventListener("resize", updateSize)
//  })

//  onBeforeUnmount(() => {
//   window.removeEventListener("resize", updateSize)
//  })
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;
  opacity: 0.8;
  overflow: visible;

  // padding-left: max(16px, env(safe-area-inset-left));
  // padding-right: max(16px, env(safe-area-inset-right));
  // max-width: 1200px;
  margin-inline: auto;
}
@media (min-width: 768) {
  
}

.header_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(8px, 3vw, 28px);
  height: 100%;
  max-width: 1200px;
  margin-inline: auto;
  // padding: 0 16px;
}

.header_name {
  margin-right: auto;
}
.header_logo {
  flex: 0 0 auto;
  width: clamp(140px, 22vw, 220px); /* 最小140px、画面に応じて伸縮、最大220px */
  line-height: 0;
  margin-right: clamp(12px, 5vw, 64px);
}

.header_logo img {
  display: block;
  width: 100%;
  height: auto;
  max-height: calc(100% - 12px);
  object-fit: contain;
}

.header_nav {
  margin-left: auto;
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
  .header {
    height: 72px;
  }
  .header_nav {
    display: flex;
    align-items: center;
  }
  .header_nav ul

  .menu-toggle {
    display: none;
  }
}


/* PCサイズ以上 */
@media (min-width: 1024px) {
  .header {
    height: 80px;
  }
  .header_nav {
    justify-content: space-between;
  }
}


</style>