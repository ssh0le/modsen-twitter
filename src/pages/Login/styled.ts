import styled from 'styled-components';

import { FullPageWrapper } from '@shared';

export const LoginPageContainer = styled(FullPageWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 50px;
`;

export const LoginContentWrapper = styled.div`
  width: 450px;
`;

export const Heading = styled.h1`
  margin: 36px 0;
  font-size: ${({ theme }) => theme.fontSizes.fs42}px;
  font-weight: ${({ theme }) => theme.fontWeigth.superBold};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
`;

export const SignUpLinkContainer = styled.div`
  text-align: right;
`;