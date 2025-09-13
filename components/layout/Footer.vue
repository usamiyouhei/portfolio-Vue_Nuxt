<template>
  <footer class="footer" id="footer">
      <div class="footer__container">
        <nav class="footer__nav inner">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="footer__icon">
          <a href="https://twitter.com/" target="_blank">
            <span class="icon icon--x" aria-hidden="true"></span>
          </a>
          <a href="https://instagram.com/your-id" target="_blank" rel="noopener" aria-label="Instagram">
            <span class="icon icon--insta" aria-hidden="true"></span>
          </a>
          <a href="https://www.facebook.com/">
            <span class="icon icon--facebook" aria-hidden="true"></span>
          </a>
          <a href="https://github.com/usamiyouhei">
            <span class="icon icon--github" aria-hidden="true"></span>
          </a>
          <a href="https://www.youtube.com/">
            <span class="icon icon--youtube" aria-hidden="true"></span>
          </a>
        </div>
        <!-- <div class="footer__info inner">
          <h4>Infomation</h4>
        </div> -->
      </div>
      <div class="footer__copy-right">
        <!-- <p>&copy;y.usami</p> -->
        <p class="footer__copy">
          © 2025 Youhei Usami. All Rights Reserved.
        </p>
      </div>
    </footer>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
//------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  background-image: url(/img/footer-background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
}

.footer ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 70px 0;
  margin: 0;
}

.footer a {
  color: #fff;
}

/* ------------------------
   SNSアイコン
------------------------ */

.icon {
  display: inline-block;
  inline-size: 24px;
  block-size: 24px;
  background-color: currentColor; /* 色はここで制御 */
  -webkit-mask: center / contain no-repeat;
          mask: center / contain no-repeat;
}

/* 各ブランドSVGをマスクに設定 */
.icon--x        { -webkit-mask-image: url('/brands/x.svg');         mask-image: url('/brands/x.svg'); }
.icon--insta    { -webkit-mask-image: url('/brands/instagram.svg'); mask-image: url('/brands/instagram.svg'); }
.icon--github   { -webkit-mask-image: url('/brands/github.svg');    mask-image: url('/brands/github.svg'); }
.icon--youtube  { -webkit-mask-image: url('/brands/youtube.svg');   mask-image: url('/brands/youtube.svg'); }
.icon--facebook { -webkit-mask-image: url('/brands/facebook.svg');  mask-image: url('/brands/facebook.svg'); }

.footer__sns {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 16px 0;
}

.footer__sns a {
  color: #fff; /* 初期は白 */
  transition: color .2s ease, transform .2s ease;
  line-height: 0;
}

.footer__sns a:hover {
  color: #c9a227; /* ホバーでゴールド */
  transform: translateY(-2px);
}

.footer__sns a:focus-visible {
  outline: 2px solid #c9a227;
  outline-offset: 4px;
  border-radius: 9999px;
}

.footer__copy-right p {
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 0;
  font-size: 0.85rem;
}
</style>