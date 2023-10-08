import styled from 'styled-components';

import { serifText, themedSvgFilter } from '@/styles/common';

import { MenuLinkWrapperProps } from './interfaces';

export const MenuLinkWrapper = styled.li<MenuLinkWrapperProps>`
  ${({ $isSelected }) => $isSelected && serifText};
  font-weight: ${({
    $isSelected,
    theme: {
      fontWeigth: { mediumBold, bold },
    },
  }) => ($isSelected ? bold : mediumBold)};
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MenuLinkIcon = styled.img`
  width: 28px;
  height: 28px;
  ${themedSvgFilter}
`;
