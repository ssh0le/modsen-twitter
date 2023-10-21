import { useController } from 'react-hook-form';

import { createValidationOptions } from '@/helpers';

import { SerifText } from '../SerifText';

import { SelectProps } from './interfaces';
import {
  CustomSelect,
  InputLabel,
  SelecetContainer,
  SelectOption,
  SelectWraper,
} from './styled';

const placeholderValue = '';

export const Select = (props: SelectProps) => {
  const {
    label,
    control,
    name,
    placeholder,
    options,
    rules = {},
    required = true,
    ...remainedProps
  } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { ...rules, ...createValidationOptions('select', required) },
  });

  return (
    <SelecetContainer>
      {label && (
        <InputLabel>
          <SerifText>{label}</SerifText>
        </InputLabel>
      )}
      <SelectWraper>
        <CustomSelect {...remainedProps} {...field}>
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
};
