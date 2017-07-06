import * as CONSTANTS from '../actionType'
import { combineReducers } from 'redux'

let rankData = [
  {
      name: ' 棠梨煎雪',
      singer: '西瓜jun'
  }, {
      name: '刚好遇见你',
      singer: '排骨教主'
  }, {
      name: '山有木兮',
      singer: '伦桑'
  },
  {
      name: '笔墨稠',
      singer: '伦桑'
  }, {
      name: '典狱司',
      singer: 'Mr.岑'
  },{
    name: '告白气球',
    singer: '萧忆情'
  }
]

let songsData = [
    {
        class: '古风',
        songs: [
            {
                name: ' 棠梨煎雪',
                singer: '西瓜jun'
            }, {
                name: '刚好遇见你',
                singer: '排骨教主'
            }
        ]
    }, {
      class:'岑岑',
      songs:[]
    },{
        class: '翻唱',
        songs: [
            {
                name: ' 棠梨煎雪',
                singer: '西瓜jun'
            }, {
                name: '刚好遇见你',
                singer: '排骨教主'
            }, {
                name: '山有木兮',
                singer: '伦桑'
            }
        ]
    }, {
        class: '欧美',
        songs: [
            {
                name: ' 棠梨煎雪',
                singer: '西瓜jun'
            }, {
                name: '刚好遇见你',
                singer: '排骨教主'
            }, {
                name: '山有木兮',
                singer: '伦桑'
            }
        ]
    }, {
        class: '流行',
        songs: [
            {
                name: ' 棠梨煎雪',
                singer: '西瓜jun'
            }, {
                name: '刚好遇见你',
                singer: '排骨教主'
            }, {
                name: '山有木兮',
                singer: '伦桑'
            }
        ]
    }
]
// 热门数据
let hotData = [
    {
        name: '笔墨稠',
        singer: '伦桑'
    }, {
        name: '典狱司',
        singer: 'Mr.岑'
    },{
      name: '告白气球',
      singer: '萧忆情'
    }
]

let datas = {
  rankData,
  songsData,
  hotData
}

let tabInfo = (state = {tabData: datas.rankData}, action) => {
  let tab = action.tabName
  console.log(datas[`${tab}data`])
  switch (action.type) {
    case CONSTANTS.TABINFO:
      return Object.assign({}, state, {
        tabData: datas[`${tab}data`], tabName: tab
      })
    default:
      return state
  }
}

export default combineReducers({
  tabInfo
})
