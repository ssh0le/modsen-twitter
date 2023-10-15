import { FirebaseAuthError } from '@/interfaces';

export const translateAuthError = (error: FirebaseAuthError): string => {
  return extractErrorMessage(error.code);
};

const extractErrorMessage = (code: string): string => {
  const convertedCode = code.replace('auth/', '').split('-').join(' ');
  return `${
    convertedCode.charAt(0).toUpperCase() + convertedCode.substring(1)
  }!`;
};
