import type { BaseProfile } from './login'

export type ProfileInfo = BaseProfile & {
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
}
/** 性别 */
export type Gender = '女' | '男'

export type ChangeProfileParams = Pick<
  ProfileInfo,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  provinceCode?: string
  cityCode?: string
  countryCode?: string
}
