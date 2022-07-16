import { configureStore } from '@reduxjs/toolkit'
import {  themeSlice } from './reducers'

export default configureStore({
  reducer: {
    theme: themeSlice.reducer
  },
})
