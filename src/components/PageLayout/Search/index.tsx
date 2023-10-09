import { ChangeEvent, useState } from 'react';

import { icons } from '@/constants';

import UserList from '../UserList';

import {
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from './styled';

const users: { name: string; id: string; src?: string }[] = [
  { name: 'anotanson', id: '@skdankndas', src: undefined },
  { name: 'bamkbnaksnb', id: '@vaknsononasd', src: undefined },
  {
    name: 'laksmdlkamsd sad ',
    id: 'thebestikberchik1682@gmail.com',
    src: undefined,
  },
];

const Search = () => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchIcon src={icons.searchIcon} />
        <SearchInput
          value={query}
          onChange={handleInputChange}
          placeholder="Search Twitter"
        />
      </SearchInputContainer>
      {!query.length && <UserList users={users} title="You might like" />}
      {!!query.length && (
        <UserList users={users.slice(1)} title="Search results" />
      )}
    </SearchContainer>
  );
};

export default Search;
