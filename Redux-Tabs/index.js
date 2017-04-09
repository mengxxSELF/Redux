import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Tabs from './containers/Tabs'
//import todoTabs from './reducer'

let store = {name:'name1'}

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Tabs />
  </Provider>,
  rootElement
)
