import { FC, useEffect } from 'react';

import UserProfile from '@/components/UserProfile';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser, selectUserDetails } from '@/store/selectors';
import { fetchUserTweets, getUserDetails } from '@/store/slices/thunk/user';

const ProfilePage: FC = () => {
  const user = useAppSelector(selectCurrentUser)!;
  const { profileId } = user;
  const dispatch = useAppDispatch();
  const { tweets, followers, following } = useAppSelector(selectUserDetails);

  useEffect(() => {
    dispatch(getUserDetails(profileId));
  }, [profileId, dispatch]);

  const handleUserTweetsChange = () => {
    dispatch(fetchUserTweets(profileId));
  };

  // const handleEditClick = () => {
  //   // firestore.updateUser(id, { name: `BarBar${new Date().getMinutes()}` });
  // };

  return (
    <UserProfile
      user={user}
      tweets={tweets}
      followers={followers.length}
      following={following.length}
      isCurrentUserProfile={true}
      onTweetsUpdate={handleUserTweetsChange}
      onEditClick={() => console.log('modal is opened')}
    />
  );
};

export default ProfilePage;
