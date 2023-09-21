import throttle from 'lodash.throttle'
import { useDispatch } from 'react-redux'
import { combineReducers, legacy_createStore } from 'redux'
import { loadState } from '../../../../utils/localStorage/loadState'
import { saveState } from '../../../../utils/localStorage/saveState'
import { counterReducer } from '../../../model/reducer/counter.reducer'
import { AppDispatch } from '../types/store.types'

export const rootReducer = combineReducers({
  counter: counterReducer,
})
export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(
  throttle(() => {
    saveState(store.getState())
  }, 1000),
)
export const useAppDispatch: () => AppDispatch = useDispatch
