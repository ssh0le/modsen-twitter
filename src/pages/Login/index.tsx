import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import { routePathes } from '@/constants';
import { createValidationOptions } from '@/helpers';
import { useAppDispatch } from '@/hooks/storeHooks';
import { setUser } from '@/store/slices/currentUser';
import { firebaseAuth } from '@/utils';
import { Button, InputField, Link } from '@UI';

import { ILoginForm } from './interfaces';
import {
  Heading,
  LoginContentWrapper,
  LoginForm,
  LoginPageContainer,
  SignUpLinkContainer,
} from './styled';

const { emailSignUp, googleSignIn } = firebaseAuth;

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const { login, password } = errors;

  const handleLoginClick = (data: ILoginForm) => {
    const { login, password } = data;
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

  return (
    <LoginPageContainer>
      <LoginContentWrapper>
        <Logo />
        <Heading>Log in to Twitter</Heading>
        <LoginForm>
          <InputField
            error={login}
            {...register('login', createValidationOptions('login'))}
            placeholder="Phone number, email adress"
          />
          <InputField
            error={password}
            type="password"
            {...register('password', createValidationOptions('password'))}
            placeholder="Password"
          />
          <Button type="colored" onClick={handleSubmit(handleLoginClick)}>
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
