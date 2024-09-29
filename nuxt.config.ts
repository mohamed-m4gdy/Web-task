// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@samk-dev/nuxt-vcalendar'
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'ar',  // Arabic as fallback
      cookieKey: 'i18n_redirected'
    },
    locales: [
      { code: 'ar', iso: 'ar-SA', file: 'ar.json', dir: 'rtl' },
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' }
    ],
    lazy: true,
    langDir: 'locales',  // Directory for translation files
    defaultLocale: 'ar',  // Arabic is the default language
    strategy: 'prefix_except_default',  // Use this strategy to add prefix only for English
  },
  colorMode: {
    preference: 'light'
  },
  tailwindcss: {
    viewer: false
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/custom.css'
  ],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'The merf', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'appleid-signin-client-id', content: 'CLIENT_ID' },
        { name: 'appleid-signin-scope', content: 'name email' },
        { name: 'appleid-signin-redirect-uri', content: 'CLIENT_ID' },
        { name: 'appleid-signin-state', content: 'CLIENT_ID' },
        { name: 'appleid-signin-nonce', content: 'CLIENT_ID' },
        { name: 'appleid-signin-use-popup', content: 'false' },
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.png" },
        { rel: '/manifest', href: '/manifest.json' },
        { rel: "icon", type: "image/png", href: "/ms-icon-144x144.png" },
      ],
    },
  },
})