import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import 'isomorphic-fetch'

Vue.use(VueApollo)

export default ({ isClient, isServer, app, route, store, beforeNuxtRender }) => {

  const providerOptions = {
    clients: {}
  }

  <% Object.keys(options.networkInterfaces).forEach((key) => { %>
    let networkInterface = require('<%= options.networkInterfaces[key] %>')
    networkInterface = networkInterface.default || networkInterface
    if (networkInterface instanceof Function) {
      networkInterface = networkInterface({ isClient, isServer, store })
    }
    const <%= key %>Client = new ApolloClient({
      networkInterface,
      ...(isServer ? {
        ssrMode: true
      } : {
          initialState: window.__NUXT__.apollo.<%= key === 'default' ? 'defaultClient' : key %>,
          ssrForceFetchDelay: 100
        })
    })
    <% if (key === 'default') { %>
      providerOptions.<%= key %>Client = <%= key %>Client
    <% } else { %>
      providerOptions.clients.<%= key %> = <%= key %>Client
    <% } %>
  <% }) %>

  app.apolloProvider = new VueApollo(providerOptions)

  if (isServer) {
    beforeNuxtRender(async ({ Components, nuxtState }) => {
      await app.apolloProvider.prefetchAll({ route }, Components)
      nuxtState.apollo = app.apolloProvider.getStates()
    })
  }
}
