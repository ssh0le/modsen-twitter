import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectHasUser } from '@/store/selectors';

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const hasUser = useAppSelector(selectHasUser);

  return (
    <>{hasUser ? children : <Navigate to={routePathes.login} replace />}</>
  );
};

export default ProtectedRoutes;
