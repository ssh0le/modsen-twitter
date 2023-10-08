import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import PageLayout from './components/PageLayout';
import { useAppSelector } from './hooks/storeHooks';
import FeedPage from './pages/Feed';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
import SignUpPage from './pages/SignUp';
import { selectCurrentTheme } from './store/selectors';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

const { dark, light } = theme;

const App: FC = () => {
  const currentTheme = useAppSelector(selectCurrentTheme);
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? dark : light}>
      <GlobalStyles />
      <SignUpPage />
      <RegistrationPage />
      <LoginPage />
      <PageLayout>
        <ProfilePage />
      </PageLayout>
      <PageLayout>
        <FeedPage />
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;
