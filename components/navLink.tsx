import { ReactNode } from 'react';
import tw from 'twin.macro';

export const NavLink = ({ children }: { children: ReactNode }) => {
  return <li tw="py-3 hover:text-yellow-400 transition-colors">{children}</li>;
};
