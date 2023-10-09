type CardType = 'log-out' | 'recommendation';

export interface UserCardProps {
  size: CardType;
  name: string;
  id: string | null;
  avatar: string | null;
}

export interface StyledContainerProps {
  $size: CardType;
}
