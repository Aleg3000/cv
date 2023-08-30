import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type WorksSchema } from '../types/worksSchema'

const initialState: WorksSchema = {
    isOpen: false,
    isOpening: false,
    isClosing: false,
    currentProject: 0,
    projectsQuantity: 5
}

export const worksSlice = createSlice({
    name: 'works',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpening = true
        },
        close: (state) => {
            state.isClosing = true
        },
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
            state.isClosing = false
            state.isOpening = false
        },
        nextProject: (state) => {
            state.currentProject = state.currentProject + 1 > state.projectsQuantity ? state.currentProject + 1 : 0
        },
        prevProject: (state) => {
            state.currentProject = state.currentProject - 1 < 0 ? state.projectsQuantity : state.currentProject - 1
        }
    }
})

// Action creators are generated for each case reducer function
export const { actions: worksActions } = worksSlice
export const { reducer: worksReducer } = worksSlice
