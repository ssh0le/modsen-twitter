import {
  arrayRemove,
  arrayUnion,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import {
  databaseName,
  db,
  followersRef,
  tweetsRef,
  userInfoRef,
} from '@/firebase';
import { convertEntetyFromSnapshot } from '@/helpers';
import { FollowerList, FormUser, Tweet, User } from '@/types';

import { getDocsByQuery, getUserInfo } from './firebase';
import { getUserTweets } from './tweets';

const { usersInfo, followers } = databaseName;

export const getUserFeed = async (userId: string): Promise<Tweet[]> => {
  const userFollowing = await getUserFollowing(userId);
  const feedTweetsQuery = query(
    tweetsRef,
    where('userId', 'in', [userId, ...userFollowing]),
    orderBy('postedAt', 'desc'),
  );
  const { docs } = await getDocs(feedTweetsQuery);
  return docs ? docs.map(convertEntetyFromSnapshot<Tweet>) : [];
};

export const updateUser = async (
  id: string,
  profileId: string,
  newInfo: Partial<Pick<FormUser, 'name' | 'tag' | 'status'>> & {
    gender: string;
  },
) => {
  return new Promise((resolve, reject) => {
    const userRef = doc(db, usersInfo, id);
    updateDoc(userRef, {
      ...newInfo,
    })
      .then(async () => {
        const tweetsQuery = query(tweetsRef, where('userId', '==', profileId));
        const { docs } = await getDocs(tweetsQuery);
        const { name, tag } = newInfo;
        Promise.all(
          docs.map((doc) => {
            return updateDoc(doc.ref, {
              userName: name,
              userTag: tag,
            });
          }),
        )
          .then(resolve)
          .catch(reject);
      })
      .catch((err) => reject(err));
  });
};

export const fetchUserActivity = async (
  userId: string,
): Promise<{
  tweets: Tweet[];
  followers: string[];
  following: string[];
}> => {
  const tweets = await getUserTweets(userId);
  const followers = await getUserFollowers(userId);
  const following = await getUserFollowing(userId);
  return {
    tweets,
    followers,
    following,
  };
};

export const fetchUserFullInfo = async (userId: string) => {
  const user = await getUserInfo(userId);
  if (!user) {
    return null;
  }
  const activity = await fetchUserActivity(userId);
  return {
    user,
    activity,
  };
};

export const getUsersByQuery = async (queryFromUser: string) => {
  const users = await getDocsByQuery<User>(userInfoRef, 'name', queryFromUser);
  return users;
};

export const getRecommendedUsers = async (userId: string) => {
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

export const updateFollowers = async (
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

const findFollowerListByUser = async (userId: string) => {
  const listQuery = query(followersRef, where('profileId', '==', userId));
  const { docs } = await getDocs(listQuery);
  if (docs.length === 0) {
    return null;
  }
  return convertEntetyFromSnapshot<FollowerList>(docs[0]);
};
