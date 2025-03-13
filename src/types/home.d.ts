import type { GoodsItem } from './globald'

export type HomeBanner = {
  id: string
  imgUrl: string
  hrefUrl: string // 跳转链接
  type: integer // 跳转类型
}
export type HomeCategory = {
  id: string
  name: string
  icon: string
}
export type HomeHot = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}
export type HomeGuess = GoodsItem
