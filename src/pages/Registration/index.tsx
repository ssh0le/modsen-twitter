import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';
import { routePathes } from '@/constants';
import { useAppDispatch } from '@/hooks/storeHooks';
import { setUser } from '@/store/slices/currentUser';
import { firebaseAuth } from '@/utils';
import { Button, InputField, Link, Select, SerifText } from '@UI';

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

  const handleNextClick = async () => {
    createUserWithEmail('boristepanovv@gmail.com', '12345678', 'Borisss')
      .then((user) => {
        dispatch(setUser(user));
        navigate(routePathes.profile);
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
          <InputField placeholder="Name" />
          <InputField placeholder="Phone number" />
          <InputField placeholder="Email" />
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
        <Button onClick={handleNextClick} type="colored">
          <SerifText>Next</SerifText>
        </Button>
      </RegistrationPageContentWrapper>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
