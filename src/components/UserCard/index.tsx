import { useState } from 'react';

import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser, selectUserDetails } from '@/store/selectors';
import { firestore } from '@/utils';

import { SerifText } from '../UI';
import UserAvatar from '../UserAvatar';

import { UserCardProps } from './interfaces';
import {
  FollowButton,
  UserCardContainer,
  UserIdWrapper,
  UserInfoContainer,
  UserNameWrapper,
} from './styled';

const { updateFollowers } = firestore;

const UserCard = ({ size, name, tag, avatar, userId }: UserCardProps) => {
  const { following } = useAppSelector(selectUserDetails);
  const [isFollowing, setIsFollowing] = useState<boolean>(() =>
    following.includes(userId),
  );
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

  return (
    <UserCardContainer $size={size}>
      <UserAvatar size={size === 'log-out' ? 'small' : 'medium'} src={avatar} />
      <UserInfoContainer>
        <UserNameWrapper>{name}</UserNameWrapper>
        <UserIdWrapper>{tag || 'Anonymous'}</UserIdWrapper>
      </UserInfoContainer>

      {size == 'recommendation' && (
        <>
          <FollowButton onClick={handleFollowClick}>
            <SerifText>{isFollowing ? 'Unfollow' : 'Follow'}</SerifText>
          </FollowButton>
        </>
      )}
    </UserCardContainer>
  );
};

export default UserCard;
