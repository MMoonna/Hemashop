import { http } from '@/utils/http'

export const CartAddAPI = async (data: { skuId: string; count: number }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}
