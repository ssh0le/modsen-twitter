import { ChangeEvent, memo } from 'react';

import { icons } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { setQuery } from '@/store/slices/search';

import { SearchBarProps } from './interfaces';
import {
  ResetButton,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from './styled';

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  const handleResetClick = () => {
    dispatch(setQuery(''));
  };

  return (
    <SearchInputContainer>
      <SearchIcon src={icons.searchIcon} alt="Search icon" />
      <SearchInput
        value={query}
        onChange={handleSearchChange}
        placeholder={placeholder}
      />
      {query.length > 0 && (
        <ResetButton onClick={handleResetClick}>X</ResetButton>
      )}
    </SearchInputContainer>
  );
};

export default memo(SearchBar);
