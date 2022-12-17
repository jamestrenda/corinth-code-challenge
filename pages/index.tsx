import { Directory } from '@/components/directory';
import { Person } from '@/components/profile';
import { GetStaticProps } from 'next';
import { fetchPeople } from 'lib/fetchPeople';

export default function Home({ characters }: { characters: Person[] }) {
  return <Directory characters={characters} />;
}

export const getStaticProps: GetStaticProps<{
  characters: Person[];
}> = async () => {
  const results = await fetchPeople();

  return {
    props: {
      characters: results,
    },
  };
};
