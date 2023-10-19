import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserAvatar from '@/components/UserAvatar';
import { icons, routePathes } from '@/constants';
import { getTweetPublishTime } from '@/helpers';
import { useAppDispatch } from '@/hooks/storeHooks';
import { deleteUserTweet } from '@/store/slices/thunk/user';
import { publisher, updateLike } from '@/utils';
import { BoldText, OpacityText } from '@UI';

import { TweetProps } from './interfaces';
import {
  ActionListContainer,
  ActionsButtonContainer,
  ActionsContainer,
  ActionsIcon,
  ActionWrapper,
  LikeContainer,
  LikeCountContainer,
  LikeIcon,
  TweetContainer,
  TweetContentWrapper,
  TweetImage,
  TweetImageContainer,
  TweetMainContainer,
  TweetText,
} from './styled';

const { like, likeFilled } = icons;

const Tweet = ({ info, currentUserId }: TweetProps) => {
  const {
    id,
    userAvatar,
    userName,
    userId,
    userTag,
    text,
    postedAt,
    likes: initialLikes,
    image,
  } = info;
  const [likes, setLikes] = useState<string[]>(initialLikes);
  const [isActionsOpen, setIsActionsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isOwnUserTweet = userId === currentUserId;

  const handleActionMenuButtonClick = (event: MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    if (isOwnUserTweet) {
      setIsActionsOpen((prevIsOpen) => !prevIsOpen);
    }
  };

  useEffect(() => {
    setLikes(initialLikes);
  }, [initialLikes]);

  useEffect(() => {
    const handleWindowClick = () => {
      setIsActionsOpen(false);
    };

    window.addEventListener('click', handleWindowClick);

    () => window.removeEventListener('click', handleWindowClick);
  }, []);

  const handleSetLikeClick = () => {
    updateLike(id, currentUserId, 'set').then(() => {
      setLikes((prevLikes) => [...prevLikes, currentUserId]);
    });
  };

  const handleUnsetLikeClick = () => {
    updateLike(id, currentUserId, 'unset').then(() => {
      setLikes((prevLikes) => prevLikes.filter((id) => id !== currentUserId));
    });
  };

  const handelDeleteClick = async () => {
    await dispatch(
      deleteUserTweet({
        tweetId: id,
        userId: currentUserId,
      }),
    );
    publisher.notify('tweetsUpdate');
  };

  const handleUserInfoClick = () => {
    navigate(`${routePathes.profile}/${userId}`);
  };

  const isLiked = likes.includes(currentUserId);

  return (
    <TweetContainer>
      <TweetContentWrapper>
        <UserAvatar size="small" src={userAvatar} alt={`${userName} avatar`} />
        <TweetMainContainer>
          <div onClick={handleUserInfoClick}>
            <BoldText>{userName}</BoldText>{' '}
            <OpacityText>
              {userTag} · {getTweetPublishTime(new Date(postedAt))}
            </OpacityText>
          </div>
          {text && <TweetText>{text}</TweetText>}
          {image && (
            <TweetImageContainer>
              <TweetImage src={image} alt={`${userName} tweet image`} />
            </TweetImageContainer>
          )}
          <LikeContainer $isLiked={isLiked}>
            {isLiked && (
              <LikeIcon
                src={likeFilled}
                alt="Setted like"
                onClick={handleUnsetLikeClick}
              />
            )}
            {!isLiked && (
              <LikeIcon
                src={like}
                alt="Unsetted like"
                onClick={handleSetLikeClick}
              />
            )}
            {likes.length > 0 && (
              <LikeCountContainer $isLiked={isLiked}>
                {likes.length}
              </LikeCountContainer>
            )}
          </LikeContainer>
        </TweetMainContainer>
      </TweetContentWrapper>
      <ActionsContainer>
        <ActionsButtonContainer onClick={handleActionMenuButtonClick}>
          <ActionsIcon src={icons.actions} alt="Post actions" />
        </ActionsButtonContainer>
        {isActionsOpen && (
          <ActionListContainer>
            {isOwnUserTweet && (
              <>
                <ActionWrapper onClick={handelDeleteClick}>
                  Delete
                </ActionWrapper>
              </>
            )}
          </ActionListContainer>
        )}
      </ActionsContainer>
    </TweetContainer>
  );
};

export default Tweet;
