import AddTweetForm from '@/components/AddTweetForm';
import Tweet from '@/components/Tweet';

import {
  AddTweetContainer,
  FeedPageContainer,
  TweetListContainer,
} from './styled';

const FeedPage = () => {
  return (
    <FeedPageContainer>
      <AddTweetContainer>
        <AddTweetForm />
      </AddTweetContainer>
      <TweetListContainer>
        {[1, 2, 3, 4, 5].map(() => (
          <Tweet />
        ))}
      </TweetListContainer>
    </FeedPageContainer>
  );
};

export default FeedPage;
