import { FC } from 'react';

import { SelectProps } from './interfaces';
import { CustomSelect, SelectOption, SelectWraper } from './styled';

export const Select: FC<SelectProps> = ({ placeholder }) => {
  return (
    <SelectWraper>
      <CustomSelect>
        {placeholder && (
          <SelectOption selected disabled hidden>
            {placeholder}
          </SelectOption>
        )}
      </CustomSelect>
    </SelectWraper>
  );
};
