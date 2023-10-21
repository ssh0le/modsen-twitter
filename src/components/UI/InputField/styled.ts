import styled from 'styled-components';

import { errorStyle, inputContainerStyle, inputStyle } from '@/styles/common';

export const InputWrapper = styled.div`
  ${inputContainerStyle}
`;

export const Input = styled.input`
  ${inputStyle};

  border: none;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.color};
  margin-bottom: ${({ theme }) => theme.margin.s}px;
  display: block;
`;

export const ErrorMessageContainer = styled.p`
  ${errorStyle};
`;

export const InputContent = styled.div`
  width: 100%;
  position: relative;
`;
