import React, {Component} from 'react'
import render from 'react-dom'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import './index.less'

@connect(state => ({
  panelInfo: state.panelInfo
}),{...actions})

class Tab extends Component {
  constructor(props) {
      super(props)
      this.changeList = this.changeList.bind(this)
  }
  changeList () {
    let {index, panelInfo} = this.props
    this.props.changePanel(index)
  }
  render() {
      let {item, index, panelInfo} = this.props
      let {panelState} = panelInfo
      let dis = panelState === index ? 'show' : 'hide'
      let songsLength = item.songs.length
      return (
        <div className='panel'>
          <div className='panelHead'>
            <span>{item.class}</span>
            <button onClick={this.changeList}>{dis === 'show' ? '折叠列表' : '展开列表'}</button>
          </div>
          <div className={`panelBody ${dis}`}>
            <ul>
              {item.songs.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.name}</span>
                    <span>-- {item.singer}</span>
                  </li>
                )
              })
              }
              {/*处理不满足三条 */}
              {songsLength > 2
                ? null
                : [...Array(songsLength == 0
                        ? 3
                        : songsLength == 1
                            ? 2
                            : 1)].map((item, index) => {
                    return (
                        <li key={index}>
                            当前位置没有用户上榜 加油哟
                        </li>
                    )
                })
              }
            </ul>
          </div>
        </div>
      )
  }
}


export default ({tabData}) => {
  return (
    <div className='panels'>
    {
      tabData.map((item, index) => {
        let tabProps = {item, index}
        return (<Tab key={index} {...tabProps} />)
      })
    }

    </div>
  )
}
