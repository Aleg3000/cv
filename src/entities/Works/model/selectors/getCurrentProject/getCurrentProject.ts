import { type StateSchema } from 'app/providers/StoreProvider'

export const getCurrentProject = (state: StateSchema): number => state.works.currentProject
