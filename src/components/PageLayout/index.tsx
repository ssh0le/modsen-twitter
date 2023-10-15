import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { logOutUser } from '@/store/slices/currentUser';
import { resetTheme } from '@/store/slices/theme';
import { updateUserInfo } from '@/store/slices/thunk/user';
import { Button, SerifText } from '@UI';

import Logo from '../Logo';
import { AddTweetModal } from '../modals/AddTweetModal';
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
import UserSearch from './UserSearch';

const PageLayout = () => {
  const { name, avatar, tag, profileId } = useAppSelector(selectCurrentUser)!;
  const dispatch = useAppDispatch();

  const auth = getAuth();
  console.log(auth.currentUser);

  const { pathname } = useLocation();

  useEffect(() => {
    console.log('scroll');
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(updateUserInfo(profileId));
  }, [dispatch]);

  const handleLogOutClick = () => {
    dispatch(logOutUser());
    dispatch(resetTheme());
  };

  return (
    <PageLayoutContainer>
      <LeftAside>
        <Logo size="small" />
        <MenuContainer>
          <MenuSidebar />
        </MenuContainer>
        <AddTweetModal />
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
          <Outlet />
        </main>
      </ContentWrapper>
      <RigthAside>
        <SearchContainer>
          <Search />
          <UserSearch />
        </SearchContainer>
      </RigthAside>
    </PageLayoutContainer>
  );
};

export default PageLayout;
