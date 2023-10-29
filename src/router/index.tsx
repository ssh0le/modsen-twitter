import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import ProtectedRoutes from '@/components/ProtectedRoutes';
import { protectedRoutes, routePathes, safeRoutes } from '@/constants';

const { defaultPath } = routePathes;
const PageLayout = lazy(() => import('@/components/PageLayout'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={defaultPath}
        element={
          <ProtectedRoutes>
            <PageLayout />
          </ProtectedRoutes>
        }
      >
        <>
          {protectedRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </>
      </Route>
      <Route path={defaultPath}>
        {safeRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </>,
  ),
);
