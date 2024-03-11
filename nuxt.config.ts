import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    '@': resolve(__dirname, './'),
    '@css': resolve(__dirname, './assets/css'),
    '@scss': resolve(__dirname, './assets/scss'),
    '@images': resolve(__dirname, './assets/images')
  },
  css: ['@css/normalize.css', '@css/scrollbar.css'],
  colorMode: {
    classSuffix: ''
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    ['@element-plus/nuxt', { importStyle: 'scss', themes: ['dark'] }]
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @use "@scss/element/common/override.scss" as common;
                    @use "@scss/element/dark/override.scss" as dark;
                    @use "@scss/index.scss" as *;
                `
        }
      }
    }
  },
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  }
})
