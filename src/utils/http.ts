// 添加拦截器：
// 拦截 request 请求
// 拦截 uploadFile 文件上传
// TODO:
// 1。非 http 开头需拼接地址
// 2。请求超时
// 3.添加小程序端请求头标识
// 4。添加token 请求头标识
import { useMemberStore } from '@/stores'
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1.非http开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2.请求超时，默认60s
    options.timeout = 10000
    // 3.添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
interface Data<T> {
  code: string
  msg: string
  result: T
}
// 封装请求函数
export const http = <T>(options: UniApp.RequestOptions) => {
  // 返回promise对象
  return new Promise<Data<T>>((reslove, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          reslove(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 清理用户信息，跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.showToast({
            title: '请先登录',
            icon: 'none',
          })
          uni.navigateTo({
            url: '/pages/login/login',
          })
        } else {
          reject(res)
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误',
            icon: 'none',
          })
        }
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
