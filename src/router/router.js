/** 通用模块 ***********************/
const routes = [
  {
    path: '/',
    name: '登录',
    meta: { index: 1, close: true },
    component: resolve => {
      require(['@/view/login'], resolve)
    }
  },
  {
    path: '/registered',
    name: '注册',
    meta: { index: 3, close: true },
    component: resolve => {
      require(['@/view/registered'], resolve)
    }
  },
  {
    path: '/home',
    name: '',
    meta: { index: 1, close: true },
    component: resolve => {
      require(['@/view/home'], resolve)
    }
  },
  {
    path: '/login',
    name: '',
    meta: { index: 2, close: true },
    component: resolve => {
      require(['@/view/login'], resolve)
    }
  },
  {
    path: '/square',
    name: '广场',
    meta: { index: 1, close: true },
    component: resolve => {
      require(['@/view/square'], resolve)
    }
  }
]
export default routes
