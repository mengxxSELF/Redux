import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import counter from './reducers'

let store = createStore(counter)

class Count extends Component {

    addClick() {
        store.dispatch({type: 'add'})
    }
    reduceClick() {
        store.dispatch({type: 'reduce'})
    }
    render() {
        return (
            <div className='container'>
                <button className="btn btn-default" onClick={this.addClick.bind(this)}>
                    add
                </button>
                <p className="btn btn-info">{store.getState()}</p>
                <button className="btn btn-default" onClick={this.reduceClick.bind(this)}>
                    reduce
                </button>
            </div>
        )
    }
}

let rootEl = document.getElementById('app')
const rend = () => ReactDOM.render(
    <Count/>, rootEl)
rend()
store.subscribe(rend)
