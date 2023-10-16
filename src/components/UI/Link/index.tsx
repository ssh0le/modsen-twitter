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

  @media only screen and (max-width: 1200px) {
    font-size: ${({
      $type,
      theme: {
        fontSizes: { fs14, fs13 },
      },
    }) => ($type === 'small' ? fs13 : fs14)}px;
  }
`;
