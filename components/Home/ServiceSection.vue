<template>
  <section class="service" id="service">
      <div class="service__inner inner">
        <div class="service__title section-title">
         <SectionTitle sectionTitle="Service" sectionSubTitle="事業内容" />
        </div>
      <Swiper
        :loop="true"
        :autoplay="{ delay : 5000 }"
        :pagination="true"
        class="service-swiper"
        >
        <SwiperSlide v-for="(service , index) in filteredServices" :key="index">
          <ServiceCard :service="service"/>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
</template>

<script setup lang="ts">
import { Swiper,SwiperSlide } from "swiper/vue";
import  SectionTitle  from "../common/SectionTitle.vue";
import  ServiceCard  from "../Home/ServiceCard.vue";
import 'swiper/css'
import 'swiper/css/pagination'
/**===================================================================================================================
 * 
 ===================================================================================================================**/
  const services = [
    { 
      title: "Webサイト制作", 
      img: '/img/website1.png',
      description: '新規サイトの制作はもちろん、レスポンシブコーディングやアニメーションなど動きのあるサイト制作も可能です',
      category: 'web'
    },
    { 
      title: "Webデザイン", 
      img: '/img/design.png',
      description: 'クライアント様からのイメージを詳しくお聞きし、より良いデザインを作っていきます。',
      category: 'web'
    },
    { 
      title: "Webサイトリニューアル", 
      img: '/img/siterenewal.png',
      description: '現状のWebサイトの改良や修正なども可能です。',
      category: 'web'
    },
    
  ]


  const filteredServices = services
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
</style>