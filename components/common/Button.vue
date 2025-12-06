<template>
  <div class="btn-wrap">
    <NuxtLink
      v-if="props.to"
      class="read-more__button"
      :to="props.to"
      :class="props.lang"
    >
      <span>{{ props.buttonText }}</span>
    </NuxtLink>

    <a
      v-else-if="props.href"
      class="read-more__button"
      :href="props.href"
      :class="props.lang"
      target="_blank"
      rel="noopener"
    >
      <span>{{ props.buttonText }}</span>
    </a>

    <button
      v-else
      type="button"
      class="read-more__button"
      :class="props.lang"
      @click="props.onClick"
    >
      <span>
        {{ props.buttonText }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
type ButtonProps =
  | {
      buttonText: string;
      to: string;
      lang?: "en" | "ja";
      href?: undefined;
      onClick?: undefined;
    }
  | {
      buttonText: string;
      href: string;
      lang?: "en" | "ja";
      to?: undefined;
      onClick?: undefined;
    }
  | {
      buttonText: string;
      onClick?: () => void;
      href?: string;
      lang?: "en" | "ja";
      to?: string;
    };

const props = defineProps<ButtonProps>();
</script>

<style lang="scss" scoped>
/* read-more__button */
.btn-wrap {
  /* display: block; */
  margin-inline: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 12px 0;
}
.btn {
  /* font-size: 1.6rem; */
  /* font-weight: 700; */
  /* line-height: 1.5; */
  position: relative;
  /* display: inline-block; */
  /* padding: 1rem 4rem; */
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #8d8d8d;
  border-radius: 0.5rem;
}
.read-more__button {
  all: unset;
  margin-bottom: 12px;
  padding: 0;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  transition: all 0.3s;
  border-radius: 0.5rem; /* ← 追加！ */
  display: inline-block;
}
.read-more__button span {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 1.2rem 3rem;
  font-size: 18px;
  color: #333;

  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;

  background: linear-gradient(to bottom, #ffffff 0%, #f3e5c9 100%);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  transition: 0.25s ease;
}

.read-more__button span:hover {
  background: linear-gradient(to bottom, #ffffff 0%, #f7edd6 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.read-more__button span::after {
  content: "";
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 9px;
  height: 9px;
  border-top: 1px solid #666;
  border-right: 1px solid #666;
  transition: transform 0.25s ease, right 0.25s ease;
}

.read-more__button:hover span::after {
  right: 1rem; /* → 少し右に動く */
  transform: translateY(-50%) rotate(45deg) translateX(0px);
}

.read-more__button.en span {
  font-family: "Playfair Display", serif !important;
  font-size: 20px;
  letter-spacing: 0.05em;
}

.read-more__button.ja span {
  font-family: "Noto Sans JP", sans-serif !important;
  font-size: 18px;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .read-more__button span {
    font-size: 16px;
    padding: 0.9rem 2.4rem;
  }
}
@media (max-width: 480px) {
  .read-more__button span {
    font-size: 14px;
    padding: 0.8rem 2rem;
  }
}

@media (max-width: 360px) {
  .read-more__button span {
    font-size: 13px;
    padding: 0.7rem 1.6rem;
  }
}
</style>
