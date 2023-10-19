import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import Toast from '@/components/Toast';
import { routePathes } from '@/constants';
import { monthsOptions, yearOptions } from '@/constants/selectOptions';
import {
  createValidationOptions,
  getMonthDays,
  isRequiredAge,
  translateAuthError,
} from '@/helpers';
import { useAppDispatch } from '@/hooks/storeHooks';
import { setUser } from '@/store/slices/currentUser';
import { FirebaseAuthError } from '@/types';
import { firebaseAuth } from '@/utils';
import { Button, InputField, Link, Select, SerifText } from '@UI';

import { RegistrationForm } from './interfaces';
import {
  DateOfBirthMessage,
  Heading,
  InputFieldsContainer,
  LogoContainer,
  RegistrationPageContainer,
  RegistrationPageContentWrapper,
  SelectContainer,
  Subheading,
} from './styled';

const { profile, signUp } = routePathes;

const RegistrationPage: FC = () => {
  const { createUserWithEmail } = firebaseAuth;
  const [authError, setAuthError] = useState<string>('');
  const [userError, setUserError] = useState<string>('');
  const [days, setDays] = useState<
    { name: string | number; value: string | number }[]
  >(getMonthDays());
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    watch,
    formState: { errors },
  } = useForm<RegistrationForm>({
    defaultValues: {
      phone: '',
      name: '',
      email: '',
      password: '',
      day: '',
      month: '',
      year: '',
    },
  });

  const {
    name,
    phone,
    email,
    password,
    day: dayError,
    month: monthError,
    year: yearError,
  } = errors;

  useEffect(() => {
    const subscription = watch(({ month, year }) => {
      const monthDays = getMonthDays(Number(month), Number(year));
      setDays(monthDays);
    });
    return () => subscription.unsubscribe();
  }, [watch, getValues, setError]);

  const handleNextClick = async (data: RegistrationForm) => {
    const { email, password, name, phone, day, month, year } = data;
    const userDateOfBirth = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
    );
    if (!isRequiredAge(userDateOfBirth)) {
      setUserError('This platform has minimal age restriction - 16!');
      return;
    }
    const dateOfBirth = `${month}/${day}/${year}`;
    createUserWithEmail(email, password, name, phone, dateOfBirth)
      .then((user) => {
        if (user) {
          dispatch(setUser(user));
          navigate(profile);
        }
      })
      .catch((err: FirebaseAuthError) => setAuthError(translateAuthError(err)));
  };

  const handleEmailClick = () => {
    navigate(signUp);
  };

  const handleAuthAnimationEnd = () => {
    setAuthError('');
  };
  const handleUserAnimationEnd = () => {
    setUserError('');
  };

  return (
    <RegistrationPageContainer>
      <Toast
        type="error"
        message={authError}
        onAnimationEnd={handleAuthAnimationEnd}
      />
      <Toast
        type="error"
        message={userError}
        onAnimationEnd={handleUserAnimationEnd}
      />
      <RegistrationPageContentWrapper>
        <LogoContainer>
          <Logo size="small" />
        </LogoContainer>
        <Heading>
          <SerifText>Create an account</SerifText>
        </Heading>
        <InputFieldsContainer>
          <InputField
            type="text"
            error={name}
            {...register('name', createValidationOptions('name'))}
            placeholder="Name"
          />
          <InputField
            error={phone}
            {...register('phone', createValidationOptions('phone'))}
            placeholder="Phone number"
          />
          <InputField
            error={email}
            {...register('email', {
              ...createValidationOptions('email'),
            })}
            placeholder="Email"
          />
          <InputField
            error={password}
            {...register('password', createValidationOptions('password'))}
            placeholder="Password"
            type="password"
          />
        </InputFieldsContainer>
        <Link onClick={handleEmailClick}>Use email</Link>
        <Subheading>
          <SerifText>Date of birth</SerifText>
        </Subheading>
        <DateOfBirthMessage>
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </DateOfBirthMessage>
        <SelectContainer>
          <Select
            placeholder="Month"
            options={monthsOptions}
            error={monthError}
            {...register('month', { required: 'This field is required!' })}
          />
          <Select
            placeholder="Day"
            options={days}
            error={dayError}
            {...register('day', {
              required: 'This field is required!',
              validate: (day) =>
                (Number(day) <= days.length && Number(day) > 0) ||
                'The day is invalid',
            })}
          />
          <Select
            placeholder="Year"
            options={yearOptions}
            error={yearError}
            {...register('year', { required: 'This field is required!' })}
          />
        </SelectContainer>
        <Button onClick={handleSubmit(handleNextClick)} type="colored">
          <SerifText>Next</SerifText>
        </Button>
      </RegistrationPageContentWrapper>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
