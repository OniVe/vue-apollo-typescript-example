import { Module } from 'vuex'

export interface IRootState extends IndexState {
}

export class IndexState {
  leftPanel: boolean = true
}

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
