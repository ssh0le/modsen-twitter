import styled from 'styled-components';

import { FullPageWrapper } from '@UI';

export const LoginPageContainer = styled(FullPageWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: ${({ theme }) => theme.padding.l}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: center;
    padding: 0;
  }
`;

export const LoginContentWrapper = styled.div`
  width: 450px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 300px;
  }
`;

export const Heading = styled.h1`
  margin: 36px 0;
  font-size: ${({ theme }) => theme.fontSizes.fs42}px;
  font-weight: ${({ theme }) => theme.fontWeigth.superBold};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs24}px;
  }
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l}px;
  margin-bottom: 40px;
`;

export const SignUpLinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.m}px;
  justify-content: flex-end;
`;
