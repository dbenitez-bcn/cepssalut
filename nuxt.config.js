import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Ceps Salut',
    title: 'Ceps Salut',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Source dir: https://nuxtjs.org/docs/directory-structure/nuxt-config/#srcdir
  srcDir: 'src/',

  // Server side rendering: https://nuxtjs.org/docs/configuration-glossary/configuration-ssr
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/InversionOfControl.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        light: {
          primary: "#8ED92F",
          secondary: "#00F0FF",
          accent: colors.lime.base,
          error: colors.deepOrange.base,
          warning: colors.yellow.base,
          info: colors.cyan.base,
          success: colors.green.base
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // nuxt firebase docs: https://firebase.nuxtjs.org/guide/options
  firebase: {
    config: {
      // todo: add end and prod based on nodeenv
      apiKey: process.env.FIRE_KEY, // TODO: hide this
      authDomain: "ceps-salut.firebaseapp.com",
      projectId: "ceps-salut",
      storageBucket: "ceps-salut.appspot.com",
      messagingSenderId: "410482945235",
      appId: "1:410482945235:web:187774d05b04e2f6573826",
      measurementId: "G-GNP7TX6S9C"
    },
    services: {
      auth: {
        emulatorPort: process.env.NODE_ENV === 'development' ? 9099 : undefined,
        emulatorHost: process.env.NODE_ENV === 'development' ? 'http://localhost' : undefined,
      },
      firestore: {
        emulatorPort: process.env.NODE_ENV === 'development' ? 8080 : undefined,
        emulatorHost: process.env.NODE_ENV === 'development' ? 'localhost' : undefined,
      },
      storage: {
        emulatorPort: process.env.NODE_ENV === 'development' ? 8080 : undefined,
        emulatorHost: process.env.NODE_ENV === 'development' ? 'localhost' : undefined,
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // env configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-env/
  env: {
    FIRE_KEY: process.env.FIRE_KEY
  }
}
