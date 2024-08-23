import { createSlice } from '@reduxjs/toolkit'

type AddSliceType = { [id: number]: boolean }

export const initialState: AddSliceType = {}

export const addSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        toggleAddState: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
    },
})

export const { toggleAddState } = addSlice.actions

export default addSlice.reducer
