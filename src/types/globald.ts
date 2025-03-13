export type PageList<T> = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}
export type PageListParams = {
  page?: number
  pageSize?: number
}
export type GoodsItem = {
  id: string
  name: string
  picture: string
  desc: string
  price: number
  discount: number
  orderNum: number
}
