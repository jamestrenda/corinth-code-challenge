import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
