import { convertHexToRgb } from '../helpers';

export const errorMessages = {
  wrongPhone: 'Wrong phone number format',
  wrongEmail: 'Wrong email format',
  wrongLogin: 'Wrong login format',
  required: 'This field is required!',
  minLength: 'There are too few letters here!',
  maxLength: 'There are too much letters here!',
};

export const colors = {
  white: convertHexToRgb('#fff'),
  black: convertHexToRgb('#000'),
  gray: convertHexToRgb('#B3B8BB'),
  lightGray: convertHexToRgb('#E4EAED'),
  darkGray: convertHexToRgb('#5C6C79'),
};
