import { AuthErrorCodes } from 'firebase/auth';

export interface FBUserInfo {
  id: string;
  profileId: string;
  tag: string;
  name: string;
  avatar: string | null;
  status: string | null;
}

type AuthErrorKeys = keyof typeof AuthErrorCodes;
export type AuthErrorValues = (typeof AuthErrorCodes)[AuthErrorKeys];

export interface FirebaseAuthError {
  code: AuthErrorValues | 'auth/invalid-login-credentials';
}

export type AlgoliaSearchResult<T> = {
  objectID: string;
} & T;
