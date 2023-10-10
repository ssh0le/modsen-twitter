import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import { routePathes } from '@/constants';
import { createValidationOptions } from '@/helpers';
import { useAppDispatch } from '@/hooks/storeHooks';
import { setUser } from '@/store/slices/currentUser';
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

const { createUserWithEmail } = firebaseAuth;

const RegistrationPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>();

  const { name, phone, email, password } = errors;

  const handleNextClick = async (data: RegistrationForm) => {
    const { email, password, name, phone } = data;
    createUserWithEmail(email, password, name, phone)
      .then((user) => {
        if (user) {
          dispatch(setUser(user));
          navigate(routePathes.profile);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <RegistrationPageContainer>
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
        <Link>Use email</Link>
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
          <Select placeholder="Month" />
          <Select placeholder="Day" />
          <Select placeholder="Year" />
        </SelectContainer>
        <Button onClick={handleSubmit(handleNextClick)} type="colored">
          <SerifText>Next</SerifText>
        </Button>
      </RegistrationPageContentWrapper>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
