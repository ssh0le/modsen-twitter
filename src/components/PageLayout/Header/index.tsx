import { useLocation, useNavigate } from 'react-router-dom';

import { icons, routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser, selectUserDetails } from '@/store/selectors';
import { BoldText, SerifText } from '@UI';

import ThemeSwitch from '../ThemeSwitch';

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

const Header = () => {
  const { pathname } = useLocation();
  const { name } = useAppSelector(selectCurrentUser)!;
  const { tweets } = useAppSelector(selectUserDetails);
  const navigate = useNavigate();
  const hasBackButton = pathname !== routePathes.profile;

  const handleBackButtonClick = () => {
    navigate(routePathes.profile);
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
          <TweetsCountContainer>{tweets.length} Tweets</TweetsCountContainer>
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
