import { createAsyncThunk } from '@reduxjs/toolkit';

import { firestore } from '@/utils/firebase';

import { AddTweetProps, DeleteTweetProps } from './interfaces';

const {
  getUserTweets,
  fetchUserActivity,
  createTweet,
  deleteTweet,
  fetchUserFullInfo,
} = firestore;

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
    const deatils = await fetchUserActivity(userId);
    return deatils;
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
