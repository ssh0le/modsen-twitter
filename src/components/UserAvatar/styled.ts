import styled from 'styled-components';

import { UserAvatarIconProps } from './interfaces';

export const UserAvatarImage = styled.img<UserAvatarIconProps>`
  border-radius: 50%;
  width: ${({ $size, theme: { avatarSize } }) => avatarSize[$size]}px;
  height: ${({ $size, theme: { avatarSize } }) => avatarSize[$size]}px;

  @media only screen and (max-width: 1000px) {
    width: ${({ $size, theme: { avatarSize } }) => avatarSize[$size] - 10}px;
    height: ${({ $size, theme: { avatarSize } }) => avatarSize[$size] - 10}px;
  }

  @media only screen and (max-width: 888px) {
    width: ${({ $size, theme: { avatarSize } }) =>
      $size === 'large' ? avatarSize.small * 2 : avatarSize[$size]}px;
    height: ${({ $size, theme: { avatarSize } }) =>
      $size === 'large' ? avatarSize.small * 2 : avatarSize[$size]}px;
  }
`;
