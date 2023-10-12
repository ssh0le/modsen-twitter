import { User } from '@/interfaces';

export interface AddTweetProps {
  tweetData: { text: string; image: File | null };
  user: User;
}

export interface DeleteTweetProps {
  tweetId: string;
  userId: string;
}
