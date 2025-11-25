<template>
  <section class="kv wrapper">
    <div class="kv__content">
      <div class="main-img"></div>
      <div class="main-img"></div>
      <div class="main-img"></div>
      <div class="main-img"></div>
      <div class="main-img"></div>
      <div class="kv__title-img">
        <img
          class="logo-img fade-in fade-in-up"
          src="/img/Creating_the_Only_One.svg"
          alt=""
        />
      </div>
    </div>
    <span class="kv__scroll">scroll</span>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
onMounted(() => {
  setTimeout(() => {
    document.querySelectorAll(".fade-in").forEach((el) => {
      el.classList.add("scroll-in");
    });
  }, 300);
});
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.kv {
  margin: 60px 0 0 auto;
  padding: 20px 0 40px 0;
  height: calc(100vh - 200px);
  text-align: center;
  display: flex;
  flex-direction: row-reverse;
  background-color: #fdfbfb;
  position: relative;
  z-index: 10;
}
// .kv__inner {
//   width: 100%;
//   margin-top: 75px;
//   position: relative;
// }
.kv__content {
  position: relative;
  width: 100%;
  // height: 70vh;
  height: clamp(360px, 70vh, 680px); /* 端末に応じて伸縮 */
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 40px 0 0 40px;
  margin-left: 5%;
}

.main-img {
  width: 100%;
  height: 100%;
  background-position: left center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  opacity: 0;
  animation: fade 30s infinite;
  overflow: hidden;
  object-fit: cover;
  &:first-of-type {
    background-image: url(public/img/hero/kv-img_1_pari_brest.jpg);
    animation-delay: 0s;
  }
  &:nth-of-type(2) {
    background-image: url(public/img/hero/kv-img_2_make_dessert_2.jpg);
    animation-delay: 6s;
  }
  &:nth-of-type(3) {
    background-image: url(public/img/hero/kv-img_3_typing.jpg);
    animation-delay: 12s;
  }
  &:nth-of-type(4) {
    background-image: url(public/img/hero/kv-img_4_lemon_dessert.jpg);
    animation-delay: 18s;
  }
  &:nth-of-type(5) {
    background-image: url(public/img/hero/kv-img_5_pc.jpg);
    animation-delay: 24s;
  }
}
.kv__title-img {
  position: absolute;
  right: 0;
  /* bottom: 5%; */
  width: 100%;
  height: 100%;
  /* background: radial-gradient( rgba(85, 85, 85, .5), rgb(238, 238, 238)); */
  background: linear-gradient(
    to right,
    rgba(230, 140, 85, 0) 30%,
    rgb(255, 255, 255, 0.9) 70%
  );
  /* background: linear-gradient(to right, white, gray); */
}

.logo-img {
  position: absolute;
  bottom: clamp(16px, 6vh, 80px);
  right: clamp(12px, 4vw, 60px);
  width: clamp(340px, 38vw, 680px);
  max-width: 90%;
  height: auto;
}

.fade-in {
  opacity: 0;
  transition-duration: 1000ms;
  transition-property: opacity, transform;
}

.fade-in-up {
  transform: translate(0, 80px);
}
.scroll-in {
  opacity: 1;
  transform: translate(0, 0);
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
    transform: scale(1.2);
  }
}

.kv__scroll {
  position: absolute;
  bottom: clamp(40px, 8vw, 120px);
  left: clamp(8px, 2vw, 32px);
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
@media (min-aspect-ratio: 16/9) and (min-width: 1400px) {
  .main-img {
    background-position: center 40%;
    /* coverのまま被写体位置だけ微調整 */
    /* 必要なら scale(1.04) 程度を keyframes に限定してもOK */
  }
}

@media (max-width: 768px) {
  .kv__title-img {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.9) 95%
    );
  }
}
</style>
