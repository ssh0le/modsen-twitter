const {
  VITE_GOOGLE_APIKEY,
  VITE_DATABASE_URL,
  VITE_OWNER_ID,
  VITE_APP_ID,
  VITE_MEASERMENT_ID,
} = import.meta.env;

export const config = {
  googleApiKey: VITE_GOOGLE_APIKEY as string,
  databaseUrl: VITE_DATABASE_URL as string,
  ownerId: VITE_OWNER_ID as string,
  appId: VITE_APP_ID as string,
  measurementId: VITE_MEASERMENT_ID as string,
};
