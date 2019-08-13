import Vue from 'vue'
import { Toast } from 'cube-ui'

Vue.use(Toast)

// 声明公共域名变量
const BASE_URL = 'http://127.0.0.1:8080'
console.log('当前使用域名：', BASE_URL)
// 弹窗
const msg = {
  warn: (value) => {
    const toast = Toast.$create({
      txt: value,
      type: 'warn'
    })
    toast.show()
  },
  correct: (type) => {
    const toast = Toast.$createToast({
      txt: type,
      type: 'correct'
    })
    toast.show()
  }
}
const util = {
  BASE_URL,
  msg
}
export default util
