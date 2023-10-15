import styled from 'styled-components';

import { inputContainerStyle, inputStyle } from '@/styles/common';

export const SelecetContainer = styled.div`
  display: inline-block;
`;

export const SelectWraper = styled.div`
  ${inputContainerStyle}
  padding: 20px;
  min-width: 160px;
`;

export const CustomSelect = styled.select`
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  ${inputStyle}
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
`;

export const SelectOption = styled.option`
  width: 100%;
  padding: 20px;
`;
