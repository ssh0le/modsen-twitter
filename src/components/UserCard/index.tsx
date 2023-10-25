import { memo, useState } from 'react';

import { routePathes, userCardStatics } from '@/constants';
import { updateFollowers } from '@/utils';

import { SerifText } from '../UI';
import UserAvatar from '../UserAvatar';

import {
  ButtonContainer,
  FollowButton,
  UserCardContainer,
  UserInfoContainer,
  UserNamesContainer,
  UserNameWrapper,
  UserTagWrapper,
} from './styled';
import { UserCardProps } from './types';

const { userDeafultTag, followText, unfollowText, defaultUserName } =
  userCardStatics;

const UserCard = (props: UserCardProps) => {
  const {
    size,
    name = defaultUserName,
    tag,
    avatar,
    userId,
    onClick,
    isCurrentUserFollowng,
    currentUserId,
  } = props;
  const [isFollowing, setIsFollowing] = useState<boolean>(
    isCurrentUserFollowng ?? false,
  );

  const handleFollowClick = () => {
    if (isFollowing) {
      setIsFollowing(false);
      updateFollowers(userId, currentUserId, 'unfollow');
    } else {
      setIsFollowing(true);
      updateFollowers(userId, currentUserId, 'follow');
    }
  };

  const handleCardClick = () => {
    if (size === 'recommendation' && onClick) {
      onClick(`${routePathes.profile}/${userId}`);
    }
  };

  return (
    <UserCardContainer>
      <UserInfoContainer $size={size}>
        <UserAvatar
          size={size === 'log-out' ? 'small' : 'medium'}
          src={avatar}
          alt={`${name} avatar`}
        />
        <UserNamesContainer onClick={handleCardClick}>
          <UserNameWrapper>{name}</UserNameWrapper>
          <UserTagWrapper>{tag || userDeafultTag}</UserTagWrapper>
        </UserNamesContainer>
      </UserInfoContainer>

      {size == 'recommendation' && (
        <ButtonContainer>
          <FollowButton onClick={handleFollowClick}>
            <SerifText>{isFollowing ? unfollowText : followText}</SerifText>
          </FollowButton>
        </ButtonContainer>
      )}
    </UserCardContainer>
  );
};

export default memo(UserCard);
