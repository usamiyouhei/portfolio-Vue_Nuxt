<template>
  <div class="free">
    <div class="free__track">
      <div v-for="(img, i) in images" 
          :key="`a-${i}`" 
          class="free__slide"
        >
        <img :src="img" alt="" loading="lazy">
      </div>
      <div v-for="(img, i) in images" 
          :key="`b-${i}`" 
          class="free__slide"
        >
        <img :src="img" alt="" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  '/img/Dg-img10.jpg',
  '/img/Dg-img11.jpg',
  '/img/Dg-img12.jpg',
]

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.free {
  overflow: hidden;
  width: 100%;
}

.free__track {
  display: flex;
  width: max-content;
  animation: scroll 10s linear infinite ;
}

.free__slide {
  flex-shrink: 0;
  padding: 10px;
}

.free__slide img {
  height: 200px;
  object-fit: cover;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>