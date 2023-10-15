import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import AddTweetForm from '@/components/AddTweetForm';
import Tweet from '@/components/Tweet';
import { Loader, NoResultMessage } from '@/components/UI';
import { routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { useSearch } from '@/hooks/useSearch';
import { Tweet as ITweet } from '@/interfaces';
import { selectCurrentUser } from '@/store/selectors';
import { firestore, publisher } from '@/utils';

import {
  AddTweetContainer,
  FeedPageContainer,
  LoaderContainer,
  TweetListContainer,
} from './styled';

const FeedPage = () => {
  const { profileId } = useAppSelector(selectCurrentUser)!;
  const [feedTweets, setFeedTweets] = useState<ITweet[]>([]);
  const { getUserFeed, getTweetsByQuery } = firestore;
  const { pathname } = useLocation();
  const isTweetSearch = pathname.includes(routePathes.home);

  const {
    isSearchActive,
    results: searchTweets,
    isLoading,
  } = useSearch<ITweet>(getTweetsByQuery, isTweetSearch);

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

  const renderTweet = (tweet: ITweet) => (
    <Tweet key={tweet.id} info={tweet} currentUserId={profileId} />
  );

  if (isLoading) {
    return (
      <FeedPageContainer>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </FeedPageContainer>
    );
  }

  return (
    <FeedPageContainer>
      {!isSearchActive && (
        <AddTweetContainer>
          <AddTweetForm />
        </AddTweetContainer>
      )}
      <TweetListContainer>
        {!isSearchActive && <>{feedTweets.map(renderTweet)}</>}
        {isSearchActive && <>{searchTweets.map(renderTweet)}</>}
        {isSearchActive && searchTweets.length === 0 && <NoResultMessage />}
      </TweetListContainer>
    </FeedPageContainer>
  );
};

export default FeedPage;
