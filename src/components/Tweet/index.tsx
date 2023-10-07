import UserAvatar from '@/components/UserAvatar';
import { icons } from '@/constants';
import { getTweetPublishTime } from '@/helpers';
import { BoldText, OpacityText } from '@shared';

import {
  LikeContainer,
  LikeCountContainer,
  TweetContainer,
  TweetContentWrapper,
  TweetMainContainer,
  TweetText,
} from './styled';

const { like, likeFilled } = icons;

const Tweet = () => {
  const name = '@barbar';
  const isLiked = true;
  const totalLikes = 9;
  return (
    <TweetContainer>
      <TweetContentWrapper>
        <UserAvatar size="small" />
        <TweetMainContainer>
          <div>
            <BoldText>Barbar</BoldText>{' '}
            <OpacityText>
              {name} · {getTweetPublishTime(new Date(2023, 2, 9))}
            </OpacityText>
          </div>
          <TweetText>asdasdasd</TweetText>
          <LikeContainer $isLiked={isLiked}>
            {isLiked && <img src={likeFilled} alt="Setted like" />}
            {!isLiked && <img src={like} alt="Like" />}
            <LikeCountContainer $isLiked={isLiked}>
              {totalLikes}
            </LikeCountContainer>
          </LikeContainer>
        </TweetMainContainer>
      </TweetContentWrapper>
    </TweetContainer>
  );
};

export default Tweet;
