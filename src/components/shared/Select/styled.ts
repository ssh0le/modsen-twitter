import styled from 'styled-components';

import { inputStyle } from '@/styles/common';

export const SelectWraper = styled.div`
  ${inputStyle}
  min-width: 160px;
`;

export const CustomSelect = styled.select`
  font-size: inherit;
  border: none;
  outline: none;
  width: 100%;
`;

export const SelectOption = styled.option`
  width: 100%;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSizes.fs18};
`;
