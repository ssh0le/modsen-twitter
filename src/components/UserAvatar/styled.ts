import styled from 'styled-components';

import { UserAvatarIconProps } from './interfaces';

export const UserAvatarImage = styled.img<UserAvatarIconProps>`
  border-radius: 50%;
  width: ${({ $size, theme: { avatarSize } }) => avatarSize[$size]}px;
  height: ${({ $size, theme: { avatarSize } }) => avatarSize[$size]}px;
`;
