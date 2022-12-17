import { useContext } from 'react';
import { AppContext } from './appStateProvider';
import tw from 'twin.macro';

export const Footer: React.FC = () => {
  const { state } = useContext(AppContext);
  const { characters } = state;

  return (
    <footer>
      {characters.length && (
        <figure tw="text-3xl font-serif italic text-gray-500 text-center my-32">
          <blockquote tw="mb-2">
            <p>"I find your lack of faith disturbing."</p>
          </blockquote>
          <figcaption>&mdash; Darth Vader</figcaption>
        </figure>
      )}
    </footer>
  );
};
