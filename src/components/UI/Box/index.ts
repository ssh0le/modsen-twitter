import styled from 'styled-components';

import { BoxProps } from './interfaces';

export const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap}px;
`;
