import { FC } from 'react';

import { Button, SerifText } from '@UI';

import Logo from '../Logo';
import UserCard from '../UserCard';

import Header from './Header';
import { PageLayoutProps } from './interfaces';
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

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
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
              name={'asdasd'}
              id={'@asdasd'}
              avatar={''}
            />
          </UserCardContainer>
          <Button type="log-out" onClick={() => 0}>
            <SerifText>Log out</SerifText>
          </Button>
        </CurrentUserContainer>
      </LeftAside>
      <ContentWrapper>
        <Header user={{ name: 'Barbar', tweetsAmount: 0 }} />
        <main>{children}</main>
      </ContentWrapper>
      <RigthAside>
        <Search />
      </RigthAside>
    </PageLayoutContainer>
  );
};

export default PageLayout;
