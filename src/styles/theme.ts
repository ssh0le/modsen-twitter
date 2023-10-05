import { colors } from '@/constants';
import { Theme } from '@/interfaces';

const {
  lightBlue,
  white,
  blue,
  black,
  gray,
  lightGray,
  transparent,
  transperentGray,
} = colors;

const light: Theme = {
  color: black,
  backgroundColor: white,
  link: {
    color: lightBlue,
  },
  coloredButton: {
    color: white,
    backgroundColor: blue,
  },
  signUpButton: {
    color: black,
    border: lightGray,
    backgroundColor: transparent,
  },
  logOutButton: {
    color: white,
    backgroundColor: gray,
    border: gray,
  },
  inputField: {
    border: transperentGray,
    color: black,
  },
  fontSizes: {
    fs13: 13,
    fs14: 14,
    fs16: 16,
    fs18: 18,
    fs20: 20,
    fs30: 30,
    fs42: 42,
    fs84: 84,
  },
  fontWeigth: {
    regular: 400,
    lightBold: 500,
    bold: 700,
    superBold: 900,
  },
  lineHeight: {
    medium: 20,
  },
};

const dark: Theme = {
  ...light,
};

export const theme = {
  light,
  dark,
};
