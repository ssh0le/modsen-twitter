import { RootState } from '..';

export const selectCurrentTheme = (state: RootState) =>
  state.theme.currentTheme;
