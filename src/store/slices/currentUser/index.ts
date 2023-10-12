import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentUserState, Tweet, User } from '@/interfaces';

import { fetchUserTweets, getUserDetails } from '../thunk/user';

const initialState: CurrentUserState = {
  user: null,
  tweets: [],
  followers: 0,
  following: 0,
  isFetchingTweets: false,
};

const currentUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setTweets: (state, action: PayloadAction<Tweet[]>) => {
      state.tweets = action.payload;
    },
    setFollowersAndFollowing: (
      state,
      action: PayloadAction<{ following: number; followers: number }>,
    ) => {
      const { following, followers } = action.payload;
      state.followers = followers;
      state.following = following;
    },
    logOutUser: (state) => {
      state.user = null;
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.fulfilled, (state, action) => {
        const { tweets, followers, following } = action.payload;
        state.tweets = tweets;
        state.followers = followers;
        state.following = following;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.isFetchingTweets = true;
      })
      .addCase(getUserDetails.rejected, (state) => {
        state.isFetchingTweets = true;
      })
      .addCase(fetchUserTweets.fulfilled, (state, action) => {
        state.tweets = action.payload;
      });
  },
});

export const { setUser, logOutUser, setFollowersAndFollowing, setTweets } =
  currentUserSlice.actions;
export default currentUserSlice.reducer;
