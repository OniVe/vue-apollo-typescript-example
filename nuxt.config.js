module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:3000'
  },
  head: {
    title: 'Cars with Apollo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A simple vue-apollo typescript example app' }
    ],
    script: [
      { src: 'http://cdn.polyfill.io/v1/polyfill.min.js?features=Array.prototype.includes,es6,EventSource' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/nuxt-class-component.js'
  ],
  modules: [
    '~/modules/vue-apollo',
    '~/modules/typescript'
  ],
  apollo: {
    networkInterfaces: {
      default: '~/apollo/network-interfaces/default'
    }
  }
}
