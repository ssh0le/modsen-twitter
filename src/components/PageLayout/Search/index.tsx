import { icons } from '@/constants';

import { SearchProps } from './interfaces';
import { SearchIcon, SearchInput, SearchInputContainer } from './styled';

const Search = ({ onChange }: SearchProps) => {
  return (
    <SearchInputContainer>
      <SearchIcon src={icons.searchIcon} />
      <SearchInput onChange={onChange} placeholder="Search Twitter" />
    </SearchInputContainer>
  );
};

export default Search;
