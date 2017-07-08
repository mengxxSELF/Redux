import React, {Component} from 'react'
import Rank from './Rank'
import Songs from './Songs'
import Hot from './Hot'

export default ({tabData, tabName}) => {
  let rank = tabName === 'rank'
  let songs = tabName === 'songs'
  let hot = tabName === 'hot'
  return (
    <div>
    {
      rank && <Rank tabData={tabData} />
    }
    {/* hot 面板 */}
    {
      hot && <Hot tabData={tabData} />
    }
    {/* songs 面板 */}
    {
      songs && <Songs tabData={tabData} />
    }
    </div>
  )
}
