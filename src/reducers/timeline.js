import { NEW_TIMELINE } from '../types'

export default ( state={},action ) => {
  switch (action.type) {

    case 'NEW_TIMELINE':
      return state
    default: return state

  }
}
