import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { Layout } from '@/components/layout';
import { AppProvider } from '@/components/appStateProvider';
import Head from 'next/head';
import ErrorBoundary from '@/components/error';
import '../styles/nprogress.css';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, []);

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
