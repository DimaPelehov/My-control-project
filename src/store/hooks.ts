import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// це ми визначили типи для функцій useAppDispatch та useAppSelector

// useAppSelector - f-я, яка дозволяє витягувати дані зі сховища
// useAppDispatch - f-я, яка дозволяє надсилати дані в сховище
