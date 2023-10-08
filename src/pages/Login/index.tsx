import { FC } from 'react';

import Logo from '@/components/Logo';
import { Button, InputField, Link } from '@UI';

import {
  Heading,
  LoginContentWrapper,
  LoginForm,
  LoginPageContainer,
  SignUpLinkContainer,
} from './styled';

const LoginPage: FC = () => {
  return (
    <LoginPageContainer>
      <LoginContentWrapper>
        <Logo />
        <Heading>Log in to Twitter</Heading>
        <LoginForm>
          <InputField placeholder="Phone number, email adress" />
          <InputField placeholder="Password" />
          <Button type="colored" onClick={() => 0}>
            Log in
          </Button>
        </LoginForm>
        <SignUpLinkContainer>
          <Link>Sign up to Twitter</Link>
        </SignUpLinkContainer>
      </LoginContentWrapper>
    </LoginPageContainer>
  );
};

export default LoginPage;
