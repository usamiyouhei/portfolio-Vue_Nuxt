<template>
  <section class="works" id="works">
    <div class="works__inner">
      <div class="works__title section-title">
        <SectionTitle sectionTitle="Works" sectionSubTitle="制作実績" />
      </div>

      <div v-if="ready">
        <!-- PC: 2×2 グリッド（カテゴリごとに1枠） -->
        <template v-if="tableUp">
          <ul class="works__grid">
            
              <!-- 0件カテゴリはスキップ -->
              <li v-for="c in categories" :key="c" class="works__grid-item">
                <h3 class="works__cat">{{ catLabels[c] }}</h3>

                <!-- 0枚時 -->
                <div v-if="byCat(c).length === 0" 
                  class="card-gallery card-gallery--empty">
                  <div class="card-gallery__media">
                    <img :src="noImageSrc" alt="" loading="lazy" decoding="async">
                  </div>
                  <div class="card-gallery__body">
                    <h3 class="card-gallery__title">Coming soon...</h3>
                    <p class="card-gallery__sub">現在準備中</p>
                  </div>
                </div>

                <!-- 1枚だけ：カード単体 -->
                <WorkCard
                  v-if="byCat(c).length === 1"
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
               <div v-if="byCat(c).length === 0"
                 class="card-gallery card-gallery--empty">
                <div class="card-gallery__media">
                    <img :src="noImageSrc" alt="" loading="lazy" decoding="async">
                  </div>
                  <div class="card-gallery__body">
                    <h3 class="card-gallery__title">Coming soon...</h3>
                    <p class="card-gallery__sub">現在準備中</p>
                  </div>
                </div>

              <ClientOnly v-else>
                <Swiper
                  :modules="[Navigation, Pagination]"
                  navigation
                  :pagination="{ clickable: true, dynamicBullets: true }"
                  :slides-per-view="1"
                  :space-between="16"
                  :loop="byCat(c).length > 1"
                  :breakpoints="getBreakpoints(byCat(c).length)"
                  class="works-swiper"
                  style="width:100%"
                >
                  <SwiperSlide v-for="w in byCat(c)" :key="w.id">
                    <WorkCard :work="w" variant="gallery" />
                  </SwiperSlide>
                </Swiper>
              </ClientOnly>
            </div>
          </template>
      </div>

      <Button buttonText="View More" link="/usami/works"/>
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

// カテゴリー内の作品を４グループに均等分配
const CELLS_PER_CATEGORY = 4
const groupsByCat = (c: Cat): Work[][] => {
  const arr = byCat(c)
  // 空でも４マス分返す
  const groups: Work[][] = Array.from({ length: CELLS_PER_CATEGORY }, () => [])
  arr.forEach((w, i) => {
    groups[i % CELLS_PER_CATEGORY].push(w)
  })
  return groups
}

const width = ref(0)
const updateW = () => { width.value = window.innerWidth }
const ready = ref(false)
onMounted(() => { ready.value = true; updateW(); window.addEventListener('resize', updateW) })
onBeforeUnmount(() => window.removeEventListener('resize', updateW))
const mdUp = computed(() => width.value >= 1024)
const tableUp = computed(() => width.value >= 768)

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
:root {
  --workcard-max: 240px;
  --workcard-gap: 16px;
}

.works{
  padding: 32px 0 8px;
  &__inner{ max-width: 1120px; margin: 0 auto; padding: 0 ; }
  &__title{ font-size: 28px; margin: 0 0 12px; display:flex; align-items: baseline; gap: 10px; }
  &__head{ display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px; }
  &__cat{ font-size: 18px; margin: 0; text-transform: capitalize; }
  &__view{ display:none; gap:8px; }
  .view-btn{ font-size:12px; border:1px solid #2b2e44; background:#12131a; color:#c8cbe0; padding:6px 10px; border-radius:8px; cursor:pointer; }
  .view-btn.active{ border-color:#c9a227; color:#fff; }

  /* PCグリッド */
  &__grid{ list-style:none; margin:0; padding:0; display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: var(--work-card-gap) }
  &__grid-item{ display: flex; justify-content: center; align-items: flex-start;}
}
.works__grid-item > .card-gallery,
.works__grid-item > .work-card,
.works__grid-item > .card-gallery--empty{
  width:100%;
  max-width: var(--workcard-max);
} 
.work-inner-swiper{ width:100%; }
:deep(.work-inner-swiper .swiper){ overflow:hidden; } /* はみ出し防止 */
:deep(.work-inner-swiper .swiper-slide){ height:auto; }


.works-category { margin: 28px 0 44px; }

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
:deep(.work-inner-swiper .swiper-button-prev){ left:6px; }
:deep(.work-inner-swiper .swiper-button-next){ right:6px; }
:deep(.work-inner-swiper .swiper-button-prev:after),
:deep(.work-inner-swiper .swiper-button-next:after){ font-size:16px; }

:deep(.work-inner-swiper .swiper-pagination-bullets){ bottom:6px !important; }
:deep(.work-inner-swiper .swiper-pagination-bullet){ width:6px; height:6px; background:rgba(0,0,0,.35); opacity:1; }
:deep(.work-inner-swiper .swiper-pagination-bullet-active){ background:#c9a227; }
/* 余白は slidesOffsetBefore/After で管理するので padding は付けない */

@media (min-width:1024px){
  :root {
    --workcard-max: 300px;
    --workcard-gap: 20px;
  }
  .works__view{ display:flex; }
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
  :root {
    --workcard-max: 280px;
    --workcard-gap: 18px;
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