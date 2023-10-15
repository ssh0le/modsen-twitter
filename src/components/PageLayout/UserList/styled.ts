import styled from 'styled-components';

import { flexColumn } from '@/styles/common';
import { Link } from '@UI';

export const RecommendationContainer = styled.section`
  ${flexColumn};
  gap: 30px;
  background-color: ${({ theme }) => theme.recommendation.backgroundColor};
  padding: 20px 10px 25px 15px;
  border-radius: 10px;
  width: 100%;
`;

export const RecommendationUserListContainer = styled.div`
  ${flexColumn};
  gap: 25px;
`;

export const RecommendationUserContainer = styled.div`
  display: flex;
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
