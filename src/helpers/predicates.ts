import { patternTypes } from '@/constants';
import { PatternValidationType, ValidationType } from '@/types';

const userMinAge = 16;

export const isActiveLink = (
  linkRoute: string,
  currentRoute: string,
): boolean => {
  return currentRoute.includes(linkRoute.toLocaleLowerCase());
};

export const isValidationWithPattern = (
  type: ValidationType,
): type is PatternValidationType => {
  return patternTypes.includes(type);
};

export const isRequiredAge = (dateOfBirth: Date): boolean => {
  const now = new Date();
  const dateOfBirthClone = new Date(dateOfBirth);
  dateOfBirthClone.setFullYear(dateOfBirthClone.getFullYear() + userMinAge);
  return dateOfBirthClone <= now;
};
