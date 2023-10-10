import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

import { config } from '@/constants';

const { googleApiKey, databaseUrl, ownerId, appId, measurementId } = config;

const firebaseConfig = {
  apiKey: googleApiKey,
  authDomain: 'ssh0le-modsen-twitter.firebaseapp.com',
  databaseUrl,
  projectId: 'ssh0le-modsen-twitter',
  storageBucket: 'ssh0le-modsen-twitter.appspot.com',
  messagingSenderId: ownerId,
  appId,
  measurementId,
};

const app = initializeApp(firebaseConfig);

const userInfoDbName = 'userInfo';
const tweetsDbName = 'tweets';

export const auth = getAuth(app);
export const db = getFirestore(app);

export const userInfoRef = collection(db, userInfoDbName);
export const tweetsRef = collection(db, tweetsDbName);

export const databaseName = {
  users: userInfoDbName,
  tweets: tweetsDbName,
};
