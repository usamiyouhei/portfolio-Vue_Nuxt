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


//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
</style>