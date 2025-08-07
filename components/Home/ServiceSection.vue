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
        <SwiperSlide v-for="(service , index) in services" :key="index">
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
      img: '/img/Static website-cuate.svg',
      description: '新規サイトの制作はもちろん、レスポンシブコーディングやアニメーションなど動きのあるサイト制作も可能です',
      category: 'web'
    },
    { 
      title: "Webデザイン", 
      img: '/img/UI-UX design-amico.svg',
      description: 'クライアント様からのイメージを詳しくお聞きし、より良いデザインを作っていきます。',
      category: 'web'
    },
    { 
      title: "Webサイトリニューアル", 
      img: '/img/Setup-amico.svg',
      description: '現状のWebサイトの改良や修正なども可能です。',
      category: 'web'
    },
    { 
      title: "飲食店コンサルタント", 
      img: '/img/Marketing consulting-rafiki.svg',
      description: '飲食店、パティシエの経験を活かしコンサルタントを行っております。ケーキ屋、カフェ、デザート屋などお気軽にご相談ください。',
      category: 'creater'
    },
    { 
      title: "レシピ開発", 
      img: '/img/Recipe book-amico.svg',
      description: '２０年分のレシピや新作の考え方を活かしてレシピ１品から承ります。栄養学の面でも体に良いものも考案できます。',
      category: 'creater'
    },
    { 
      title: "写真・動画撮影", 
      img: '/img/Photo-amico.svg',
      description: '写真、動画撮影も承ります。ポートフォリオの写真は自分が撮影しました。',
      category: 'creater'
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