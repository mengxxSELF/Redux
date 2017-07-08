import * as CONSTANTS from '../actionType'
import { combineReducers } from 'redux'
let rank
let songs
let hot
rank = [
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

songs = [
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
hot = [
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


let data = {
  rank: rank,
  songs: songs,
  hot: hot
}

let tabInfo = (state = {tabData: rank, tabName: 'rank'}, action) => {
  let tab = action.tabName
  switch (action.type) {
    case CONSTANTS.TABINFO:
      return Object.assign({}, state, {
        tabData: data[tab], tabName: tab
      })
    default:
      return state
  }
}

let panelInfo = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.PANELINFO:
      return Object.assign({}, state, {
        panelState: action.panel
      })
    default:
      return state
  }
}

export default combineReducers({
  panelInfo,
  tabInfo,
})
