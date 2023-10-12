import { FC, useEffect } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import Tweet from '@/components/Tweet';
import UserAvatar from '@/components/UserAvatar';
import { images } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser, selectUserDetails } from '@/store/selectors';
import { fetchUserTweets, getUserDetails } from '@/store/slices/thunk/user';
import { BoldText, SerifText } from '@UI';

import {
  AddTweetFormContainer,
  AvatarContainer,
  EditButton,
  ProfileBackground,
  ProfileHeaderContainer,
  ProfilePageContainer,
  ProfilerContentWrapper as ProfileContentWrapper,
  SubscriptionCount,
  SubscriptionType,
  TweetListHeading,
  UserName,
  UserStatus,
  UserSubsctriptionsContainer,
  UserTag,
} from './styled';

const ProfilePage: FC = () => {
  const user = useAppSelector(selectCurrentUser)!;
  const { name, avatar, status, tag, profileId } = user;
  const dispatch = useAppDispatch();
  const { tweets, followers, following } = useAppSelector(selectUserDetails);

  useEffect(() => {
    dispatch(getUserDetails(profileId));
  }, [profileId, dispatch]);

  const handleUserTweetsCahnge = () => {
    dispatch(fetchUserTweets(profileId));
  };

  const handleEditClick = () => {
    // firestore.updateUser(id, { name: `BarBar${new Date().getMinutes()}` });
  };

  return (
    <ProfilePageContainer>
      <ProfileBackground $src={images.defaultUserBackground} />
      <ProfileContentWrapper>
        <ProfileHeaderContainer>
          <AvatarContainer>
            <UserAvatar size="large" src={avatar} alt={`${name} avatar`} />
          </AvatarContainer>
          <EditButton onClick={handleEditClick}>Edit profile</EditButton>
        </ProfileHeaderContainer>
        <UserName>
          <SerifText>{name}</SerifText>
        </UserName>
        <UserTag>
          {tag}
          {profileId}
        </UserTag>
        <UserStatus>{status || 'No status'}</UserStatus>
        <UserSubsctriptionsContainer>
          <div>
            <SubscriptionCount>
              <SerifText>{following}</SerifText>
            </SubscriptionCount>
            <SubscriptionType> Following</SubscriptionType>
          </div>
          <div>
            <SubscriptionCount>
              <SerifText>{followers}</SerifText>
            </SubscriptionCount>
            <SubscriptionType> Followers</SubscriptionType>
          </div>
        </UserSubsctriptionsContainer>
      </ProfileContentWrapper>
      <AddTweetFormContainer>
        <AddTweetForm onAfterAdd={handleUserTweetsCahnge} />
      </AddTweetFormContainer>
      {tweets.length > 0 && (
        <>
          <TweetListHeading>
            <BoldText $size="small">
              <SerifText>Tweets</SerifText>
            </BoldText>
          </TweetListHeading>
          {tweets.map((tweet) => (
            <Tweet
              onAfterDelete={handleUserTweetsCahnge}
              key={tweet.id}
              info={tweet}
              currentUserId={profileId}
            />
          ))}
        </>
      )}
    </ProfilePageContainer>
  );
};

export default ProfilePage;
