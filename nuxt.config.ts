// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: true,
  css: [
    '@/assets/css/main.css',
    '@/assets/css/reset.css',
    'swiper/css',
    'swiper/css/navigation',
  ],
})

