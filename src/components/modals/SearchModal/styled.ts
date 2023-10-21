import styled from 'styled-components';

import {
  adaptiveIconStyle,
  flexCenter,
  flexColumn,
  themedBackgroundColor,
  themedColor,
} from '@/styles/common';

export const SearchButtonContainer = styled.div`
  ${themedBackgroundColor};
  ${flexCenter};

  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 10px;
  right: 20px;
  border-radius: 50%;
  z-index: 10;
  border: 2px solid ${({ theme }) => theme.border};
`;

export const SerchIcon = styled.img`
  ${adaptiveIconStyle};
`;

export const SearchModalContentWrapper = styled.div`
  ${themedColor};

  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: ${({ theme }) => theme.padding.xs}px;
`;

export const SearchModalContainer = styled.div`
  ${flexColumn};
  ${themedBackgroundColor};

  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  width: 300px;
  position: relative;
  padding: ${({ theme }) => theme.padding.xs}px;
`;

export const CloseBadge = styled.div`
  ${themedBackgroundColor};
  ${themedColor};

  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.fs14}px;
`;
