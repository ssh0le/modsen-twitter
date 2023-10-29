export type PatternValidationType = 'email' | 'phone' | 'login';
export type TextValidationType = 'password' | 'text';
export type ValidationType =
  | PatternValidationType
  | TextValidationType
  | 'select';
