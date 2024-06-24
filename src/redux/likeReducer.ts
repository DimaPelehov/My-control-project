import { createSlice } from '@reduxjs/toolkit'

type LikesType = { [id: number]: boolean }

export const initialState: LikesType = {}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLikeState: (state, action) =>
            // toggleLikeState це функція котра поверне нове значення state
            ({
                ...state,
                [action.payload]: !state[action.payload],
                // в нашому випадку action.payload - це id
            }),
    },
})

export const { toggleLikeState } = likeSlice.actions

export default likeSlice.reducer
