import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import AuthContext, { AuthProvider } from 'src/state/interventions/AuthContext';
import { InterventionsProvider } from 'src/state/interventions/InterventionsContext';
import lightTheme from 'src/styles/theme/lightTheme';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  const [interventions, setInterventions] = React.useState([]);
  const { login } = React.useContext(AuthContext);
  const router = useRouter();
  React.useEffect(() => {
    const pathToExclude = ['/reset-password', '/login'];
    const accessToken = localStorage.getItem('access-token');
    if (!accessToken) router.push('/signin');
  }, []);
  return (
    <ThemeProvider theme={lightTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <AuthProvider>
          <InterventionsProvider>
            <Component {...pageProps} />
          </InterventionsProvider>
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
