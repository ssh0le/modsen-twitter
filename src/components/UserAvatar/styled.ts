import styled from 'styled-components';

import { UserAvatarIconProps } from './interfaces';

export const UserAvatarImage = styled.img<UserAvatarIconProps>`
  border-radius: 50%;
  width: ${({ $size, theme: { avatarSize } }) => avatarSize[$size]}px;
  height: ${({ $size, theme: { avatarSize } }) => avatarSize[$size]}px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    width: ${({ $size, theme: { avatarSize } }) => avatarSize[$size] - 10}px;
    height: ${({ $size, theme: { avatarSize } }) => avatarSize[$size] - 10}px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: ${({ $size, theme: { avatarSize } }) =>
      $size === 'large' ? avatarSize.small * 2 : avatarSize[$size]}px;
    height: ${({ $size, theme: { avatarSize } }) =>
      $size === 'large' ? avatarSize.small * 2 : avatarSize[$size]}px;
  }
`;
