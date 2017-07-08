import * as CONSTANTS from '../actionType'
let changeTab = ({tabName}) => {
  return {
    type: CONSTANTS.TABINFO,
    tabName
  }
}

let changePanel = (index) => {
  console.log(index)
  return {
    type: CONSTANTS.PANELINFO,
    panel: index
  }
}

export default {
  changeTab,
  changePanel
}
