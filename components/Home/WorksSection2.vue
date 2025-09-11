<template>
  <section class="works" id="works">
    <div class="works__inner">
        <SectionTitle sectionTitle="Works" sectionSubTitle="制作実績" />

      <div v-if="ready">
        <!-- PC: 2×2 グリッド（カテゴリごとに1枠） -->
        <template v-if="tabletUp">
          <ul class="works__grid">
            
              <!-- 0件カテゴリはスキップ -->
              <li v-for="c in categories" :key="c" class="works__grid-item">
                <h3 class="works__cat">{{ catLabels[c] }}</h3>

                <!-- 0枚時 -->
                <WorkCard v-if="byCat(c).length === 0"
                  :empty="true"
                  :category="c"
                  :placeholder-data="{ title: 'Coming soon...' , subTitle: '現在準備中'}"
                  variant="gallery"
                  aspect="3x2"
                />

                <!-- 1枚だけ：カード単体 -->
                <WorkCard
                  v-else-if="byCat(c).length === 1"
                  :work="byCat(c)[0]"
                  variant="gallery"
                  aspect="3x2"
                />

                <!-- 2枚以上：枠内だけ Swiper -->
                <ClientOnly v-else>
                  <Swiper
                    :modules="[Navigation, Pagination]"
                    navigation
                    :pagination="{ clickable: true }"
                    :slides-per-view="1"
                    :space-between="16"
                    :loop="byCat(c).length > 1"
                    class="work-inner-swiper"
                  >
                    <SwiperSlide v-for="w in byCat(c)" :key="w.id">
                      <WorkCard :work="w" variant="gallery" aspect="3x2" />
                    </SwiperSlide>
                  </Swiper>
                </ClientOnly>
              </li>
          </ul>
        </template>

        <!-- Mobile: カテゴリごとに縦並び + 全幅Swiper -->
        <template v-else>
            <div v-for="c in categories" :key="c" class="works-category">
              <h3 class="works__cat">{{ catLabels[c] }}</h3>

              <!-- 0枚時 -->
              <template v-if="byCat(c).length === 0">
                <WorkCard 
                  :empty="true"
                  :category="c"
                  :placeholder-data="{ title: 'Coming soon...' , subTitle: '現在準備中'}"
                  variant="gallery"
                  aspect="3x2"
                />
                </template>

              <ClientOnly v-else>
                <Swiper
                  :modules="[Navigation, Pagination]"
                  navigation
                  :pagination="{ clickable: true, dynamicBullets: true }"
                  :slides-per-view="1"
                  :space-between="16"
                  :key="`swiper-${c}`"
                  :loop="byCat(c).length > 1"
                  :breakpoints="getBreakpoints(byCat(c).length)"
                  class="works-swiper"
                >
                  <SwiperSlide v-for="w in byCat(c)" :key="w.id">
                    <WorkCard :work="w" variant="gallery" />
                  </SwiperSlide>
                </Swiper>
              </ClientOnly>
            </div>
          </template>
      </div>

      <!-- <Button buttonText="View More" link="/usami/works"/> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SectionTitle from '../common/SectionTitle.vue'
import WorkCard from '../Home/WorkCard.vue'
import Button from '../common/Button.vue'
import type { Work } from '../../types/works'
import { works } from '../../data/works'

type Cat = Work['category']
const categories: Cat[] = ['patissier','programming','design','hobby']
const catLabels: Record<Cat,string> = {
  patissier:'Patissier', programming:'Programming', design:'Design', hobby:'Hobby'
}
const byCat = (c: Cat) => works.filter(w => w.category === c)

const noImageSrc = '/img/noImg.png'


const width = ref(0)
const updateW = () => { width.value = window.innerWidth }
const ready = ref(false)
onMounted(() => { ready.value = true; updateW(); window.addEventListener('resize', updateW) })
onBeforeUnmount(() => window.removeEventListener('resize', updateW))
const mdUp = computed(() => width.value >= 1024)
const tabletUp = computed(() => width.value >= 768)

// const pcLayout = ref<'slider'|'grid'>('slider')

/** PCは2枚・中央寄せなし・オフセット0、loopは3枚以上で */
const getBreakpoints = (count: number) => ({
  768:  { slidesPerView: 1.5, spaceBetween: 18 },
  1024: {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    loop: count > 2,
  },
})
</script>

<style scoped lang="scss">

.works{
  --workcard-max: 400px;
  --workcard-gap: 16px;
  padding: 32px 0 8px;
  &__inner{ max-width: 1120px; margin: 0 auto; padding: 0 16px; }
  &__title{ font-size: 28px; margin: 0 0 12px; display:flex; align-items: baseline; gap: 10px; }
  &__head{ display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px; }
  &__cat{ 
    font-size: 18px; 
    margin: 0;
    width: 100%;
    max-width: var(--workcard-max);
    padding: 0 4px;
    text-transform: capitalize;
  }
  &__view{ display:none; gap:8px; }
  .view-btn{ font-size:12px; border:1px solid #2b2e44; background:#12131a; color:#c8cbe0; padding:6px 10px; border-radius:8px; cursor:pointer; }
  .view-btn.active{ border-color:#c9a227; color:#fff; }

  /* PCグリッド */
  &__grid{
    display:grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: var(--workcard-gap);
    list-style:none; margin:0; padding:0;
  }
  &__grid-item{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.works__grid-item > :deep(.work-inner-swiper){
  width:100%;
  max-width: var(--workcard-max);  /* 240 / 280 / 300 を使っているやつ */
}



:deep(.card-gallery),
:deep(.work-card){
  width: 100%;
  max-width: var(--workcard-max);
  margin: 0 auto;
}

/* スライドは中身を中央寄せ（幅はカード側で決める） */
:deep(.work-inner-swiper .swiper-slide),
:deep(.works-swiper .swiper-slide){
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.works-category { 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 16px;
  margin: 28px 0 44px; }

  .works-category :deep(.works-swiper),
  .works-category > .card-gallery{
    width: 100%;
    max-width: var(--workcard-max);
  }

/* Swiperは“チラ見せ”＋初期高さを確保（チラつき対策） */
:deep(.swiper){ overflow: hidden; min-height: 1px; }
:deep(.swiper-slide){ height: auto; }

:deep(.swiper-button-prev),
:deep(.swiper-button-next){
  color: #c9a227;   
  width: 40px; 
  height: 40px;
  border-radius: 999px;
  background: rgba(0,0,0,.35);
  backdrop-filter: blur(2px);
  color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.25);
}
:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after){
  font-size: 18px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullets){ bottom: 8px !important; }
:deep(.swiper-pagination-bullet){
  width: 8px; height: 8px;
  background: rgba(255,255,255,.6);
  opacity: 1;
}
:deep(.swiper-pagination-bullet-active){
  background: #c9a227;          /* ゴールドに合わせる */
}

:deep(.work-inner-swiper .swiper-button-prev){ left: calc(50% - var(--workcard-max)/2 - 8px); }
:deep(.work-inner-swiper .swiper-button-next){ right: calc(50% - var(--workcard-max)/2 - 8px); }
:deep(.work-inner-swiper .swiper-button-prev:after),
:deep(.work-inner-swiper .swiper-button-next:after){ font-size:16px; }

:deep(.work-inner-swiper .swiper-pagination-bullets){ bottom:6px !important; }
:deep(.work-inner-swiper .swiper-pagination-bullet){ width:6px; height:6px; background:rgba(0,0,0,.35); opacity:1; }
:deep(.work-inner-swiper .swiper-pagination-bullet-active){ background:#c9a227; }
/* 余白は slidesOffsetBefore/After で管理するので padding は付けない */

@media (min-width:1024px){
  .works {
    --workcard-max: 300px;
    --workcard-gap: 20px;
  }
  .works__view{ display:flex; }
  .works__inner {
    padding: 0;
  }
}

.card-gallery--empty{
  border:1px dashed #e5e7eb;           /* 破線で“空”を表現 */
  background:#fafafa;
  box-shadow:none;
}
.card-gallery--empty .card-gallery__media{
  background:#f3f4f6;
}
.card-gallery--empty .card-gallery__title{
  color:#6b7280;
}
.card-gallery--empty .card-gallery__sub{
  color:#9ca3af;
}

@media (min-width:768px) and (max-width:1023px){
  .works {
    --workcard-max: 280px;
    --workcard-gap: 18px;
  }
  .works__inner {
    padding: 0 24px;
  }
  :deep(.work-inner-swiper .swiper-button-prev),
  :deep(.work-inner-swiper .swiper-button-next){
    width:28px; height:28px;
  }
  :deep(.work-inner-swiper .swiper-button-prev:after),
  :deep(.work-inner-swiper .swiper-button-next:after){ font-size:16px; }
  :deep(.work-inner-swiper .swiper-pagination-bullets){ bottom:6px !important; }
  :deep(.work-inner-swiper .swiper-pagination-bullet){ width:6px; height:6px; }
}
</style>