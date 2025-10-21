<template>
  <div class="contact__form">
          <form class="form" action="#" method="post" @submit.prevent="openConfirm" novalidate>
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
                :class="{ 'is-invalid' : !!errors.email}"
                type="email"
                id="email"
                name="your-email"
                v-model.trim="form.email"
                required
                autocomplete="email"
                :aria-invalid="!!errors.email"
                :aria-describedby="errors.email ? 'err-email' : undefined"
              />
              <p v-if="errors.email" class="form__error" id="err_email" role="alert">{{ errors.email }}</p>
            </div>

            <div class="form__row">
              <label class="form__label" for="topic">
                お問い合せ内容<span class="req" aria-hidden="true">必須</span>
              </label>
              <select 
                class="form__control"
                :class="{ 'is-invalid' : !!errors.topic}"
                name="topic" 
                id="topic"
                v-model.trim="form.topic"
                required
                autocomplete="topic"
                :aria-invalid="!!errors.topic"
                :aria-describedby="errors.topic ? 'err_topic' : undefined"
                >
                <option value="-----">------------</option>
                <option value="webcontents">Web制作</option>
                <option value="appcreate">アプリ開発</option>
                <option value="webdesign">Figmaデザイン</option>
                <option value="consaltant">飲食業コンサル</option>
                <option value="cake">お菓子について</option>
                <option value="photo">写真撮影</option>
                <option value="other">その他</option>
              </select>
              <p v-if="errors.topic" class="form__error" id="err_topic" role="alert">{{ errors.topic }}</p>
            </div>

            <div class="form__row form_row--textarea">
              <label class="form__label" for="message">
                内容<span class="req" aria-hidden="true">必須</span>
              </label>
                <textarea 
                  class="form__control"
                  :class="{ 'is-invalid' : !!errors.message}"
                  id="message"
                  name="your-message"
                  rows="6"
                  v-model.trim="form.message"
                  required
                  autocomplete="message"
                  :aria-invalid="!!errors.message"
                  :aria-describedby="errors.message ? 'err_message' :undefined"
                ></textarea>
                <p v-if="errors.message" class="form__error" id="err_message" role="alert">{{ errors.message }}</p>
            </div>

            <Button class="form__submit" buttonText="submit" to="/usami/news">
                確認する
            </Button>
            
            <ContactConfirmModal
              v-if="showConfirm"
              :form="form"
              @close="showConfirm = false"
              @confirm="handleSubmit"/>

          </form>
        </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router';
import type { ContactFormData, ContactFormErrors } from "~/types/contact";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const form = ref<ContactFormData>({
  name: "",
  email: "",
  topic: "",
  message: ""
})

const errors = ref<ContactFormErrors>({
  name: "",
  email: "",
  topic: "",
  message: "",
})

const showConfirm = ref(false)
const router = useRouter()

const validate = () => {
  errors.value = {}
  if(!form.value.name) errors.value.name = 'お名前は必須です。'
  if(!form.value.email) errors.value.email = 'メールアドレスは必須です'
  if(!form.value.topic) errors.value.topic = 'お問い合わせ内容を選択してください'
  if(!form.value.message) errors.value.message = 'メッセージは必須です'
  // 一つでもエラーがあれば無効
  return Object.keys(errors.value).length === 0
}

const openConfirm = () => {
  if(validate()) showConfirm.value = true
}

const handleSubmit = async () => {
  showConfirm.value = false;
  // 送信処理（Formspree などにPOSTする想定）
  await new Promise((r) => setTimeout(r, 1000))

  router.push("/contact/thanks")
}
//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>

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

</style>