import algoliasearch from 'algoliasearch';

import { config } from '@/constants';
import { convertQueryResult } from '@/helpers';
import { Tweet, User } from '@/types';

const { algoliaApiKey, algoliaAppId } = config;

export async function serchTweetsByQuery(query: string) {
  const client = algoliasearch(algoliaAppId, algoliaApiKey);
  const index = client.initIndex('twitter');
  const { hits } = await index.search<Tweet>(query);
  return hits.map(convertQueryResult<Tweet>);
}

export async function serchUsersByQuery(query: string) {
  const client = algoliasearch(algoliaAppId, algoliaApiKey);
  const index = client.initIndex('twitter-users');
  const { hits } = await index.search<User>(query);
  return hits.map(convertQueryResult<User>);
}
