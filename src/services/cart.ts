import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

export const CartAddAPI = async (data: { skuId: string; count: number }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}
export const myCartAPI = async () => {
  return http<CartItem[]>({
    url: '/member/cart',
    method: 'GET',
  })
}
export const deleteCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
export const changeCartAPI = (skuId: string, data: { selected?: boolean; count?: number }) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}
