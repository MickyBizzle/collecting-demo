import type { AppProps } from 'next/app';
import { Main } from 'layouts/Main/Main';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default MyApp;
