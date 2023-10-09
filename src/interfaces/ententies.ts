export interface User {
  id: string;
  name: string;
  link: string;
  avatar: string | null;
}

export interface TweetInfo {}

export interface UserInfo {
  status: string | null;
  link: string | null;
  name: string | null;
  followers: number[];
  following: number[];
}
