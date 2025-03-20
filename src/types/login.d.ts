export type BaseProfile = {
  id: string
  avatar: string
  account: string
  nickname: string
}
export type LoginResponse = BaseProfile & {
  mobile: string
  token: string
}
