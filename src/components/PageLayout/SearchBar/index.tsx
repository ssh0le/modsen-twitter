import { ChangeEvent } from 'react';

import { icons } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { setQuery } from '@/store/slices/search';

import {
  ResetButton,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from './styled';

const SearchBar = () => {
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
      <SearchIcon src={icons.searchIcon} />
      <SearchInput
        value={query}
        onChange={handleSearchChange}
        placeholder="Search Twitter"
      />
      {query.length > 0 && (
        <ResetButton onClick={handleResetClick}>X</ResetButton>
      )}
    </SearchInputContainer>
  );
};

export default SearchBar;
