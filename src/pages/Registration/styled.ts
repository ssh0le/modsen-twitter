import styled from 'styled-components';

import { flexColumn } from '@/styles/common';
import { FullPageWrapper } from '@UI';

const indentSize = '40px';

export const RegistrationPageContainer = styled(FullPageWrapper)`
  ${flexColumn};

  justify-content: start;
  align-items: center;
  padding-top: 50px;
  height: fit-content;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: center;
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${indentSize};
`;

export const RegistrationPageContentWrapper = styled.form`
  width: 750px;
  padding: 30px ${`${indentSize} ${indentSize} ${indentSize}`};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 320px;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fs30}px;
  margin-bottom: ${indentSize};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs20}px;
    margin-bottom: 10px;
  }
`;

export const Subheading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  margin-top: 17px;
  margin-bottom: ${({ theme }) => theme.margin.l}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.fs16}px;
    margin-bottom: 10px;
  }
`;

export const DateOfBirthMessage = styled.p`
  opacity: 60%;
  margin-bottom: ${({ theme }) => theme.margin.l}px;

  @media only screen and (max-width: 888px) {
    font-size: ${({ theme }) => theme.fontSizes.fs14}px;
    text-align: justify;
  }
`;

export const InputFieldsContainer = styled.div`
  ${flexColumn};

  gap: 26px;
  margin-bottom: 26px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.m}px;

    & div:nth-child(1) {
      flex-grow: 0;
    }
  }
`;
