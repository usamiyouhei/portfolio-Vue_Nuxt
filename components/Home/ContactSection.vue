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

        <div class="contact__form">
          <form class="form" action="#" method="post" @submit.prevent="onSubmit" novalidate>
            <div class="form__row">
              <label class="form__label" for="name">
                お名前<span class="req" aria-hidden="true">必須</span>
              </label>
              <input 
                class="form__control"
                :class="{ 'is-invalid' : !!errors.name}"
                type="text" 
                id="name" 
                name="your-name"
                v-model.trim="form.name"
                required
                autocomplete="name"
                :aria-invalid="!!errors.name"
                :aria-describedby="errors.name ? 'err-name' : undefined"
              />
              <p v-if="errors.name" class="form__error" id="err_name" role="alert">{{ errors.name }}</p>
            </div>

            <div class="form__row">
              <label class="form__label" for="email">
                メールアドレス<span class="req" aria-hidden="true">必須</span>
              </label>
              <input 
                class="form__control" 
                type="email" 
                id="email" 
                name="your-email"
                
              />
            </div>

            <div class="form__row">
              <label class="form__label" for="email">
                お問い合せ内容<span class="req" aria-hidden="true">必須</span>
              </label>
              <select class="form__control" name="" id="">
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

            <div class="form__row form_row--textarea">
              <label class="form__label" for="message">
                内容<span class="req" aria-hidden="true">必須</span>
              </label>
                <textarea class="form__control"
                  id="message"
                  name="your-message"
                  rows="6"
                ></textarea>
            </div>

            <Button class="form__submit" buttonText="submit" link="/usami/news">
                送信
            </Button>
            <!-- <button class="form__submit" type="submit">
                送信
              <i class="fa-solid fa-angles-right"></i>
            </button> -->
          </form>
        </div>
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
  padding-bottom: 60px;

  @media (min-width: 768px) {
    display: flex;
    gap: 60px;
    align-items: flex-start;
    max-width: 1000px;
  }
}
.contact__inner {
  justify-content: center;
  margin: 0px auto 0;
  width: 80%;
}

.contact__wrap {
  padding: 20px 0;
  margin: 20px auto;
  @media (min-width: 768px) {
    flex: 1;
    max-width: 50%;
    text-align: center;
  }
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
  @media (max-width: 768px) {
    flex: 1;
    max-width: 50%;
  }
}

.form {
  display: grid;
  gap: 16px;
}

.form__row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form__label {
  font-size: 14px;
  color: var(--c-text);
  letter-spacing: 0.2em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.req {
  display: inline-block;
  font-size: 11px;
  line-height: 1;
  padding: 4px 6px;
  border-radius: 999px;
  border: 1px solid  #c9a227;
  color: #ff4d8d;
  background: #fff;
}

.form__control {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid  #e2e4ea;
  border-radius: 8px;
  background: #fff;
  color: #111111;
  transition: box-shadow .15s ease, border-color .15s ease;
  
  &:focus {
    outline: none;
    border-color: #c9a227;
    box-shadow:  0 0 0 3px rgba(201, 162, 39, 0.32);
  }
  &.is-invalid {
    border-color: #d33;
  }
}

.form__textarea .form__control {
  resize: vertical;
  min-height: 140px;
}


.form__error {
  color: #d33;
  font-size: 12px;
  margin-top: 6px;
}


@media (min-width: 768px) {
  .form {
    gap: 18px;
  }
  .form__row {
    flex-direction: row;
    align-items: center;
  }
  .form__label {
    width: 30%;
    text-align: right;
    padding-right: 12px;
  }
  .form__control {
    width: 70%;
  }
  .form__row--textarea {
    align-items: flex-start;
  }
  .form__row--textarea .form__label {
    padding-top: 10px;
  }

}

// .contact__text {
//   text-align: center;
//   margin: 30px auto;
//   line-height: 1.78;
//   letter-spacing: 0.05em;
// }

// .contact__form {
//   margin: 0 auto;
//   width: 100%;
//   text-align: center;
// }
// .contact__form dl {
//   display: flex;
//   flex-wrap: wrap;
// }
// .contact__form dt {
//   width: 30%;
//   display: flex;
//   align-items: center;
//   justify-content: end;
// }
// .contact__form dd {
//   width: 70%;
//   min-width: 30%;
//   border-radius: 6px;
//   margin: 0;
//   text-align: start;
//   line-height: 3;
// }

</style>