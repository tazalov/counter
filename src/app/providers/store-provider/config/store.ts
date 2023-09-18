import { combineReducers, createStore } from 'redux'
import { counterReducer } from '../../../../pages/counter'
import { counterReducer2 } from '../../../../pages/counter2'

const rootReducer = combineReducers({
  counter: counterReducer,
  counter2: counterReducer2,
})

export const store = createStore(rootReducer)
