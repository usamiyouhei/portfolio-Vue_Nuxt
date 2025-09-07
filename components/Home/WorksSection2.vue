<template>
  <section class="works" id="works">
    <div class="works__inner">
      <div class="works__title section-title">
        <SectionTitle sectionTitle="Works" sectionSubTitle="制作実績" />
      </div>

      <!-- マウント後だけ描画してSSR/CSRズレを抑える -->
      <div v-if="ready">
        <div v-for="cat in categories" :key="cat" class="works-category">
          <div class="works__head">
            <h3 class="works__cat">{{ catLabels[cat] }}</h3>

            <!-- PCだけ出す切替 -->
            <div class="works__view" v-if="mdUp">
              <button :class="['view-btn', { active: pcLayout === 'slider'}]" @click="pcLayout = 'slider'">スライド</button>
              <button :class="['view-btn', { active: pcLayout === 'grid'}]" @click="pcLayout = 'grid'">2×2</button>
            </div>
          </div>

          <!-- PC: grid 2×2 -->
          <ul v-if="mdUp && pcLayout === 'grid'" class="works__grid">
            <li v-for="w in byCat(cat)" :key="w.id" class="works__grid-item">
              <WorkCard :work="w" aspect="3x2"/>
            </li>
          </ul>

          <!-- Swiper（モバイル/PC共通・breakpointsで切替） -->
          <ClientOnly v-else>
            <Swiper
              :modules="[Navigation]"
              navigation
              :allow-touch-move="false"
              :grab-cursor="false"
              class="works-swiper"
              style="width:100%"

              :slides-per-view="1"
              :space-between="16"
              :centered-slides="true"
              :centered-slides-bounds="true"
              :slides-offset-before="12"
              :slides-offset-after="12"
              :loop="byCat(cat).length > 0"

              
              :breakpoints="getBreakpoints(byCat(cat).length)"
              :prevent-clicks="false"
              :prevent-clicks-propagation="false"
            >
              <SwiperSlide v-for="w in byCat(cat)" :key="w.id">
                <WorkCard :work="w" compact aspect="3x2"/>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>

      <Button buttonText="View More" link="/usami/works"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
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

const width = ref(0)
const updateW = () => { width.value = window.innerWidth }
const ready = ref(false)
onMounted(() => { ready.value = true; updateW(); window.addEventListener('resize', updateW) })
onBeforeUnmount(() => window.removeEventListener('resize', updateW))
const mdUp = computed(() => width.value >= 1024)

const pcLayout = ref<'slider'|'grid'>('slider')

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
  padding: 32px 0 8px;
  &__inner{ max-width: 1120px; margin: 0 auto; padding: 0 ; }
  &__title{ font-size: 28px; margin: 0 0 12px; display:flex; align-items: baseline; gap: 10px; }
  &__head{ display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px; }
  &__cat{ font-size: 18px; margin: 0; text-transform: capitalize; }
  &__view{ display:none; gap:8px; }
  .view-btn{ font-size:12px; border:1px solid #2b2e44; background:#12131a; color:#c8cbe0; padding:6px 10px; border-radius:8px; cursor:pointer; }
  .view-btn.active{ border-color:#c9a227; color:#fff; }

  /* PCグリッド */
  &__grid{ list-style:none; margin:0; padding:0; display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 20px; }
}

.works-category { margin: 28px 0 44px; }

/* Swiperは“チラ見せ”＋初期高さを確保（チラつき対策） */
:deep(.swiper){ overflow: hidden; min-height: 1px; }
:deep(.swiper-slide){ height: auto; }

:deep(.swiper-button-prev),
:deep(.swiper-button-next){
  color: #c9a227;           /* ゴールド系 */
}
:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after){
  font-size: 18px;
  font-weight: bold;
}
/* 余白は slidesOffsetBefore/After で管理するので padding は付けない */
.works-swiper { }
@media (min-width:1024px){
  .works__view{ display:flex; }
}
</style>