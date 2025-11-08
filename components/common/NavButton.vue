<template>
  <ul class="header_items">
    <li class="header_item">
      <NuxtLink to="/#about" class="header_link">About</NuxtLink>
    </li>
    <li class="header_item">
      <NuxtLink to="/#service" class="header_link">Service</NuxtLink>
    </li>
    <li class="header_item">
      <NuxtLink to="/#news" class="header_link">News</NuxtLink>
    </li>
    <li class="header_item">
      <NuxtLink to="/#works" class="header_link">Works</NuxtLink>
    </li>
    <li class="header_item">
      <NuxtLink to="/#contact" class="header_link-contact"
        ><span>Contact</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, watch } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const route = useRoute();

onMounted(() => {
  watch(
    () => route.hash,
    (hash) => {
      if (!hash) return;

      requestAnimationFrame(() => {
        const el = document.querySelector(hash) as HTMLElement | null;
        el?.scrollIntoView({ behavior: "smooth" });
      });
    }
  );
});
//------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.header_items {
  display: flex;
  gap: clamp(16px, 4vw, 40px);
}

.header_item {
  height: inherit;
}

// .header_item:not(:first-child) {
//   margin-left: 60px;
// }

.header_link {
  font-size: 30px;
  font-weight: 500;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: inherit;
  color: #141414;
}

// .header_link,
// .slide-menu_link {
//   font-family: "Italianno";
//   letter-spacing: 0.1em;
// }

.header_link,
.slide-menu_link,
.header_link-contact {
  font-family: "Italianno";
  font-size: 35px;
  letter-spacing: 0.1rem;
}

.header_link::after {
  content: "";
  width: 0;
}
.header_link:hover {
  color: #aa3769;
}

.header_link:hover::after {
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  display: block;
  height: 1px;
  transition: width 0.3s;
  transition-behavior: normal;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: width;
  background-color: #cba96d;
}
.header_link-contact {
  border: 1px solid #666666;
  border-radius: 4px;
  display: block;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  color: #141414;
  background-color: transparent;
  padding: 4px 20px;
  margin: 5px auto;
}

.header_link-contact span {
  position: relative;
  z-index: 9999;
}

.header_link-contact::after {
  content: "";
  position: absolute;
  left: -10px;
  top: -10;
  height: 490%;
  width: 160%;
  background: #e9af53;
  transition: all 0.5s ease-in-out;
  transform: translateX(-110%) translateY(-22%) rotate(45deg);
}
.header_link-contact:hover span {
  color: #fff;
}
.header_link-contact:hover::after {
  transform: translateX(-6%) translateY(-20%) rotate(45deg);
}
</style>
