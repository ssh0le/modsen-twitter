import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import LoginPage from './pages/Login';
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
    </ThemeProvider>
  );
};

export default App;
