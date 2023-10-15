import { AuthErrorCodes } from 'firebase/auth';

import { handledAuthErrors } from '@/constants';

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
export type HandledAuthErrors = Extract<
  AuthErrorValues,
  (typeof handledAuthErrors)[number]
>;

export interface FirebaseAuthError {
  code: AuthErrorValues;
}
