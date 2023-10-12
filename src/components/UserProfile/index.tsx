import AddTweetForm from '@/components/AddTweetForm';
import Tweet from '@/components/Tweet';
import UserAvatar from '@/components/UserAvatar';
import { images } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { BoldText, SerifText } from '@UI';

import { UserProfileProps } from './interfaces';
import {
  AddTweetFormContainer,
  AvatarContainer,
  EditButton,
  NoTweetsMessage,
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

const UserProfile = ({
  user,
  tweets,
  followers,
  following,
  onEditClick,
  onTweetsUpdate,
}: UserProfileProps) => {
  const { name, avatar, status, tag, profileId } = user;
  const { profileId: currentUserId } = useAppSelector(selectCurrentUser)!;

  const isCurrentUserProfile = currentUserId === profileId;

  return (
    <ProfilePageContainer>
      <ProfileBackground $src={images.defaultUserBackground} />
      <ProfileContentWrapper>
        <ProfileHeaderContainer>
          <AvatarContainer>
            <UserAvatar size="large" src={avatar} alt={`${name} avatar`} />
          </AvatarContainer>
          {isCurrentUserProfile && (
            <EditButton onClick={onEditClick}>Edit profile</EditButton>
          )}
        </ProfileHeaderContainer>
        <UserName>
          <SerifText>{name}</SerifText>
        </UserName>
        <UserTag>{tag}</UserTag>
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
      {isCurrentUserProfile && (
        <AddTweetFormContainer>
          <AddTweetForm onAfterAdd={onTweetsUpdate} />
        </AddTweetFormContainer>
      )}
      {tweets.length > 0 && (
        <>
          <TweetListHeading>
            <BoldText $size="small">
              <SerifText>Tweets</SerifText>
            </BoldText>
          </TweetListHeading>
          {tweets.map((tweet) => (
            <Tweet
              onAfterDelete={onTweetsUpdate}
              key={tweet.id}
              info={tweet}
              currentUserId={currentUserId}
            />
          ))}
        </>
      )}
      {tweets.length === 0 && (
        <>
          {isCurrentUserProfile && (
            <NoTweetsMessage>
              <SerifText>You don't have tweets.</SerifText>
            </NoTweetsMessage>
          )}
          {!isCurrentUserProfile && (
            <NoTweetsMessage>
              <SerifText>This user doesn't have tweets.</SerifText>
            </NoTweetsMessage>
          )}
        </>
      )}
    </ProfilePageContainer>
  );
};

export default UserProfile;
