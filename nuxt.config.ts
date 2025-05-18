import tailwindcss  from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', 'nuxt-svgo', 'shadcn-nuxt'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
      plugins: [
          tailwindcss(),
      ],
  },

  // modules

  shadcn: {

    prefix: '',
    componentDir: './components/ui'
  },
  svgo: {
    componentPrefix: 'i',
  },
})