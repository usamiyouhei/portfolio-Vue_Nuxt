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
.contact {
  background-image: url(./img2/contact-back.jpg);
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
  background-color: rgba(220, 220, 220, 0.3);
}

.contact__form {
  margin: 50px 20px 0 20px;
  width: 50%;
  background-color: rgba(220, 220, 220, 0.3);
  text-align: center;
}
.contact__form dl {
  display: flex;
  flex-wrap: wrap;
}
.contact__form dt {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
}
.contact__form dd {
  width: 40%;
  min-width: 30%;
  border-radius: 6px;
  margin: 0;
  text-align: start;
  line-height: 3;
}

</style>