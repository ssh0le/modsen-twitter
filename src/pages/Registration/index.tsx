import { FC, useEffect, useState } from 'react';
import { Control, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import Toast from '@/components/Toast';
import { errorMessages, registrationStatics, routePathes } from '@/constants';
import { monthsOptions, yearOptions } from '@/constants/selectOptions';
import { getMonthDays, isRequiredAge, translateAuthError } from '@/helpers';
import { useAppDispatch } from '@/hooks/storeHooks';
import { setUser } from '@/store/slices/currentUser';
import { FirebaseAuthError } from '@/types';
import { createUserWithEmail } from '@/utils';
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

const { heading, subheading, emailLink, dateOfBirthMessage, submitButtonText } =
  registrationStatics;

const { invalidDay, ageRestriction } = errorMessages;

const RegistrationPage: FC = () => {
  const [authError, setAuthError] = useState<string>('');
  const [userError, setUserError] = useState<string>('');
  const [days, setDays] = useState<
    { name: string | number; value: string | number }[]
  >(getMonthDays());
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, getValues, setError, watch, control } =
    useForm<RegistrationForm>({
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
      setUserError(ageRestriction);
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

  const typedControl = control as unknown as Control;

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
          <SerifText>{heading}</SerifText>
        </Heading>
        <InputFieldsContainer>
          <InputField
            type="text"
            name="name"
            placeholder="Name"
            control={typedControl}
          />
          <InputField
            validationType="phone"
            name="phone"
            placeholder="Phone number"
            control={typedControl}
          />
          <InputField
            name="email"
            validationType="email"
            placeholder="Email"
            control={typedControl}
          />
          <InputField
            validationType="password"
            placeholder="Password"
            type="password"
            name={'password'}
            control={typedControl}
          />
        </InputFieldsContainer>
        <Link onClick={handleEmailClick}>{emailLink}</Link>
        <Subheading>
          <SerifText>{subheading}</SerifText>
        </Subheading>
        <DateOfBirthMessage>{dateOfBirthMessage}</DateOfBirthMessage>
        <SelectContainer>
          <Select
            placeholder="Month"
            options={monthsOptions}
            name="month"
            control={typedControl}
          />
          <Select
            placeholder="Day"
            name="day"
            options={days}
            rules={{
              validate: (day) =>
                (Number(day) <= days.length && Number(day) > 0) || invalidDay,
            }}
            control={typedControl}
          />
          <Select
            placeholder="Year"
            name="year"
            options={yearOptions}
            control={typedControl}
          />
        </SelectContainer>
        <Button onClick={handleSubmit(handleNextClick)} type="colored">
          <SerifText>{submitButtonText}</SerifText>
        </Button>
      </RegistrationPageContentWrapper>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
