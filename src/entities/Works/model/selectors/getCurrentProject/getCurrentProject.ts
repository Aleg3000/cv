import { type StateSchema } from 'app/providers/StoreProvider'

export const getCurrentProject = (state: StateSchema): number => state.works.currentProject
export const getIsProjectChanging = (state: StateSchema): boolean => state.works.isProjectChanging
export const getProjectQuantity = (state: StateSchema): number => state.works.projectsQuantity
