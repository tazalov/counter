import { RootState } from '../../../../app/providers/store-provider/types/store.types'

export const getCounterState = (state: RootState) => state.counter
