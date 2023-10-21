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

  @media screen and (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSizes.fs16}px;
  }

  @media screen and (max-width: 888px) {
    font-size: ${({ theme }) => theme.fontSizes.fs14}px;
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

  @media screen and (max-width: 1000px) {
    padding: 15px;
  }

  @media screen and (max-width: 888px) {
    padding: 10px;
  }
`;

export const errorStyle = css`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.fs14}px;
  margin-top: 5px;
  transition: 1s ease-in-out;
  position: absolute;
  left: 0;
  top: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontSizes.fs13}px;
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
  fill: ${({ theme }) => theme.color};
`;

export const themedColor = css`
  color: ${({ theme }) => theme.color};
`;

export const themedBackgroundColor = css`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const adaptiveIconStyle = css`
  width: ${({ theme }) => theme.iconSizes.computer}px;
  height: ${({ theme }) => theme.iconSizes.computer}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: ${({ theme }) => theme.iconSizes.moblie}px;
    height: ${({ theme }) => theme.iconSizes.moblie}px;
  }
`;
