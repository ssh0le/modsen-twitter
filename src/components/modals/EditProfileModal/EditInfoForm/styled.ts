import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const EditInfoFormContainer = styled.div`
  ${flexColumn};

  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.gap.m}px;
`;
