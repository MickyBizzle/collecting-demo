import type { AppProps } from 'next/app';
import { HeaderFooter } from 'layouts/HeaderFooter';
import { ThemeProvider } from '@emotion/react';
// import 'theme/globals_old.css';
import 'styles/globals.scss';
import 'styles/utilties/utilities.scss';
import 'lato-font';
import { theme } from 'theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderFooter>
        <Component {...pageProps} />
      </HeaderFooter>
    </ThemeProvider>
  );
}

export default MyApp;
