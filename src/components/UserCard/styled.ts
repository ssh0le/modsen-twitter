import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

import { StyledContainerProps } from './interfaces';

export const UserCardContainer = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({ $size }) => ($size === 'log-out' ? 37 : 13)}px;
`;

export const UserInfoContainer = styled.div`
  ${flexColumn}
  gap: 4px;
  max-width: 120px;
`;

export const UserNameWrapper = styled.span`
  font-weight: ${({ theme }) => theme.fontWeigth.mediumBold};
`;

export const UserIdWrapper = styled.span`
  opacity: 60%;
  word-wrap: break-word;
`;

export const FollowButton = styled.button`
  background-color: ${({ theme }) => theme.followButton.backgroundColor};
  color: ${({ theme }) => theme.followButton.color};
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  padding: 10px 18px;
  height: fit-content;
  border-radius: 50px;
  cursor: pointer;
  border-width: 2px;
  border: none;
`;
