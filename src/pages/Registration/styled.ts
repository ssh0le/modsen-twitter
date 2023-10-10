import styled from 'styled-components';

import { FullPageWrapper } from '@UI';

export const RegistrationPageContainer = styled(FullPageWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 50px;
  height: fit-content;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 43px;
`;

export const RegistrationPageContentWrapper = styled.form`
  width: 750px;
  padding: 30px 40px 40px 40px;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs30}px;
  margin-bottom: 40px;
`;

export const Subheading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  margin-top: 17px;
  margin-bottom: 32px;
`;

export const DateOfBirthMessage = styled.p`
  opacity: 60%;
  margin-bottom: 32px;
`;

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 26px;
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 21px;
  margin-bottom: 38px;
  width: 100%;

  & div:nth-child(1) {
    flex-grow: 1;
  }
`;
