import { Tweet, User } from '@/interfaces';

export interface UserProfileProps {
  user: User;
  tweets: Tweet[];
  followers: number;
  following: number;
  isCurrentUserProfile: boolean;
  onEditClick?: () => void;
  onTweetsUpdate?: () => void;
}
