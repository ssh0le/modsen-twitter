import styled from 'styled-components';

import { images } from '@/constants';
import { FullPageWrapper } from '@UI';

export const SignUpPageWrapper = styled(FullPageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpContentWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;

  @media only screen and (max-width: 888px) {
    width: 320px;
  }
`;

export const SignUpMessageContainer = styled.div`
  padding: 0 50px;

  @media only screen and (max-width: 888px) {
    padding: 0;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs84}px;
  font-weight: ${({ theme }) => theme.fontWeigth.superBold};
  width: 587px;

  @media only screen and (max-width: 888px) {
    font-size: ${({ theme }) => theme.fontSizes.fs30}px;
  }
`;

export const Subheading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs42}px;
  font-weight: ${({ theme }) => theme.fontWeigth.superBold};

  @media only screen and (max-width: 888px) {
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

  @media only screen and (max-width: 888px) {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 400px;

  @media only screen and (max-width: 888px) {
    width: 300px;
  }
`;

export const SignUpMessageWrapper = styled.p`
  width: 373px;
  line-height: ${({ theme }) => theme.lineHeight.medium}px;
  font-size: ${({ theme }) => theme.fontSizes.fs14}px;

  @media only screen and (max-width: 888px) {
    width: 320px;
  }
`;

export const LoginMessageWrapper = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.fs16}px;
`;
