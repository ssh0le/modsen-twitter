import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { setUser } from '@/store/slices/currentUser';
import { Button, SerifText } from '@UI';

import Logo from '../Logo';
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
  UserCardContainer,
} from './styled';

const PageLayout = () => {
  const { name, avatar, tag: link } = useAppSelector(selectCurrentUser)!;
  const dispatch = useAppDispatch();

  const handleLogOutClick = () => {
    dispatch(setUser(null));
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
              id={link}
              avatar={avatar}
            />
          </UserCardContainer>
          <Button type="log-out" onClick={handleLogOutClick}>
            <SerifText>Log out</SerifText>
          </Button>
        </CurrentUserContainer>
      </LeftAside>
      <ContentWrapper>
        <Header user={{ name, tweetsAmount: 0 }} />
        <main>
          <Outlet />
        </main>
      </ContentWrapper>
      <RigthAside>
        <Search />
      </RigthAside>
    </PageLayoutContainer>
  );
};

export default PageLayout;
