import { FC } from 'react';

import Logo from '../Logo';
import { Button, SerifText } from '../shared';
import UserCard from '../UserCard';

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
      <ContentWrapper>{children}</ContentWrapper>
      <RigthAside>
        <Search />
      </RigthAside>
    </PageLayoutContainer>
  );
};

export default PageLayout;
