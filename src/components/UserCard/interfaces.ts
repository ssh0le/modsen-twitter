type CardType = 'log-out' | 'recommendation';

export interface UserCardProps {
  userId: string;
  size: CardType;
  name?: string | null;
  tag: string | null;
  avatar: string | null;
  isCurrentUserFollowng?: boolean;
  currentUserId: string;
  onClick?: (id: string) => void;
}

export interface StyledContainerProps {
  $size: CardType;
}
