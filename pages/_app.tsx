import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { Layout } from '@/components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
