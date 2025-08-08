<template>
   <div class="button__wrap">
        <a class="read-more__button" href="/usami/about">
        <span>Read More</span>
      </a>
    </div>
</template>

<script setup lang="ts">



</script>

<style lang="scss" scoped>
.button__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.read-more__button {
  display: flex;
  width: 160px;
  padding: 18px;
  border-radius: 20px;
  border: 2px solid #ccc;
  background: #f1e767;
  font-family: "Italianno";
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fdfbfb),
    to(#ebedee)
  );
  background: -webkit-linear-gradient(top, #fdfbfb 0%, #ebedee 100%);
  background: linear-gradient(to bottom, #fdfbfb 0%, #ebedee 100%);
  -webkit-box-shadow: inset 1px 1px 1px #fff;
  box-shadow: inset 1px 1px 1px #fff;
  margin: 80px auto;
  justify-content: center;
  font-size: 28px;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: filter 0.3s, transform 0.3s;
}
.read-more__button span {
  position: relative;
}
.read-more__button::before {
  background: linear-gradient(to right, rgba(203, 122, 157, 0.699), #f4fcfe);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.5s ease-out;
  width: 100%;
  border-radius: 18px;
}
.read-more__button::after {
  content: "";
  position: relative;
  width: 10px; /* ボックスの横幅を指定する */
  height: 10px; /* ボックスの高さを指定する */
  border-top: 1px solid #666666; /* 境界線の上部を実線に指定する*/
  border-right: 1px solid #666666; /* 境界線の上部を実線に指定する*/
  transform: rotate(45deg); /* ボックスを回転させる（右向き矢印） */
  top: 8px;
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

.read-more__button:hover {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#fdfbfb),
    to(#ebedee)
  );
  background: -webkit-linear-gradient(bottom, #fdfbfb 0%, #ebedee 100%);
  background: linear-gradient(to top, #fdfbfb 0%, #ebedee 100%);
}
.read-more__button:hover::before {
  opacity: 0;
}
</style>