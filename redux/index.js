import { createStore } from 'redux'
import allReducer from './reducers'
let store = createStore(allReducer)
window._store = store

export default store
