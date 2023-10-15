import { getAuth } from 'firebase/auth';
import { ChangeEvent, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { routePathes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { Tweet as ITweet, User } from '@/interfaces';
import { selectCurrentUser } from '@/store/selectors';
import { logOutUser } from '@/store/slices/currentUser';
import { toggleTheme } from '@/store/slices/theme';
import { updateUserInfo } from '@/store/slices/thunk/user';
import { firestore } from '@/utils';
import { Button, SerifText } from '@UI';

import Logo from '../Logo';
import Tweet from '../Tweet';
import UserCard from '../UserCard';

import Header from './Header';
import MenuSidebar from './Menu';
import Search from './Search';
import {
  ContentWrapper,
  CurrentUserContainer,
  LeftAside,
  MenuContainer,
  PageLayoutContainer,
  RigthAside,
  SearchContainer,
  UserCardContainer,
} from './styled';
import UserList from './UserList';

const PageLayout = () => {
  const { name, avatar, tag, profileId } = useAppSelector(selectCurrentUser)!;
  const { getRecommendedUsers, getTweetsByQuery, getUsersByQuery } = firestore;
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState<string>('');
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);
  const [searchUsers, setSearchUsers] = useState<User[]>([]);
  const [searchTweets, setSearchTweets] = useState<ITweet[]>([]);
  const { pathname } = useLocation();

  const auth = getAuth();
  console.log(auth.currentUser);

  const isTweetSearch = pathname.includes(routePathes.home);

  useEffect(() => {
    dispatch(updateUserInfo(profileId));
  }, []);

  useEffect(() => {
    const fetchRecommendedUsers = async () => {
      const users = await getRecommendedUsers(profileId);
      setRecommendedUsers(users);
    };

    fetchRecommendedUsers();
  }, [profileId]);

  useEffect(() => {
    const searchByQuery = async () => {
      if (query) {
        if (isTweetSearch) {
          const tweets = await getTweetsByQuery(query);
          setSearchTweets(tweets);
        } else {
          const users = await getUsersByQuery(query);
          setSearchUsers(users);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      searchByQuery();
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [query, isTweetSearch]);

  const handleLogOutClick = () => {
    dispatch(logOutUser());
    dispatch(toggleTheme());
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <PageLayoutContainer>
      <LeftAside>
        <Logo size="small" />
        <MenuContainer>
          <MenuSidebar />
        </MenuContainer>
        <Button type="colored" onClick={() => 0}>
          <SerifText>Tweet</SerifText>
        </Button>
        <CurrentUserContainer>
          <UserCardContainer>
            <UserCard
              size={'log-out'}
              name={name || 'Anonymous'}
              tag={tag}
              avatar={avatar}
              userId={profileId}
            />
          </UserCardContainer>
          <Button type="log-out" onClick={handleLogOutClick}>
            <SerifText>Log out</SerifText>
          </Button>
        </CurrentUserContainer>
      </LeftAside>
      <ContentWrapper>
        <Header />
        <main>
          {!isTweetSearch || query.length === 0 ? (
            <Outlet />
          ) : (
            <>
              {searchTweets.map((info) => (
                <Tweet info={info} currentUserId={profileId} />
              ))}
            </>
          )}
        </main>
      </ContentWrapper>
      <RigthAside>
        <SearchContainer>
          <Search onChange={handleSearchChange} />
          {(isTweetSearch || query.length === 0) && (
            <UserList title={'You might like'} users={recommendedUsers} />
          )}
          {!isTweetSearch && query.length !== 0 && (
            <UserList title="Search results" users={searchUsers} />
          )}
        </SearchContainer>
      </RigthAside>
    </PageLayoutContainer>
  );
};

export default PageLayout;
