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
    APIBASE: process.env.APIBASE || 'http://localhost:9000/purchase',
    PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY
  },

  /**
   * Starting from v2.13, Nuxt can auto-import 
   * the components you use. To activate this feature, 
   * set components: true in your configuration:
   */
  components: true,

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-GB'
    },
    title: 'Embodiment Shop',
    titleTemplate: '%s - Embodiment Shop',
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
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    script: [{
      src: 'https://api.pirsch.io/pirsch.js',
      'data-code': 'xF29v5Y47hfVDOXIFu26H6inT9IFr6YQ',
      type: 'text/javascript',
      id: 'pirschjs',
      defer: true
    }, {
      src: 'https://api.pirsch.io/pirsch-events.js',
      'data-code': 'xF29v5Y47hfVDOXIFu26H6inT9IFr6YQ',
      type: 'text/javascript',
      id: 'pirscheventsjs',
      defer: true
    }],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Prata&family=Inria+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Spartan:wght@300;400;600&family=Reenie+Beanie&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
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
  css: [
    '~/assets/css/reset.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/format-date.js',
    '~/plugins/jsonld'
  ],
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
    hostname: 'https://www.embodimentshop.com',
    trailingSlash: true,
    lastmod: new Date()
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
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

      let fattyAcids = await $content('embodiment-fatty-acids').fetch()
      fattyAcids.body.map(page => {
        let link = page['Common Name']
          .toLowerCase()
          .trim()
          .replace(' ', '-')

        return `guides/fatty-acids/${link}`
      })

      return [].concat(guides, fattyAcids).map((file) => (file.path === '/index' ? '/' : file.path))
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
