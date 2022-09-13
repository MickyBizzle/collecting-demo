import type { AppProps } from 'next/app';
import { HeaderFooter } from 'layouts/HeaderFooter';
import { ThemeProvider } from '@emotion/react';
import 'theme/globals.css';
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
