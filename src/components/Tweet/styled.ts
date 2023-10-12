import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const TweetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px 21px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
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
  cursor: pointer;
`;

export const ActionsContainer = styled.div`
  position: relative;
  height: fit-content;
`;

export const ActionListContainer = styled.div`
  position: absolute;
  right: 0;
  background-color: orange;
`;

export const ActionWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fs14}px;
  cursor: pointer;
  padding: 5px 10px;
`;

export const LikeIcon = styled.img`
  cursor: pointer;
`;

export const TweetImage = styled.img`
  width: 100%;
  margin-top: 15px;
`;
