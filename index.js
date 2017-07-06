import React from 'react'
import ReactDOM from 'react-dom'
import Main from './container'
import { Provider } from 'react-redux'
import store from './redux'
let root = document.getElementById('app')
ReactDOM.render(<Provider store={store}>
  <Main />
</Provider>, root)
