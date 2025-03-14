import type { CategoryItem } from '@/types/category'
import { http } from '@/utils/http'
export const getCategoryListAPI = () => {
  return http<CategoryItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
