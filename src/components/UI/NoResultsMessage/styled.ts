import styled from 'styled-components';

import { themedColor } from '@/styles/common';

export const NoResultsMessageContainer = styled.p`
  ${themedColor};

  font-size: ${({ theme }) => theme.fontSizes.fs18}px;
  text-align: center;
  padding-top: 40px;
`;
