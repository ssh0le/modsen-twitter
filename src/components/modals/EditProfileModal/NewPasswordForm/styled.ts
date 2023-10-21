import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const EditPasswordFormContainer = styled.div`
  ${flexColumn};

  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.s}px;
  align-items: flex-end;

  & > div:nth-child(1) {
    flex-grow: 1;
  }
`;
