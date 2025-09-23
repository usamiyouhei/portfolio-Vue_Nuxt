<template>
          <ul class="header_items">
            <li class="header_item">
              <a href="#about" class="header_link">About</a>
            </li>
            <li class="header_item">
              <a href="#service" class="header_link">Service</a>
            </li>
            <li class="header_item">
              <a href="#news" class="header_link">News</a>
            </li>
            <li class="header_item">
              <a href="#works" class="header_link">Works</a>
            </li>
            <li class="header_item">
              <a href="#contact" class="header_link header_link-contact"
                >Contact</a
              >
            </li>
          </ul>
</template>

<script setup lang="ts">
/**===================================================================================================================
 * 
 ===================================================================================================================**/
//------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
.header_items {
  display: flex;
  gap: clamp(16px, 4vw, 40px);
}

.header_item {
  height: inherit;
}

// .header_item:not(:first-child) {
//   margin-left: 60px;
// }

.header_link {
  font-size: 30px;
  font-weight: 500;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: inherit;
  color: #141414;
}

.header_link.header_link-contact {
  padding: 0 16px;
  color: #ffffff;
  background-color: #c67dad;
  border-bottom-left-radius: 20px;
}
.header_link,
.slide-menu_link {
  font-family: "Italianno";
  letter-spacing: 0.1em;
}
.header_link::after {
  content: "";
  width: 0;
}
.header_link:hover {
  color: #aa3769;
}

.header_link:hover::after {
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  display: block;
  height: 1px;
  transition: width 0.3s;
  transition-behavior: normal;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: width;
  background-color: #cba96d;
}



</style>