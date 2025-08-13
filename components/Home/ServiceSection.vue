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
          <!-- Nav button -->
            <div class="nav-wrap">
              <button class="nav-button svc-prev" aria-label="前へ">←</button>
          <Swiper
            :loop="true"
            :modules="[Autoplay, Pagination, Navigation, Keyboard, A11y]"
            :autoplay="{ delay : 5000, disableOnInteraction: false }"
            :pagination="true"
            :navigation="{ nextEl: '.svc-next', prevEl: '.svc-prev' }"
            :keyboard="{ enabled: true}"
            class="service-swiper"
            >
            <SwiperSlide v-for="service  in filteredServices" :key="service.title">
              <ServiceCard :service="service"/>
            </SwiperSlide>
          </Swiper>
            <button class="nav-button svc-next" aria-label="次へ">→</button>
           </div>
        </div>

        <ul class="service__items only-desktop">
          <ServiceCard v-for="service  in filteredServices" :key="service.title" :service="service"/>
        </ul>

      </div>
    </section>
</template>

<script setup lang="ts">
import  SectionTitle  from "../common/SectionTitle.vue";
import  ServiceCard  from "../Home/ServiceCard.vue";
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, Keyboard, A11y } from 'swiper/modules'


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
      title: "レシピ開発", 
      img: '/img/Recipe book-amico.svg',
      description: '２０年分のレシピや新作の考え方を活かしてレシピ１品から承ります。栄養学の面でも体に良いものも考案できます。',
      category: 'creator'
    },
    { 
      title: "飲食店コンサルタント", 
      img: '/img/Marketing consulting-rafiki.svg',
      description: '飲食店、パティシエの経験を活かしコンサルタントを行っております。ケーキ屋、カフェ、デザート屋などお気軽にご相談ください。',
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

/* 矢印ボタン */
// .nav-wrap { 
//   display: flex; 
//   justify-content: space-between; 
//   margin-bottom: .5rem; 
// }
// .nav-btn { 
//   border: 1px solid #ddd; 
//   background: #fff; 
//   border-radius: .5rem; 
//   padding: .4rem .8rem; 
//   cursor: pointer; 
// }

/* スワイパーの土台 */
.service-swiper { 
  width: 100%; 
  padding: 16px 0; 
  /* ドット形状と状態 */
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background: #c7c7c7;
    opacity: 1;         /* Swiperのデフォ薄さを打ち消す */
    transition: transform .2s ease, background .2s ease;
  }
  .swiper-pagination-bullet-active {
    background: #111;   /* アクティブ色 */
    transform: scale(1.2);
  }

  /* ドット間隔（横） */
  .swiper-pagination-horizontal .swiper-pagination-bullet {
    margin: 0 6px;
  }
}


/* カスタムナビボタン */
.nav-wrap {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #f8f8f8;
  cursor: pointer;
  font-weight: 700;
  transition: transform .15s ease, background .2s ease, border-color .2s ease;
}
.nav-button:hover {
  background: #fff;
  border-color: #bbb;
  transform: translateY(-1px);
}
/* 端で無効になったとき */
.nav-button.swiper-button-disabled {
  opacity: .35;
  cursor: default;
  transform: none;
}

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