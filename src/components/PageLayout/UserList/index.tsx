import { useEffect, useMemo, useState } from 'react';

import UserCard from '@/components/UserCard';
import { NoResultMessage, SerifText } from '@UI';

import { UserListProps } from './interfaces';
import {
  RecommendationContainer,
  RecommendationHeading,
  RecommendationUserContainer,
  RecommendationUserListContainer,
  ShowMoreButton,
} from './styled';

const UserList = ({ title, users }: UserListProps) => {
  const [displayFullList, setDisplayFullList] = useState<boolean>(false);
  const [isShowMoreButtonDisplayed, setIsShowMoreButtonDisplayed] =
    useState<boolean>(false);

  const usersToDisplay = useMemo(() => {
    if (displayFullList) {
      return users;
    } else {
      return users.slice(0, 4);
    }
  }, [users, displayFullList]);

  useEffect(() => {
    if (users.length > 4) {
      setIsShowMoreButtonDisplayed(true);
    }
  }, [users]);

  const handleShowMoreClick = () => {
    setDisplayFullList(true);
    setIsShowMoreButtonDisplayed(false);
  };

  return (
    <RecommendationContainer>
      <RecommendationHeading>
        <SerifText>{title}</SerifText>
      </RecommendationHeading>
      <RecommendationUserListContainer>
        {usersToDisplay.map(({ name, id, avatar, tag, profileId }) => (
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
      {isShowMoreButtonDisplayed && (
        <ShowMoreButton onClick={handleShowMoreClick}>Show more</ShowMoreButton>
      )}
      {usersToDisplay.length === 0 && <NoResultMessage />}
    </RecommendationContainer>
  );
};

export default UserList;
