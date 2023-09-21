import { RootState } from '../../app/providers/store-provider/types/store.types'

export const saveState = (state: RootState) => {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('counter-state', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}
