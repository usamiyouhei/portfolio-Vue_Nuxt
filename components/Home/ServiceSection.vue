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
            :pagination="{ clickable: true }"
            :navigation="{ nextEl: '.svc-next', prevEl: '.svc-prev' }"
            :keyboard="{ enabled: true}"
            class="service-swiper"
            >
            <SwiperSlide v-for="service in filteredServices" :key="service.slug">
              <ServiceCard :service="service" :to="`/services/${service.slug}`"/>
            </SwiperSlide>
          </Swiper>
            <button class="nav-button svc-next" aria-label="次へ">→</button>
           </div>
        </div>

        <ul class="service__items only-desktop">
          <ServiceCard v-for="service in filteredServices" 
          :key="service.slug" 
          :service="service"
          :to="`services/${service.slug}`"/>
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
import { ref, computed } from "vue";

/**===================================================================================================================
 * 
 ===================================================================================================================**/
  const services = [
    { 
      title: "Webサイト制作", 
      img: '/img/Static website-development.svg',
      description: '新規サイトの立ち上げから運用まで幅広く対応。レスポンシブデザインで、スマホやタブレットでも快適に。動きを取り入れたアニメーションで魅力的な体験を演出します。  ',
      category: 'web',
      slug:'website-development'
    },
    { 
      title: "Webデザイン", 
      img: '/img/UI-UX design-amico.svg',
      description: 'ヒアリングを通じてご要望やイメージを丁寧に汲み取り、ユーザーに伝わるデザインをご提案。世界観を大切にした、より良いビジュアルを形にします。  ',
      category: 'web',
      slug:'web-design'
    },
    { 
      title: "Webサイトリニューアル", 
      img: '/img/Setup-amico.svg',
      description: '既存サイトの改善や調整もお任せください。デザインの刷新から細かな修正まで柔軟に対応。課題を解決し、より効果的なサイトへと導きます。  ',
      category: 'web',
      slug:'website-renovation'
    },
     { 
      title: "レシピ開発", 
      img: '/img/Recipe book-amico.svg',
      description: '20年以上の経験と新作開発のノウハウを活かし、1品からオリジナルレシピを制作いたします。栄養学の観点から、体に優しいメニュー提案も可能です。  ',
      category: 'creator',
      slug:'recipe-development'
    },
    { 
      title: "飲食店コンサルタント", 
      img: '/img/Marketing consulting-rafiki.svg',
      description: '飲食店やパティシエとしての現場経験をもとに、ケーキ屋・カフェ・デザート専門店などをサポート。店舗運営やメニュー開発まで幅広くご相談いただけます。  ',
      category: 'creator',
      slug:'restaurant-consulting'
    },
    { 
      title: "写真・動画撮影", 
      img: '/img/Photo-amico.svg',
      description: '料理やスイーツの写真・動画撮影も対応。 ポートフォリオ掲載の写真はすべて自ら撮影しました。魅力が伝わるビジュアルを丁寧に切り取ります。  ',
      category: 'creator',
      slug:'photo-video-shooting'
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
.service {
  background-image: url(/img/news-background.jpg);
  background-size: cover;
  padding-bottom: 30px;
}
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
.service-swiper {
  width: 100%;
  padding: 16px 24px 36px;
 /* pagination の位置を下＆余白 */
  :deep(.swiper-pagination) {
    position: static;
    margin-top: 2px;
  }

  /* ドットの見た目 */
  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background: #c7c7c7;
    opacity: 1;
    transition: transform .2s ease, background .2s ease;
    margin: 0 6px; /* 横の間隔 */
  }

  :deep(.swiper-pagination-bullet-active) {
    background: #bf901a;
    transform: scale(1.2);
  }
}


/* カスタムナビボタン */
.nav-wrap {
  position: relative; 
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;               /* スライドより前面に */
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
  transform: translateY(-50%) translateX(0); /* hoverで縦位置がズレないよう */
}

/* 端で無効になったとき */
.nav-button.swiper-button-disabled {
  opacity: .35;
  cursor: default;
  transform: none;
}

.svc-prev { left: 36px; }
.svc-next { right: 36px; }

/* グリッド（PC用） */
.service__items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 0;
  // margin: 0px auto 0px;
}
.service__items.-single { display: block; } /* 1枚だけ中央に */

.only-mobile { display: block; }
.only-desktop { display: none; }

@media (min-width: 1024px) {
  .only-mobile { display: none; }
  .only-desktop { display: grid; grid-template-columns: repeat(3, 1fr); }
}
</style>