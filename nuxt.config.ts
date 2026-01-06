// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  components: true,
  css: [
    "@/assets/css/main.css",
    "@/assets/css/reset.css",
    "swiper/css",
    "swiper/css/navigation",
  ],
  devServer: {
    https: false, // ★ 明示的にオフ
  },
  experimental: {
    oxc: false,
  },

  // app: {
  //   head: {
  //     link: [
  //       { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  //       { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  //     ],
  //   },
  // },
});
