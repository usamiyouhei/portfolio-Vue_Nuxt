<template>
    <section id="news" class="news">
      <div class="news__inner inner">
        <div class="news__title section-title">
          <SectionTitle sectionTitle="News" sectionSubTitle="お知らせ"/>
        </div>
        <ul class="news__items">
          <li v-for="n in props.items" :key="n.slug" class="news-item">
            <NewsItem :item="n"/>
          </li>
        </ul>
      </div>
      <div class="news__more">
        <!-- <NuxtLink class="more-link" to="/news">View More</NuxtLink> -->
        <Button buttonText="View More" link="/usami/news"/>
      </div>
    </section>
</template>

<script setup lang="ts">
import SectionTitle from "../common/SectionTitle.vue";
import NewsItem from "../Home/NewsItem.vue";
import type { News } from "@/types/news";
import  Button  from "../common/Button.vue";

/**===================================================================================================================
 * 
 ===================================================================================================================**/
// const props = defineProps<{ items: News [] }>()
// items が来なくても空配列にする
const props = withDefaults(defineProps<{ items?: News[] }>(), {
  items: () => []
})
//  const news = [
//   {
//     title:"新ポートフォリオ作成しております",
//     date:"2024.01.29",
//     thumbnail:"/img/news-img2.jpg"
//   },
//   {
//     title:"あけましておめでとうございます",
//     date:"2024.01.01",
//     thumbnail:"/img/news-img1.jpg"
//   },
//   {
//     title:"クリスマスデザートコーススタート",
//     date:"2023.12.15",
//     thumbnail:"/img/news-img3.jpg"
//   },
// ]

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
.news {
  margin-bottom: 10px;
}
.news__inner {
  position: relative;
  z-index: 100;
}
.news__items {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  margin: 50px auto 0;
  width: 70%;
  text-align: center;
  position: relative;
  z-index: 100;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.news__item {
  margin-bottom: 10px;
}

.news-list {
  display: grid;
  gap: 16px;
}

.news__more {
  margin-top: 12px;
  text-align: center;
}

.more-link {
  display:inline-block;
  padding:10px 16px;
  border-radius:12px;
  border:1px solid #ddd;
}


@media screen and (max-width: 1024px) {
  .news .section-title {
    text-align: center;
  }
  .news .section-title h2 {
    position: absolute;
    right: 8px;
  }
  .news-list > div:first-of-type {
    border-right: transparent;
  }
  .news-list > div:last-of-type {
    border-left: transparent;
  }
}
@media screen and (max-width: 768px) {
  news .section-title h2 {
    right: 35px;
    top: 110px;
  }
  .news__items-wrap {
    padding: 20px 0;
    flex-direction: column;
  }
  .news__items-wrap img {
    margin-inline: auto;
  }

  .news-item__title {
    padding: 0 0 50px 0;
  }
  .news-item__date {
    padding-top: 20px;
  }
}
@media screen and (max-width: 375px) {
  .news-item__title {
    padding: 0 0 50px 0;
  }
  .news__item {
    width: 100%;
  }
}

</style>