import tw from 'twin.macro';
type Props = {
  heading: string;
};

export const ProfileSectionHeading: React.FC<Props> = ({ heading }) => {
  return (
    <h3 tw="font-bold uppercase text-xs text-yellow-400 tracking-widest mb-1">
      {heading}
    </h3>
  );
};
