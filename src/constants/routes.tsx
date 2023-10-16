import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import NotFoundPage from '@/pages/404';
import FeedPage from '@/pages/Feed';
import LoginPage from '@/pages/Login';
import ProfilePage from '@/pages/Profile';
import RegistrationPage from '@/pages/Registration';
import SignUpPage from '@/pages/SignUp';
import UserDetailsPage from '@/pages/UserDetails';

import { routePathes } from './links';

const { signUp, login, registration, profile, home, userDetails } = routePathes;

export const safeRoutes: RouteInfo[] = [
  {
    path: signUp,
    element: <SignUpPage />,
  },
  {
    path: login,
    element: <LoginPage />,
  },
  {
    path: registration,
    element: <RegistrationPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const protectedRoutes: RouteInfo[] = [
  {
    path: profile,
    element: <ProfilePage />,
  },
  {
    path: home,
    element: <FeedPage />,
  },
  {
    path: userDetails,
    element: <UserDetailsPage />,
  },
  {
    path: '',
    element: <Navigate to={home} />,
  },
];

interface RouteInfo {
  path: string;
  element: ReactNode;
}
