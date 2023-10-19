import styled from 'styled-components';

import { images } from '@/constants';
import { flexCenter } from '@/styles/common';
import { FullPageWrapper } from '@UI';

export const SignUpPageWrapper = styled(FullPageWrapper)`
  ${flexCenter};
`;

export const SignUpContentWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 320px;
  }
`;

export const SignUpMessageContainer = styled.div`
  padding: 0 50px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs84}px;
  font-weight: ${({ theme }) => theme.fontWeigth.superBold};
  width: 587px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs30}px;
  }
`;

export const Subheading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs42}px;
  font-weight: ${({ theme }) => theme.fontWeigth.superBold};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs24}px;
  }
`;

export const GoogleButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoogleLogoContainer = styled.span`
  display: flex;
`;

export const SignUpImageContainer = styled.div`
  background-image: url(${images.signUpBackground});
  flex-grow: 1;
  height: 100%;
  background-position: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 400px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 300px;
  }
`;

export const SignUpMessageWrapper = styled.p`
  width: 373px;
  line-height: ${({ theme }) => theme.lineHeight.medium}px;
  font-size: ${({ theme }) => theme.fontSizes.fs14}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 320px;
  }
`;

export const LoginMessageWrapper = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.fs16}px;
`;
