import { Directory } from '@/components/directory';
import { ProfileProps } from '@/components/profile';
import { GetStaticProps } from 'next';
import characterData from 'data/characters.json';

// TODO: rewrite paths to film names? https://nextjs.org/docs/api-reference/next.config.js/rewrites

export default function Film({ characters }: { characters: ProfileProps[] }) {
  return <Directory characters={characters} />;
}

export const getStaticProps: GetStaticProps<{
  characters: ProfileProps[];
}> = async (context) => {
  const { params } = context;
  console.log({ params });

  // TODO: replace with actual calls to SWAPI

  const characters = Array.from(characterData, (char) => ({
    name: char.name,
    height: char.height,
    mass: char.mass,
    hair_color: char.hair_color,
    birth_year: char.birth_year,
    species: char.species,
    films: char.films,
    starships: char.starships,
  }));
  return {
    props: {
      characters,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
    ],
    fallback: false,
  };
}
