import tw from 'twin.macro';

export const ProfileSectionHeading = ({ heading }: { heading: string }) => {
  return (
    <h3 tw="font-bold uppercase text-xs text-yellow-400 tracking-widest mb-1">
      {heading}
    </h3>
  );
};
