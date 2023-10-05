import { FC } from 'react';

import Logo from '@/components/Logo';
import { Button, InputField, Link, Select, SerifText } from '@shared';

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

const RegistrationPage: FC = () => {
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
        <Button onClick={() => 0} type="colored">
          <SerifText>Next</SerifText>
        </Button>
      </RegistrationPageContentWrapper>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
