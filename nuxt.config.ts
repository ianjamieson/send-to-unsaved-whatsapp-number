// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages'
  },
  modules: [
    "@nuxt/content",
    "@nuxthq/studio",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt"
  ],
  css: ["~/assets/css/main.css"],
})