import React, {Component} from 'react'
import Cont from '../components'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import './index.less'

@connect((state) => {
  return {
    tabInfo: state.tabInfo
  }
},{...actions})
export default class Tabs extends Component {
  constructor (props) {
    super()
  }
  handleClick (arg) {
    this.props.changeTab(arg)
  }
  componentDidMount () {
    // this.props.changeTab('rank')
  }
  render () {
    let {tabInfo} = this.props
    let {tabData, tabName} = tabInfo
    return (
      <div className='tabs'>
        <header>
          <ul className={tabName || 'rank'}>
            {
              ['rank', 'songs', 'hot'].map((item, index) => <li key={index} data-name={item} onClick={() => this.handleClick({tabName: item})} >{item}</li>)
            }
          </ul>
        </header>
        <div className='cont'>
          <Cont {...tabInfo} />
        </div>
      </div>
    )
  }
}

//

// export default connect(
//     state => state,
//     dispatch => bindActionCreators(actions, dispatch)
// )(Tabs)
