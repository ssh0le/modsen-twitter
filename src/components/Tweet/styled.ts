import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const TweetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px 21px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const TweetContentWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const TweetMainContainer = styled.div`
  ${flexColumn}
`;

export const TweetText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
`;

export const LikeContainer = styled.div<{ $isLiked: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  color: ${({
    theme: {
      colors: { red },
      color,
    },
    $isLiked,
  }) => ($isLiked ? red : color)};
`;

export const LikeCountContainer = styled.span<{ $isLiked: boolean }>`
  font-weight: ${({
    theme: {
      fontWeigth: { mediumBold, regular },
    },
    $isLiked,
  }) => ($isLiked ? mediumBold : regular)};
`;

export const AtionsButtonContainer = styled.div`
  padding: 10px;
`;
