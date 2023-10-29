import styled, { css } from 'styled-components';

import {
  adaptiveIconStyle,
  flexCenter,
  flexColumn,
  themedSvgFilter,
} from '@/styles/common';
import { FullPageWrapper } from '@UI';

const getStrictWidth = (width: number) => css`
  min-width: ${width}px;
  max-width: ${width}px;
`;

const marginMedium = '30px';

export const PageLayoutContainer = styled(FullPageWrapper)`
  display: flex;
  width: 100%;
  position: relative;
  height: fit-content;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const MenuContainer = styled.div`
  padding-left: ${({ theme }) => theme.padding.s}px;
  margin-top: 49px;
  margin-bottom: ${marginMedium};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    margin-top: 20px;
    padding: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: ${({ theme }) => theme.margin.s}px;
  }
`;

export const ContentWrapper = styled.div`
  ${flexColumn}

  flex-grow: 1;
  height: fit-content;
  width: auto;
  border-right: 1px solid ${({ theme }) => theme.border};
  border-left: 1px solid ${({ theme }) => theme.border};
`;

const AsideBar = styled.aside`
  ${flexColumn};

  align-self: flex-start;
  position: sticky;
  top: 0;
  height: fit-content;
  min-height: 100%;
`;

export const LeftAside = styled(AsideBar)`
  ${getStrictWidth(300)}

  padding: ${({ theme }) => theme.padding.l}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    ${getStrictWidth(250)}

    padding: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    ${getStrictWidth(50)}

    padding: 0;
  }
`;

export const CurrentUserContainer = styled.div`
  margin-top: ${marginMedium};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UserCardContainer = styled.div`
  padding-left: ${({ theme }) => theme.padding.l}px;
`;

export const RigthAside = styled(AsideBar)`
  ${getStrictWidth(340)}

  padding: 28px 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    ${getStrictWidth(250)}
    padding: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: ${({ theme }) => theme.padding.xs}px;
    display: none;
  }
`;

export const SearchContainer = styled.div`
  ${flexColumn};

  width: 100%;
  border-radius: 31px;
  gap: ${({ theme }) => theme.gap.l}px;
`;

export const LogoContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;

export const MobileLogOutIconContainer = styled.div`
  ${flexCenter};
  ${themedSvgFilter};

  svg {
    ${adaptiveIconStyle};
  }

  padding: ${({ theme }) => theme.padding.xs}px;
`;
