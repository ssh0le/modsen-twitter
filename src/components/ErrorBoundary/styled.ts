import styled from 'styled-components';

import {
  flexCenter,
  themedBackgroundColor,
  themedColor,
} from '@/styles/common';

import { FullPageWrapper } from '../UI';

export const ErrorBoundaryContainer = styled(FullPageWrapper)`
  ${flexCenter}
  ${themedBackgroundColor};
  flex-direction: column;
  gap: 10px;
`;

export const MessageContainer = styled.p`
  text-align: center;
  ${themedColor};
  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
`;

export const ButtonContainer = styled.div`
  width: 200px;
`;
