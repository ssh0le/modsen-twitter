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
`;
