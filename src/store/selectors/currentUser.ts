import { createSelector } from '@reduxjs/toolkit';

import { Tweet, User } from '@/interfaces';

import { RootState } from '..';

export const selectCurrentUserSlice = (state: RootState) => state.currentUser;

export const selectCurrentUser = createSelector(
  selectCurrentUserSlice,
  (slice): User | null => {
    return slice.user;
  },
);

export const selectUserDetails = createSelector(
  selectCurrentUserSlice,
  (slice): { tweets: Tweet[]; followers: string[]; following: string[] } => {
    const { tweets, followers, following } = slice;
    return { tweets, followers, following };
  },
);

export const isFetchingTweets = createSelector(
  selectCurrentUserSlice,
  (state): boolean => {
    return state.isFetchingTweets;
  },
);
