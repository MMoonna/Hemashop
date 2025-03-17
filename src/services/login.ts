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
