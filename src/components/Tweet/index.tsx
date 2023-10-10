import UserAvatar from '@/components/UserAvatar';
import { icons } from '@/constants';
import { getTweetPublishTime } from '@/helpers';
import { BoldText, OpacityText } from '@UI';

import { TweetProps } from './interfaces';
import {
  AtionsButtonContainer,
  LikeContainer,
  LikeCountContainer,
  TweetContainer,
  TweetContentWrapper,
  TweetMainContainer,
  TweetText,
} from './styled';

const { like, likeFilled } = icons;

const Tweet = ({ user }: TweetProps) => {
  const { name, tag: link, avatar } = user;
  const isLiked = true;
  const totalLikes = 9;
  return (
    <TweetContainer>
      <TweetContentWrapper>
        <UserAvatar size="small" src={avatar} />
        <TweetMainContainer>
          <div>
            <BoldText>{name}</BoldText>{' '}
            <OpacityText>
              {link} · {getTweetPublishTime(new Date(2023, 2, 9))}
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
      <AtionsButtonContainer>
        <img src={icons.actions} alt="Post actions" />
      </AtionsButtonContainer>
    </TweetContainer>
  );
};

export default Tweet;
