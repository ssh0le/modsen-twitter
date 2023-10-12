import { useCallback, useEffect, useState } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import Tweet from '@/components/Tweet';
import { useAppSelector } from '@/hooks/storeHooks';
import { Tweet as ITweet } from '@/interfaces';
import { selectCurrentUser } from '@/store/selectors';
import { firestore } from '@/utils';

import {
  AddTweetContainer,
  FeedPageContainer,
  TweetListContainer,
} from './styled';

const FeedPage = () => {
  const { profileId } = useAppSelector(selectCurrentUser)!;
  const [feedTweets, setFeedTweets] = useState<ITweet[]>([]);
  const { getUserFeed } = firestore;

  const fetchFeed = useCallback(async () => {
    const feed = await getUserFeed(profileId);
    setFeedTweets(feed);
  }, [profileId, getUserFeed]);

  const handleFeedChange = () => {
    fetchFeed();
  };

  useEffect(() => {
    fetchFeed();
  }, [profileId, fetchFeed]);
  return (
    <FeedPageContainer>
      <AddTweetContainer>
        <AddTweetForm onAfterAdd={handleFeedChange} />
      </AddTweetContainer>
      <TweetListContainer>
        {feedTweets.map((tweet) => (
          <Tweet
            onAfterDelete={handleFeedChange}
            key={tweet.id}
            info={tweet}
            currentUserId={profileId}
          />
        ))}
      </TweetListContainer>
    </FeedPageContainer>
  );
};

export default FeedPage;
