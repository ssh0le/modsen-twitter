type CardType = 'log-out' | 'recommendation';

export interface UserCardProps {
  userId: string;
  size: CardType;
  name: string;
  tag: string | null;
  avatar: string | null;
}

export interface StyledContainerProps {
  $size: CardType;
}
