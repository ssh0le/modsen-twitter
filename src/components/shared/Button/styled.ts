import styled, { css } from 'styled-components';

import { ButtonWrapperProps } from './interfaces';

const coloredButtonStyle = css`
  color: ${({ theme }) => theme.coloredButton.color};
  background-color: ${({ theme }) => theme.coloredButton.backgroundColor};
  border: ${({ theme }) => theme.coloredButton.color};
`;

const signUpButtonStyle = css`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.fs20}px;
  font-weight: ${({ theme }) => theme.fontWeigth.lightBold};
  background-color: ${({ theme }) => theme.signUpButton.backgroundColor};
  border: 1px solid ${({ theme }) => theme.signUpButton.border};
  font-family: 'Roboto';
  height: 62px;
`;

const logOutButtonStyle = css`
  color: ${({ theme }) => theme.logOutButton.color};
  background-color: ${({ theme }) => theme.logOutButton.backgroundColor};
  border: 1px solid ${({ theme }) => theme.logOutButton.border};
  font-weight: bold;
`;

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.fs18}px;
  width: 100%;
  border-radius: 28px;
  padding: 18px 0 21px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ $typeface }) =>
    $typeface === 'serif' ? 'Roboto Serif' : 'Roboto'};
  ${({ $isActive }) => ($isActive ? 'cursor: pointer' : 'opacity: 40%')};
  ${({ $type }) => $type === 'colored' && coloredButtonStyle};
  ${({ $type }) => $type === 'sign-up' && signUpButtonStyle};
  ${({ $type }) => $type === 'log-out' && logOutButtonStyle};
`;
