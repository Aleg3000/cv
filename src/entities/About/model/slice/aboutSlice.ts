import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AboutSchema } from '../types/aboutSchema'

const initialState: AboutSchema = {
    isOpen: false,
    isOpening: false,
    isClosing: false
}

export const aboutSlice = createSlice({
    name: 'about',
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
        }
    }
})

// Action creators are generated for each case reducer function
export const { actions: aboutActions } = aboutSlice
export const { reducer: aboutReducer } = aboutSlice
