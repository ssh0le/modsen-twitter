import { colors } from '@/constants';

export interface Theme {
  color: string;
  backgroundColor: string;
  border: string;
  svgFilter: string;
  colors: {
    [key in keyof typeof colors]: string;
  };
  link: Pick<ElementStyle, 'color'>;
  coloredButton: Omit<ElementStyle, 'border'>;
  followButton: Omit<ElementStyle, 'border'>;
  signUpButton: ElementStyle;
  logOutButton: ElementStyle;
  fontSizes: {
    [key in FontSize]: number;
  };
  fontWeigth: {
    regular: number;
    bold: number;
    superBold: number;
    lightBold: number;
    mediumBold: number;
  };
  lineHeight: {
    medium: 20;
  };
  inputField: ElementStyle & { placeholderColor: string };
  avatarSize: AvatarSize;
  recommendation: Pick<ElementStyle, 'backgroundColor'>;
  search: Pick<ElementStyle, 'backgroundColor' | 'color'> & {
    placeholder: string;
  };
  opacity: {
    medium: number;
  };
}

type FontSize = `fs${
  | '13'
  | '14'
  | '16'
  | '18'
  | '20'
  | '22'
  | '24'
  | '30'
  | '42'
  | '84'}`;

interface ElementStyle {
  color: string;
  backgroundColor: string;
  border: string;
}

export interface AvatarSize {
  small: number;
  medium: number;
  large: number;
}
