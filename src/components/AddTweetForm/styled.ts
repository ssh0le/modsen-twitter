import styled from 'styled-components';

import { flexColumn, themedColor } from '@/styles/common';

export const AddTweetFormContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 28px;
`;

export const TweetInputContainer = styled.div`
  flex-grow: 1;
  gap: 15px;
  ${flexColumn}
`;

export const TweetInput = styled.textarea`
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.fs20}px;
  background-color: ${({ theme }) => theme.backgroundColor};
  ${themedColor};
  height: fit-content;
  width: 100%;
  resize: none;

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.fs22}px;
    font-weight: ${({ theme }) => theme.fontWeigth.mediumBold};
  }

  &:focus {
    outline: none;
  }
`;

export const TweetInputControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TweetButtonContainer = styled.div`
  width: 116px;
`;
