<template>
  <div 
    class="hamburger-button"
    :class="{ active: isOpen }"
    @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div 
        ref="menuRef"
        class="slide-menu"
        :class="{ open: isOpen }"
        >
        <ul class="slide-menu__items">
          <li class="slide-menu__item">
            <a href="#about" class="slide-menu__link" @click="closeMenu">About</a>
          </li>
          <li class="slide-menu__item">
            <a href="#service" class="slide-menu__link" @click="closeMenu">Service</a>
          </li>
          <li class="slide-menu__item">
            <a href="#news" class="slide-menu__link" @click="closeMenu">News</a>
          </li>
          <li class="slide-menu__item">
            <a href="#works" class="slide-menu__link" @click="closeMenu">Works</a>
          </li>
          <li class="slide-menu__item">
            <a href="#contact" class="slide-menu__link slide-menu__link--contact" @click="closeMenu"
              >Contact</a
            >
          </li>
        </ul>
        <div class="slide-menu__sns" aria-label="Social links">
          <a href="https://twitter.com/your-id" target="_blank" rel="noopener" aria-label="X">
            <img src="/brands/x-color.svg" alt="X" width="28" height="28" />
          </a>
          <a href="https://instagram.com/your-id" target="_blank" rel="noopener" aria-label="Instagram">
            <img src="/brands/instagram-color.svg" alt="Instagram" width="28" height="28" />
          </a>
          <a href="https://github.com/usamiyouhei" target="_blank" rel="noopener" aria-label="GitHub">
            <img src="/brands/github-color.svg" alt="GitHub" width="28" height="28" />
          </a>
          <a href="https://youtube.com/@your-id" target="_blank" rel="noopener" aria-label="YouTube">
            <img src="/brands/youtube-color.svg" alt="YouTube" width="28" height="28" />
          </a>
          <a href="https://facebook.com/your-id" target="_blank" rel="noopener" aria-label="Facebook">
            <img src="/brands/facebook-color.svg" alt="Facebook" width="28" height="28" />
          </a>
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"; 


const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null)
function toggleMenu() {
  isOpen.value = !isOpen.value
}
function closeMenu() {
  isOpen.value = false
}

// function onMenuClick(e: MouseEvent) {
//   const target = e.target as HTMLElement;
//   if(target.closest('slide-menu__link'))
//   isOpen.value = false
// }

function handleClickOutside(e: MouseEvent) {
  if(isOpen.value) {
    const menu = menuRef.value;
    const btn = document.querySelector('.hamburger-button')
    if(menu && !menu.contains(e.target as Node) && !btn?.contains(e.target as Node)){
      closeMenu()
    }
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})
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
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.slide-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 50%;
  height: 100vh;
  background: #fff;
  transition: right 0.3s;
  z-index: 998;
  padding: 40px 20px;
  overflow-y: auto;
  font-family: "Italianno";
}

/* isOpen が true のとき表示 */
.slide-menu.open {
  right: 0;
}
.hamburger-button {
  position: fixed;
  width: 30px;
  height: 30px;
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

.slide-menu ul {
  margin: 40px 10px;
  text-align: center;
}
// .slide-menu li {
//   border-bottom: solid 2px #333;
//   width: 80px;
//   margin: 50px;
//   font-size: 20px;
// }

.slide-menu__link {
  font-family: "Italianno";
  font-size: 35px;
  letter-spacing: 0.1rem;
}

.slide-menu__link::after {
  content: "";
  width: 0;
}

.slide-menu__link:hover::after {
  width: 100%;
  position: absolute;
  top: 30px;
  left: 0;
  display: block;
  border-radius: 2px;
  height: 2px;
  transition: width 0.3s;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  background-color: #cba96d;
}
.slide-menu.active {
  display: flex;
  animation: fadeIn 0.5s forwards;
}
@keyframes fadeIn {
  0% {
    top: 45%;
    opacity: 0;
  }

  100% {
    top: 50%;
    opacity: 1;
  }
}
.slide-menu__sns {
  margin: 12px auto 0px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  gap: 18px;
  border-top: 1px solid rgba(0,0,0,.08);
}

.slide-menu__sns a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  transition: transform .25s ease, filter .25s ease, background-color .25s ease;
}

.slide-menu__sns a:hover,
.slide-menu__sns a:focus-visible {
  transform: scale(1.12);          /* 少し拡大 */
  filter: brightness(1.06);         /* ほんのり明るく */
  background-color: rgba(0,0,0,.04);/* うっすら下地 */
  outline: none;
}

.slide-menu__sns img {
  width: 28px;
  height: 28px;
  display: block;
}
/* HamburgerButton.vue の style 内に追加 */
.hamburger-button {
  display: block; /* モバイルでは表示 */
}

@media (min-width: 768px) {
  .hamburger-button {
    display: none; /* タブレット以上では非表示 */
  }
}
</style>