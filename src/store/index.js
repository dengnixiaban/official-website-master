// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navType: '首页', // 初始值，可以是 'home'、'list' 等
    goodType:0
  },
  mutations: {
    setNavType(state, payload) {
      state.navType = payload
    },
    setGoodType(state, payload) {
      state.goodType = payload
    }
  },
  actions: {
    updateNavType({ commit }, newType) {
      commit('setNavType', newType)
    },
    updateGoodType({ commit }, newType) {
      commit('setGoodType', newType)
    }
  },
  getters: {
    navType: state => state.navType,
    goodType: state => state.goodType,
  }
})

