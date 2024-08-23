import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type FavoriteSliceType = { [id: number]: number }

export const initialState: FavoriteSliceType = {}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addArticleToFavorites: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),
        removeArticleFromFavorites: (state, action) =>
            omit(state, action.payload),
    },
})

export const { addArticleToFavorites, removeArticleFromFavorites } =
    favoriteSlice.actions

export default favoriteSlice.reducer
