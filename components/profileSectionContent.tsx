import { ReactNode } from 'react';
import tw from 'twin.macro';

export const ProfileSectionContent = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div tw="text-xs leading-5 text-gray-300">{children}</div>;
};
