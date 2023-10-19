import styled from 'styled-components';

import { flexColumn, topBottomBorder } from '@/styles/common';

export const FeedPageContainer = styled.div`
  ${flexColumn};

  width: 100%;
  min-width: 100%;
`;

export const TweetListContainer = styled.div`
  ${flexColumn};

  width: 100%;
`;

export const AddTweetContainer = styled.div`
  ${topBottomBorder};

  padding: 10px 20px 15px 25px;
`;

export const LoaderContainer = styled.div`
  padding-top: ${({ theme }) => theme.padding.l}px;
`;
