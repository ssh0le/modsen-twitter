import { RegisterOptions } from 'react-hook-form/dist/types';

import { errorMessages, patterns } from '@/constants/validation';
import { PatternValidationType, ValidationType } from '@/types';

import { isValidationWithPattern } from './predicates';

const {
  minLength,
  maxLength,
  required: requiredError,
  wrongEmail,
  wrongPhone,
  wrongLogin,
} = errorMessages;

const { phonePattern, emailPattern, loginPattern } = patterns;

export const createValidationOptionsForText = (
  max?: number,
  min?: number,
): RegisterOptions => {
  return {
    required: requiredError,
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
    required: requiredError,
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

export const createSelectValidationOptions = (): RegisterOptions => {
  return {
    required: requiredError,
  };
};

const createValidation = (type: ValidationType) => {
  if (isValidationWithPattern(type)) {
    return createValidationOptionsWithPattern(type);
  }
  if (type === 'text') {
    return createValidationOptionsForText(30, 3);
  } else if (type === 'password') {
    return createValidationOptionsForText(20, 8);
  } else if (type === 'select') {
    return createSelectValidationOptions();
  } else {
    return {};
  }
};

export const createValidationOptions = (
  type: ValidationType,
  required: boolean,
): RegisterOptions => {
  const options = createValidation(type);
  if (required) {
    options.required = requiredError;
  }
  return options;
};
