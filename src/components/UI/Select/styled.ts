import styled from 'styled-components';

import { errorStyle, inputContainerStyle, inputStyle } from '@/styles/common';

export const SelecetContainer = styled.div`
  display: inline-block;
  position: relative;

  & > p {
    ${errorStyle};
  }
`;

export const SelectWraper = styled.div`
  ${inputContainerStyle}

  padding: 20px;
  min-width: 160px;
`;

export const CustomSelect = styled.select`
  ${inputStyle}

  font-size: ${({ theme }) => theme.fontSizes.fs18};
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSizes.fs18};
  margin-bottom: ${({ theme }) => theme.margin.l};
  display: block;
`;

export const SelectOption = styled.option`
  width: 100%;
  padding: 20px;
`;
