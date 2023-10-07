import { SerifText } from '@/components/shared';

import { HeaderProps } from './interfaces';
import {
  CurrentUserContainer,
  HeaderContainer,
  TweetsCountContainer,
  UserNameContainer,
} from './styled';

const Header = ({ user }: HeaderProps) => {
  const { name, tweetsAmount } = user;
  return (
    <HeaderContainer>
      {true && (
        <CurrentUserContainer>
          <UserNameContainer>
            <SerifText>{name}</SerifText>
          </UserNameContainer>
          <TweetsCountContainer>{tweetsAmount} Tweets</TweetsCountContainer>
        </CurrentUserContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
