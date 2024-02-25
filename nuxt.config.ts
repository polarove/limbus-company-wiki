import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    '@css': resolve(__dirname, './assets/css')
  },
  css: ['@css/normalize.css', '@css/scrollbar.css'],
  modules: ['@unocss/nuxt'],
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  }
})
