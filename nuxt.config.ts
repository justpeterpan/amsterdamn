import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/image-edge'
  ],
  // https://color-mode.nuxtjs.org/#tailwind-v2
  colorMode: {
    classSuffix: ''
  }
})
