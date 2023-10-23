import styled from 'styled-components';

import { flexCenter, flexColumn } from '@/styles/common';

export const LoadPageContainer = styled.section`
  ${flexCenter}
  ${flexColumn}

  height: 100%;
  flex-grow: 1;
  gap: ${({ theme }) => theme.gap.l}px;
  padding: ${({ theme }) => theme.padding.l}px;
`;
