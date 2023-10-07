import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

import { StyledContainerProps } from './interfaces';

export const UserCardContainer = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: ${({ $size }) => ($size === 'log-out' ? 37 : 13)}px;
`;

export const UserInfoContainer = styled.div`
  ${flexColumn}
  gap: 4px;
`;

export const UserNameWrapper = styled.span`
  font-weight: ${({ theme }) => theme.fontWeigth.mediumBold};
`;

export const UserIdWrapper = styled.span`
  opacity: 60%;
`;
