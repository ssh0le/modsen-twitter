import { combineReducers, configureStore } from '@reduxjs/toolkit';

import currentUserReducer from './slices/currentUser';
import themeReducer from './slices/theme';

const rootReducer = combineReducers({
  theme: themeReducer,
  currentUser: currentUserReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
