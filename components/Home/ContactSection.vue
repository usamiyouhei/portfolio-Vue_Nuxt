<template>
  <section class="contact" id="contact">
      <div class="contact__inner inner">
        <div class="contact__wrap">
          <SectionTitle sectionTitle="Contact" sectionSubTitle="お問い合わせ" />
          <p class="contact__text">
            無料相談も行っておりますので<br />
            お気軽にお問い合せください。<br />
            基本的に即レス対応、遅くても<br />
            当日中に返信させて頂きます。
          </p>
          <p class="contact__text">
            稼働時間<br />
            朝5時〜23時
          </p>
        </div>

        <div class="contact__form">
          <form class="form" action="#" method="post">
            <div class="form_row">
              <label for="name">お名前</label>
              <input type="text" id="name" name="your-name" />
            </div>

            <div class="form_row">
              <label for="email">メールアドレス</label>
              <input type="email" id="email" name="your-email" />
            </div>

            <div class="form_row">
              <label for="email">お問い合せ内容</label>
              <select name="" id="">
                <option value="-----">------------</option>
                <option value="webcontents">Web制作</option>
                <option value="appcreate">アプリ開発</option>
                <option value="webdesign">Figmaデザイン</option>
                <option value="consaltant">飲食業コンサル</option>
                <option value="cake">お菓子について</option>
                <option value="photo">写真撮影</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div class="form_row form_row--textarea">
              <label for="message">内容</label>
                <textarea
                  id="message"
                  name="your-message"
                  cols="30"
                  rows="10"
                ></textarea>
            </div>

            <button type="submit">
              送信
              <i class="fa-solid fa-angles-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import SectionTitle from "../common/SectionTitle.vue";

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
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.contact {
   background-image: url(/img/news-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.contact__inner {
  justify-content: center;
  margin: 80px auto 0;
}
.contact__wrap {
  padding: 20px 0;
  margin: 20px;
}

.contact .section-title h2 {
  position: absolute;
  right: 90px;
}
.contact__text {
  text-align: center;
  margin: 30px auto;
  line-height: 1.78;
  letter-spacing: 0.05em;
}

.contact__form {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.contact__form dl {
  display: flex;
  flex-wrap: wrap;
}
.contact__form dt {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: end;
}
.contact__form dd {
  width: 70%;
  min-width: 30%;
  border-radius: 6px;
  margin: 0;
  text-align: start;
  line-height: 3;
}

</style>