import { getDocs, query, where } from 'firebase/firestore';

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
