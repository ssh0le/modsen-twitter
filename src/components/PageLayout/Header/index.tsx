import { useLocation, useNavigate } from 'react-router-dom';

import { icons, layoutStatics, routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import {
  isFetchingTweets,
  selectCurrentUser,
  selectUserDetails,
} from '@/store/selectors';
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

const { BackArrow, VerticalDelimeter } = icons;
const { backButtonText, userTweetsText } = layoutStatics;

const Header = () => {
  const { pathname } = useLocation();
  const { name } = useAppSelector(selectCurrentUser);
  const { tweets } = useAppSelector(selectUserDetails);
  const navigate = useNavigate();
  const hasBackButton = pathname !== routePathes.profile;
  const isLoading = useAppSelector(isFetchingTweets);

  const handleBackButtonClick = () => {
    navigate(routePathes.profile);
  };

  if (isLoading) {
    return null;
  }

  return (
    <HeaderContainer>
      {!hasBackButton && (
        <CurrentUserContainer>
          <UserNameContainer>
            <SerifText>
              <BoldText>{name}</BoldText>
            </SerifText>
          </UserNameContainer>
          <TweetsCountContainer>
            {tweets.length}
            {userTweetsText}
          </TweetsCountContainer>
        </CurrentUserContainer>
      )}
      {hasBackButton && (
        <CurrentLocationContainer>
          <CurrentLocationText>
            <BackButtonContainer onClick={handleBackButtonClick}>
              {<BackArrow />}
              {<VerticalDelimeter />}
            </BackButtonContainer>
            <SerifText>
              <BoldText $size="large">{backButtonText}</BoldText>
            </SerifText>
          </CurrentLocationText>
        </CurrentLocationContainer>
      )}
      <ThemeSwitch />
    </HeaderContainer>
  );
};

export default Header;
