// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false,
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})