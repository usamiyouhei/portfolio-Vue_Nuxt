<template>
  <section class="about scroll-point" id="about">
    <div class="about__inner inner" id="fadeElement">
      <div class="about__title section-title">
        <span class="section-title__main">About</span>
        <h2 class="section-title__sub">自己紹介</h2>
        <SectionTitle></SectionTitle>
      </div>
      <div class="about__wrap fade-in fade-in-up">
        <div class="about__text">
          <p>
            はじめまして、宇佐美洋平と申します。<br />
            名古屋でデザートコースのお店を経営している<br />
            オーナーシェフパティシエです。
          </p>
          <p>
            作ることが好きでパティシエをしていますが、<br />
            他にプログラミングでのWeb制作も好きで<br />
            日々の学習に勤しんでおります。
          </p>
          <p>
            年間2000人に対応した接客術や<br />
            クオリティーの高い制作物、<br />
            細部まで突き詰める能力を<br />
            Web制作にも活かしていきます。
          </p>
          <p class="about__policy">即行動・傾聴力・追求心</p>
          <p>の三箇条が信念です。</p>
        </div>
        <img src="/public/img/about-my-photo.jpg" alt="本人の写真" loading="lazy" />
      </div>
    </div>
    <div class="button__wrap">
      <a href="/usami/about">
        <test02 fontFamily="system-ui" color="" back=" #fedaf36f" :hoverType="18" :afterType="3">Read More</test02>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
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
  justify-content: center;
  width: 100%;
  background-image: url(/public/img/aboutback.png);
  background-size: 600px 500px;
  background-repeat: no-repeat;
  background-position: 20%;
  &.is-scrollIn {
    opacity: 1;
    transform: translate(0, -50px);
  }
}

/* section-title */
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
.about img {
  object-fit: cover;
  border-radius: 10px;
  width: 40%;
}
.button__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
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