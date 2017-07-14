import React, {Component} from 'react';
import './index.less'

export default class Rank extends Component{
  constructor (props) {
    super(props)
  }
  handleClick (name) {
    this.props.collection(name)
  }
  render () {
    let {tabData} = this.props
    return (
      <ul className='rankTab'>
        {
          tabData && tabData.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.name}</span>
                <span>  -- {item.singer}</span>
              </li>
            )
          })
       }
      </ul>
    )
  }
}
