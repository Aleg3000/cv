import { aboutActions, aboutReducer } from './model/slice/aboutSlice'
import { About } from './ui/desktop/About'
import type { AboutSchema } from './model/types/aboutSchema'
import AboutMobile from './ui/mobile/AboutMobile'

export {
    aboutReducer,
    aboutActions,
    About,
    AboutMobile,
    type AboutSchema
}
