import styled from 'styled-components';

import { flexColumn, themedColor } from '@/styles/common';

export const AddTweetFormContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 28px;
`;

export const TweetInputContainer = styled.div`
  ${flexColumn};

  flex-grow: 1;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const TweetInput = styled.textarea`
  ${themedColor};

  border: none;
  font-size: ${({ theme }) => theme.fontSizes.fs20}px;
  background-color: ${({ theme }) => theme.backgroundColor};
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

export const FileInput = styled.input`
  display: none;
`;

export const PreviewImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const DeleteBadge = styled.div`
  position: absolute;
  padding: 5px;
  right: 0;
  top: 0;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
