import styled from 'styled-components';

import { flexColumn } from '@/styles/common';
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
  padding-left: 15px;
  margin-top: 49px;
  margin-bottom: 30px;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  height: fit-content;
  min-height: calc(100vh + 1px);
  ${flexColumn}
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
  width: 370px;
  border-left: 1px solid ${({ theme }) => theme.border};
`;

export const SearchContainer = styled.div`
  ${flexColumn};
  width: 100%;
  border-radius: 31px;
  gap: 32px;
`;
