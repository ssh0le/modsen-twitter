import styled from 'styled-components';

import { inputContainerStyle, inputStyle } from '@/styles/common';

export const InputContainer = styled.div`
  ${inputContainerStyle}
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  ${inputStyle};
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.color};
`;

export const ErrorMessageContainer = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.fs14}px;
`;
