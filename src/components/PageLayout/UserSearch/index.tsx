import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from '@/components/UI';
import { routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { useSearch } from '@/hooks/useSearch';
import { User } from '@/interfaces';
import { selectCurrentUser } from '@/store/selectors';
import { firestore } from '@/utils';

import UserList from '../UserList';

const UserSearch = () => {
  const { getRecommendedUsers, getUsersByQuery } = firestore;
  const { pathname } = useLocation();
  const { profileId } = useAppSelector(selectCurrentUser)!;
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);
  const isUserSearch = pathname.includes(routePathes.profile);

  const {
    isSearchActive,
    results: searchUsers,
    isLoading,
  } = useSearch<User>(getUsersByQuery, isUserSearch);

  useEffect(() => {
    const fetchRecommendedUsers = async () => {
      const users = await getRecommendedUsers(profileId);
      setRecommendedUsers(users);
    };

    fetchRecommendedUsers();
  }, [profileId, getRecommendedUsers]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {recommendedUsers.length > 0 && !isSearchActive && (
        <UserList title={'You might like'} users={recommendedUsers} />
      )}
      {isSearchActive && (
        <UserList title="Search results" users={searchUsers} />
      )}
    </>
  );
};

export default UserSearch;