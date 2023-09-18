import {
  changeMax2,
  changeMin2,
  decrement2,
  increment2,
  resetData2,
  toggleDataSet2,
} from '../actions/counter2.actions'

export interface CounterST {
  min2: number
  max2: number
  currentValue2: number
  dataIsSet2: boolean
}

//* action types
export type CounterAT =
  | IncrementAT
  | DecrementAT
  | ResetAT
  | ToggleDataSetAT
  | ChangeMinAT
  | ChangeMaxAT

type IncrementAT = ReturnType<typeof increment2>
type DecrementAT = ReturnType<typeof decrement2>
type ResetAT = ReturnType<typeof resetData2>
type ToggleDataSetAT = ReturnType<typeof toggleDataSet2>
type ChangeMinAT = ReturnType<typeof changeMin2>
type ChangeMaxAT = ReturnType<typeof changeMax2>
