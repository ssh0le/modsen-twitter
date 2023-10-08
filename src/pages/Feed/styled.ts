import styled from 'styled-components';

import { flexColumn, topBottomBorder } from '@/styles/common';

export const FeedPageContainer = styled.div`
  ${flexColumn};
`;

export const TweetListContainer = styled.div`
  ${flexColumn};
`;

export const AddTweetContainer = styled.div`
  ${topBottomBorder};
  padding: 10px 20px 15px 25px;
`;
