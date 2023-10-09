export interface GoogleSignUpResponse {
  user: UserInfo;
}

export interface UserInfo {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}
