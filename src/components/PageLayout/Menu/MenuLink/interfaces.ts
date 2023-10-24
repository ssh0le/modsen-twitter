export interface MenuLinkProps {
  isSelected: boolean;
  title: string;
  route: string;
  onClick: (path: string) => void;
}

export interface MenuLinkWrapperProps {
  $isSelected: boolean;
}
