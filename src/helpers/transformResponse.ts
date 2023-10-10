import { User as FBUser } from 'firebase/auth';
import { QueryDocumentSnapshot } from 'firebase/firestore';

import { FBUserInfo, FormUser, User } from '@/interfaces';

export const transformNewUserFromAuth = (user: FBUser): FormUser => {
  const { uid, photoURL, displayName, email } = user;
  return {
    profileId: uid,
    name: displayName || 'Anonymous',
    avatar: photoURL,
    tag: email || 'Unknown',
    status: null,
  };
};

export const transformExistingUserFromAuth = (
  userSnapshot: QueryDocumentSnapshot,
): User => {
  return {
    id: userSnapshot.id,
    ...(userSnapshot.data() as FormUser),
  };
};
