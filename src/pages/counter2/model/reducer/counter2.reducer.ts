import { CounterAT, CounterST } from '../types/counter2.types'

const initialState: CounterST = {
  min2: 0,
  max2: 0,
  currentValue2: 0,
  dataIsSet2: false,
}

export const counterReducer2 = (state = initialState, action: CounterAT) => {
  switch (action.type) {
    case 'counter/increment2': {
      return {
        ...state,
        currentValue2: state.currentValue2 + 1,
      }
    }
    case 'counter/decrement2': {
      return {
        ...state,
        currentValue2: state.currentValue2 - 1,
      }
    }
    case 'counter/reset2': {
      return {
        ...state,
        currentValue2: state.min2,
      }
    }
    case 'counter/toggleDataSet2': {
      return {
        ...state,
        dataIsSet2: action.dataIsSet2,
        currentValue2: state.min2,
      }
    }
    case 'counter/changeMin2': {
      return {
        ...state,
        min2: action.min2,
        currentValue2: action.min2,
      }
    }
    case 'counter/changeMax2': {
      return {
        ...state,
        max2: action.max2,
      }
    }
    default: {
      return { ...state }
    }
  }
}
