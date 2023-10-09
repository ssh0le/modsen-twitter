import AddTweetForm from '@/components/AddTweetForm';
import Tweet from '@/components/Tweet';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';

import {
  AddTweetContainer,
  FeedPageContainer,
  TweetListContainer,
} from './styled';

const FeedPage = () => {
  const user = useAppSelector(selectCurrentUser)!;
  return (
    <FeedPageContainer>
      <AddTweetContainer>
        <AddTweetForm />
      </AddTweetContainer>
      <TweetListContainer>
        {/* {[1, 2, 3, 4, 5].map(() => (
          <Tweet user={user} />
        ))} */}
      </TweetListContainer>
    </FeedPageContainer>
  );
};

export default FeedPage;
