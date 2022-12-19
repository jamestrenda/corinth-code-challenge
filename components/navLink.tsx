import { ReactNode } from 'react';
import 'twin.macro';

export const NavLink: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <li tw="py-3 hover:text-yellow-400 transition-colors">{children}</li>;
};
