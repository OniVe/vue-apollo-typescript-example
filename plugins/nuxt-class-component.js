import Component from 'vue-class-component'

Component.registerHooks([
  // Vue Apollo
  'apollo',
  // Nuxt
  'asyncData',
  'beforeRouteEnter',
  'beforeRouteLeave',
  'fetch',
  'head',
  'layout',
  'middleware',
  'scrollToTop',
  'transition',
  'validate'
])

export default Component
