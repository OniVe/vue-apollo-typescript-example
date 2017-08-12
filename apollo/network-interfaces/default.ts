import { createNetworkInterface } from 'apollo-client'
import { Store } from '~/store'

// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

const webApi = 'https://api.graph.cool/simple/v1/cj1dqiyvqqnmj0113yuqamkuu'
const wss = 'wss://subscriptions.graph.cool/v1/cj1dqiyvqqnmj0113yuqamkuu'

export default function defaultNetworkInterface ({ isServer, store }: { isServer: boolean, store: Store }) {
  const networkInterface = createNetworkInterface({ uri: webApi })

  networkInterface.use([{
    applyMiddleware (req, next) {
      const authorizationToken = store.getters['auth/authorizationToken']
      if (store.state.auth.authenticated && authorizationToken) {
        if (!req.options.headers) {
          req.options.headers = new Headers()
        }
        req.options.headers.authorization = authorizationToken
      }
      next()
    }
  }])

  return networkInterface
  // return isServer
  //   ? networkInterface
  //   : addGraphQLSubscriptions(
  //     networkInterface,
  //     new SubscriptionClient(wss, { reconnect: true }))
}
