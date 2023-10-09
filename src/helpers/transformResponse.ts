import { User as FBUser } from 'firebase/auth';

import { User } from '@/interfaces/ententies';

export const transformUserRedentials = (user: FBUser): User => {
  const { uid, photoURL, displayName, email } = user;
  return {
    id: uid,
    name: displayName || 'Anonymous',
    avatar: photoURL,
    link: email || 'Unknown',
  };
};
