import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

export const getPreOrderAPI = () => {
  return http<OrderPreResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}
