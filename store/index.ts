import { Store as RootStore, Module } from 'vuex'

import { AuthState } from './auth'

export interface IRootState extends IndexState {
  auth: AuthState
}

export class IndexState {
  leftPanel: boolean = true
}

export type Store = RootStore<IRootState>

const indexModule: Module<IndexState, IRootState> = {

  state: () => (new IndexState()),

  getters: {
    leftPanel: (state) => state.leftPanel
  },

  mutations: {
    toggleLeftPanel (state) {
      state.leftPanel = !state.leftPanel
    }
  }
}
export default indexModule
