import styled from 'styled-components';

import { LogoWrapperProps } from './types';

export const LogoWrapper = styled.div<LogoWrapperProps>`
  & svg {
    display: inline-block;
    width: ${({ $size }) => ($size === 'medium' ? 50 : 40)}px;
    height: ${({ $size }) => ($size === 'medium' ? 41 : 33)}px;
  }
`;
