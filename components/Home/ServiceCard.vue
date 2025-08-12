<template>
    <!-- <ul class="service__items"> -->
          <li 
            ref="root"
            class="service__item fade-in"
            :class="{'fade-in-up-visible': visible}"
            >
            <h3>{{ service.title }}</h3>
            <img :src="service.img" alt="service.title" />
            {{ service.description }}
            <!-- <p v-html="service.description" /> -->
          </li>
        <!-- </ul> -->
</template>

<script setup lang="ts">
import { Swiper,SwiperSlide } from "swiper/vue";
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
  
 type Service = {
   title: string;
    img: string;
    description: string;
 }
 
const props = defineProps<{
  service: Service}>()
  const root = ref<HTMLElement | null>(null)
  const visible = ref(false)

  const { stop } = useIntersectionObserver(
  root,
  ([entry]) => {
    if (entry.isIntersecting) {
      visible.value = true
      // 1回だけ発火にする
      stop()
    }
  },
  { threshold: 0.15 }
)
//   function onIntersect(entries: IntersectionObserverEntry[]) {
//   if (entries[0].isIntersecting) {
//     visible.value = true
//   }
// }

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
.service__item {
  list-style: none;
  width: 60%;
  margin: 24px auto;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
}
.service__item h3 { font-size: 1rem; }
.service__item img { margin: 0 auto; width: 80%; }
.service__item p { width: 70%; margin: 20px auto; }

/* アニメの初期値 */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 900ms ease, transform 900ms ease;
}
/* 画面に入ったら可視化 */
.fade-in-up-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>