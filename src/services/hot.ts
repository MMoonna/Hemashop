import { http } from '@/utils/http'
import type { PageListParams } from '@/types/globald'
import type { HotGoodsType } from '@/types/hot'
type HotParams = PageListParams & { subType?: string }
// 热门推荐通用接口
export const getHotList = (url: string, data?: HotParams) => {
  return http<HotGoodsType>({
    url,
    method: 'GET',
    data,
  })
}
