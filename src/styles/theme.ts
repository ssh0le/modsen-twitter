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
  recommendationGray,
  darkGray,
  searchGray,
} = colors;

const light: Theme = {
  color: black,
  backgroundColor: white,
  border: lightGray,
  svgFilter: '',
  colors,
  link: {
    color: lightBlue,
  },
  coloredButton: {
    color: white,
    backgroundColor: blue,
  },
  followButton: {
    color: white,
    backgroundColor: black,
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
    fs22: 22,
    fs24: 24,
    fs30: 30,
    fs42: 42,
    fs84: 84,
  },
  fontWeigth: {
    regular: 400,
    lightBold: 500,
    mediumBold: 600,
    bold: 700,
    superBold: 900,
  },
  lineHeight: {
    medium: 20,
  },
  avatarSize: {
    large: 150,
    medium: 60,
    small: 50,
  },
  recommendation: {
    backgroundColor: recommendationGray,
  },
  search: {
    color: black,
    backgroundColor: searchGray,
    placeholder: darkGray,
  },
  opacity: {
    medium: 60,
  },
};

const dark: Theme = {
  ...light,
  color: white,
  backgroundColor: black,
  border: darkGray,
  svgFilter: 'invert(100%)',
  recommendation: {
    backgroundColor: black,
  },
  followButton: {
    color: black,
    backgroundColor: white,
  },
};

export const theme = {
  light,
  dark,
};
