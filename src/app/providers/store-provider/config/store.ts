import { combineReducers, createStore } from 'redux'
import { counterReducer } from '../../../../pages/counter'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(rootReducer)
