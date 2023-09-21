import type { RootState } from '../../app/providers/store-provider/types/store.types'

export const loadState = (): undefined | RootState => {
  try {
    const serialisedState = localStorage.getItem('counter-state')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}
