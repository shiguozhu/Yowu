import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    token: '',
    nav: true,
    tab: true,
    isAppBack: false // 判断是否要返回到app
  },
  mutations: {
    setPageType (state, type) {
      state.nav = type.nav
      state.tab = type.tab
    }
  }
})
