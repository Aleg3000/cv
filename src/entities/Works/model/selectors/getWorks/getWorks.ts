import { type StateSchema } from 'app/providers/StoreProvider'
import { type WorksSchema } from '../../types/worksSchema'

export const getWorks = (state: StateSchema): WorksSchema => state.works
