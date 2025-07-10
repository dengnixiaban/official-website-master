// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navType: '首页' // 初始值，可以是 'home'、'list' 等
  },
  mutations: {
    setNavType(state, payload) {
      state.navType = payload
    }
  },
  actions: {
    updateNavType({ commit }, newType) {
      commit('setNavType', newType)
    }
  },
  getters: {
    navType: state => state.navType
  }
})

