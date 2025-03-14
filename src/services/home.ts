import type { PageList, PageListParams } from '@/types/globald'
import type { HomeBanner, HomeCategory, HomeGuess, HomeHot } from '@/types/home'
import { http } from '@/utils/http'
//首页-广告区域-小程序
export const getHomeBannerAPI = (distributionSite?: number) => {
  return http<HomeBanner[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
export const gethomeCategoryAPI = () => {
  return http<HomeCategory[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
export const getHomeHotAPI = () => {
  return http<HomeHot[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
export const getGuessLikeAPI = (data?: PageListParams) => {
  return http<PageList<HomeGuess>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
