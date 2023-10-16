import styled from 'styled-components';

import { serifText } from '@/styles/common';

export const BoldText = styled.span<{ $size?: 'small' | 'medium' | 'large' }>`
  ${serifText};
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
  font-size: ${({
    theme: {
      fontSizes: { fs18, fs20, fs24 },
    },
    $size,
  }) => ($size === 'small' && fs18) || ($size === 'large' && fs24) || fs20}px;

  @media only screen and (max-width: 1200px) {
    font-size: ${({
      theme: {
        fontSizes: { fs18, fs20, fs16 },
      },
      $size,
    }) => ($size === 'small' && fs16) || ($size === 'large' && fs20) || fs18}px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: ${({
      theme: {
        fontSizes: { fs18, fs14, fs16 },
      },
      $size,
    }) => ($size === 'small' && fs14) || ($size === 'large' && fs18) || fs16}px;
  }
`;
