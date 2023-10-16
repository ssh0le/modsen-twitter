import styled from 'styled-components';

import { flexColumn } from '@/styles/common';

export const MenuContainer = styled.ul`
  ${flexColumn}
  gap: 20px;

  @media only screen and (max-width: 1000px) {
    gap: 10px;
  }

  @media only screen and (max-width: 888px) {
    width: 50px;
    padding: 10px;
  }
`;
