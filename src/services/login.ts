import type { LoginResponse } from '@/types/login'
import { http } from '@/utils/http'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
export const getLoginAPI = (data: LoginParams) => {
  return http<LoginResponse>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResponse>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
