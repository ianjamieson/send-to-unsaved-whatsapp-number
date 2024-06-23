// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxthq/studio",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt"
  ],
  css: ["~/assets/css/main.css"],
})