import { combineReducers } from 'redux'

import { user } from './user'
import { settings } from './settings'
import timeline from './timeline'

export default combineReducers({
  user,
  settings,
  timeline
})
