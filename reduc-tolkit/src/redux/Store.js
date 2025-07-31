import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Createslice'
import counterReducer from './Createslice'
export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
})