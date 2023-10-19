export interface FormUser {
  profileId: string;
  name: string;
  tag: string;
  avatar: string | null;
  status: string | null;
  phone: string | null;
  dateOfBirth: string | null;
}

export interface User extends FormUser {
  id: string;
}

export interface FormTweet {
  userId: string;
  userName: string;
  userTag: string;
  userAvatar: string | null;
  text: string | null;
  image?: string | null;
}

export interface Tweet extends FormTweet {
  id: string;
  postedAt: Date;
  likes: string[];
}

export interface FollowerList {
  id: string;
  profileId: string;
  followers: string[];
}
