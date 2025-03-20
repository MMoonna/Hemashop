import type { ChangeProfileParams, ProfileInfo } from '@/types/profile'
import { http } from '@/utils/http'

export const getProfileAPI = async () => {
  return http<ProfileInfo>({
    url: '/member/profile',
    method: 'GET',
  })
}
export const updateProfileAPI = async (data: ChangeProfileParams) => {
  return http<ProfileInfo>({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
