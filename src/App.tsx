import { FC, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from './hooks/storeHooks';
import { LoadPage } from './pages/LoadPage';
import { router } from './router';
import { selectCurrentTheme } from './store/selectors';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

const { dark, light } = theme;

const App: FC = () => {
  const currentTheme = useAppSelector(selectCurrentTheme);
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? dark : light}>
      <Suspense fallback={<LoadPage />}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
