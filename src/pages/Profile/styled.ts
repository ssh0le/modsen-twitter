import styled, { css } from 'styled-components';

import { flexColumn, topBottomBorder } from '@/styles/common';

const opacityStyle = css`
  opacity: ${({ theme }) => theme.opacity.medium}%;
`;

export const ProfilePageContainer = styled.section`
  ${flexColumn};
  height: fit-content;
`;

export const ProfileBackground = styled.div<{ $src: string }>`
  background-image: url(${({ $src }) => $src});
  height: 280px;
`;

export const ProfilerContentWrapper = styled.div`
  ${flexColumn}
  padding: 0 25px;
`;

export const ProfileHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 20px 10px;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const EditButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  border: 2px solid ${({ theme }) => theme.color};
  padding: 10px 15px;
  height: fit-content;
  border-radius: 50px;
  cursor: pointer;
`;

export const UserName = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
  font-size: ${({ theme }) => theme.fontSizes.fs24}px;
  margin-bottom: 4px;
`;

export const UserId = styled.span`
  ${opacityStyle}
`;

export const UserStatus = styled.p`
  margin-top: 17px;
  margin-bottom: 57px;
`;

export const UserSubsctriptionsContainer = styled.div`
  display: flex;
  gap: 31px;
`;

export const SubscriptionCount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
`;

export const SubscriptionType = styled.span`
  ${opacityStyle};
`;

export const AddTweetFormContainer = styled.div`
  margin-top: 51px;
  padding: 18px 11px 13px 27px;
  ${topBottomBorder}
`;

export const UserTweetsContainer = styled.div`
  ${flexColumn};
`;

export const TweetListHeading = styled.h2`
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 48px;
  margin-top: 20px;
  width: 215px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
