import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
        direction: top
      },
      {
        size: 5,
        head: [2, 6],
        direction: 'left'
      }
    ]
  },
  getters: {
    getBoardSize: state => state.board.size
  },
  mutations: {

  },
  actions: {

  }
})
