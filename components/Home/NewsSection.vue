<template>
    <section id="news" class="news">
      <div class="news__inner inner">
        <div class="news__title section-title">
          <SectionTitle sectionTitle="News" sectionSubTitle="お知らせ"/>
        </div>
        <ul class="news__items">
          <NewsItem 
            v-for="(item , i) in news.slice(0,3)"
            key="i"
            :title="item.title"
            :date="item.date"
            :thumbnail="item.thumbnail"
            />
        </ul>
      </div>
        <Button buttonText="Read More" link="/usami/news"/>
    </section>
</template>

<script setup lang="ts">
import SectionTitle from "../common/SectionTitle.vue";
import NewsItem from "../Home/NewsItem.vue";
import Button from "../common/Button.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const news = [
  {
    title:"新ポートフォリオ作成しております",
    date:"2024.01.29",
    thumbnail:"/img/news-img2.jpg"
  },
  {
    title:"あけましておめでとうございます",
    date:"2024.01.01",
    thumbnail:"/img/news-img1.jpg"
  },
  {
    title:"クリスマスデザートコーススタート",
    date:"2023.12.15",
    thumbnail:"/img/news-img3.jpg"
  },
]

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
  padding: 101px 0 30px;
}
.news__inner {
  position: relative;
  z-index: 100;
}
.news__items {
  margin: 50px auto 0;
  width: 70%;
  text-align: center;
  position: relative;
  z-index: 100;
}
.news__items-wrap {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid #a5a2a2;
}

.news-item__date {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  line-height: 1.786;
  display: inline-block;
  padding-bottom: 10px;
  font-weight: bold;
}
.news__item {
  text-align: start;
  width: 50%;
  margin-inline: auto;
}
.news-item__title {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 15px;
  letter-spacing: 0.05em;
  line-height: 1.667;
  /* margin-left: 20px; */
  width: 100%;
  /* padding: 0 30px 30px; */
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.news__img {
  width: 200px;
  /* padding-left: 80px; */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
  background-color: #b9c7da;
  height: 150px;
  border-radius: 3px;
  box-shadow: -2px -2px 5px 0px rgba(255, 255, 255, 0.3), 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
}

.news .read-more__button {
  margin: 50px auto;
  position: relative;
  z-index: 100;
}
.button__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
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