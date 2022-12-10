import { ReactNode } from 'react';
import tw from 'twin.macro';

export const ProfileSection: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div tw="mt-4">{children}</div>;
};
