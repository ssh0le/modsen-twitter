import { BreakPoint } from '@/interfaces';

export const colors = {
  lightBlue: '#1DA1F2',
  blue: '#1D9BF0',
  white: '#fff',
  black: '#000',
  gray: '#B3B8BB',
  recommendationGray: '#F7F9F9',
  searchGray: '#EFF3F4',
  lightGray: '#E4EAED',
  transperentGray: '#00000033',
  transparent: 'transparent',
  darkGray: '#5C6C79',
  red: '#EF1C5C',
  green: '#0f0',
};

export const breakpoints: { [key in BreakPoint]: number } = {
  mobile: 888,
  tablet: 1000,
  laptop: 1200,
};
