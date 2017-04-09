import React ,{Component} from  'react'
import {connect} from 'react-redux'
import {Rank,Songs,Hot} from './../components'

import './index.scss'

export default class Tabs extends Component{
  render(){
    return(
      <div className='tabs'>
          <header>
              <ul>
                  <li data-name='rank' >排行榜</li>
                  <li data-name='songs' >歌单</li>
                  <li data-name='hot' >收藏</li>
              </ul>
          </header>
          <div className='cont'>
              cdnckd

          </div>

      </div>

    )
  }
}
