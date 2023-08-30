import { type StateSchema } from 'app/providers/StoreProvider'
import { type AboutSchema } from '../../types/aboutSchema'

export const getAbout = (state: StateSchema): AboutSchema => state.about
