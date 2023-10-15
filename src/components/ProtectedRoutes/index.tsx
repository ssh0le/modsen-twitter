import { getAuth } from 'firebase/auth';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { routePathes } from '@/constants';
import { useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentUser } from '@/store/selectors';

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const currentUser = useAppSelector(selectCurrentUser);

  const auth = getAuth();
  return (
    <>
      {currentUser || auth.currentUser ? (
        children
      ) : (
        <Navigate to={routePathes.login} replace />
      )}
    </>
  );
};

export default ProtectedRoutes;
