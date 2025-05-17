import tailwindcss  from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', 'nuxt-svgo'],
  css: ['~/assets/css/main.css'],
  vite: {
      plugins: [
          tailwindcss(),
      ],
  },
  // modules
  svgo: {
    componentPrefix: 'i',
  },
})