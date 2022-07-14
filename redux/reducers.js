import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    layout_theme: "lightmode",
    main_theme: "mainlightmode",
    dark: false,
  },

  reducers: {
    toggleTheme: (state) => {
      state.layout_theme = state.layout_theme == "darkmode" ? "lightmode" : "darkmode";
      state.main_theme = state.main_theme == "maindarkmode" ? "mainlightmode" : "maindarkmode";
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
    }
  },
});

export const themeActions = themeSlice.actions;

// Action creators are generated for each case reducer function
export const counterActions = counterSlice.actions;
