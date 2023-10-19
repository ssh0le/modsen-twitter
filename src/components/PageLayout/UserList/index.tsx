import { useEffect, useMemo, useState } from 'react';

import UserCard from '@/components/UserCard';
import { profileStatics } from '@/constants';
import { NoResultMessage, SerifText } from '@UI';

import { UserListProps } from './interfaces';
import {
  ListHeading,
  ShowMoreButton,
  UserContainer,
  UserListContainer,
  UserListContent,
} from './styled';

const { showMoreButtonText } = profileStatics;

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
    <UserListContainer>
      <ListHeading>
        <SerifText>{title}</SerifText>
      </ListHeading>
      <UserListContent>
        {usersToDisplay.map(({ name, id, avatar, tag, profileId }) => (
          <UserContainer key={id}>
            <UserCard
              size={'recommendation'}
              name={name}
              tag={tag}
              userId={profileId}
              avatar={avatar}
            />
          </UserContainer>
        ))}
      </UserListContent>
      {isShowMoreButtonDisplayed && (
        <ShowMoreButton onClick={handleShowMoreClick}>
          {showMoreButtonText}
        </ShowMoreButton>
      )}
      {usersToDisplay.length === 0 && <NoResultMessage />}
    </UserListContainer>
  );
};

export default UserList;
