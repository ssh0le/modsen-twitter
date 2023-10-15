import styled from 'styled-components';

import { flexCenter } from '@/styles/common';

import { FullPageWrapper } from '../UI';

export const ErrorBoundaryContainer = styled(FullPageWrapper)`
  ${flexCenter}
  flex-direction: column;
  gap: 10px;
`;

export const MessageContainer = styled.p`
  text-align: center;
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  width: 200px;
`;
