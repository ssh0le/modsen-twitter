import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentUserState, Tweet, User } from '@/types';

import { fetchUserTweets, getUserDetails, updateUserInfo } from '../thunk/user';

const initialState: CurrentUserState = {
  user: null,
  tweets: [],
  followers: [],
  following: [],
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
      action: PayloadAction<{ following: string[]; followers: string[] }>,
    ) => {
      const { following, followers } = action.payload;
      state.followers = followers;
      state.following = following;
    },
    logOutUser: (state) => {
      state.user = null;
      state = {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.fulfilled, (state, action) => {
        const { tweets, followers, following } = action.payload;
        state.tweets = tweets;
        state.followers = followers;
        state.following = following;
        state.isFetchingTweets = false;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.isFetchingTweets = true;
      })
      .addCase(getUserDetails.rejected, (state) => {
        state.isFetchingTweets = true;
      })
      .addCase(fetchUserTweets.fulfilled, (state, action) => {
        state.tweets = action.payload;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        const payload = action.payload;
        if (payload) {
          const {
            user,
            activity: { followers, following, tweets },
          } = payload;
          state.user = user;
          state.followers = followers;
          state.following = following;
          state.tweets = tweets;
        }
      });
  },
});

export const { setUser, logOutUser, setFollowersAndFollowing, setTweets } =
  currentUserSlice.actions;
export default currentUserSlice.reducer;
