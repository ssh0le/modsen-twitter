import { ReactNode } from 'react';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import NotFoundPage from '../pages/404';

import { routePathes } from './links';

const FeedPage = lazy(() => import('@/pages/Feed'));
const LoginPage = lazy(() => import('@/pages/Login/index'));
const ProfilePage = lazy(() => import('@/pages/Profile'));
const RegistrationPage = lazy(() => import('@/pages/Registration'));
const SignUpPage = lazy(() => import('@/pages/SignUp/index'));
const UserDetailsPage = lazy(() => import('@/pages/UserDetails'));

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
