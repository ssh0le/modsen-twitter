import { SerifText } from '@/components/shared';
import UserCard from '@/components/UserCard';

import { UserListProps } from './interfaces';
import {
  FollowButton,
  RecommendationContainer,
  RecommendationHeading,
  RecommendationUserContainer,
  RecommendationUserListContainer,
  ShowMoreButton,
} from './styled';

const UserList = ({ title, users }: UserListProps) => {
  return (
    <RecommendationContainer>
      <RecommendationHeading>
        <SerifText>{title}</SerifText>
      </RecommendationHeading>
      <RecommendationUserListContainer>
        {users.map(({ name, id }) => (
          <RecommendationUserContainer key={id}>
            <UserCard size={'recommendation'} name={name} id={id} avatar={''} />
            <FollowButton>Follow</FollowButton>
          </RecommendationUserContainer>
        ))}
      </RecommendationUserListContainer>
      <ShowMoreButton>Show more</ShowMoreButton>
    </RecommendationContainer>
  );
};

export default UserList;
