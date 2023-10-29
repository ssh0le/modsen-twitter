import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

import { StyledContainerProps } from './types';

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    flex-direction: column;
  }
`;

export const UserInfoContainer = styled.div<StyledContainerProps>`
  display: flex;
  margin-right: 10px;
  gap: ${({ $size }) => ($size === 'log-out' ? 37 : 13)}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    gap: 13px;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
`;

export const UserNamesContainer = styled.div`
  ${flexColumn}

  gap: 4px;
  flex-grow: 1;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs14}px;
  }
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs16}px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs14}px;
  }
`;

export const ButtonContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    align-self: flex-end;
  }
`;
