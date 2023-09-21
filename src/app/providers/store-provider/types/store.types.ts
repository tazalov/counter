import { rootReducer, store } from '../config/store'

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch