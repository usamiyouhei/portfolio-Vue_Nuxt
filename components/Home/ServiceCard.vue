<template>
  <Swiper>
    <ul class="service__items">
          <li 
            :class="{'fade-in fade-in-up' : visible}"
            v-intersect="onIntersect"
            class="service__item">
            <h3>{{ service.title }}</h3>
            <img :src="service.img" alt="service.title" />
            <p v-html="service.description" />
          </li>
        </ul>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper,SwiperSlide } from "swiper/vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
  defineProps<{
  service: {
    title: string;
    img: string;
    description: string;
  }
  }>()

  const visible = ref(false)

  function onIntersect(entries: IntersectionObserverEntry[]) {
  if (entries[0].isIntersecting) {
    visible.value = true
  }
}

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
.service__items {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 50px auto;
  flex-wrap: wrap;
  gap: 3.5%;
  padding: 0;
}
.service__item {
  width: 31%;
  margin-bottom: 24px;
  background-color: rgba(255, 243, 230, 100);
  border-radius: 6px;
}
.service__item h3 {
  font-size: 1rem;
}
.service__item img {
  margin: auto;
  width: 80%;

}
.service__item:nth-child(2) img,
.service__item:nth-child(6) img {
  width: 55%;
  margin: 20px auto 0;
}
.service__item:nth-child(3) img,
.service__item:nth-child(5) img {
  width: 50%;
  margin: 30px auto 10px;
}
.service__item p {
  width: 70%;
  /* text-align: center; */
  margin: 20px auto;
}

.fade-in {
  opacity: 0;
  transition-duration: 1000ms;
  transition-property: opacity, transform;
}

.fade-in-up {
  transform: translate(0, 100px);
}
</style>