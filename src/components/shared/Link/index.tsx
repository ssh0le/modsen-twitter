import styled from 'styled-components';

import { LinkProps } from './interfaces';

export const Link = styled.a<LinkProps>`
  color: ${({ theme }) => theme.link.color};
  font-size: ${({ $type }) => ($type === 'small' ? 14 : 16)}px;
  cursor: pointer;
`;
