import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { config } from '@/constants';

const {
  googleApiKey,
  databaseUrl,
  ownerId,
  appId,
  measurementId,
  projectId,
  storageBucket,
  authDomain,
} = config;

const firebaseConfig = {
  apiKey: googleApiKey,
  authDomain,
  databaseUrl,
  projectId,
  storageBucket,
  messagingSenderId: ownerId,
  appId,
  measurementId,
};

const app = initializeApp(firebaseConfig);

const userInfoDbName = 'userInfo';
const tweetsDbName = 'tweets';
const followersDbName = 'followers';

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const userInfoRef = collection(db, userInfoDbName);
export const tweetsRef = collection(db, tweetsDbName);
export const followersRef = collection(db, followersDbName);

export const databaseName = {
  usersInfo: userInfoDbName,
  tweets: tweetsDbName,
  followers: followersDbName,
};
