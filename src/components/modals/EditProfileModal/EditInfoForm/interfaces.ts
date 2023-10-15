export interface IEditInfoForm {
  name: string;
  gender: Gender;
  telegram: string;
  tag: string;
}

export enum Gender {
  female = 'Female',
  male = 'Male',
  other = 'Other',
  default = '',
}
