import { css } from 'styled-components';

export const inputStyle = css`
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  border: 1px solid ${({ theme }) => theme.inputField.border};
  color: ${({ theme }) => theme.inputField.color};
  padding: 23px 20px 26px;
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
