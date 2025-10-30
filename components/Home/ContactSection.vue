<template>
  <section class="contact" id="contact">
      <div class="contact__inner inner">
        <div class="contact__wrap">
          <SectionTitle sectionTitle="Contact" sectionSubTitle="お問い合わせ" />
          <p class="contact__text">
          無料相談も行っておりますので、どうぞお気軽にご連絡ください。<br />
          可能な限り当日中に、遅くとも2〜3日以内にご返信いたします。
          </p>
          <p class="contact__text">
            稼働時間<br />
            朝10時〜22時
          </p>
        </div>

        <ContactForm mode="page" formClass="form--page"/>
      </div>
    </section>
</template>

<script setup lang="ts">
import SectionTitle from "../common/SectionTitle.vue";
import  Button  from "../common/Button.vue";
import { reactive } from "vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
type Form = {
  name: string,
  email: string,
  topic: string,
  message: string,
}

type Errors = Partial<Record<keyof Form, string>>

const form = reactive<Form>({
  name: '',
  email: '',
  topic: '',
  message: ''
}) 

const errors = reactive<Errors>({})

const validate = () => {
  errors.name = form.name ? '' : 'お名前を入力してください。'
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  errors.email = form.email ? (emailOk ? '' : 'メールの形式が正しくありません。') : 'メールアドレスを入力してください。'
  errors.topic = form.topic ? '' : 'お問い合わせ内容を選択してください。'
  errors.message = form.message ? '' : '内容を入力してください。'

  // 一つでもエラーがあれば無効
  return Object.values(errors).every((v) => !v)
}

const onSubmit = () => {
  if(!validate()){
    // 最初のエラー要素にフォーカス
    const firstErrKey = (Object.keys(errors) as (keyof Form) []).find(k => !!errors[k])
    if(firstErrKey){
      const el = document.getElementById(firstErrKey)
      el?.focus()
    }
    return
  }
  // 送信処理
  console.log('submit payload:', { ...form });
  alert('送信しました！')
}

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
/* === 配色トークン（ピンク／ゴールド／白） ====================== */
:root {
  --c-bg: #ffffff;
  --c-text: #111111;
  --c-muted: #8b90a0;

  --c-pink: #ff4d8d;   /* アクセント */
  --c-gold: #c9a227;   /* 強調（ブランド） */

  --c-border: #e2e4ea;
  --c-danger: #d33;
  --ring: 0 0 0 3px rgba(201, 162, 39, 0.32); /* gold のフォーカスリング */
}

.contact {
  background-image: url(/img/news-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: clip;
  width: 100%;
  margin-top: 40px;
}
.contact__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 16px 20px;
  gap: 40px;
}

.contact__wrap {
  text-align: center;
  padding: 0 12px;
  p {
    line-height: 1.78;
    letter-spacing: 0.05;
    margin-top: 20px;
  }
}

@media (max-width: 767px) {
  .contact__inner {
    padding: 60px 20px;
  }

}
</style>