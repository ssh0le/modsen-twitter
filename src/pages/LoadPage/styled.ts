import styled from 'styled-components';

import { flexCenter, flexColumn } from '@/styles/common';

export const LoadPageContainer = styled.section`
  ${flexCenter}
  ${flexColumn}

  height: 100vh;
  gap: ${({ theme }) => theme.gap.l}px;
`;
