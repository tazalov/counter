import {
  ChangeMax,
  ChangeMin,
  Decrement,
  Increment,
  ResetData,
  SetError,
  ChangeDataSet,
} from '../actions/counter.actions'

export interface CounterST {
  min: number
  max: number
  currentValue: number
  dataIsSet: boolean
  error: string
}

//* action types
export type CounterAT =
  | IncrementAT
  | DecrementAT
  | ResetAT
  | ChangeDataSetAT
  | ChangeMinAT
  | ChangeMaxAT
  | SetErrorAT

type IncrementAT = ReturnType<typeof Increment>
type DecrementAT = ReturnType<typeof Decrement>
type ResetAT = ReturnType<typeof ResetData>
type ChangeDataSetAT = ReturnType<typeof ChangeDataSet>
type ChangeMinAT = ReturnType<typeof ChangeMin>
type ChangeMaxAT = ReturnType<typeof ChangeMax>
type SetErrorAT = ReturnType<typeof SetError>
