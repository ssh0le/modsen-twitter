import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from '@/components/UI';
import { profileStatics, routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { useSearch } from '@/hooks/useSearch';
import { selectCurrentUser } from '@/store/selectors';
import { User } from '@/types';
import { getRecommendedUsers, getUsersByQuery } from '@/utils';

import UserList from '../UserList';

const { recommendationHeading, searchResultsHeading } = profileStatics;

const UserSearch = memo(() => {
  const { pathname } = useLocation();
  const { profileId } = useAppSelector(selectCurrentUser)!;
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);
  const [isRecommendsLoading, setIsRecommendsLoading] =
    useState<boolean>(false);
  const isUserSearch = pathname.includes(routePathes.profile);

  const {
    isSearchActive,
    results: searchUsers,
    isLoading,
  } = useSearch<User>(getUsersByQuery, isUserSearch);

  useEffect(() => {
    const fetchRecommendedUsers = async () => {
      setIsRecommendsLoading(true);
      const users = await getRecommendedUsers(profileId);
      setRecommendedUsers(users);
      setIsRecommendsLoading(false);
    };

    fetchRecommendedUsers();
  }, [profileId]);

  if (isLoading || isRecommendsLoading) {
    return <Loader />;
  }

  return (
    <>
      {recommendedUsers.length > 0 && !isSearchActive && (
        <UserList title={recommendationHeading} users={recommendedUsers} />
      )}
      {isSearchActive && (
        <UserList title={searchResultsHeading} users={searchUsers} />
      )}
    </>
  );
});

export default UserSearch;
