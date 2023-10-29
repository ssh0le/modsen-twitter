import styled from 'styled-components';

import { LinkProps } from './interfaces';

export const Link = styled.a<LinkProps>`
  color: ${({ theme }) => theme.link.color};
  font-size: ${({
    $type,
    theme: {
      fontSizes: { fs14, fs16 },
    },
  }) => ($type === 'small' ? fs14 : fs16)}px;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: ${({
      $type,
      theme: {
        fontSizes: { fs14, fs13 },
      },
    }) => ($type === 'small' ? fs13 : fs14)}px;
  }
`;
