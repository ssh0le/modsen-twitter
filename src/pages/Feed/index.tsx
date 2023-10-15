import { useCallback, useEffect, useState } from 'react';

import AddTweetForm from '@/components/AddTweetForm';
import Tweet from '@/components/Tweet';
import { useAppSelector } from '@/hooks/storeHooks';
import { Tweet as ITweet } from '@/interfaces';
import { selectCurrentUser } from '@/store/selectors';
import { firestore, publisher } from '@/utils';

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

  useEffect(() => {
    const unsubscribe = publisher.subscribe(fetchFeed, 'tweetsUpdate');

    return unsubscribe;
  }, [fetchFeed]);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return (
    <FeedPageContainer>
      <AddTweetContainer>
        <AddTweetForm />
      </AddTweetContainer>
      <TweetListContainer>
        {feedTweets.map((tweet) => (
          <Tweet key={tweet.id} info={tweet} currentUserId={profileId} />
        ))}
      </TweetListContainer>
    </FeedPageContainer>
  );
};

export default FeedPage;
