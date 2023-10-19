import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import Toast from '@/components/Toast';
import { routePathes } from '@/constants';
import { createValidationOptions, translateAuthError } from '@/helpers';
import { useAppDispatch } from '@/hooks/storeHooks';
import { setUser } from '@/store/slices/currentUser';
import { emailSignIn, googleSignIn } from '@/utils';
import { Button, InputField, Link } from '@UI';

import { ILoginForm } from './interfaces';
import {
  Heading,
  LoginContentWrapper,
  LoginForm,
  LoginPageContainer,
  SignUpLinkContainer,
} from './styled';

const LoginPage: FC = () => {
  const [error, setError] = useState<string>('');
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
    emailSignIn(login, password)
      .then((user) => {
        dispatch(setUser(user));
        navigate(routePathes.profile);
      })
      .catch((authError) => setError(translateAuthError(authError)));
  };

  const handleGoogleSignInClick = () => {
    googleSignIn()
      .then((user) => {
        if (user) {
          dispatch(setUser(user));
          navigate(routePathes.profile);
        }
      })
      .catch((authError) => setError(translateAuthError(authError)));
  };

  const handleAnimationEnd = () => {
    setError('');
  };

  return (
    <LoginPageContainer>
      <Toast type="error" message={error} onAnimationEnd={handleAnimationEnd} />
      <LoginContentWrapper>
        <Logo />
        <Heading>Log in to Twitter</Heading>
        <LoginForm>
          <InputField
            error={login}
            {...register('login', createValidationOptions('login'))}
            placeholder="Email adress"
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
