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
`;

export const SignUpMessageContainer = styled.div`
  padding: 0 50px;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs84}px;
  font-weight: ${({ theme }) => theme.fontWeigth.superBold};
  width: 587px;
`;

export const Subheading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs42}px;
  font-weight: ${({ theme }) => theme.fontWeigth.superBold};
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
`;

export const ButtonsWrapper = styled.div`
  width: 400px;
`;

export const SignUpMessageWrapper = styled.p`
  width: 373px;
  line-height: ${({ theme }) => theme.lineHeight.medium}px;
  font-size: ${({ theme }) => theme.fontSizes.fs14}px;
`;

export const LoginMessageWrapper = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.fs16}px;
`;
