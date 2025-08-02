<template>
  <section class="about scroll-point" id="about">
    <div class="about__inner inner" id="fadeElement">
       <SectionTitle sectionTitle="about" sectionSubTitle="自己紹介"></SectionTitle>
      <div class="about__wrap fade-in fade-in-up">
        <img src="/public/img/about-my-photo.jpg" alt="本人の写真" loading="lazy" />
        <div class="about__text">
          <p>
            はじめまして。
            宇佐美洋平と申します。<br/>
            一皿のデザートと、体験のデザイン。<br/>
            パティシエとして、“記憶に残る時間”を作り続けてきました。<br/>
            いまはその表現を、デジタルにも広げています。
          </p>
          <p>行動力、柔軟な視点、細部までのこだわり。<br/>
            この3つを大切にしながら、デジタルとアナログのものづくりをしています。</p>
        </div>
      </div>
    </div>
   <Button/>
  </section>
</template>

<script setup lang="ts">
import  SectionTitle  from "../common/SectionTitle.vue";
import  Button  from "../common/Button.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
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
a {
  text-decoration: none;
}
.inner {
  /* width: 100%; */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.about {
  margin: 80px 0 0;
  width: 100%;
  justify-content: center;
}
.about .show {
  animation: var(--fadeAnimation);
}
.about__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-image: url(/public/img/aboutback.png);
  background-size: 300px 250px;
  background-repeat: no-repeat;
  background-position: 30%;
  &.is-scrollIn {
    opacity: 1;
    transform: translate(0, -50px);
  }
}
.about img {
  object-fit: cover;
  border-radius: 10px;
  width: 20%;
}
/* .about .section-title {
  margin-left: 10%;
} */
.about__text {
  width: 40%;
  line-height: 1.88;
  letter-spacing: 0.05em;
  font-size: 16px;
  margin: 20px 0px 20px 50px;
  /* text-align: center; */
}
.about__policy {
  font-size: 30px;
  font-weight: bold;
}


@media screen and (max-width: 1024px) {
  .section-title h2 {
    position: absolute;
    right: 30px;
    font-size: 12px;
  }
  .about .section-title h2 {
    right: -10px;
  }
  .about .section-title {
    margin: 0;
  }

  .about__inner {
    margin: 0 auto;
    max-width: 95%;
    flex-direction: column-reverse;
  }
  .about img {
    margin: 0 30px;
    border-radius: 10px;
    width: 50%;
    height: 60%;
  }
  .about__text {
    margin-inline: auto;
    /* width: 90%; */
  }
}
@media screen and (max-width: 768px) {
  .about .section-title h2 {
    right: 20px;
    top: 110px;
  }
}
@media screen and (max-width: 375px) {
  .about__text {
    width: 100%;
  }
}
</style>