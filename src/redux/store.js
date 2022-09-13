import { configureStore } from '@reduxjs/toolkit'
import moneyReducer from './moneySlice'

export const store = configureStore({
  reducer: {
    money: moneyReducer
  },
})