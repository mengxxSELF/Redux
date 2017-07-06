import * as CONSTANTS from '../actionType'
let changeTab = (cont) => {
  return {
    type: CONSTANTS.TABINFO,
    info: cont
  }
}

export default {
  changeTab
}
