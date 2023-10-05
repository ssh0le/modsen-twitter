import { FC } from 'react';

import googleLogo from '@/assets/icons/googleLogo.svg';
import Logo from '@/components/Logo';
import SignUpFooter from '@/components/SignUpFooter';
import { Box, Button, Link } from '@shared';

import {
  ButtonsWrapper,
  GoogleButtonContent,
  GoogleLogoContainer,
  Heading,
  LoginMessageWrapper,
  SignUpContentWrapper,
  SignUpImageContainer,
  SignUpMessageContainer,
  SignUpMessageWrapper,
  SignUpPageWrapper,
  Subheading,
} from './styled';

const SignUpPage: FC = () => {
  const handleMockClick = () => console.log('');

  return (
    <SignUpPageWrapper>
      <SignUpContentWrapper>
        <SignUpImageContainer />
        <SignUpMessageContainer>
          <Box $gap={57}>
            <Logo />
            <Box $gap={31}>
              <Box $gap={46}>
                <Heading>Happening now</Heading>
                <Subheading>Join Twitter today</Subheading>
              </Box>
              <ButtonsWrapper>
                <Box $gap={21}>
                  <Button type="sign-up" onClick={handleMockClick}>
                    <GoogleButtonContent>
                      <GoogleLogoContainer>
                        <img src={googleLogo} alt="Google Logo" />
                      </GoogleLogoContainer>
                      Sign up with Google
                    </GoogleButtonContent>
                  </Button>
                  <Button type="sign-up" onClick={handleMockClick}>
                    Sign up with email
                  </Button>
                </Box>
              </ButtonsWrapper>
              <Box $gap={21}>
                <SignUpMessageWrapper>
                  By singing up you agree to the <Link>Terms of Service</Link>{' '}
                  and <Link>Privacy Policy</Link>, including{' '}
                  <Link>Cookie Use</Link>.
                </SignUpMessageWrapper>
                <LoginMessageWrapper>
                  Already have an account? <Link>Log in</Link>
                </LoginMessageWrapper>
              </Box>
            </Box>
          </Box>
        </SignUpMessageContainer>
      </SignUpContentWrapper>
      <SignUpFooter />
    </SignUpPageWrapper>
  );
};

export default SignUpPage;
