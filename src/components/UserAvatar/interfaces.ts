import { AvatarSize } from '@/interfaces';

export interface UserCardProps {
  size?: keyof AvatarSize;
  src?: string;
  alt?: string;
}

export interface UserAvatarIconProps {
  $size: keyof AvatarSize;
}
