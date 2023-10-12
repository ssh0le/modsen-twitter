import { Tweet, User } from './ententies';

export interface CurrentUserState {
  user: User | null;
  tweets: Tweet[];
  followers: number;
  following: number;
  isFetchingTweets: boolean;
}
