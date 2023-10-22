const VITE_GOOGLE_APIKEY = process.env.VITE_GOOGLE_APIKEY;
const VITE_DATABASE_URL = process.env.VITE_DATABASE_URL;
const VITE_OWNER_ID = process.env.VITE_OWNER_ID;
const VITE_APP_ID = process.env.VITE_APP_ID;
const VITE_MEASERMENT_ID = process.env.VITE_MEASERMENT_ID;
const VITE_AUTH_DOMAIN = process.env.VITE_AUTH_DOMAIN;
const VITE_PROJECT_ID = process.env.VITE_PROJECT_ID;
const VITE_STORAGE_BUCKET = process.env.VITE_STORAGE_BUCKET;
const VITE_ALGOLIA_API_KEY = process.env.VITE_ALGOLIA_API_KEY;
const VITE_ALGOLIA_APP_ID = process.env.VITE_ALGOLIA_APP_ID;

export const config = {
  googleApiKey: VITE_GOOGLE_APIKEY as string,
  databaseUrl: VITE_DATABASE_URL as string,
  ownerId: VITE_OWNER_ID as string,
  appId: VITE_APP_ID as string,
  measurementId: VITE_MEASERMENT_ID as string,
  authDomain: VITE_AUTH_DOMAIN as string,
  projectId: VITE_PROJECT_ID as string,
  storageBucket: VITE_STORAGE_BUCKET as string,
  algoliaApiKey: VITE_ALGOLIA_API_KEY as string,
  algoliaAppId: VITE_ALGOLIA_APP_ID as string,
};
