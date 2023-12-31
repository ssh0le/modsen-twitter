import { FC, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Tweet from '@/components/Tweet';
import UserProfile from '@/components/UserProfile';
import { routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { Tweet as ITweet, User } from '@/types';
import { fetchUserFullInfo } from '@/utils';

const { profile, userNotFound } = routePathes;

const UserDetailsPage: FC = () => {
  const { profileId } = useAppSelector(selectCurrentUser);
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
          navigate(userNotFound);
        }
        setIsLoading(false);
      } else {
        navigate(userNotFound);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId, navigate]);

  if (userId === profileId) {
    return <Navigate to={profile} replace />;
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
