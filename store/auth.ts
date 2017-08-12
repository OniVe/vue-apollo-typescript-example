import { Module } from 'vuex'

import { IRootState } from 'store'
import { User } from '~/models/auth'

export type UserStateField = User | null

export class AuthState {
  user: UserStateField = null
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
    setUser (state, user: UserStateField) {
      state.user = user
    },
    setToken (state, token: string) {
      state.token = token
      state.authenticated = !!token
    }
  }
}
export default authModule
