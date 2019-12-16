const path = require('path')

module.exports = {
  mode: 'universal',
  head: {
    title: 'Justin Forlenza Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,800i,900,900i&display=swap' }
    ]
  },
  loading: { color: '#fff' },
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/pwa',
    'nuxt-purgecss'
  ],
  purgeCSS: {},
  pwa: {
    manifest: {
      name: 'Justin Forlenza Portfolio',
      lang: 'en-us',
      theme_color: '#ffffff',
      background_color: '#ffffff'
    }
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: ''
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    extend (config, ctx) {
    }
  }
}
