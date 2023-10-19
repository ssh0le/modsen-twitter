import UserAvatar from '@/components/UserAvatar';
import { images } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { BoldText, Link, Loader, SerifText } from '@UI';

import { PageLayoutContainer } from '../PageLayout/styled';

import { UserProfileProps } from './interfaces';
import {
  AddTweetFormContainer,
  AvatarContainer,
  LoaderContainer,
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

const UserProfile = (props: UserProfileProps) => {
  const {
    user,
    tweets,
    followers,
    following,
    addTweetForm = null,
    editButton = null,
    isLoading,
    renderTweet,
  } = props;
  const { name, avatar, status, tag, profileId } = user;
  const { profileId: currentUserId } = useAppSelector(selectCurrentUser)!;

  const isCurrentUserProfile = currentUserId === profileId;

  if (isLoading) {
    return (
      <PageLayoutContainer>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </PageLayoutContainer>
    );
  }

  return (
    <ProfilePageContainer>
      <ProfileBackground $src={images.defaultUserBackground} />
      <ProfileContentWrapper>
        <ProfileHeaderContainer>
          <AvatarContainer>
            <UserAvatar size="large" src={avatar} alt={`${name} avatar`} />
          </AvatarContainer>
          {editButton}
        </ProfileHeaderContainer>
        <UserName>
          <SerifText>{name}</SerifText>
        </UserName>
        <UserTag>{tag}</UserTag>
        <UserStatus>
          {status ? (
            <span>
              Telegram: <Link>@{status}</Link>
            </span>
          ) : (
            'No Telegram'
          )}
        </UserStatus>
        <UserSubsctriptionsContainer>
          <span>
            <SubscriptionCount>
              <SerifText>{following}</SerifText>
            </SubscriptionCount>
            <SubscriptionType> Following</SubscriptionType>
          </span>
          <span>
            <SubscriptionCount>
              <SerifText>{followers}</SerifText>
            </SubscriptionCount>
            <SubscriptionType> Followers</SubscriptionType>
          </span>
        </UserSubsctriptionsContainer>
      </ProfileContentWrapper>
      {addTweetForm !== null && (
        <AddTweetFormContainer>{addTweetForm}</AddTweetFormContainer>
      )}
      {tweets.length > 0 && (
        <>
          <TweetListHeading>
            <BoldText $size="small">
              <SerifText>Tweets</SerifText>
            </BoldText>
          </TweetListHeading>
          {tweets.map(renderTweet)}
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
