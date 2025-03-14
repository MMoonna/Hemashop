import type { GoodsResult } from '@/types/good'
import { http } from '@/utils/http'
// 获取商品详情
export const getGoodDetailAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
