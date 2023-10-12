import { ChangeEvent } from 'react';

export interface SearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
