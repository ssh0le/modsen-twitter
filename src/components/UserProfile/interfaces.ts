import { ReactNode } from 'react';

import { Tweet, User } from '@/interfaces';

export interface UserProfileProps {
  user: User;
  tweets: Tweet[];
  followers: number;
  following: number;
  addTweetForm?: ReactNode | null;
  editButton?: ReactNode | null;
  isLoading?: boolean;
  renderTweet: (tweetInfo: Tweet) => ReactNode;
}
