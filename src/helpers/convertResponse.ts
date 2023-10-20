import { User as FBUser } from 'firebase/auth';
import { QueryDocumentSnapshot } from 'firebase/firestore';

import { AlgoliaSearchResult, FormUser } from '@/types';

export const convertNewUserFromAuth = (
  user: FBUser,
  dateOfBirth?: string,
  phone?: string,
): FormUser => {
  const { uid, photoURL, displayName, email } = user;
  return {
    profileId: uid,
    name: displayName || 'Anonymous',
    avatar: photoURL,
    tag: email || 'Unknown',
    status: null,
    dateOfBirth: dateOfBirth || null,
    phone: phone || null,
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

export const convertQueryResult = <T>(result: AlgoliaSearchResult<T>): T => {
  const { objectID, ...restParams } = result;
  return {
    id: objectID,
    ...restParams,
  } as T;
};
