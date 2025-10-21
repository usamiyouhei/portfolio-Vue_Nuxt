<template>
  <div class="overlay">
    <div class="modal">
      <h3>以下の内容で送信しますか？</h3>
      <ul class="confirm-list">
        <li><strong>Name:</strong>{{ form.name }}</li>
        <li><strong>Email:</strong>{{ form.email }}</li>
        <li><strong>Topic:</strong>{{ form.topic }}</li>
        <li><strong>Message:</strong>{{ form.message }}</li>
      </ul>
      <div class="action">
        <button @click="$emit('close')">修正する</button>
        <button @click="$emit('confirm')">確認する</button>
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
  }}>()

defineEmits(['close' , 'confirm'])


 

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  max-width: 400px;
  width: 90%;
  padding: 2rem;
  border-radius: 1rem;
  background: #fff;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
</style>