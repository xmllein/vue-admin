/**
 * axios封装
 */
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios'
import config from '@/config'
import storage from '@/utils/storage'
import router from '@/router'

// 异常枚举值
const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// 创建axios实例
const service = axios.create({
  baseURL: config.baseUrl,
  timeout: 20000, // 请求超时时间 20s
})

// 请求拦截
service.interceptors.request.use((req: AxiosRequestConfig) => {
  const headers = req.headers as AxiosRequestHeaders
  const { token } = storage.getItem('userInfo') || {}
  if (!headers.Authorization) headers.Authorization = `Bearer ${token}`
  return req
})

// 响应拦截
service.interceptors.response.use((res: AxiosResponse) => {
  const { code, data, msg } = res.data

  if (code === 0) {
    return data
  } else if (code === 50001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

interface Options extends AxiosRequestConfig {}

/**
 * 请求核心函数
 * @param {*} options 请求配置
 * @returns
 */
const request: any = (options: Options) => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  return service(options)
}

;['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url = '', data = {}, options: Options = {}) => {
    return request({
      url,
      data,
      method: item as Options['method'],
      ...options,
    })
  }
})

export default request
