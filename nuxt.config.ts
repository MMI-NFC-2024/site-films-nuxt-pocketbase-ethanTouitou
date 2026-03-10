// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-typed-router'],
  runtimeConfig: {
    public: {
      pocketbaseUrl: 'http://127.0.0.1:8090', //NUXT_PUBLIC_POCKETBASE_URL
    }
  }
})