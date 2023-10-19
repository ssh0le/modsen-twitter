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
  gap: ${({ theme }) => theme.gap.m}px;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: center;
  }
`;

export const MenuLinkIcon = styled.img`
  ${adaptiveIconStyle};
  ${themedSvgFilter};
`;

export const MenuLinkTitle = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;
