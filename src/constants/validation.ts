export const errorMessages = {
  wrongPhone: 'Wrong phone number format',
  wrongEmail: 'Wrong email format',
  wrongLogin: 'Wrong login format',
  required: 'This field is required!',
  minLength: 'There are too few letters here!',
  maxLength: 'There are too much letters here!',
};

const phonePattern = new RegExp(/^\+375[0-9]{9}$/);
const emailPattern = new RegExp(/^.+@.+\..+$/);

export const patternTypes = ['email', 'phone', 'login'];

export const patterns = {
  phonePattern,
  emailPattern,
  loginPattern: new RegExp(`${emailPattern.source}`),
};
