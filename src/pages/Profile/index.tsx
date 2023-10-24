import { FC, useEffect } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import { EditProfileModal } from '@/components/modals/EditProfileModal';
import Tweet from '@/components/Tweet';
import UserProfile from '@/components/UserProfile';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import {
  isFetchingTweets,
  selectCurrentUser,
  selectUserDetails,
} from '@/store/selectors';
import { fetchUserTweets, getUserDetails } from '@/store/slices/thunk/user';
import { Tweet as ITweet } from '@/types';
import { publisher } from '@/utils';

const ProfilePage: FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const { profileId } = user;
  const { tweets, followers, following } = useAppSelector(selectUserDetails);
  const isLoading = useAppSelector(isFetchingTweets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserDetails(profileId));
  }, [profileId]);

  useEffect(() => {
    const updateTweets = () => {
      dispatch(fetchUserTweets(profileId));
    };

    const unsubscribe = publisher.subscribe(updateTweets, 'tweetsUpdate');

    return unsubscribe;
  }, [profileId]);

  const renderTweet = (tweetInfo: ITweet) => (
    <Tweet key={tweetInfo.id} info={tweetInfo} currentUserId={profileId} />
  );

  return (
    <UserProfile
      user={user}
      tweets={tweets}
      followers={followers.length}
      following={following.length}
      addTweetForm={<AddTweetForm />}
      editButton={<EditProfileModal />}
      renderTweet={renderTweet}
      isLoading={isLoading}
    />
  );
};

export default ProfilePage;
