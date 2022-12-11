import { ReactNode } from 'react';
import tw from 'twin.macro';

export const ProfileSection: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <section tw="mt-4">{children}</section>;
};
