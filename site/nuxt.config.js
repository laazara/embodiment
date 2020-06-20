console.log(process.env)

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-GB'
    },
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Mukta:wght@200;300;400;500;600;700;800&family=Prata&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/preons/dist/reset.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://aceforth.com/docs/nuxt-optimized-images/#optimization-packages
    '@aceforth/nuxt-optimized-images'
  ],
  // Doc: https://aceforth.com/docs/nuxt-optimized-images/#optimization-packages
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://content.nuxtjs.org/installation
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    ['nuxt-env', {
      keys: [
        'STRIPE_KEY',
        {
          key: 'STRIPE_SECRET',
          secret: true
        },
        {
          key: 'BASE_URL',
          default: 'http://localhost:3000'
        },
        {
          key: 'APIBASE',
          default: 'http://localhost:9000/purchase'
        }
      ]
    }]
  ],
  sitemap: {
    hostname: 'https://embodimentshop.com'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    async routes() {
      const {
        $content
      } = require('@nuxt/content')
      const guides = await $content('guides')
        .only(['path'])
        .fetch()

      return [].concat(guides).map((file) => (file.path === '/index' ? '/' : file.path))
    }
  },
  /**
   * Use babel
   */
  babel: {
    presets({
      envName
    }) {
      const envTargets = {
        client: {
          browsers: ['last 2 versions', 'iOS >= 8', 'Safari >= 8']
        },
        server: {
          node: 'current'
        }
      }
      return [
        [
          '@nuxt/babel-preset-app',
          {
            targets: envTargets[envName]
          }
        ]
      ]
    }
  }
}
