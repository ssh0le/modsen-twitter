import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

import { StyledContainerProps } from './interfaces';

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const UserInfoContainer = styled.div<StyledContainerProps>`
  display: flex;
  margin-right: 10px;
  gap: ${({ $size }) => ($size === 'log-out' ? 37 : 13)}px;
`;

export const UserNamesContainer = styled.div`
  ${flexColumn}
  gap: 4px;
  flex-grow: 1;
  cursor: pointer;
`;

export const UserNameWrapper = styled.span`
  font-weight: ${({ theme }) => theme.fontWeigth.mediumBold};
  word-break: break-all;
`;

export const UserTagWrapper = styled.span`
  opacity: 60%;
  word-break: break-all;
`;

export const FollowButton = styled.button`
  background-color: ${({ theme }) => theme.followButton.backgroundColor};
  color: ${({ theme }) => theme.followButton.color};
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  padding: 10px 18px;
  height: fit-content;
  border-radius: 50px;
  justify-self: flex-end;
  cursor: pointer;
  border-width: 2px;
  border: none;
`;
