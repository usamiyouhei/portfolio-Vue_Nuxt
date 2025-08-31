<template>
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
.works-item {
  width: 31%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  transition: transform 0.8s;
}
.works-item a {
  display: block;
  overflow: hidden;
  position: relative;
  padding: 20px;
}

.works-item img {
  filter: saturate(20%);
  filter: sepia(80%);
  transition: filter 0.5s, transform 0.5s;
  vertical-align: top;
  height: 30vh;
}
.works-item div {
  overflow: hidden;
}
.works-item:hover img {
  position: relative;

  transform: scale(1.1);
  filter: saturate(100%);
}
/* 0.5秒間かけてフェードイン */
.fadeInAnime500ms {
  animation-name: fadeIn500ms;
}
.fadeIn500ms {
  animation-delay: 500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.fadeInAnime1s {
  animation-name: fadeIn1s;
}
.fadeIn1s {
  animation-delay: 1s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn1s {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.fadeInAnime1500ms {
  animation-name: fadeIn1500ms;
}
.fadeIn1500ms {
  animation-delay: 1500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn1500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 2秒間かけてフェードイン */
.fadeInAnime2s {
  animation-name: fadeIn2s;
}
.fadeIn2s {
  animation-delay: 2s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn2s {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 2秒間かけてフェードイン */
.fadeInAnime2500ms {
  animation-name: fadeIn2500ms;
}
.fadeIn2500ms {
  animation-delay: 2500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn2500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 2秒間かけてフェードイン */
.fadeInAnime3s {
  animation-name: fadeIn3s;
}
.fadeIn3s {
  animation-delay: 3s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn3s {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 3.5秒間かけてフェードイン */
.fadeInAnime3500ms {
  animation-name: fadeIn3500ms;
}
.fadeIn3500ms {
  animation-delay: 3500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn3500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 4秒間かけてフェードイン */
.fadeInAnime4s {
  animation-name: fadeIn4s;
}
.fadeIn4s {
  animation-delay: 4s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn4s {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* 4.5秒間かけてフェードイン */
.fadeInAnime4500ms {
  animation-name: fadeIn4500ms;
}
.fadeIn4500ms {
  animation-delay: 4500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform: translateY(50px);
  opacity: 0;
}
@keyframes fadeIn4500ms {
  0% {
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
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