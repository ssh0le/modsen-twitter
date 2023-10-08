import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import PageLayout from './components/PageLayout';
import FeedPage from './pages/Feed';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
import SignUpPage from './pages/SignUp';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
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
