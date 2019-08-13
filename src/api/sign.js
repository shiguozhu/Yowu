const crypto = require('crypto')
const moment = require('moment')

class SendApi {
  constructor (data, c, act, format) {
    format = !format ? 'json' : format

    if (!data) data = {}

    if (act !== 'web_oauth2') {
      this.data = Object.assign(data, {
        token: window.$store.state.token
      })
    }
    this.data = Object.assign(data, {
      tokenAgent: 1 // 接口兼容老版本
    })
    this.params = {
      c: c,
      act: act,
      format: format,
      partnerCode: 'js_api',
      partnerCodeKey: 'ff3a7c8c7d82ebb6279212c062e92597'
    }
  }
  /**
   * ksort ：根据 接口请求参数 升序排序
   * @param this.data 接口请求参数
   * @returns 升序排序结果
   */
  ksort () {
    let arrayList = []
    let sort = (a, b) => {
      return a.key < b.key ? -1 : a.key > b.key ? 1 : 0
    }
    for (let key in this.data) {
      arrayList.push({
        key: key,
        value: this.data[key]
      })
    }
    return arrayList.sort(sort)
  }

  /**
   * getSign ：根据 接口请求参数 和 应用密钥 计算 请求签名
   * @param this.data 接口请求参数
   * @returns 签名结果
   */

  getSign () {
    let str = ''
    // eslint-disable-next-line
    let noSignStr = '';
    // 1. 字典升序排序
    let parList = this.ksort()
    // 2. 拼按URL键值对
    parList.map(item => {
      //  && !/^\{.*\}$/.test(item.value)
      if (item.value !== '' && item.key.indexOf('postData') < 0) {
        str += `${item.key}=${item.value}&`
      } else if (item.value !== '') {
        noSignStr += `${item.key}=${item.value}&`
      }
    })
    // 3. 处理URL编码和java、PHP不一致的问题
    str = str.replace(/%20/g, '+')
    var index = str.lastIndexOf('&')
    str = str.substr(0, index)

    // 密钥：
    var timestamp = moment().format('YYYYMMDDHHmmss')
    // timestamp = '20180407133752'
    str = timestamp + this.params.partnerCode + crypto.createHash('md5').update(this.params.partnerCodeKey).digest('hex') + this.params.c + this.params.act + str
    // console.log('sign-str', str)

    // 4. MD5运算+转换大写，得到请求签名
    this.params.timestamp = timestamp
    this.params.signature = crypto.createHash('md5').update(str).digest('hex').toUpperCase()
    delete this.params['partnerCodeKey']

    return this.params
  }
}

export default {
  SendApi
}
