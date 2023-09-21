import { RootState } from '../../providers/store-provider/types/store.types'

export const getIsDataSet = (state: RootState): boolean => state.counter.dataIsSet
export const getMin = (state: RootState): number => state.counter.min
export const getMax = (state: RootState): number => state.counter.max
export const getCurrent = (state: RootState): number => state.counter.currentValue
export const getError = (state: RootState): string => state.counter.error

export const counterSelectors = (state: RootState) => state.counter
