import React, {Component} from 'react'
import Panel from '../components'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import actions from '../redux/actions'
//
// @connect((state) => {
//   return {
//     tabInfo: state.tabInfo
//   }
// },{...actions})

class Btn extends Component {
  constructor (props) {
    super()
  }
  handleClick (arg) {
    this.props.changeTab(arg)
  }
  render () {
    let {tabInfo} = this.props
    return (
      <div>
        <Panel cont={tabInfo.tabCont} />
        <button onClick={() => this.handleClick('tom')}>tab1</button>
        <button onClick={() => this.handleClick('jack')}>tab2</button>
      </div>
    )
  }
}

export default connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(Btn)
