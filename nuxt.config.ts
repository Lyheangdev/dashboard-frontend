// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: { autoImport: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Default',
      titleTemplate: '%s | Smart Dashboard',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  components: [{ path: '~/components', pathPrefix: false, global: false }],
  //-- Register nuxt prebundle for large module, gain rendering performance
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@number-flow/vue',
        '@vue/devtools-core',
        '@vee-validate/zod',
        'dayjs',
        'vee-validate',
        'zod',
        'highcharts-vue',
      ],
    },
  },
  modules: ['@nuxt/image', 'nuxt-svgo', '@nuxt/fonts', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  svgo: { dts: true },
  // --- Font configuration
  fonts: {
    families: [
      {
        name: 'IBM Plex Sans',
        provider: 'google',
        weights: ['100', '200', '300', '400', '500', '600', '700'],
      },
    ],
  },
  // -- Runtime configuration, the value is loaded from .env
  runtimeConfig: {
    public: {
      assetUrl: `${import.meta.env.NUXT_API_URL}`,
      apiBase: `${import.meta.env.NUXT_API_URL}/api/v1`,
    },
  },
});
