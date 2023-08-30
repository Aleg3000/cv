import { type StateSchema } from 'app/providers/StoreProvider'

export const getIsAboutOpen = (state: StateSchema) => state.about.isOpen
export const getIsAboutOpening = (state: StateSchema) => state.about.isOpening
export const getIsAboutClosing = (state: StateSchema) => state.about.isClosing
