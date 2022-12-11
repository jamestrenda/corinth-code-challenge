import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { Layout } from '@/components/layout';
import { AppProvider } from '@/components/appStateProvider';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Star Wars Character Profiles</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <GlobalStyles />
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
