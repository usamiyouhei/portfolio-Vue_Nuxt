<template>
  <footer class="footer" id="footer">
      <div class="footer__container">
        <nav class="footer__nav inner">
          <ul>
            <li><NuxtLink to="/#about" class="footer_link">About</NuxtLink></li>
            <li><NuxtLink to="/#service" class="footer_link">Service</NuxtLink></li>
            <li><NuxtLink to="/#news" class="footer_link">News</NuxtLink></li>
            <li><NuxtLink to="/#works" class="footer_link">Works</NuxtLink></li>
            <li><NuxtLink to="/#contact" class="footer_link">Contact</NuxtLink></li>
          </ul>
        </nav>
        <div class="footer__sns">
          <a href="https://twitter.com" target="_blank" rel="noopener">
            <img src="/brands/x-color.svg" alt="X" width="24" height="24">
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener">
            <img src="/brands/instagram-color.svg" alt="Instagram" width="24" height="24">
          </a>
          <a href="https://github.com/usamiyouhei" target="_blank" rel="noopener">
            <img src="/brands/github-color.svg" alt="GitHub" width="24" height="24">
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener">
            <img src="/brands/youtube-color.svg" alt="YouTube" width="24" height="24">
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener">
            <img src="/brands/facebook-color.svg" alt="Facebook" width="24" height="24">
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
  color: #fff; // デフォルト文字色（上書き可）
}

/* --------------------------------
   Nav
--------------------------------- */
.footer__nav {
  font-family: "Italianno";
  font-size: 32px;
}

.footer ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 50px 0px;
  margin: 0;
  list-style: none;
}

.footer_link {
  position: relative;
  color: #d7b97a; /* ペールゴールド */
  text-decoration: none;
  transition: color .3s ease;
}

.footer_link::after {
  content: "";
  position: absolute;
  left: 0;
  top: 30px;
  height: 3px;
  width: 0;
  background-color: #cba96d;
  transition: width .3s ease;
}

.footer_link:hover {
  color: #aa3769;
}

.footer_link:hover::after {
  width: 100%;
}

/* a のデフォルト色（リンク以外に適用） */
.footer a {
  color: #444;
}

/* --------------------------------
   SNS アイコン
--------------------------------- */
.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: currentColor;
  /* ↓ shorthand は外して安全側に寄せる */
  /* -webkit-mask: center / contain no-repeat;
     mask: center / contain no-repeat; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

/* 各ブランドは mask-image を使う場合は下のように: */
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
  line-height: 0;
  transition: color .2s ease, transform .2s ease;
}

.footer__sns a img {
  width: 24px;
  height: 24px;
  transition: transform .25s ease, filter .25s ease;
}

.footer__sns a:hover img {
  transform: scale(1.15);
  filter: brightness(1.1);
}

.footer__sns a:hover {
  color: #c9a227;
  transform: translateY(-2px);
}

.footer__sns a:focus-visible {
  outline: 2px solid #c9a227;
  outline-offset: 4px;
  border-radius: 9999px;
}

/* --------------------------------
   Copy
--------------------------------- */
.footer__copy-right p {
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 0;
  font-size: 0.85rem;
}

/* --------------------------------
   〜767px：左右2列（Nav左 / SNS右）
--------------------------------- */
@media (max-width: 567px) {
  .footer__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    padding: 40px 0;
  }

  .footer__nav {
    font-size: 36px;
    text-align: right;
    flex: 1;
  }

  .footer ul {
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    padding: 0 1rem 0 0;
    margin: 0;
  }

  .footer__sns {
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    gap: 16px;
    padding: 0 0 0 1rem;
  }

  .footer__sns a img {
    width: 28px;
    height: 28px;
  }
}
</style>