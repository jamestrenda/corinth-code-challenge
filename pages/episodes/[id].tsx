import { Directory } from '@/components/directory';
import { Person } from '@/components/profile';
import { GetStaticProps } from 'next';
import { fetchPeople } from 'lib/fetchPeople';
import { fetchFilms } from 'lib/fetchFilms';

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
      filmData: char.filmData,
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
  const { results } = await fetchFilms();
  const paths = results.map((film) => ({
    params: {
      id: film.episode_id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
