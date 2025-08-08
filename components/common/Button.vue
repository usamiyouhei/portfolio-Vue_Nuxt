<template>
   <div class="button__wrap">
        <a class="read-more__button" href="/usami/about">
        <span>{{ buttonText }}</span>
      </a>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  buttonText: string;
  link: string;
}>()


</script>

<style lang="scss" scoped>
.button__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.read-more__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  padding: 14px 20px;
  border-radius: 20px;
  border: 2px solid #ccc;
  background: linear-gradient(to bottom, #fdfbfb 0%, #ebedee 100%);
  box-shadow: inset 1px 1px 1px #fff;
  font-family: "Italianno", cursive;
  font-size: 28px;
  letter-spacing: 0.05em;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.read-more__button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(203, 122, 157, 0.699), #f4fcfe);
  opacity: 0.3;
  border-radius: 18px;
  z-index: 0;
  transition: opacity 0.5s ease-out;
}

.read-more__button:hover::before {
  opacity: 0;
}

.read-more__button span {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.read-more__button span::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  transform: rotate(45deg);
  animation: slideBlink 1s linear infinite;
  position: relative;
  top: 1px;
}

@keyframes slideBlink {
  from {
    opacity: 0;
    transform: rotate(45deg) translateX(0);
  }
  to {
    opacity: 1;
    transform: rotate(45deg) translateX(6px);
  }
}
</style>