import * as CONSTANTS from '../actionType'
import { combineReducers } from 'redux'

let tabInfo = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.TABINFO:
      return Object.assign({}, state, {
        tabCont: action.info
      })
    default:
      return state
  }
}

export default combineReducers({
  tabInfo
})
