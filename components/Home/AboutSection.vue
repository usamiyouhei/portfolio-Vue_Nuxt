<template>
  <section class="about scroll-point" id="about">
    <div class="about__inner inner" id="fadeElement">
       <SectionTitle></SectionTitle>
      <div class="about__wrap fade-in fade-in-up">
        <div class="about__text">
          <p>
            一皿のデザートと、体験のデザイン。
            パティシエとして、“記憶に残る時間”を作り続けてきました。
            いまはその表現を、デジタルにも広げています。
          </p>
          <!-- <p class="about__policy">即行動・傾聴力・追求心</p> -->
          <p>行動力、柔軟な視点、細部までのこだわり。<br/>
            この3つを大切にしながら、デジタルとアナログのものづくりをしています。</p>
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
import  SectionTitle  from "../common/SectionTitle.vue";
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