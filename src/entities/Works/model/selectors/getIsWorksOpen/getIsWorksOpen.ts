import { type StateSchema } from 'app/providers/StoreProvider'

export const getIsWorksOpen = (state: StateSchema): boolean => state.works.isOpen
export const getIsWorksOpening = (state: StateSchema): boolean => state.works.isOpening
export const getIsWorksClosing = (state: StateSchema): boolean => state.works.isClosing
