<template>
  <section class="service" id="service">
      <div class="service__inner inner">
        <div class="service__title section-title">
          <SectionTitle sectionTitle="Service" sectionSubTitle="事業内容" />
        </div>
        <!-- tab -->
        <div class="category-tabs">
          <button v-for="cat in categories"
            :key="cat"
            :class="['tab', { active: selectedCategory === cat}]"
            @click="selectedCategory = cat"
            >{{ catLabels[cat] }}</button>
        </div>
        <!-- mobile -->
        <div class="only-mobile">
          <Swiper
            :loop="true"
            :autoplay="{ delay : 5000 }"
            :pagination="true"
            class="service-swiper"
            >
            <SwiperSlide v-for="service  in filteredServices" :key="service.title">
              <ServiceCard :service="service"/>
            </SwiperSlide>
          </Swiper>
        </div>

        <ul class="service__items only-desktop">
          <ServiceCard v-for="(service , index) in services" :key="index" :service="service"/>
        </ul>

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
      category: 'creator'
    },
    { 
      title: "レシピ開発", 
      img: '/img/Recipe book-amico.svg',
      description: '２０年分のレシピや新作の考え方を活かしてレシピ１品から承ります。栄養学の面でも体に良いものも考案できます。',
      category: 'creator'
    },
    { 
      title: "写真・動画撮影", 
      img: '/img/Photo-amico.svg',
      description: '写真、動画撮影も承ります。ポートフォリオの写真は自分が撮影しました。',
      category: 'creator'
    },
    
  ]


  const filteredServices = computed(() => 
    selectedCategory.value === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory.value)

) 

  type Category = 'all' | 'web' | 'creator'
  const selectedCategory = ref<Category>('all')
  const categories: Category[] = ['all', 'web', 'creator']
  const catLabels: Record<Category, string> = { all: 'All', web: 'WEB', creator: 'クリエイター'}

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
// tab
.category-tabs {
  display: flex;
  justify-content: center;
  gap: .75rem;
  margin: 0 0 1rem;
}
.tab {
  padding: 0.5rem 1rem;
  border-radius: 75rem;
  border: 1px solid #ddd;
  background: #f7f7f7;
  cursor: pointer;
  font-weight: bold;
}
.tab.active {
  background: #f8a2f8;
  color: #ffffff;
  border-color: #ddd;
}
/* スワイパーの土台 */
.service-swiper { width: 100%; padding: 16px 0; }

/* グリッド（PC用） */
.service__items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 0;
  margin: 40px auto;
}
.service__items.-single { display: block; } /* 1枚だけ中央に */

.only-mobile { display: block; }
.only-desktop { display: none; }

@media (min-width: 1024px) {
  .only-mobile { display: none; }
  .only-desktop { display: grid; grid-template-columns: repeat(3, 1fr); }
}
</style>