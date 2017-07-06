import * as CONSTANTS from '../actionType'
let changeTab = ({tabName}) => {
  return {
    type: CONSTANTS.TABINFO,
    tabName
  }
}

export default {
  changeTab
}
