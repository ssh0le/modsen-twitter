import { StaticText } from '@/types';

import { routePathes } from './links';

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
  hideMoreButtonText: 'Hide',
};

export const registrationStatics = {
  heading: 'Create an account',
  subheading: 'Date of birth',
  emailLink: 'Use email',
  dateOfBirthMessage: `Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
    Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
    nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
    dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.`,
  submitButtonText: 'Next',
};
