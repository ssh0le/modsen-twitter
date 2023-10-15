import { ChangeEvent } from 'react';

import { icons } from '@/constants';
import { useAppDispatch } from '@/hooks/storeHooks';
import { setQuery } from '@/store/slices/search';

import { SearchIcon, SearchInput, SearchInputContainer } from './styled';

const Search = () => {
  const dispatch = useAppDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <SearchInputContainer>
      <SearchIcon src={icons.searchIcon} />
      <SearchInput onChange={handleSearchChange} placeholder="Search Twitter" />
    </SearchInputContainer>
  );
};

export default Search;
