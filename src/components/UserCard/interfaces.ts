type CardType = 'log-out' | 'recommendation';

export interface UserCardProps {
  size: CardType;
  name: string;
  id: string;
  avatar: string;
}

export interface StyledContainerProps {
  $size: CardType;
}
