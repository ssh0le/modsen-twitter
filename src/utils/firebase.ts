import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User,
} from 'firebase/auth';

import { auth } from '@/firebase';
import { transformUserRedentials } from '@/helpers';

const provider = new GoogleAuthProvider();

export const firebaseAuth = {
  googleSignIn: async () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        return transformUserRedentials(result.user);
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
  createUserWithEmail: async (
    email: string,
    password: string,
    displayName: string,
  ) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        const user = result.user;
        await updateProfile(user, { displayName });
        return transformUserRedentials(user);
      })
      .catch((error) => Promise.reject(error));
  },
  emailSignUp: async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        return transformUserRedentials(result.user);
      })
      .catch((error) => Promise.reject(error));
  },
  updateProfile: async (
    user: User,
    data: { displayName?: string; photoURL?: string },
  ) => {
    updateProfile(user, data);
  },
};

export const firebaseDatabase = {
  updateProfile: async (
    user: User,
    data: { name?: string; photoURL?: string },
  ) => {
    updateProfile(user, data);
  },
};
