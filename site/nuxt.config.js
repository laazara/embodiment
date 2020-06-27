const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')

const envFile = path.resolve(__dirname, '../.env')

if (fs.existsSync(envFile) && process.env.NODE_ENV === 'development') {
  const envConfig = dotenv.parse(fs.readFileSync(envFile))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

export default {
  target: 'static',

  mode: 'universal',

  env: {
    STRIPE_KEY: process.env.STRIPE_KEY,
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    APIBASE: process.env.APIBASE || 'http://localhost:9000/purchase'
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-GB'
    },
    title: 'Embodiment Shop',
    titleTemplate: '%s | Embodiment Shop',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Embodiment Shop'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://embodimentshop.com/images/embodiment-share.jpg'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
    ],
    scripts: [{
      src: '/js/picturefill.min.js',
      type: 'text/javascript'
    }],
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
    // Doc: https://content.nuxtjs.org/installation
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.embodimentshop.com'
  },
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
