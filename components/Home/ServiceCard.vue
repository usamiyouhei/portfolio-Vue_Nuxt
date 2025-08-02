<template>
  <Swiper>
    <ul class="service__items">
          <li class="service__item fade-in fade-in-up">
            <h3>{{ service.title }}</h3>
            <img :src="service.img" alt="service.title" />
            <p v-html="service.description" />
          </li>
          <!-- <li class="service__item fade-in fade-in-up">
            <h3>Webデザイン</h3>
            <img src="./img2/design.png" alt="" />
            <p>
              クライアント様からのイメージを詳しくお聞きし、より良いデザインを作っていきます。
            </p>
          </li>
          <li class="service__item fade-in fade-in-up">
            <h3>Webサイトリニューアル</h3>
            <img src="./img2/siterenewal.png" alt="" />
            <p>現状のWebサイトの改良や修正なども可能です。</p>
          </li>
          <li class="service__item fade-in fade-in-up">
            <h3>飲食店コンサルタント</h3>
            <img src="./img2/consulting.png" alt="" />
            <p>
              飲食店、パティシエの経験を活かしコンサルタントを行っております。<br />
              ケーキ屋、カフェ、デザート屋などお気軽にご相談ください。
            </p>
          </li>
          <li class="service__item fade-in fade-in-up">
            <h3>レシピ開発</h3>
            <img src="./img2/cake.png" alt="" />
            <p>
              ２０年分のレシピや新作の考え方を活かしてレシピ１品から承ります。<br />
              栄養学も学習中で体に良いものも考案できます。
            </p>
          </li>
          <li class="service__item fade-in fade-in-up">
            <h3>写真・動画撮影</h3>
            <img src="./img2/camera.png" alt="" />
            <p>
              写真、動画撮影も承ります。<br />
              ポートフォリオの写真は自分が撮影しました。
            </p>
          </li> -->
        </ul>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper,SwiperSlide } from "swiper/vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
  defineProps<{
  service: {
    title: string;
    img: string;
    description: string;
  }
  }>()

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
.service__items {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 50px auto;
  flex-wrap: wrap;
  gap: 3.5%;
  padding: 0;
}
.service__item {
  width: 31%;
  margin-bottom: 24px;
  background-color: rgba(255, 243, 230, 100);
  border-radius: 6px;
}
.service__item h3 {
  font-size: 1rem;
}
.service__item img {
  margin: auto;
  width: 80%;

}
.service__item:nth-child(2) img,
.service__item:nth-child(6) img {
  width: 55%;
  margin: 20px auto 0;
}
.service__item:nth-child(3) img,
.service__item:nth-child(5) img {
  width: 50%;
  margin: 30px auto 10px;
}
.service__item p {
  width: 70%;
  /* text-align: center; */
  margin: 20px auto;
}
</style>