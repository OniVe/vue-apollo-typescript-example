import { createNetworkInterface } from 'apollo-client'
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

const webApi = 'https://api.graph.cool/simple/v1/cj1dqiyvqqnmj0113yuqamkuu'
const wss = 'wss://subscriptions.graph.cool/v1/cj1dqiyvqqnmj0113yuqamkuu'
const authorizationTokenPath = 'auth/authorizationToken'

export default function ({ isServer, store }) {
  const networkInterface = createNetworkInterface({ uri: webApi })

  return networkInterface
  // networkInterface.use([{
  //   applyMiddleware (req, next) {
  //     let authorizationToken = store.getters[authorizationTokenPath]
  //     if (authorizationToken) {
  //       if (!req.options.headers) {
  //         req.options.headers = new Headers()
  //       }
  //       req.options.headers.authorization = authorizationToken
  //     }
  //     next()
  //   }
  // }])

  // return isServer
  //   ? networkInterface
  //   : addGraphQLSubscriptions(
  //     networkInterface,
  //     new SubscriptionClient(wss, { reconnect: true }))
}
