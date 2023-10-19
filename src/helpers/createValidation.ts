import { RegisterOptions } from 'react-hook-form/dist/types';

import { errorMessages, patterns } from '@/constants/validation';
import { PatternValidationType, ValidationType } from '@/types';

import { isValidationWithPattern } from './predicates';

const { minLength, maxLength, required, wrongEmail, wrongPhone, wrongLogin } =
  errorMessages;

const { phonePattern, emailPattern, loginPattern } = patterns;

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
