import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { CurrentUserState, SearchState, ThemeState } from '@/types';

import currentUserReducer from './slices/currentUser';
import searchReducer from './slices/search';
import themeReducer from './slices/theme';

const persistConfig: PersistConfig<{
  currentUser: CurrentUserState;
  theme: ThemeState;
  search: SearchState;
}> = {
  key: 'root',
  storage,
  blacklist: ['search'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  currentUser: currentUserReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
