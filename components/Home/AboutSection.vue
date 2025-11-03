<template>
  <section class="about scroll-point" id="about">
    <div class="about__inner inner" id="fadeElement">
       <SectionTitle sectionTitle="About" sectionSubTitle="自己紹介"></SectionTitle>
      <div class="about__wrap fade-in fade-in-up">
        <img src="/public/img/about/about_my_photo.jpg" alt="本人の写真" loading="lazy" />
        <div class="about__text">
          <p>
            はじめまして。<br/>
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
  </section>
  <Button buttonText="View More" to="/about"/>
</template>

<script setup lang="ts">
import  SectionTitle  from "../common/SectionTitle.vue";
import  Button  from "../common/Button.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
definePageMeta({
  redirect: '/about'
})
 //------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
// .inner {
//   /* width: 100%; */
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// }
.about {
  margin: 40px 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
// .about .show {
//   animation: var(--fadeAnimation);
// }
.about__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  // background-image: url(/public/img/about/aboutback.png);
  background-size: 300px 250px;
  background-repeat: no-repeat;
  background-position: center;
  &.is-scrollIn {
    opacity: 1;
    transform: translate(0, -50px);
  }
}
.about img {
  object-fit: cover;
  border-radius: 12px;
  width: 60%;
  max-width: 300px;
  height: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about__text {
  width: 100%;
  max-width: 600px;
  line-height: 1.88;
  letter-spacing: 0.05em;
  font-size: 16px;
  // margin: 20px 0px 20px 50px;
   text-align: left; 
}



@media screen and (min-width: 768px) {
  .about__wrap {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    background-position: left center;
  }
  .about__inner {
    margin: 0 auto;
    max-width: 95%;
    flex-direction: column-reverse;
  }
  .about img {
    max-width: 280px;
    width: 40%;
  }
  .about__text {
    width: 55%;
    font-size: 17px;
  }
}
@media (max-width: 425px) {
  .about__text {
    padding: 0 18px;
  }
}
@media screen and (min-width: 1024px) {
  .about__wrap {
    max-width: 1000px;
    margin: 0 auto;
    gap: 60px;
  }
  .about__text {
    font-size: 18px;
  }
  .about img {
    width: 35%;
    max-width: 320px;
  }
}

</style>