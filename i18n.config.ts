export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
    },
    {
      code: 'es',
      iso: 'es-ES',
    },
  ],
  messages: {
    en: {
      welcome: 'Welcome',
      TBD: "Manuel's Page",
      meta: {
        title: 'Angstromico Nuxt',
        description: "Angstromico's Nuxt Example",
        author: 'Manuel Morales',
        keywords: 'Nuxt, Angstromico',
      },
      layouts: {
        title: 'Angstromico Nuxt',
      },
    },
    es: {
      welcome: 'Bienvenido',
      TBD: 'Pagina de Manuel',
      meta: {
        title: 'Angstromico Nuxt',
        description: 'Ejemplo Angstromico Nuxt',
        author: 'Manuel Morales',
        keywords: 'Nuxt, Angstromico',
      },
      layouts: {
        title: 'Angstromico Nuxt',
      },
    },
  },
}))
