import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import Cube from 'cube-ui'
import utils from './utils/index'
import apiList from './api/api.js'
import md5 from 'js-md5'
Vue.config.productionTip = false
window.$store = store
window.$ = $
window.$utils = utils
window.$api = apiList
Vue.prototype.$md5 = md5
Vue.use(Cube)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
