import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    searchData : searchSlice,
    // userData: userSlice
  },
})