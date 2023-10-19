import { AvatarSize } from '@/types';

export interface UserCardProps {
  size?: keyof AvatarSize;
  src?: string | null;
  alt?: string;
}

export interface UserAvatarIconProps {
  $size: keyof AvatarSize;
}
