import UserAvatar from '../UserAvatar';

import { UserCardProps } from './interfaces';
import {
  UserCardContainer,
  UserIdWrapper,
  UserInfoContainer,
  UserNameWrapper,
} from './styled';

const UserCard = ({ size, name, id, avatar }: UserCardProps) => {
  return (
    <UserCardContainer $size={size}>
      <UserAvatar size={size === 'log-out' ? 'small' : 'medium'} src={avatar} />
      <UserInfoContainer>
        <UserNameWrapper>{name}</UserNameWrapper>
        <UserIdWrapper>{id || 'Anonymous'}</UserIdWrapper>
      </UserInfoContainer>
    </UserCardContainer>
  );
};

export default UserCard;
