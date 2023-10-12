import { User as FBUser } from 'firebase/auth';
import { QueryDocumentSnapshot } from 'firebase/firestore';

import { FormUser } from '@/interfaces';

export const convertNewUserFromAuth = (user: FBUser): FormUser => {
  const { uid, photoURL, displayName, email } = user;
  return {
    profileId: uid,
    name: displayName || 'Anonymous',
    avatar: photoURL,
    tag: email || 'Unknown',
    status: null,
  };
};

export const convertEntetyFromSnapshot = <T>(
  snapshot: QueryDocumentSnapshot,
): T => {
  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as T;
};
