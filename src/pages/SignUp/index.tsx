import { GoogleAuthProvider } from 'firebase/auth';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import SignUpFooter from '@/components/SignUpFooter';
import { icons, routePathes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';
import { setUser } from '@/store/slices/currentUser';
import { firebaseAuth } from '@/utils';
import { Box, Button, Link } from '@UI';

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

const { profile, registration, login } = routePathes;

const SignUpPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    if (user) {
      navigate(profile);
    }
  }, [user, navigate]);

  const handleGoogleAuthClick = async () => {
    firebaseAuth
      .googleSignIn()
      .then((user) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // console.log(credential);
        if (user) {
          dispatch(setUser(user));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailAuthClick = () => {
    navigate(registration);
  };

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
                  <Button type="sign-up" onClick={handleGoogleAuthClick}>
                    <GoogleButtonContent>
                      <GoogleLogoContainer>
                        <img src={icons.googleLogo} alt="Google Logo" />
                      </GoogleLogoContainer>
                      Sign up with Google
                    </GoogleButtonContent>
                  </Button>
                  <Button type="sign-up" onClick={handleEmailAuthClick}>
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
                  Already have an account? <Link href={login}>Log in</Link>
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
