<template>
  <section class="works inner" id="works">
    <div class="works__title section-title">
      <SectionTitle sectionTitle="Works" sectionSubTitle="制作実績" />
    </div>

    <div v-for="cat in categories" :key="cat" class="works-category">
      <h3 class="works__heading">{{ catLabels[cat] }}</h3>
      <Swiper>
        <SwiperSlide v-for="w in byCat(cat)" :key="w.id">
          <WorkCard :work="w"/>
        </SwiperSlide>
      </Swiper>
        <a class="read-more__button" href="./works.html">
          <span>Gallery page</span>
        </a>
    </div>

    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import  SectionTitle  from "../common/SectionTitle.vue";
import WorkCard from "../Home/WorkCard.vue";
import type { Work } from "../../types/works";
import { works } from "../../data/works";
/**===================================================================================================================
 * 
 ===================================================================================================================**/

type Cat = Work['category']

const categories: Cat[] = ['patissier', 'programming', 'design', 'hobby']
const catLabels: Record<Cat, string> = {
  patissier: 'Patissier',
  programming: 'Programming',
  design: 'Design',
  hobby: 'Hobby'
}

const byCat = (c: Cat): Work[] => works.filter(w => w.category === c)
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
.inner {
  /* width: 100%; */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
li {
  list-style: none;
}
a {
  color: #000;
  text-decoration: none;
}
.works {
  margin: 60px auto;
  position: relative;
  z-index: 100;
}
.section-title {
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 130px;
  /* display: inline-block; */
  position: relative;
  margin-left: 15%;
}
.section-title span {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 4rem;
  font-family: 'Italianno';
  letter-spacing: 0.15rem;

  /* border-bottom: 1px solid #333; */
}

.section-title h2 {
  position: absolute;
  top: 120px;
  right: -10px;
  font-size: 12px;
  font-family: 'Yu Gothic', sans-serif;
  /* font-weight: ; */
}
.section-title span::after {
  position: absolute;
  bottom: 5px;
  right: 0px;
  content: '';
  border: solid 2px #bf901a;
  width: 50px;
  /* height: 4px; */
  border-radius: 5px;
  /* width: 10px; */
}
/* .about .section-title {
  margin-left: 10%;
} */
.works__title.section-title {
  margin: 50px auto;
}
.works .section-title h2 {
  position: absolute;
  right: -20px;
}
.works__inner.inner {
  padding: 0;
}
.works__list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  /* margin: 0 auto; */
  padding-top: 50px;
  /* max-width: 2000px; */
  gap: 30px;
  padding-right: 0;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 35px;
  row-gap: 46px;
}

.works .read-more__button span {
  margin-top: 100px;
}
.button__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
@media screen and (max-width: 1024px) {
  .works .section-title h2 {
    position: absolute;
    right: 25px;
  }
  .works .section-title {
    margin: 0 auto;
  }
  .works .section-title h2 {
    right: -20px;
  }
  .works__inner {
    min-width: 100%;
  }
  .works__list {
    /* flex-wrap: wrap; */
    width: 100%;
    justify-content: center;
    /* margin: 0 auto; */
    gap: 20px;
  }
}
@media screen and (max-width: 768px) {
  .works {
    margin: 0;
  }
  .works .section-title {
    position: relative;
  }

  .works-list {
    gap: 10px;
    padding: 20px;
  }
  .works-item {
    width: 40%;
  }
  .works-item img {
    width: 100%;
    height: 20vh;
  }
  .works-inner {
    max-width: 700px;
    flex-wrap: wrap;
    margin: 20px;
  }
}

@media screen and (max-width: 375px) {
  .works-item {
    width: 100%;
  }
}
</style>