import { Directory } from '@/components/directory';
import { Person } from '@/components/profile';
import { GetStaticProps } from 'next';
import filmData from 'data/films.json';
import { fetchPeople } from 'lib/fetchPeople';

export default function Episode({ characters }: { characters: Person[] }) {
  return <Directory characters={characters} />;
}

export const getStaticProps: GetStaticProps<{
  characters: Person[];
}> = async (context) => {
  const { params } = context;

  const { results } = await fetchPeople();

  const characters = Array.from(
    results.filter((result) =>
      result.films.some((film) => film.endsWith(`/${params?.id}/`))
    ),
    (char) => ({
      name: char.name,
      height: char.height,
      mass: char.mass,
      hair_color: char.hair_color,
      birth_year: char.birth_year,
      species: char.species,
      films: char.films,
      starships: char.starships,
    })
  );
  return {
    props: {
      characters,
    },
  };
};

export async function getStaticPaths() {
  const paths = filmData.map((film) => ({
    params: {
      id: film.episode_id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
