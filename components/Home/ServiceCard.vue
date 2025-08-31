<template>
          <li 
            ref="root"
            class="service__item fade-in"
            :class="{'fade-in-up-visible': visible}"
            >
            <NuxtLink :to="resolvedTo" class="card-link">
            <div class="svc-card">
              <h3 class="svc-card__title">{{ service.title }}</h3>
              <img class="svc-card__img" :src="service.img" :alt="service.title" />
              <p class="svc-card__desc" v-html="service.description" />
            </div>
            </NuxtLink>
          </li>
</template>

<script setup lang="ts">
import { Swiper,SwiperSlide } from "swiper/vue";
import { useIntersectionObserver } from "@vueuse/core";
import { ref,computed } from "vue";
/**===================================================================================================================
 *
===================================================================================================================**/

  type Service = {
    title: string;
    img: string;
    description: string;
    slug?: string;
  }

  const props = defineProps<{
  service: Service
  to?: string}>()

  const resolvedTo = computed(() => {
    if (props.to) return props.to
    if (props.service.slug) return `/service/${props.service.slug}`
  })

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
.card-link {
  display:block;
  text-decoration:none;
  color:inherit;
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