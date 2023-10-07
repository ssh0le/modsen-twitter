import styled from 'styled-components';

import { flexColumn } from '@/styles/common';
import { FullPageWrapper } from '@shared';

export const PageLayoutContainer = styled(FullPageWrapper)`
  display: flex;
  width: 100%;
  position: relative;
  height: 200vh;
`;

export const MenuContainer = styled.div`
  padding-left: 15px;
  margin-top: 49px;
  margin-bottom: 30px;
`;

export const ContentWrapper = styled.main`
  flex-grow: 1;
  height: 200vh;
`;

const AsideBar = styled.aside`
  ${flexColumn};
`;

export const LeftAside = styled(AsideBar)`
  padding: 30px;
  width: 290px;
  align-self: flex-start;
  position: sticky;
  top: 0;
  height: auto;
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
`;
