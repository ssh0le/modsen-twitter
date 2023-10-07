import styled from 'styled-components';

import { Link } from '@/components/shared';
import { flexColumn, serifText } from '@/styles/common';

export const RecommendationContainer = styled.section`
  ${flexColumn};
  gap: 30px;
  background-color: ${({ theme }) => theme.recommendation.backgroundColor};
  padding: 20px 10px 25px 15px;
  border-radius: 10px;
`;

export const RecommendationUserListContainer = styled.div`
  ${flexColumn};
  gap: 25px;
`;

export const RecommendationUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const RecommendationHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.fs24}px;
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
`;

export const ShowMoreButton = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  width: fit-content;
`;

export const FollowButton = styled.button`
  ${serifText}
  background-color: ${({ theme }) => theme.followButton.backgroundColor};
  color: ${({ theme }) => theme.followButton.color};
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  padding: 10px 18px;
  height: fit-content;
  border-radius: 50px;
  cursor: pointer;
`;
