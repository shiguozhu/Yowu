import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)

const router = new Router({
  routes
})
// 路由监听处理
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/' || to.path === '/registered') {
    window.$store.commit('setPageType', {nav: false, tab: false})
  }
  if (to.query.token) {
    window.$store.commit('setToken', { token: to.query.token })
  }
  if (to.path === '/404') {
    next()
  }
  next()
})

router.afterEach((to, from) => {})

router.onError(err => {
  console.log(err)
})
export default router
