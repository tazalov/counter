import { CounterAT, CounterST } from '../types/counter.types'

const initialState: CounterST = {
  min: 0,
  max: 1,
  currentValue: 0,
  dataIsSet: false,
  error: '',
}

export const counterReducer = (state = initialState, action: CounterAT) => {
  switch (action.type) {
    case 'counter/increment': {
      return {
        ...state,
        currentValue: state.currentValue + 1,
      }
    }
    case 'counter/decrement': {
      return {
        ...state,
        currentValue: state.currentValue - 1,
      }
    }
    case 'counter/reset': {
      return {
        ...state,
        currentValue: state.min,
      }
    }
    case 'counter/changeDataSet': {
      return {
        ...state,
        dataIsSet: action.isDataSet,
        currentValue: state.min,
      }
    }
    case 'counter/changeMin': {
      return {
        ...state,
        min: action.min,
        currentValue: action.min,
      }
    }
    case 'counter/changeMax': {
      return {
        ...state,
        max: action.max,
      }
    }
    case 'counter/setError': {
      return {
        ...state,
        error: action.error,
      }
    }
    default: {
      return { ...state }
    }
  }
}
