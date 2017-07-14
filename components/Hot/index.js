import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import { connect } from 'react-redux'
import actions from '../../redux/actions'

@connect(state => ({
  collection: state.collection
}),{...actions})

export default class Hot extends Component {
    constructor(props) {
        super(props)
    }

    handleClick(name) {
      this.props.cancelColl(name)
    }
    render() {
      let {tabData} = this.props.collection
      return (
        <ul className='hot hotTab'>
          {
            tabData.length < 1 && <b style={{textAlign: 'center', color: '#000', display: 'block'}}> 您还没收藏任何歌曲 </b>
          }
          {tabData && tabData.map((item, index) => {
              return (
                <li key={index}>
                    <p>
                      <span>{item.name}</span>
                      <span> -- {item.singer}</span>
                    </p>
                    <b onClick={() => this.handleClick(item.name)}> 取消收藏</b>
                </li>
              )
            })
          }
        </ul>
      )
    }

}
