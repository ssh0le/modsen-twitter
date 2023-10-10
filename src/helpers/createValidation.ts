import { RegisterOptions } from 'react-hook-form/dist/types';

import { PatternValidationType, ValidationType } from '@/interfaces';

import { isValidationWithPattern } from './predicates';

const errorMessages = {
  wrongPhone: 'Wrong phone number format',
  wrongEmail: 'Wrong email format',
  wrongLogin: 'Wrong login format',
  required: 'This field is required!',
  minLength: 'There are too few letters here!',
  maxLength: 'There are too much letters here!',
};

const phonePattern = new RegExp(/^375[0-9]{9}$/);
const emailPattern = new RegExp(/^.+@.+\..+$/);
const loginPattern = new RegExp(
  `${phonePattern.source}|${emailPattern.source}`,
);

const { minLength, maxLength, required, wrongEmail, wrongPhone, wrongLogin } =
  errorMessages;

export const createValidationOptionsForText = (
  max?: number,
  min?: number,
): RegisterOptions => {
  return {
    required,
    maxLength: {
      value: max || 99,
      message: maxLength,
    },
    minLength: {
      value: min || 0,
      message: minLength,
    },
  };
};

export const createValidationOptionsWithPattern = (
  type: PatternValidationType,
): RegisterOptions => {
  const option = {
    required,
    pattern: {
      value: phonePattern,
      message: wrongPhone,
    },
  };
  if (type === 'email') {
    option.pattern = {
      value: emailPattern,
      message: wrongEmail,
    };
  }
  if (type === 'login') {
    option.pattern = {
      value: loginPattern,
      message: wrongLogin,
    };
  }
  return option;
};

export const createValidationOptions = (
  type: ValidationType,
): RegisterOptions => {
  if (isValidationWithPattern(type)) {
    return createValidationOptionsWithPattern(type);
  }
  if (type === 'name') {
    return createValidationOptionsForText(30, 3);
  } else {
    return createValidationOptionsForText(20, 8);
  }
};
