import { useLocation, useNavigate } from 'react-router-dom';

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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const hasBackButton = pathname.indexOf('/') !== pathname.lastIndexOf('/');

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      {!hasBackButton && (
        <CurrentUserContainer>
          <UserNameContainer>
            <SerifText>
              <BoldText>{name}</BoldText>
            </SerifText>
          </UserNameContainer>
          <TweetsCountContainer>{tweetsAmount} Tweets</TweetsCountContainer>
        </CurrentUserContainer>
      )}
      {hasBackButton && (
        <CurrentLocationContainer>
          <CurrentLocationText>
            <BackButtonContainer onClick={handleBackButtonClick}>
              {true && <img src={backArrow} alt="" />}
              {true && <img src={verticalDelimeter} alt="" />}
            </BackButtonContainer>
            <SerifText>
              <BoldText $size="large">Home</BoldText>
            </SerifText>
          </CurrentLocationText>
        </CurrentLocationContainer>
      )}
      <ThemeSwitch />
    </HeaderContainer>
  );
};

export default Header;
