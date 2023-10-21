import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { breakpoints, icons } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { LoadPage } from '@/pages/LoadPage';
import { selectCurrentUser } from '@/store/selectors';
import { logOutUser } from '@/store/slices/currentUser';
import { resetTheme } from '@/store/slices/theme';
import { updateUserInfo } from '@/store/slices/thunk/user';
import { Button, SerifText } from '@UI';

import Logo from '../Logo';
import { AddTweetModal } from '../modals/AddTweetModal';
import SearchModal from '../modals/SearchModal';
import UserCard from '../UserCard';

import Header from './Header';
import MenuSidebar from './Menu';
import SearchBar from './SearchBar';
import {
  ContentWrapper,
  CurrentUserContainer,
  LeftAside,
  LogoContainer,
  MenuContainer,
  MobileLogOutIconContainer,
  PageLayoutContainer,
  RigthAside,
  SearchContainer,
  UserCardContainer,
} from './styled';
import UserSearch from './UserSearch';

const { LogOutIcon } = icons;
const { mobile } = breakpoints;

const PageLayout = () => {
  const { name, avatar, tag, profileId } = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const windowWidth = useWindowWidth();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(updateUserInfo(profileId));
  }, [dispatch, profileId]);

  const handleLogOutClick = () => {
    dispatch(logOutUser());
    dispatch(resetTheme());
  };

  return (
    <PageLayoutContainer>
      <LeftAside>
        <LogoContainer>
          <Logo size="small" />
        </LogoContainer>
        <MenuContainer>
          <MenuSidebar />
        </MenuContainer>
        <AddTweetModal />
        {windowWidth > mobile ? (
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
        ) : (
          <>
            <MobileLogOutIconContainer onClick={handleLogOutClick}>
              <LogOutIcon />
            </MobileLogOutIconContainer>
          </>
        )}
      </LeftAside>
      <ContentWrapper>
        <Header />
        <main>
          <Suspense fallback={<LoadPage />}>
            <Outlet />
          </Suspense>
        </main>
      </ContentWrapper>
      {windowWidth <= mobile ? (
        <>
          <SearchModal>
            <SearchBar />
            <UserSearch />
          </SearchModal>
        </>
      ) : (
        <RigthAside>
          <SearchContainer>
            <SearchBar />
            <UserSearch />
          </SearchContainer>
        </RigthAside>
      )}
    </PageLayoutContainer>
  );
};

export default PageLayout;
