import { Suspense, useCallback, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { breakpoints, icons, placeholders, routePathes } from '@/constants';
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
const { searchTweets, searchUsers } = placeholders;

const PageLayout = () => {
  const { name, avatar, tag, profileId } = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const windowWidth = useWindowWidth();

  const { pathname } = useLocation();

  const searchBarPlaceholder = pathname.includes(routePathes.profile)
    ? searchUsers
    : searchTweets;

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = 'scroll';

    return () => {
      bodyStyle.overflowY = 'auto';
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(updateUserInfo(profileId));
  }, [profileId]);

  const handleLogOutClick = useCallback(() => {
    dispatch(logOutUser());
    dispatch(resetTheme());
  }, []);

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
                currentUserId={profileId}
                name={name}
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
            <SearchBar placeholder={searchBarPlaceholder} />
            <UserSearch />
          </SearchModal>
        </>
      ) : (
        <RigthAside>
          <SearchContainer>
            <SearchBar placeholder={searchBarPlaceholder} />
            <UserSearch />
          </SearchContainer>
        </RigthAside>
      )}
    </PageLayoutContainer>
  );
};

export default PageLayout;
