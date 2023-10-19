import styled from 'styled-components';

import {
  adaptiveIconStyle,
  flexCenter,
  flexColumn,
  themedSvgFilter,
} from '@/styles/common';
import { FullPageWrapper } from '@UI';

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
  margin-bottom: 30px;

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
  min-height: calc(100vh + 1px);
  width: auto;
`;

const AsideBar = styled.aside`
  ${flexColumn};

  align-self: flex-start;
  position: sticky;
  top: 0;
  height: fit-content;
  min-height: 100vh;
`;

export const LeftAside = styled(AsideBar)`
  padding: 30px;
  width: 300px;
  border-right: 1px solid ${({ theme }) => theme.border};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    padding: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 50px;
    padding: 0;
    gap: 10px;
  }
`;

export const CurrentUserContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UserCardContainer = styled.div`
  padding-left: 30px;
`;

export const RigthAside = styled(AsideBar)`
  padding: 28px 20px;
  min-width: 340px;
  max-width: 340px;
  border-left: 1px solid ${({ theme }) => theme.border};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    padding: 10px;
    min-width: 250px;
    max-width: 250px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 10px;
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

  padding: ${({ theme }) => theme.padding.xs}px;
`;

export const LogOutIcon = styled.img`
  ${adaptiveIconStyle}
  ${themedSvgFilter};
`;
