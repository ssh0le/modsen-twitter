import { CollectionReference, getDocs, query, where } from 'firebase/firestore';

import { userInfoRef } from '@/firebase';
import { convertEntetyFromSnapshot } from '@/helpers';
import { User } from '@/types';

export const getUserInfo = async (id: string) => {
  const userInfoQuery = query(userInfoRef, where('profileId', '==', id));
  const { docs } = await getDocs(userInfoQuery);
  if (docs.length !== 0) {
    return convertEntetyFromSnapshot<User>(docs[0]);
  } else {
    return null;
  }
};

export const getDocsByQuery = async <T>(
  collectionRef: CollectionReference,
  field: string,
  customQuery: string,
) => {
  const docsQuery = query(
    collectionRef,
    where(field, '>=', customQuery),
    where(field, '<=', `${customQuery}~`),
  );
  const { docs } = await getDocs(docsQuery);
  if (docs?.length) {
    return docs.map(convertEntetyFromSnapshot<T>);
  } else {
    return [];
  }
};
