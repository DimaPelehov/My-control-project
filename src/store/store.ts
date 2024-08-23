import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likeSlice'
import favoriteSlice from './favoriteSlice'
import addSlice from './addSlice'

export const store = configureStore({
    reducer: {
        articlesLikeState: likeSlice,
        articlesInFavorites: favoriteSlice,
        articlesAddState: addSlice,
    },
})

//
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// це ми описали типи для подальшої роботи redux
