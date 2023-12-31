import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from '@/components/UI';
import { layoutStatics, routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { useSearch } from '@/hooks/useSearch';
import { selectCurrentUser } from '@/store/selectors';
import { User } from '@/types';
import { getRecommendedUsers, serchUsersByQuery } from '@/utils';

import UserList from '../UserList';

const { recommendationHeading, searchResultsHeading } = layoutStatics;

const UserSearch = () => {
  const { pathname } = useLocation();
  const { profileId } = useAppSelector(selectCurrentUser);
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);
  const [isRecommendsLoading, setIsRecommendsLoading] =
    useState<boolean>(false);
  const isUserSearch = pathname.includes(routePathes.profile);

  const {
    isSearchActive,
    results: searchUsers,
    isLoading,
  } = useSearch<User>(serchUsersByQuery, isUserSearch);

  useEffect(() => {
    const fetchRecommendedUsers = async () => {
      setIsRecommendsLoading(true);
      const users = await getRecommendedUsers(profileId);
      setRecommendedUsers(users);
      setIsRecommendsLoading(false);
    };

    fetchRecommendedUsers();
  }, []);

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
};

export default UserSearch;
