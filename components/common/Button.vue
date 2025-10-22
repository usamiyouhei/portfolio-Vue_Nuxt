<template>
   <div class="btn-wrap">
      <NuxtLink v-if="props.to"
        class="read-more__button"
        :to="props.to"
        >
        <span>{{ props.buttonText }}</span>
      </NuxtLink>

      <a v-else-if="props.href"
        class="read-more__button"
        :href="props.href" target="_blank"
        rel="noopener"
        >
        <span>{{ props.buttonText }}</span>
      </a>

      <button v-else
        type="button"
        class="read-more__button"
        @click="props.onClick"
        >
        {{ props.buttonText }}
      </button>
    </div>
</template>

<script setup lang="ts">
type ButtonProps =
|{
  buttonText: string
  to: string
  href?: undefined
  onClick?: undefined
  }
|{
  buttonText: string
  href: string
  to?: undefined
  onClick?: undefined
}
|{
  buttonText: string
  onClick: () => void
  href?: string
  to?: string
}

const props = defineProps<ButtonProps>()


</script>

<style lang="scss" scoped>

/* read-more__button */
.btn-wrap {
  /* display: block; */
  margin-inline: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 50px 0;
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
  margin-bottom: 12px;
  padding: 0;
  font-family: "Italianno";
  font-size: 30px;
  -webkit-transition: all 0.3s;

  transition: all 0.3s;

  border-radius: 0;
}

.read-more__button span {
  position: relative;
  display: block;
  padding: 1.25rem 3rem;
  color: #333;
  border: 1px solid #898989;
  border-radius: 0.5rem;
  background: linear-gradient(
    to bottom,
    rgb(255, 255, 255) 30%,
    rgb(253, 226, 179) 70%
  );
}

.read-more__button::after span {
  content: "";
  position: relative;
  width: 10px; /* ボックスの横幅を指定する */
  height: 10px; /* ボックスの高さを指定する */
  border-top: 1px solid #666666; /* 境界線の上部を実線に指定する*/
  border-right: 1px solid #666666; /* 境界線の上部を実線に指定する*/
  transform: rotate(45deg); /* ボックスを回転させる（右向き矢印） */
  top: 11px;
  animation: slideBlink 1s linear infinite;
}
@keyframes slideBlink {
  /* アニメーションの内容 */
  from {
    /* アニメーション開始時のスタイル */
    opacity: 0;
    left: 8px;
  }
  to {
    /* アニメーション終了時のスタイル */
    opacity: 1;
    left: 25px;
  }
}

.read-more__button span:hover {
  background: linear-gradient(
    to top,
    rgb(255, 255, 255) 30%,
    rgb(255, 244, 225) 70%
  );
}

.read-more__button:hover {
  -webkit-transform: translate(0, 5px);
  transform: translate(0, 5px);
}

.read-more__button:hover:before {
  bottom: -5px;
}

.read-more__button:active {
  -webkit-transform: translate(0, 7px);
  transform: translate(0, 7px);
}

.read-more__button:active:before {
  bottom: -1px;
}

</style>