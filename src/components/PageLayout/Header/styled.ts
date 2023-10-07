import styled from 'styled-components';

import { colors } from '@/constants';
import { flexColumn } from '@/styles/common';

export const HeaderContainer = styled.header`
  padding: 22px 30px 15px 17px;
  border: 1px solid ${colors.lightGray};
`;

export const CurrentUserContainer = styled.div`
  ${flexColumn};
  gap: 10px;
`;

export const UserNameContainer = styled.span`
  font-weight: ${({ theme }) => theme.fontWeigth.bold};
  font-size: ${({ theme }) => theme.fontSizes.fs20};
`;

export const TweetsCountContainer = styled.span`
  opacity: ${({ theme }) => theme.opacity.medium}%;
`;
