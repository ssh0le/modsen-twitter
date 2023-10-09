import { FC } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import Tweet from '@/components/Tweet';
import UserAvatar from '@/components/UserAvatar';
import { images } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
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
  UserId,
  UserName,
  UserStatus,
  UserSubsctriptionsContainer,
} from './styled';

const ProfilePage: FC = () => {
  const user = useAppSelector(selectCurrentUser)!;
  const { name, id, avatar } = user;
  console.log(user);
  const { followers, following, status } = {
    followers: 67,
    following: 69,
    status: 'Developer',
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
        <UserName>
          <SerifText>{name}</SerifText>
        </UserName>
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
      {/* {[1, 2, 3, 4, 5].map(() => (
        <Tweet user={user}/>
      ))} */}
    </ProfilePageContainer>
  );
};

export default ProfilePage;
