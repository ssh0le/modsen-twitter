import styled from 'styled-components';

import { LogoWrapperProps } from './interfaces';

export const LogoWrapper = styled.div<LogoWrapperProps>`
  display: flex;
  width: ${({ $size }) => ($size === 'medium' ? 50 : 40)}px;
  height: ${({ $size }) => ($size === 'medium' ? 41 : 33)}px;
`;
