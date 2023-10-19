import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import SignUpFooter from '@/components/SignUpFooter';
import { icons, routePathes } from '@/constants';
import { signUpStatics } from '@/constants';
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

const { profile, registration } = routePathes;
const {
  heading,
  subheading,
  googleSignUpMessage,
  emailSignUpMessage,
  signUpText,
  loginText,
} = signUpStatics;

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
    firebaseAuth.googleSignIn().then((user) => {
      if (user) {
        dispatch(setUser(user));
      }
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
                <Heading>{heading}</Heading>
                <Subheading>{subheading}</Subheading>
              </Box>
              <ButtonsWrapper>
                <Box $gap={21}>
                  <Button type="sign-up" onClick={handleGoogleAuthClick}>
                    <GoogleButtonContent>
                      <GoogleLogoContainer>
                        <img src={icons.googleLogo} alt="Google Logo" />
                      </GoogleLogoContainer>
                      {googleSignUpMessage}
                    </GoogleButtonContent>
                  </Button>
                  <Button type="sign-up" onClick={handleEmailAuthClick}>
                    {emailSignUpMessage}
                  </Button>
                </Box>
              </ButtonsWrapper>
              <Box $gap={21}>
                <SignUpMessageWrapper>
                  {signUpText.map(({ isLink, text }, index) => {
                    if (isLink) {
                      return (
                        <Link $type="small" key={index}>
                          {text}
                        </Link>
                      );
                    }
                    return text;
                  })}
                </SignUpMessageWrapper>
                <LoginMessageWrapper>
                  {loginText.map(({ isLink, text, path }, index) =>
                    isLink ? (
                      <Link key={index} href={path}>
                        {text}
                      </Link>
                    ) : (
                      text
                    ),
                  )}
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
