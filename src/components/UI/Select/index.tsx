import { forwardRef } from 'react';

import { SerifText } from '../SerifText';

import { SelectProps } from './interfaces';
import {
  CustomSelect,
  InputLabel,
  SelecetContainer,
  SelectOption,
  SelectWraper,
} from './styled';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { placeholder, options, error, label, ...remainedProps } = props;

    const placeholderValue = '';

    return (
      <SelecetContainer>
        {label && (
          <InputLabel>
            <SerifText>{label}</SerifText>
          </InputLabel>
        )}
        <SelectWraper>
          <CustomSelect ref={ref} {...remainedProps}>
            {placeholder && (
              <SelectOption key={placeholderValue} value={placeholderValue}>
                {placeholder}
              </SelectOption>
            )}
            {options.map(({ name, value }) => (
              <SelectOption key={value} value={value}>
                {name}
              </SelectOption>
            ))}
          </CustomSelect>
        </SelectWraper>
        {error && <p>{error.message}</p>}
      </SelecetContainer>
    );
  },
);
