import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser, selectUserDetails } from '@/store/selectors';
import { firestore } from '@/utils';

import { SerifText } from '../UI';
import UserAvatar from '../UserAvatar';

import { UserCardProps } from './interfaces';
import {
  ButtonContainer,
  FollowButton,
  UserCardContainer,
  UserInfoContainer,
  UserNamesContainer,
  UserNameWrapper,
  UserTagWrapper,
} from './styled';

const { updateFollowers } = firestore;

const UserCard = ({ size, name, tag, avatar, userId }: UserCardProps) => {
  const { following } = useAppSelector(selectUserDetails);
  const [isFollowing, setIsFollowing] = useState<boolean>(() =>
    following.includes(userId),
  );
  const navigate = useNavigate();
  const { profileId } = useAppSelector(selectCurrentUser)!;

  const handleFollowClick = () => {
    if (isFollowing) {
      setIsFollowing(false);
      updateFollowers(userId, profileId, 'unfollow');
    } else {
      setIsFollowing(true);
      updateFollowers(userId, profileId, 'follow');
    }
  };

  const handleCardClick = () => {
    if (size === 'recommendation') {
      navigate(`${routePathes.profile}/${userId}`);
    }
  };

  return (
    <UserCardContainer>
      <UserInfoContainer $size={size}>
        <UserAvatar
          size={size === 'log-out' ? 'small' : 'medium'}
          src={avatar}
        />
        <UserNamesContainer onClick={handleCardClick}>
          <UserNameWrapper>{name}</UserNameWrapper>
          <UserTagWrapper>{tag || 'Anonymous'}</UserTagWrapper>
        </UserNamesContainer>
      </UserInfoContainer>

      {size == 'recommendation' && (
        <ButtonContainer>
          <FollowButton onClick={handleFollowClick}>
            <SerifText>{isFollowing ? 'Unfollow' : 'Follow'}</SerifText>
          </FollowButton>
        </ButtonContainer>
      )}
    </UserCardContainer>
  );
};

export default UserCard;
