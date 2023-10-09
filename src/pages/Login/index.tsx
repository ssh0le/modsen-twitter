import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import { routePathes } from '@/constants';
import { useAppDispatch } from '@/hooks/storeHooks';
import { setUser } from '@/store/slices/currentUser';
import { firebaseAuth } from '@/utils';
import { Button, InputField, Link } from '@UI';

import {
  Heading,
  LoginContentWrapper,
  LoginForm,
  LoginPageContainer,
  SignUpLinkContainer,
} from './styled';

const { emailSignUp, googleSignIn } = firebaseAuth;

const LoginPage: FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    emailSignUp(login, password)
      .then((user) => {
        dispatch(setUser(user));
        navigate(routePathes.profile);
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignInClick = () => {
    googleSignIn()
      .then((user) => {
        if (user) {
          dispatch(setUser(user));
          navigate(routePathes.profile);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <LoginPageContainer>
      <LoginContentWrapper>
        <Logo />
        <Heading>Log in to Twitter</Heading>
        <LoginForm>
          <InputField
            value={login}
            onChange={handleLoginChange}
            placeholder="Phone number, email adress"
          />
          <InputField
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <Button type="colored" onClick={handleLoginClick}>
            Log in
          </Button>
        </LoginForm>
        <SignUpLinkContainer>
          <Link onClick={handleGoogleSignInClick}>Sign in with Google</Link>
          <Link href={routePathes.signUp}>Sign up to Twitter</Link>
        </SignUpLinkContainer>
      </LoginContentWrapper>
    </LoginPageContainer>
  );
};

export default LoginPage;
