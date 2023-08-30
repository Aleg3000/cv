import { type AboutSchema } from 'entities/About'
import { type WorksSchema } from 'entities/Works/model'

export interface StateSchema {
    about: AboutSchema
    works: WorksSchema
}
