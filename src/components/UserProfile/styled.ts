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
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  background-position: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    height: 220px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 180px;
  }
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

export const UserName = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
  font-size: ${({ theme }) => theme.fontSizes.fs24}px;
  margin-bottom: 4px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs20}px;
  }
`;

export const UserTag = styled.span`
  ${opacityStyle}

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs14}px;
  }
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
  ${topBottomBorder}

  margin-top: 51px;
  padding: 18px 11px 13px 27px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 20px;
    padding: 10px;
  }
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0;
  }
`;

export const NoTweetsMessage = styled.p`
  text-align: center;
  padding: 60px 0;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  align-self: center;
`;
