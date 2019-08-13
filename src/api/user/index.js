import Util from '../sign'
import fetch from '../fetch.js'

const userLogin = params => {
  var sendApi = new Util.SendApi(params, 'common', 'code')
  params = Object.assign(params, sendApi.getSign())
  return fetch({
    url: `${window.$utils.BASE_URL}/user/login`,
    method: 'post',
    data: params
  })
}
const userRegistered = params => {
  var sendApi = new Util.SendApi(params, 'common', 'code')
  params = Object.assign(params, sendApi.getSign())
  return fetch({
    url: `${window.$utils.BASE_URL}/user/registered`,
    method: 'post',
    data: params
  })
}
const login = {
  userLogin,
  userRegistered
}

export default login
