<template>
  <section class="contact" id="contact">
      <div class="contact__inner inner">
        <div class="contact__wrap">
          <div class="contact__title section-title">
            <span class="section-title__main">Contact</span>
            <h2 class="section-title__sub">お問い合わせ</h2>
          </div>
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
          <form action="#" method="post">
            <dl>
              <dt><label for="name">お名前：</label></dt>
              <dd><input type="text" id="name" name="your-name" /></dd>
              <dt><label for="email">メールアドレス：</label></dt>
              <dd><input type="email" id="email" name="your-email" /></dd>
              <dt><label for="email">お問い合せ内容：</label></dt>
              <dd>
                <select name="" id="">
                  <option value="-----">------------</option>
                  <option value="webcontents">Web制作</option>
                  <option value="webdesign">Figmaデザイン</option>
                  <option value="consaltant">飲食業コンサル</option>
                  <option value="cake">お菓子について</option>
                  <option value="photo">写真撮影</option>
                  <option value="other">その他</option>
                </select>
              </dd>
              <dt><label for="message">内容：</label></dt>
              <dd>
                <textarea
                  id="message"
                  name="your-message"
                  cols="30"
                  rows="10"
                ></textarea>
              </dd>
            </dl>
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
</style>