import { FC, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Tweet from '@/components/Tweet';
import UserProfile from '@/components/UserProfile';
import { routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { Tweet as ITweet, User } from '@/interfaces';
import { selectCurrentUser } from '@/store/selectors';
import { firestore } from '@/utils';

const UserDetailsPage: FC = () => {
  const { fetchUserFullInfo } = firestore;
  const { profileId } = useAppSelector(selectCurrentUser)!;
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [activity, setActivity] = useState<{
    tweets: ITweet[];
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
        setIsLoading(true);
        const details = await fetchUserFullInfo(userId);
        if (details) {
          const { user, activity } = details;
          setUser(user);
          setActivity(activity);
        } else {
          navigate('user-not-found');
        }
        setIsLoading(false);
      } else {
        navigate('user-not-found');
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId, fetchUserFullInfo, navigate]);

  if (userId === profileId) {
    return <Navigate to={routePathes.profile} replace />;
  }

  const { tweets, followers, following } = activity;

  const renderTweet = (tweetInfo: ITweet) => (
    <Tweet key={tweetInfo.id} info={tweetInfo} currentUserId={profileId} />
  );

  return (
    <>
      {user !== null && (
        <UserProfile
          user={user}
          tweets={tweets}
          followers={followers.length}
          following={following.length}
          renderTweet={renderTweet}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default UserDetailsPage;
