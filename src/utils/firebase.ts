import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  addDoc,
  doc,
  DocumentReference,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { auth, databaseName, db, tweetsRef, userInfoRef } from '@/firebase';
import {
  transformExistingUserFromAuth,
  transformNewUserFromAuth,
} from '@/helpers';
import { FormTweet, FormUser, User } from '@/interfaces/ententies';

const provider = new GoogleAuthProvider();

const { users } = databaseName;

const getUserInfo = async (id: string) => {
  const q = query(userInfoRef, where('profileId', '==', id));
  const { docs } = await getDocs(q);
  if (docs.length !== 0) {
    return docs[0];
  } else {
    return null;
  }
};

const googleSignIn = async (): Promise<User | void | null> => {
  return signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;
      const userSnapshot = await getUserInfo(user.uid);
      if (userSnapshot) {
        return transformExistingUserFromAuth(userSnapshot);
      } else {
        const transformedUser = transformNewUserFromAuth(user);
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

const createUserWithEmail = async (
  email: string,
  password: string,
  displayName: string,
  phone: string,
): Promise<User | void | null> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      const user = result.user;
      const transformedUser = transformNewUserFromAuth(user);
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

const emailSignUp = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      const user = result.user;
      const userSnapshot = await getUserInfo(user.uid);
      if (userSnapshot) {
        return transformExistingUserFromAuth(userSnapshot);
      } else {
        return null;
      }
    })
    .catch((error) => Promise.reject(error));
};

const createTweet = async (tweetInfo: FormTweet) => {
  addDoc(tweetsRef, {
    ...tweetInfo,
    postedAt: new Date().getTime(),
    likes: [],
  });
};

const addNewUserToDb = async (
  user: FormUser,
): Promise<DocumentReference<User> | null> => {
  try {
    return (await addDoc(userInfoRef, user)) as DocumentReference<User>;
  } catch (e) {
    return null;
  }
};

const updateUser = (id: string, newInfo: Partial<FormUser>) => {
  const user = doc(db, users, id);
  updateDoc(user, {
    ...newInfo,
  });
};

export const firebaseAuth = {
  googleSignIn,
  createUserWithEmail,
  emailSignUp,
};

export const firestore = {
  getUserInfo,
  createTweet,
  updateUser,
};
