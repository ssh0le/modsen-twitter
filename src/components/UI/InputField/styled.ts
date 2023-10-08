import styled from 'styled-components';

import { inputStyle } from '@/styles/common';

export const Input = styled.input`
  width: 100%;
  ${inputStyle};

  &:focus {
    outline: solid orange;
  }

  &::placeholder {
    color: #00000099;
  }
`;
