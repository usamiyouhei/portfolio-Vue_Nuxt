<template>
  <Swiper
    :modules="[Autoplay]"
    :slider-per-view="'auto'"
    :loop="true"
    :autoplay="{ delay: 0, disableOnInteraction: false }"
    :speed="3000"
    grabCursor
    class="auto-gallery"
  >
  <SwiperSlide v-for="( img, i ) in images" :key="i" class="auto-gallery__slide">
    <img :src="img" alt="" loading="lazy" />
  </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

/**===================================================================================================================
 * 
 ===================================================================================================================**/
const images = [
  '/img/Dg-img7.jpg',
  '/img/Dg-img8.jpg',
  '/img/Dg-img9.jpg',
  '/img/Dg-img10.jpg',
  '/img/Dg-img11.jpg',
  '/img/Dg-img12.jpg',
]


//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.auto-gallery {
  width: 100%;
  overflow: hidden;
}
.auto-gallery__slide {
  width: auto;
  padding: 0 10px;
}

.auto-gallery__slide img {
  height: 200px;
  object-fit: cover;
}
</style>