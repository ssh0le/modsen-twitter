export interface Theme {
  link: {
    color: string;
  };
  coloredButton: Omit<ButtonStyle, 'border'>;
  signUpButton: ButtonStyle;
  logOutButton: ButtonStyle;
  fontSizes: {
    [key in FontSize]: number;
  };
  fontWeigth: {
    regular: number;
    bold: number;
    superBold: number;
    lightBold: number;
  };
  lineHeight: {
    medium: 20;
  };
}

type FontSize = `fs${'13' | '14' | '16' | '18' | '20' | '42' | '84'}`;

interface ButtonStyle {
  color: string;
  backgroundColor: string;
  border: string;
}
