import React, {Component} from 'react'
import './index.less'

export default class Hot extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    e.target.parentNode.style.display = 'none'
  }
  render () {
    let hotData = this.props.data
    return (
      <ul className='hotTab'>
        {
          hotData && hotData.map((item, index) => {
            return (
              <li key={index}>
                <p>
                  <span>{item.name}</span>
                  <span>-- {item.singer}</span>
                </p>
                <b onClick={this.handleClick}>取消收藏</b>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
