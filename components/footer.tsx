import { useContext } from 'react';
import { AppContext } from './appStateProvider';
import { motion } from 'framer-motion';
import tw from 'twin.macro';

export const Footer: React.FC = () => {
  const { state } = useContext(AppContext);
  const { characters } = state;

  return (
    <footer>
      {characters.length && (
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          tw="text-3xl font-serif italic text-gray-500 text-center my-32"
        >
          <blockquote tw="mb-2">
            <p>"I find your lack of faith disturbing."</p>
          </blockquote>
          <figcaption>&mdash; Darth Vader</figcaption>
        </motion.figure>
      )}
    </footer>
  );
};
