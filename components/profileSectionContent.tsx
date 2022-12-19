import { ReactNode } from 'react';
import 'twin.macro';

export const ProfileSectionContent: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div tw="text-xs leading-5 text-gray-300">{children}</div>;
};
