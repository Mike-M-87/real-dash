import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    layout_theme: "lightmode",
    main_theme: "mainlightmode",
    dark: false,
  },

  reducers: {
    toggleTheme: (state) => {
      state.layout_theme =
        state.layout_theme == "darkmode" ? "lightmode" : "darkmode";
      state.main_theme =
        state.main_theme == "maindarkmode" ? "mainlightmode" : "maindarkmode";
      state.dark = !state.dark;
    },
    setLightTheme: (state) => {
      state.layout_theme = "lightmode";
      state.main_theme = "mainlightmode";
      state.dark = false;
    },
    setDarkTheme: (state) => {
      state.layout_theme = "darkmode";
      state.main_theme = "maindarkmode";
      state.dark = true;
    },
  },
});

export const themeActions = themeSlice.actions;

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showNav: true,
  },
  reducers: {
    toggle: (state) => {
      state.showNav = !state.showNav;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;
