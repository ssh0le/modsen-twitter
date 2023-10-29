import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createTweet,
  deleteTweet,
  fetchUserActivity,
  fetchUserFullInfo,
  getUserTweets,
} from '@/utils';

import { AddTweetProps, DeleteTweetProps } from './interfaces';

export const fetchUserTweets = createAsyncThunk(
  'user/fetchUserTweets',
  async (userId: string) => {
    const tweets = await getUserTweets(userId);
    return tweets;
  },
);

export const getUserDetails = createAsyncThunk(
  'user/getUserProfile',
  async (userId: string) => {
    const details = await fetchUserActivity(userId);
    return details;
  },
);

export const addTweet = createAsyncThunk(
  'user/addTweet',
  async ({ tweetData, user }: AddTweetProps) => {
    await createTweet(tweetData, user);
  },
);

export const deleteUserTweet = createAsyncThunk(
  'user/deleteTweet',
  async ({ tweetId }: DeleteTweetProps) => {
    await deleteTweet(tweetId);
  },
);

export const updateUserInfo = createAsyncThunk(
  'user/updateUserinfo',
  async (userId: string) => {
    const response = await fetchUserFullInfo(userId);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
);
