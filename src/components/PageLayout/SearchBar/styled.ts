import styled from 'styled-components';

import { flexCenter, flexColumn } from '@/styles/common';

export const SearchContainer = styled.div`
  ${flexColumn};
  width: 100%;
  border-radius: 31px;
  gap: 32px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.search.backgroundColor};
  border-radius: 30px;
  gap: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.search.backgroundColor};
  color: ${({ theme }) => theme.search.color};
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.search.placeholder};
  }

  @media only screen and (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSizes.fs14}px;
  }
`;

export const SearchIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const ResetButton = styled.div`
  ${flexCenter};
  color: ${({ theme }) => theme.search.color};
  cursor: pointer;
`;