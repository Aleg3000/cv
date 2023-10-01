import { worksActions, worksReducer } from './model/slice/worksSlice'
import { Works } from './ui/desktop/Works'
import type { WorksSchema } from './model/types/worksSchema'
import WorksMobile from './ui/mobile/WorksMobile'

export {
    worksReducer,
    worksActions,
    Works,
    WorksMobile,
    type WorksSchema
}
