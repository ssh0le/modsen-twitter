import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Tweet, User } from '@/interfaces';

export const selectCurrentUserSlice = (state: RootState) => state.currentUser;

export const selectCurrentUser = createSelector(
  selectCurrentUserSlice,
  (slice): User | null => {
    return slice.user;
  },
);

export const selectUserDetails = createSelector(
  selectCurrentUserSlice,
  (slice): { tweets: Tweet[]; followers: number; following: number } => {
    const { tweets, followers, following } = slice;
    return { tweets, followers, following };
  },
);
