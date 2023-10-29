import { images } from '@/constants';

import { UserCardProps } from './interfaces';
import { UserAvatarImage } from './styled';

const UserAvatar = ({ size = 'medium', src, alt }: UserCardProps) => {
  return (
    <UserAvatarImage $size={size} src={src || images.defaultAvatar} alt={alt} />
  );
};

export default UserAvatar;
