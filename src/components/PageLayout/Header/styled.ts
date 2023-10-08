import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const HeaderContainer = styled.header`
  padding: 22px 30px 15px 17px;
`;

export const CurrentUserContainer = styled.div`
  ${flexColumn};
  gap: 10px;
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
  gap: 7px;

  & * {
    height: fit-content;
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;
