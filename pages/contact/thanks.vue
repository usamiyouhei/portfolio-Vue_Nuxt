<template>
  <section class="thanks">
    <div class="thanks-card">
      <h1 class="thanks-title">送信が完了しました</h1>
      <p class="thanks-text">
        お問い合わせありがとうございます。<br />確認次第ご連絡いたします。
      </p>
      <Button buttonText="トップへ戻る" lang="ja" to="/" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "~/components/common/Button.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.thanks {
  display: flex;
  justify-content: center;
  padding: 6rem 2rem;
  animation: fadeBg 0.6s ease forwards;
}
.thanks-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  padding: 3rem 2rem;
  max-width: 520px;
  width: 100%;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
  animation: fadeUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

.thanks-title {
  font-family: "Noto Sans JP", sans-serif !important;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid #c9a227;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.thanks-text {
  font-size: 15px;
  margin-bottom: 2rem;
  line-height: 1.7;
  color: #333;
}

.btn {
  display: inline-block;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeBg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
