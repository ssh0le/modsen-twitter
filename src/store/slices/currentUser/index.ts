import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/interfaces/ententies';

const initialState: { currentUser: User | null } = {
  currentUser: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
