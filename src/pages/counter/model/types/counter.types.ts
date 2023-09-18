import {
  changeMax,
  changeMin,
  decrement,
  increment,
  resetData,
  toggleDataSet,
} from '../actions/counter.actions'

export interface CounterST {
  min: number
  max: number
  currentValue: number
  dataIsSet: boolean
}

//* action types
export type CounterAT =
  | IncrementAT
  | DecrementAT
  | ResetAT
  | ToggleDataSet
  | ChangeMinAT
  | ChangeMaxAT

type IncrementAT = ReturnType<typeof increment>
type DecrementAT = ReturnType<typeof decrement>
type ResetAT = ReturnType<typeof resetData>
type ToggleDataSet = ReturnType<typeof toggleDataSet>
type ChangeMinAT = ReturnType<typeof changeMin>
type ChangeMaxAT = ReturnType<typeof changeMax>
