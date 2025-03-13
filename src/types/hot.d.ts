import type { GoodsItem, PageList } from './globald'

// 热门推荐通用接口类型
export type HotGoodsType = {
  title: string
  id: string
  bannerPicture: string
  subTypes: HotGoodsItem[]
}
// 热门推荐子商品类型
export type HotGoodsItem = {
  id: string
  title: string
  goodsItems: PageList<GoodsItem>
}
