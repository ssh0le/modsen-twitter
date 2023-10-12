import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import UserProfile from '@/components/UserProfile';
import { Tweet, User } from '@/interfaces';
import { firestore } from '@/utils';

const UserDetailsPage: FC = () => {
  const { fetchUserFullInfo } = firestore;
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [activity, setActivity] = useState<{
    tweets: Tweet[];
    followers: string[];
    following: string[];
  }>({
    tweets: [],
    followers: [],
    following: [],
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (userId) {
        const details = await fetchUserFullInfo(userId);
        if (details) {
          const { user, activity } = details;
          setUser(user);
          setActivity(activity);
        } else {
          navigate('user-not-found');
        }
      } else {
        navigate('user-not-found');
      }
    };

    fetchUserProfile();
  }, [userId, fetchUserFullInfo, navigate]);

  // const handleEditClick = () => {
  //   // firestore.updateUser(id, { name: `BarBar${new Date().getMinutes()}` });
  // };

  const { tweets, followers, following } = activity;

  return (
    <>
      {user !== null && (
        <UserProfile
          user={user}
          tweets={tweets}
          followers={followers.length}
          following={following.length}
          isCurrentUserProfile={false}
        />
      )}
    </>
  );
};

export default UserDetailsPage;
