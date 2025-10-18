<template>
  <div class="free" :style="{ height: `${height}px`}">
    <div class="free__track"
      :class="{ 'is-reverse': reverse }"
          :style="{
            animationDuration: `${speed}s`
          }">
      <div v-for="(img, i) in props.images" 
          :key="`a-${i}`" 
          class="free__slide"
          
        >
        <img :src="img" alt="" loading="lazy">
      </div>
      <div v-for="(img, i) in props.images" 
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
// defineProps<{
//   images: string[],
//   speed?: number,
//   height?: number,
//   reverse?: boolean
// }>()

const props = withDefaults(defineProps<{
  images: string[],
  speed?: number,
  height?: number,
  reverse?: boolean
}>(),{
  speed: 30,
  height: 200,
  reverse: false
})
//  const images = [
//   '/img/Dg-img7.jpg',
//   '/img/Dg-img8.jpg',
//   '/img/Dg-img9.jpg',
//   '/img/Dg-img10.jpg',
//   '/img/Dg-img11.jpg',
//   '/img/Dg-img12.jpg',
//   '/img/Dg-img10.jpg',
//   '/img/Dg-img11.jpg',
//   '/img/Dg-img12.jpg',
// ]

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
  animation-name: scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.free__track.is-reverse {
  animation-name: scroll-reverse;
}

.free__slide {
  flex-shrink: 0;
  padding: 10px;
}

.free__slide img {
  height: 20vw;
  max-height: 200px;
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

@keyframes scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>