import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserCard from '@/components/UserCard';
import { layoutStatics } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser, selectUserDetails } from '@/store/selectors';
import { NoResultMessage, SerifText } from '@UI';

import { UserListProps } from './interfaces';
import {
  ListHeading,
  ShowMoreButton,
  UserContainer,
  UserListContainer,
  UserListContent,
} from './styled';

const { showMoreButtonText, hideMoreButtonText } = layoutStatics;

const UserList = ({ title, users }: UserListProps) => {
  const [displayFullList, setDisplayFullList] = useState<boolean>(false);
  const [isShowMoreButtonDisplayed, setIsShowMoreButtonDisplayed] =
    useState<boolean>(false);
  const { profileId } = useAppSelector(selectCurrentUser);
  const { following } = useAppSelector(selectUserDetails);
  const navigate = useNavigate();

  const onUserClick = useCallback((path: string) => {
    navigate(path);
  }, []);

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

  const createListControlsHandler = (displayList: boolean) => {
    return () => {
      setDisplayFullList(displayList);
      setIsShowMoreButtonDisplayed(!displayList);
    };
  };

  return (
    <UserListContainer>
      <ListHeading>
        <SerifText>{title}</SerifText>
      </ListHeading>
      <UserListContent>
        {usersToDisplay.map(
          ({ name, id, avatar, tag, profileId: displayUserId }) => (
            <UserContainer key={id}>
              <UserCard
                currentUserId={profileId}
                isCurrentUserFollowng={following.includes(id)}
                size={'recommendation'}
                name={name}
                tag={tag}
                userId={displayUserId}
                avatar={avatar}
                onClick={onUserClick}
              />
            </UserContainer>
          ),
        )}
      </UserListContent>
      {isShowMoreButtonDisplayed && (
        <ShowMoreButton onClick={createListControlsHandler(true)}>
          {showMoreButtonText}
        </ShowMoreButton>
      )}
      {!isShowMoreButtonDisplayed && displayFullList && (
        <ShowMoreButton onClick={createListControlsHandler(false)}>
          {hideMoreButtonText}
        </ShowMoreButton>
      )}
      {usersToDisplay.length === 0 && <NoResultMessage />}
    </UserListContainer>
  );
};

export default UserList;
