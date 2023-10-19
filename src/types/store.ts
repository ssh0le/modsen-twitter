import { Tweet, User } from './ententies';

export interface CurrentUserState {
  user: User | null;
  tweets: Tweet[];
  followers: string[];
  following: string[];
  isFetchingTweets: boolean;
}

export interface ThemeState {
  currentTheme: 'light' | 'dark';
}

export interface SearchState {
  query: string;
}
