import { useEffect, useState } from 'react';

import { useAppSelector } from './storeHooks';

export const useSearch = <T>(
  onSearch: (query: string) => Promise<T[]>,
  condition: boolean,
): { isSearchActive: boolean; results: T[]; isLoading: boolean } => {
  const [results, setResults] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const query = useAppSelector((state) => state.search.query);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    const searchByQuery = async () => {
      const queryResults = await onSearch(query);
      setResults(queryResults);
      setIsLoading(false);
    };

    const timeoutId = condition
      ? setTimeout(() => {
          if (query) {
            searchByQuery();
          } else {
            setResults([]);
          }
        }, 400)
      : null;

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (!query) {
        setIsLoading(false);
      }
    };
  }, [query, onSearch, condition]);

  return {
    isSearchActive: condition && query.length > 0,
    isLoading: condition && isLoading,
    results,
  };
};
