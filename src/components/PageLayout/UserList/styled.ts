import styled from 'styled-components';

import { flexColumn } from '@/styles/common';
import { Link } from '@UI';

export const UserListContainer = styled.section`
  ${flexColumn};

  gap: 30px;
  background-color: ${({ theme }) => theme.recommendation.backgroundColor};
  padding: 20px 10px 25px 15px;
  border-radius: 10px;
  width: 100%;
`;

export const UserListContent = styled.div`
  ${flexColumn};

  gap: ${({ theme }) => theme.gap.m}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    gap: ${({ theme }) => theme.gap.xs}px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ListHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.fs24}px;
  font-weight: ${({ theme }) => theme.fontWeigth.bold};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs20}px;
  }
`;

export const ShowMoreButton = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  width: fit-content;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: inherit;
  }
`;
