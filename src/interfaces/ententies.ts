export interface FormUser {
  profileId: string;
  name: string;
  tag: string;
  avatar: string | null;
  status: string | null;
}

export interface User extends FormUser {
  id: string;
}

export interface FormTweet {
  userId: string;
  userName: string;
  userTag: string;
  avatar: string | null;
  text: string;
  images: string[];
}

export interface Tweet extends FormTweet {
  id: string;
  postedAt: Date;
  likes: string[];
}
