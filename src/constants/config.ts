import { StaticText } from '@/types';

import { routePathes } from './links';

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

const signUpText: StaticText[] = [
  {
    text: 'By singing up you agree to the ',
  },
  {
    isLink: true,
    text: 'Terms of Service',
  },
  {
    text: ' and ',
  },
  {
    isLink: true,
    text: 'Privacy Policy',
  },
  {
    text: ' , including ',
  },
  {
    isLink: true,
    text: 'Cookie Use',
  },
  {
    text: '.',
  },
];

const loginText: StaticText[] = [
  {
    text: 'Already have an account? ',
  },
  {
    isLink: true,
    path: routePathes.login,
    text: 'Log in',
  },
];

export const signUpStatics = {
  heading: 'Happening now',
  subheading: 'Join Twitter today',
  googleSignUpMessage: 'Sign up with Google',
  emailSignUpMessage: 'Sign up with email',
  signUpText,
  loginText,
};

export const loginStatics = {
  heading: 'Log in to Twitter',
  loginButtonText: 'Log in',
  googleSignInMessage: 'Sign in with Google',
  emailSignUpMessage: 'Sign up to Twitter',
};

export const profileStatics = {
  backButtonText: 'Home',
  userTweetsText: ' Tweets',
  addTweetButtonText: 'Tweet',
  logoutButtonText: 'Log out',
  followButtonText: 'Follow',
  editButtonText: 'Edit Profile',
  recommendationHeading: 'You might like',
  resetButtonText: 'Reset',
  saveButtonText: 'Save info',
  updatePasswordButtonText: 'Update password',
  searchResultsHeading: 'Search results',
  showMoreButtonText: 'Show more',
};
