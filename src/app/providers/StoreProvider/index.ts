import { StoreProvider } from './ui/StoreProvider'
import { type AppDispatch, createReduxStore } from './config/store'
import type { StateSchema } from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type AppDispatch
}
