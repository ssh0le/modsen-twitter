import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { addDoc, DocumentReference } from 'firebase/firestore';

import { auth, followersRef, userInfoRef } from '@/firebase';
import { convertNewUserFromAuth } from '@/helpers';
import { FormUser, User } from '@/types/ententies';

import { getUserInfo } from './firebase';

const provider = new GoogleAuthProvider();

const addNewUserToDb = async (
  user: FormUser,
): Promise<DocumentReference<User> | null> => {
  try {
    const newUser = (await addDoc(
      userInfoRef,
      user,
    )) as DocumentReference<User>;
    await addDoc(followersRef, {
      profileId: user.profileId,
      followers: [],
    });
    return newUser;
  } catch (e) {
    return null;
  }
};

export const googleSignIn = async (): Promise<User | void | null> => {
  return signInWithPopup(auth, provider)
    .then(async (result) => {
      const authUser = result.user;
      const user = await getUserInfo(authUser.uid);
      if (user) {
        return user;
      } else {
        const transformedUser = convertNewUserFromAuth(authUser);
        const newUserInfoSnapshot = await addNewUserToDb(transformedUser);
        if (newUserInfoSnapshot) {
          return {
            id: newUserInfoSnapshot.id,
            ...transformedUser,
          };
        } else {
          return null;
        }
      }
    })
    .catch((error) => {
      Promise.reject(error);
    });
};

export const createUserWithEmail = async (
  email: string,
  password: string,
  displayName: string,
  phone: string,
  dateOfBirth: string,
): Promise<User | void | null> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      const user = result.user;
      await updateProfile(user, {
        displayName,
      });
      const transformedUser = convertNewUserFromAuth(user, dateOfBirth, phone);
      const newUserInfoSnapshot = await addNewUserToDb(transformedUser);
      if (newUserInfoSnapshot) {
        return {
          id: newUserInfoSnapshot.id,
          ...transformedUser,
          name: displayName,
        };
      } else {
        return null;
      }
    })
    .catch((error) => Promise.reject(error));
};

export const emailSignIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      const authUser = result.user;
      const user = await getUserInfo(authUser.uid);
      return user;
    })
    .catch((error) => Promise.reject(error));
};

export const updateUserPassword = async (newPassword: string) => {
  const user = auth.currentUser;
  if (user) {
    return updatePassword(user, newPassword);
  }
};
