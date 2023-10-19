import {
  addDoc,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

import { databaseName, db, storage, tweetsRef } from '@/firebase';
import { convertEntetyFromSnapshot } from '@/helpers';
import { Tweet, User } from '@/types/ententies';

import { getDocsByQuery } from './firebase';

const { tweets } = databaseName;

export const createTweet = async (
  { text, image }: { text: string; image: File | null },
  user: User,
) => {
  const { avatar, profileId, tag, name } = user;
  const tweetRef = await addDoc(tweetsRef, {
    text,
    userAvatar: avatar,
    userId: profileId,
    userName: name,
    userTag: tag,
    image: null,
    postedAt: new Date().getTime(),
    likes: [],
  });
  if (image) {
    const imageRef = ref(storage, `tweets/${tweetRef.id}`);
    await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = async (readerEvent) => {
        const result = readerEvent?.target?.result;
        if (result) {
          await uploadString(imageRef, result as string, 'data_url').then(
            async () => {
              const downloadURL = await getDownloadURL(imageRef);
              await updateDoc(doc(db, tweets, tweetRef.id), {
                image: downloadURL,
              });
              resolve(0);
            },
          );
        }
        reject();
      };
    });
  }
};

export const deleteTweet = async (tweetId: string) => {
  await deleteDoc(doc(db, tweets, tweetId));
};

export const getUserTweets = async (profileId: string) => {
  const tweetsQuery = query(
    tweetsRef,
    where('userId', '==', profileId),
    orderBy('postedAt', 'desc'),
  );
  const { docs } = await getDocs(tweetsQuery);
  return docs ? docs.map(convertEntetyFromSnapshot<Tweet>) : [];
};

export const updateLike = async (
  tweetId: string,
  userId: string,
  operationType: 'set' | 'unset',
) => {
  const tweetRef = doc(db, tweets, tweetId);
  return updateDoc(tweetRef, {
    likes: operationType === 'set' ? arrayUnion(userId) : arrayRemove(userId),
  });
};

export const getTweetsByQuery = async (queryFromUser: string) => {
  const tweets = await getDocsByQuery<Tweet>(tweetsRef, 'text', queryFromUser);
  return tweets;
};
