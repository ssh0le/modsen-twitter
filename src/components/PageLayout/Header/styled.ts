import styled from 'styled-components';

import { flexColumn, themedSvgFilter } from '@/styles/common';

const gap = 7;

export const HeaderContainer = styled.header`
  padding: 22px 30px 15px 17px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme }) => theme.padding.xs}px;
  }
`;

export const CurrentUserContainer = styled.div`
  ${flexColumn};

  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const UserNameContainer = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.fs20};
`;

export const TweetsCountContainer = styled.span`
  opacity: ${({ theme }) => theme.opacity.medium}%;
`;

export const CurrentLocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const CurrentLocationText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fs24}px;
  display: flex;
  width: fit-content;
  align-items: center;
  gap: ${gap}px;

  & * {
    height: fit-content;
  }
`;

export const BackButtonContainer = styled.div`
  ${themedSvgFilter}

  display: flex;
  align-items: center;
  gap: ${gap}px;
  cursor: pointer;
`;
