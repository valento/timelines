import { USER_AUTHORIZED } from '../types'
export const user = ( state={},action ) => {
  switch (action.type) {
    case 'USER_AUTHORIZED':
      return action.user
    default: return state
  }
}
