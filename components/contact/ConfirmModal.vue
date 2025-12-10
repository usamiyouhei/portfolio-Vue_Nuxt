<template>
  <div class="confirm-overlay">
    <div class="confirm-modal">
      <h2 class="confirm-title">以下の内容で送信しますか？</h2>
      <ul class="confirm-content">
        <div class="confirm-item">
          <span class="confirm-label">お名前:</span>
          <p>{{ form.name }}</p>
        </div>
        <div class="confirm-item">
          <span class="confirm-label">メールアドレス:</span>
          <p>{{ form.email }}</p>
        </div>
        <div class="confirm-item">
          <span class="confirm-label">お問い合せ内容:</span>
          <p>{{ form.topic }}</p>
        </div>
        <div class="confirm-item">
          <span class="confirm-label">内容:</span>
          <p>{{ form.message }}</p>
        </div>
      </ul>
      <div class="confirm-actions">
        <button class="btn btn--secondary" @click="$emit('close')">
          修正する
        </button>
        <button class="btn btn--primary" @click="$emit('confirm')">
          送信する
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
defineProps<{
  form: {
    name: string;
    email: string;
    topic: string;
    message: string;
  };
}>();

defineEmits(["close", "confirm"]);

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.confirm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); // iPhone用
  animation: overlayFade 0.3s ease-out forwards;
  opacity: 0;
}
@keyframes overlayFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@supports (-webkit-touch-callout: none) {
  .modal {
    width: 92%;
    padding: 1.6rem 1.4rem;
    border-radius: 18px;
  }
}

.confirm-modal {
  width: min(90%, 500px);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  padding: 2rem 1.8rem;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  /* 初期 opacity を削除してアニメの中で制御する */
  animation: modalSlideUp 0.35s ease-out;
}

@keyframes modalSlideUp {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.confirm-title {
  font-family: "Noto Sans JP", sans-serif !important;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 1.4rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #c9a227;
}

.confirm-content {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.confirm-item {
  background: rgba(255, 255, 255, 0.55);
  padding: 10px 14px;
  border-radius: 10px;
}

.confirm-label {
  font-size: 13px;
  color: #c9a227;
  font-weight: 600;
}

.modal__label,
.modal__item p {
  font-family: "Noto Sans JP", sans-serif !important;
}

.confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.btn {
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn--secondary {
  background: #f0f0f0;
  border: 1px solid #ddd;
}

.btn--secondary:hover {
  background: #e8e8e8;
}

.btn--primary {
  background: #c9a227;
  color: #fff;
}

.btn--primary:hover {
  background: #b88f1e;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
