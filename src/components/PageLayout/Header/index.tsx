import { icons } from '@/constants';
import { BoldText, SerifText } from '@UI';

import ThemeSwitch from '../ThemeSwitch';

import { HeaderProps } from './interfaces';
import {
  BackButtonContainer,
  CurrentLocationContainer,
  CurrentLocationText,
  CurrentUserContainer,
  HeaderContainer,
  TweetsCountContainer,
  UserNameContainer,
} from './styled';

const { backArrow, verticalDelimeter } = icons;

const Header = ({ user }: HeaderProps) => {
  const { name, tweetsAmount } = user;
  return (
    <HeaderContainer>
      {false && (
        <CurrentUserContainer>
          <UserNameContainer>
            <SerifText>
              <BoldText>{name}</BoldText>
            </SerifText>
          </UserNameContainer>
          <TweetsCountContainer>{tweetsAmount} Tweets</TweetsCountContainer>
        </CurrentUserContainer>
      )}
      {true && (
        <CurrentLocationContainer>
          <CurrentLocationText>
            <BackButtonContainer>
              {true && <img src={backArrow} alt="" />}
              {true && <img src={verticalDelimeter} alt="" />}
            </BackButtonContainer>
            <SerifText>
              <BoldText $size="large">Home</BoldText>
            </SerifText>
          </CurrentLocationText>
          <ThemeSwitch />
        </CurrentLocationContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
