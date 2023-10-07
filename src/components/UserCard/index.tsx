import UserAvatar from '../UserAvatar';

import { UserCardProps } from './interfaces';
import {
  UserCardContainer,
  UserIdWrapper,
  UserInfoContainer,
  UserNameWrapper,
} from './styled';

const UserCard = ({ size, name, id }: UserCardProps) => {
  return (
    <UserCardContainer $size={size}>
      <UserAvatar size={size === 'log-out' ? 'small' : 'medium'} />
      <UserInfoContainer>
        <UserNameWrapper>{name}</UserNameWrapper>
        <UserIdWrapper>{id}</UserIdWrapper>
      </UserInfoContainer>
    </UserCardContainer>
  );
};

export default UserCard;
