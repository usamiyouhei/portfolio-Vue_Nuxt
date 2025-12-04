<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <h2 class="modal-title">お問い合わせ</h2>
      <ContactForm mode="modal" formClass="form--modal" />
      <button class="close" @click="$emit('close')">×</button>
    </div>
  </div>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
defineEmits(["close"]);

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal {
  position: relative;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  width: 90%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
}

.modal-title {
  font-family: "Noto Sans JP", sans-serif;
  text-align: center;
}

.form--modal {
  padding-top: 1rem;
}

.close {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  border: none;
  background: none;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: 425px) {
  .overlay {
    align-items: flex-start;
  }
  .modal {
    width: 90%;
    height: 90vh;
    max-width: none;
    max-height: none;
    border-radius: 0;
  }
}
</style>
