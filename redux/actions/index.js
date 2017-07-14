import * as CONSTANTS from '../actionType'
let changeTab = ({tabName}) => {
  return {
    type: CONSTANTS.TABINFO,
    tabName
  }
}
// songs 互斥
let changePanel = (index) => {
  return {
    type: CONSTANTS.PANELINFO,
    panel: index
  }
}

// hot 取消收藏
let cancelColl = (name) => {
  return {
    type: CONSTANTS.DELETECOLLECTION,
    name
  }
}

export default {
  changeTab,
  cancelColl,
  changePanel
}
