import UserCard from '@/components/UserCard';
import { SerifText } from '@UI';

import { UserListProps } from './interfaces';
import {
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
        {users.map(({ name, id, avatar, tag, profileId }) => (
          <RecommendationUserContainer key={id}>
            <UserCard
              size={'recommendation'}
              name={name}
              tag={tag}
              userId={profileId}
              avatar={avatar}
            />
          </RecommendationUserContainer>
        ))}
      </RecommendationUserListContainer>
      <ShowMoreButton>Show more</ShowMoreButton>
    </RecommendationContainer>
  );
};

export default UserList;
