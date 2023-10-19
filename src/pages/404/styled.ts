import styled from 'styled-components';

import { flexCenter } from '@/styles/common';
import { FullPageWrapper } from '@UI';

export const NotFoundPageWrapper = styled(FullPageWrapper)`
  ${flexCenter};
`;

export const ContentWrapper = styled.div`
  ${flexCenter}

  flex-direction: column;
  width: 300px;
  gap: ${({ theme }) => theme.gap.m}px;
`;

export const NotFoundMessage = styled.p`
  color: ${({ theme }) => theme.color};
`;
