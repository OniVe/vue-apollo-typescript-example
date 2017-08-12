import { Module } from 'vuex'

import { IRootState } from 'store'
import { UserData } from '~/models/auth'

export class AuthState {
  user: UserData
  token: string = ''
  authenticated: boolean = false
}

const tokenType = 'Bearer'

const authModule: Module<AuthState, IRootState> = {

  state: () => (new AuthState()),

  getters: {
    token: state => state.token,
    authorizationToken: state => state.token && `${tokenType} ${state.token}`,
  },

  mutations: {
    setUser (state, user: UserData) {
      state.user = user
    },
    setToken (state, token: string) {
      state.token = token
      state.authenticated = !!token
    }
  }
}
export default authModule
