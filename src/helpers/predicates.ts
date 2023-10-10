import { PatternValidationType, ValidationType } from '@/interfaces';

export const isActiveLink = (
  linkRoute: string,
  currentRoute: string,
): boolean => {
  return currentRoute.includes(linkRoute.toLocaleLowerCase());
};

export const isValidationWithPattern = (
  type: ValidationType,
): type is PatternValidationType => {
  return ['email', 'phone', 'login'].includes(type);
};
