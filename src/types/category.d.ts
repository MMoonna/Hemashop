import type { GoodsItem } from './globald'

export type CategoryChildren = {
  id: string
  name: string
  picture: string
  goods: GoodsItem[]
}
export type CategoryItem = {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: CategoryChildren[]
}
