import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import tw from 'twin.macro';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main tw="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};
