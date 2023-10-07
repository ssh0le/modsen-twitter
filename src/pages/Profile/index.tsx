import { FC } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import { BoldText, SerifText } from '@/components/shared';
import Tweet from '@/components/Tweet';
import UserAvatar from '@/components/UserAvatar';
import { images } from '@/constants';

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
  UserId,
  UserName,
  UserStatus,
  UserSubsctriptionsContainer,
} from './styled';

const ProfilePage: FC = () => {
  const { name, id, followers, following, status, avatar } = {
    name: 'Barbar',
    id: '@barbar',
    followers: 67,
    following: 69,
    status: 'Developer',
    avatar: undefined,
  };
  return (
    <ProfilePageContainer>
      <ProfileBackground $src={images.defaultUserBackground} />
      <ProfileContentWrapper>
        <ProfileHeaderContainer>
          <AvatarContainer>
            <UserAvatar size="large" src={avatar} alt={`${name} avatar`} />
          </AvatarContainer>
          <EditButton>Edit profile</EditButton>
        </ProfileHeaderContainer>
        <UserName>{name}</UserName>
        <UserId>{id}</UserId>
        <UserStatus>{status}</UserStatus>
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
        <AddTweetForm />
      </AddTweetFormContainer>
      <TweetListHeading>
        <BoldText $size="small">
          <SerifText>Tweets</SerifText>
        </BoldText>
      </TweetListHeading>
      {[1, 2, 3, 4, 5].map(() => (
        <Tweet />
      ))}
    </ProfilePageContainer>
  );
};

export default ProfilePage;
