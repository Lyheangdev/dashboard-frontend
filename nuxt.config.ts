// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: { autoImport: true },
  css: ['~/assets/css/main.css'],
  components: [{ path: '~/components', pathPrefix: false, global: false }],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@nuxt/image', 'nuxt-svgo'],
  svgo: { dts: true },
})
