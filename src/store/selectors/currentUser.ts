import { RootState } from '..';

export const selectCurrentUser = (state: RootState) =>
  state.currentUser.currentUser;
