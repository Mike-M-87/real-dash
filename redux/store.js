import { configureStore } from '@reduxjs/toolkit'
import { counterSlice, themeSlice } from './reducers'

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
  },
})
