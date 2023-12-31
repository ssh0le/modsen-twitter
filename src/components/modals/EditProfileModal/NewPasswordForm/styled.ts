import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const EditPasswordFormContainer = styled.div`
  ${flexColumn};

  gap: ${({ theme }) => theme.gap.l}px;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
