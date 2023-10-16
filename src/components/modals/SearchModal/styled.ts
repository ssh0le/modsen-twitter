import styled from 'styled-components';

import {
  flexCenter,
  flexColumn,
  themedBackgroundColor,
  themedColor,
} from '@/styles/common';

export const SearchButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 10px;
  right: 20px;
  border-radius: 50%;
  ${themedBackgroundColor};
  ${flexCenter};
  border: 2px solid ${({ theme }) => theme.border};
`;

export const SerchIcon = styled.img`
  width: 60%;
  height: 60%;
`;

export const SearchModalContentWrapper = styled.div`
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  ${themedColor};
`;

export const SearchModalContainer = styled.div`
  ${flexColumn};
  ${themedBackgroundColor};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  width: 300px;
  position: relative;
  padding: 10px;
`;

export const CloseBadge = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  border: 1px solid ${({ theme }) => theme.border};
  ${themedBackgroundColor};
  ${themedColor};
  padding: 5px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.fs14}px;
`;
