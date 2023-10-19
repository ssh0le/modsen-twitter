import styled from 'styled-components';

import { flexColumn } from '@/styles/common';
import { FullPageWrapper } from '@UI';

export const RegistrationPageContainer = styled(FullPageWrapper)`
  ${flexColumn};
  justify-content: start;
  align-items: center;
  padding-top: 50px;
  height: fit-content;

  @media only screen and (max-width: 888px) {
    justify-content: center;
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 43px;
`;

export const RegistrationPageContentWrapper = styled.form`
  width: 750px;
  padding: 30px 40px 40px 40px;

  @media only screen and (max-width: 888px) {
    width: 320px;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs30}px;
  margin-bottom: 40px;

  @media only screen and (max-width: 888px) {
    font-size: ${({ theme }) => theme.fontSizes.fs20}px;
    margin-bottom: 10px;
  }
`;

export const Subheading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  margin-top: 17px;
  margin-bottom: 32px;

  @media only screen and (max-width: 888px) {
    font-size: ${({ theme }) => theme.fontSizes.fs16}px;
    margin-bottom: 10px;
  }
`;

export const DateOfBirthMessage = styled.p`
  opacity: 60%;
  margin-bottom: 32px;

  @media only screen and (max-width: 888px) {
    font-size: ${({ theme }) => theme.fontSizes.fs14}px;
    text-align: justify;
  }
`;

export const InputFieldsContainer = styled.div`
  ${flexColumn};
  gap: 26px;
  margin-bottom: 26px;

  @media only screen and (max-width: 888px) {
    gap: 20px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 21px;
  margin-bottom: 38px;
  width: 100%;

  & div:nth-child(1) {
    flex-grow: 1;
  }

  @media only screen and (max-width: 888px) {
    flex-direction: column;
    gap: 20px;

    & div:nth-child(1) {
      flex-grow: 0;
    }
  }
`;
