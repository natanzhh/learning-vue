import Vue from 'vue'
import Vuex from 'vuex'

import auth from "./modules/auth";
import tasks from "./modules/tasks";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth,
    tasks
  },
  state: {
    count: 0
  },

  mutations: {
    increment(state) {
      state.count++
    }
  },

  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },

  getters: {
    doubleCount: state => state.count * 2
  }
})
