import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const MenuContainer = styled.ul`
  ${flexColumn}

  gap: ${({ theme }) => theme.gap.m}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.gap.xs}px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 50px;
    padding: 0px;
  }
`;
