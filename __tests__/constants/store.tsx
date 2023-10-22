import {
  combineReducers,
  configureStore,
  createReducer,
} from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import {
  logOutUser,
  setFollowersAndFollowing,
  setTweets,
  setUser,
} from '@/store/slices/currentUser';
import { theme } from '@/styles/theme';
import { CurrentUserState, User } from '@/types';

const user: User = {
  id: '12345678',
  profileId: '12345678',
  name: 'Test Name',
  tag: 'Test tag',
  avatar: 'test/avatar/path',
  status: 'Test status',
  phone: null,
  dateOfBirth: null,
};

const initialState: { currentUser: CurrentUserState } = {
  currentUser: {
    user,
    followers: [],
    following: [],
    tweets: [],
    isFetchingTweets: false,
  },
};

const testReducer = createReducer<CurrentUserState>(
  initialState.currentUser,
  (builder) => {
    builder
      .addCase(setUser, jest.fn())
      .addCase(logOutUser, jest.fn())
      .addCase(setFollowersAndFollowing, jest.fn())
      .addCase(setTweets, jest.fn());
  },
);

const rootReducer = combineReducers({
  currentUser: testReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export const TestProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.dark}>{children}</ThemeProvider>
    </Provider>
  );
};
