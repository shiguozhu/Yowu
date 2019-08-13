// 导入模块
import axios from 'axios'
export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: window.$utils.BASE_URL,
      timeout: 20000,
      headers: {}
    })
    // http request 拦截器
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      return Promise.reject(err)
    })

    // http response 拦截器
    instance.interceptors.response.use(response => {
      if (response && response.status) {
        if (+response.status === 10001) { // 未登录跳转到登陆
        }
      }
      return response
    }, error => {
      if (error) {
        if (error.response == null) {
          console.log('提示：后台无响应 404')
        } else {
          switch (error.response.status) {
            case 401:
              break
            case 500:
              console.log('服务器500错误')
              break
          }
        }
      }
      return Promise.reject(error) // 返回接口返回的错误信息
    })

    // 请求处理
    instance(options).then(res => {
      return false
    }).catch(error => {
      if (error.response == null) { } else {
        if (+error.response.status === 401) { } else {
          // alert('没有权限获取数据')
        }
      }
      reject(error)
    })
  })
}
