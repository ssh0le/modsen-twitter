const {
  VITE_GOOGLE_APIKEY,
  VITE_DATABASE_URL,
  VITE_OWNER_ID,
  VITE_APP_ID,
  VITE_MEASERMENT_ID,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_ALGOLIA_API_KEY,
  VITE_ALGOLIA_APP_ID,
} = import.meta.env;

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
