import React, {Component} from 'react';
import './index.less'


const Rank = (props) => {
    let {tabData} = props
    return (
        <ul className='rankTab'>
            {tabData && tabData.map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.name}</span>
                        <span>
                            -- {item.singer}</span>
                    </li>
                )
            })
}


        </ul>
    )
}
export default Rank
