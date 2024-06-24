import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'

export const store = configureStore({
    reducer: {
        articlesLikeState: likeReducer,
    },
})

//
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// це ми описали типи для подальшої роботи redux
