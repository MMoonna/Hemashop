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
