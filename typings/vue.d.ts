import Vue from 'vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'

declare module 'vue/types' {

  export interface IParams {
    [index: string]: any
  }
  export interface RedirectHandle {
    (status: number, path: string, query?: string): void
    (path: string, query?: string): void
  }

  export interface NuxtContext {
    isClient: boolean
    isServer: boolean
    isDev: boolean
    route: VueRouter
    store: Store<any>
    env: object
    params: IParams
    query: object
    req?: Request
    res?: Response
    redirect: RedirectHandle
    error: (params: IParams) => void
  }

  export interface VueApollo {

  }
}

declare module 'vue/types/vue' {

  interface Vue {
    $nuxt: object
    $router: VueRouter
    $apollo: object

    validate (params: Vue.NuxtContext): boolean
    asyncData (context: Vue.NuxtContext): Promise<any>

    apollo: object
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    apollo?: object;
  }
}
