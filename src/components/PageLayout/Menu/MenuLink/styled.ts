import styled from 'styled-components';

import { adaptiveIconStyle, serifText, themedSvgFilter } from '@/styles/common';

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
  cursor: pointer;

  @media only screen and (max-width: 888px) {
    justify-content: center;
  }
`;

export const MenuLinkIcon = styled.img`
  ${adaptiveIconStyle};
  ${themedSvgFilter};
`;

export const MenuLinkTitle = styled.span`
  @media only screen and (max-width: 888px) {
    display: none;
  }
`;
