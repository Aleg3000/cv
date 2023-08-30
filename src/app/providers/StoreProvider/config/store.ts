import { configureStore, type Store } from '@reduxjs/toolkit'
import { aboutReducer } from 'entities/About'
import { worksReducer } from 'entities/Works/model'
import { type StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema): Store {
    return configureStore<StateSchema>({
        reducer: {
            about: aboutReducer,
            works: worksReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
