import { createSlice } from '@reduxjs/toolkit';

import { ThemeState } from '@/interfaces';

const initialState: ThemeState = {
  currentTheme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    },
    resetTheme: (state) => {
      state.currentTheme = 'light';
    },
  },
});

export const { toggleTheme, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
