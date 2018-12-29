import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameTitle: 'Battle Ship',
    board: {
      size: 10 // int state board size - 10X10
    },
    submarines: [
      {
        size: 3,
        head: [3, 5],
        direction: 'right'
      },
      {
        size: 4,
        head: [6, 9],
        direction: 'top'
      },
      {
        size: 5,
        head: [2, 6],
        direction: 'left'
      }
    ]
  },
  getters,
  mutations,
  actions
})
