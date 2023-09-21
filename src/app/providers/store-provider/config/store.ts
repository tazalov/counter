import { useDispatch } from 'react-redux'
import { combineReducers, legacy_createStore } from 'redux'
import { counterReducer } from '../../../model/reducer/counter.reducer'
import { AppDispatch } from '../types/store.types'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = legacy_createStore(rootReducer)

export const useAppDispatch: () => AppDispatch = useDispatch
