import { ReactNode } from 'react';
import 'twin.macro';

export const ProfileSection: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <section tw="mt-4">{children}</section>;
};
