import { type AboutSchema } from 'entities/About'
import { type WorksSchema } from 'entities/Works'

export interface StateSchema {
    about: AboutSchema
    works: WorksSchema
}
