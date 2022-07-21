import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice, themeSlice } from "./reducers";

export default configureStore({
  reducer: {
    theme: themeSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
});
