import { USER_AUTHORIZED } from '../types'

export const initUser = (user) => ({
  type: USER_AUTHORIZED,
  user
})
