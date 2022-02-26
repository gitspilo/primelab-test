import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { globalStyle } from '../styles/globals';
import { theme} from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Primelab App</title>
        <meta name="description" content="Primelab next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Global styles={globalStyle} />
    </ThemeProvider>
  );
}

export default MyApp;
