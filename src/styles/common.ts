import { css } from 'styled-components';

export const inputStyle = css`
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  color: ${({ theme }) => theme.inputField.color};
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.inputField.backgroundColor};
  &::placeholder {
    color: ${({ theme }) => theme.inputField.placeholderColor};
  }
  &:focus {
    outline: none;
  }
`;

export const inputContainerStyle = css`
  border: 1px solid ${({ theme }) => theme.inputField.border};
  padding: 23px 20px 26px;
  background-color: ${({ theme }) => theme.inputField.backgroundColor};
  border-radius: 6px;
  &:focus-within {
    outline: solid ${({ theme }) => theme.inputField.color};
  }
`;

export const serifText = css`
  font-family: 'Roboto Serif';
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const topBottomBorder = css`
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const themedSvgFilter = css`
  filter: ${({ theme }) => theme.svgFilter};
`;

export const themedColor = css`
  color: ${({ theme }) => theme.color};
`;

export const themedBackgroundColor = css`
  background-color: ${({ theme }) => theme.backgroundColor};
`;
