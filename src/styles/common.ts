import { css } from 'styled-components';

export const inputStyle = css`
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  border: 1px solid ${({ theme }) => theme.inputField.border};
  color: ${({ theme }) => theme.inputField.color};
  padding: 23px 20px 26px;
`;
