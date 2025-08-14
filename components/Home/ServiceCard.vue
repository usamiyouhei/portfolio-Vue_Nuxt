<template>
    <!-- <ul class="service__items"> -->
          <li 
            ref="root"
            class="service__item fade-in"
            :class="{'fade-in-up-visible': visible}"
            >
            <div class="svc-card">
              <h3 class="svc-card__title">{{ service.title }}</h3>
              <img class="svc-card__img" :src="service.img" alt="service.title" />
              <p class="svc-card__desc" v-html="service.description" />
            </div>
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
  width: 70%;
  margin: 24px auto;
  text-align: center;
  cursor: pointer;
}
.svc-card {
  display: flex;
  flex-direction: column;
  height: 460px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(0,0,0,.06);
}

.svc-card__title {
  text-align: center;
  margin: 0 0 12px;
  font-weight: 700;
}

.svc-card__img {
  width: 100%;
  max-height: 230px;
  object-fit: contain;
  margin: 0 auto 12px;
}

.svc-card__desc {
  margin: 0;
  line-height: 1.8;
  text-align: left;
}

@media (max-width: 480px) {
  .svc-card { height: 500px; padding: 16px; }
  .svc-card__img { max-height: 200px; }
}

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