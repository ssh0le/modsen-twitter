import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  DocumentReference,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

import {
  auth,
  databaseName,
  db,
  followersRef,
  storage,
  tweetsRef,
  userInfoRef,
} from '@/firebase';
import { convertEntetyFromSnapshot, convertNewUserFromAuth } from '@/helpers';
import {
  FollowerList,
  FormTweet,
  FormUser,
  Tweet,
  User,
} from '@/interfaces/ententies';

const provider = new GoogleAuthProvider();

const { usersInfo, tweets, followers } = databaseName;

const getUserInfo = async (id: string) => {
  const userInfoQuery = query(userInfoRef, where('profileId', '==', id));
  const { docs } = await getDocs(userInfoQuery);
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
        return convertEntetyFromSnapshot<User>(userSnapshot);
      } else {
        const transformedUser = convertNewUserFromAuth(user);
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
      const transformedUser = convertNewUserFromAuth(user);
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
        return convertEntetyFromSnapshot<User>(userSnapshot);
      } else {
        return null;
      }
    })
    .catch((error) => Promise.reject(error));
};

const createTweet = async (
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

const deleteTweet = async (tweetId: string) => {
  await deleteDoc(doc(db, tweets, tweetId));
};

const getUserTweets = async (profileId: string) => {
  const tweetsQuery = query(
    tweetsRef,
    where('userId', '==', profileId),
    orderBy('postedAt', 'desc'),
  );
  const { docs } = await getDocs(tweetsQuery);
  const userTweets = docs.map(
    (doc) => ({ ...doc.data(), id: doc.id }) as Tweet,
  );
  return userTweets;
};

const updateLike = async (
  tweetId: string,
  userId: string,
  operationType: 'set' | 'unset',
) => {
  const tweetRef = doc(db, tweets, tweetId);
  return updateDoc(tweetRef, {
    likes: operationType === 'set' ? arrayUnion(userId) : arrayRemove(userId),
  });
};

const findFollowerListByUser = async (userId: string) => {
  const listQuery = query(followersRef, where('profileId', '==', userId));
  const { docs } = await getDocs(listQuery);
  if (docs.length === 0) {
    return null;
  }
  return convertEntetyFromSnapshot<FollowerList>(docs[0]);
};

const updateFollowers = async (
  mainUserId: string,
  followerId: string,
  operationType: 'follow' | 'unfollow',
) => {
  const followerList = await findFollowerListByUser(mainUserId);
  if (!followerList) {
    return null;
  }
  const followerListRef = doc(db, followers, followerList.id);
  return updateDoc(followerListRef, {
    followers:
      operationType === 'follow'
        ? arrayUnion(followerId)
        : arrayRemove(followerId),
  });
};

const getUserFollowers = async (userId: string) => {
  const list = await findFollowerListByUser(userId);
  return list ? list.followers : [];
};

const getUserFollowing = async (userId: string) => {
  const userFollowingQuery = query(
    followersRef,
    where('followers', 'array-contains', userId),
  );
  const { docs } = await getDocs(userFollowingQuery);
  return docs
    ? docs.map(
        (snapshot) =>
          convertEntetyFromSnapshot<FollowerList>(snapshot).profileId,
      )
    : [];
};

const getRecommendedUsers = async (userId: string) => {
  const userFollowing = await getUserFollowing(userId);
  const recommendationQuery = query(
    userInfoRef,
    where('profileId', 'not-in', [userId, ...userFollowing]),
  );
  const { docs } = await getDocs(recommendationQuery);
  return docs
    ? docs.map((userSnapshot) => convertEntetyFromSnapshot<User>(userSnapshot))
    : [];
};

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

const getUserFeed = async (userId: string): Promise<Tweet[]> => {
  const userFollowing = await getUserFollowing(userId);
  const feedTweetsQuery = query(
    tweetsRef,
    where('userId', 'in', [userId, ...userFollowing]),
    orderBy('postedAt', 'desc'),
  );
  const { docs } = await getDocs(feedTweetsQuery);
  return docs ? docs.map(convertEntetyFromSnapshot<Tweet>) : [];
};

const updateUser = (id: string, newInfo: Partial<FormUser>) => {
  const userRef = doc(db, usersInfo, id);
  updateDoc(userRef, {
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
  deleteTweet,
  updateUser,
  getUserTweets,
  updateLike,
  getRecommendedUsers,
  updateFollowers,
  getUserFollowers,
  getUserFollowing,
  getUserFeed,
};
