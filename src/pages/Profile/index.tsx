import { FC, useEffect } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import { EditProfileModal } from '@/components/modals/EditProfileModal';
import Tweet from '@/components/Tweet';
import UserProfile from '@/components/UserProfile';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { Tweet as ITweet } from '@/interfaces';
import { selectCurrentUser, selectUserDetails } from '@/store/selectors';
import { fetchUserTweets, getUserDetails } from '@/store/slices/thunk/user';

const ProfilePage: FC = () => {
  const user = useAppSelector(selectCurrentUser)!;
  const { profileId } = user;
  const { tweets, followers, following } = useAppSelector(selectUserDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserDetails(profileId));
  }, [profileId, dispatch]);

  const handleUserTweetsChange = () => {
    dispatch(fetchUserTweets(profileId));
  };

  const renderTweet = (tweetInfo: ITweet) => (
    <Tweet
      key={tweetInfo.id}
      info={tweetInfo}
      currentUserId={profileId}
      onAfterDelete={handleUserTweetsChange}
    />
  );

  return (
    <UserProfile
      user={user}
      tweets={tweets}
      followers={followers.length}
      following={following.length}
      addTweetForm={<AddTweetForm onAfterAdd={handleUserTweetsChange} />}
      editButton={<EditProfileModal />}
      renderTweet={renderTweet}
    />
  );
};

export default ProfilePage;
